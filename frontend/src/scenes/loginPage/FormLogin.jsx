import React, { useState, useEffect } from 'react'
import { Formik, useFormikContext } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/authSlice'
import { setProfile } from '../../redux/profileSlice'
import axios from 'axios'
import { facebookLight, title, titleText } from '../../assets'
import Cookies from 'js-cookie'
import CustomInputFields from './CustomInputFields'

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('required'),
  password: yup.string().required('required'),
})

const initalValuesLogin = {
  email: '',
  password: '',
}
const openFacebook = () => {
  window.open('https://www.facebook.com', '_blank')
}
const form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (values, onSubmitProps) => {
    try {
      const loginResponse = await axios.post('/api/auth/login', values)
      const token = loginResponse.data.token

      Cookies.set('token', token, { expires: 7 })
      dispatch(setLogin({ token: token }))

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const userResponse = await axios.get('/api/auth/verifyToken', config)
      const user = userResponse.data

      dispatch(setLogin({ user: user, token: token }))

      const profileResponse = await axios.get(
        `/api/profile/${user.userName}`,
        config
      )
      const userProfile = profileResponse.data

      dispatch(setProfile(userProfile))

      navigate('/home')
    } catch (error) {
      console.error(
        'Login failed:',
        error.response ? error.response.data : error.message
      )
    } finally {
      onSubmitProps.resetForm()
    }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps)
  }

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initalValuesLogin}
      validationSchema={loginSchema}
    >
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[100%] items-center border-igSeparator-50 border pb-[10px]"
          >
            <div className=" mt-[45px] mb-[15px] cursor-pointer">
              <img
                src={titleText}
                alt="Instagram"
                className="max-w-[175px] max-h-[60px]"
              />
            </div>

            <div className="mt-[24px] flex flex-col w-[100%] items-center">
              {/* Email */}
              <CustomInputFields
                label={'Email'}
                name={'email'}
                type={'email'}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                data={values.email !== '' ? 'true' : 'false'}
                placeholder={'Phone number, username or email'}
              />
              {/* Password */}
              <CustomInputFields
                label={'Password'}
                name={'password'}
                type={'password'}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                data={values.password !== '' ? 'true' : 'false'}
                placeholder={'Password'}
                showButton={true}
              />

              {/* Buttons */}
              <div className="my-[8px] px-[40px] w-full flex-shrink-0 flex-grow-0 flex flex-col items-stretch self-auto justify-start">
                <button
                  type="submit"
                  className={` w-full  rounded-lg text-center text-[14px] py-[7px] px-[16px] overflow-ellipsis font-medium leading-[18px]  text-white  ${
                    values.password !== '' && values.email !== ''
                      ? 'bg-[#0095f6] opacity-[1] hover:bg-blue-500 '
                      : 'bg-[#0095f6] opacity-[0.7] disabled cursor-default'
                  } `}
                >
                  Log In
                </button>
              </div>
              <div className="flex flex-row items-center justify-center mt-[10px] mb-[18px] px-[40px] w-full  ">
                <div className="flex-grow w-full h-[1px] bg-igSeparator-50" />
                <span className="mx-[18px] text-center text-textPrimary-50 font-medium uppercase text-[13px]">
                  or
                </span>
                <div className="flex-grow flex-shrink w-full h-[1px] bg-igSeparator-50 " />
              </div>
              <button
                onClick={openFacebook}
                className="my-[8px] mx-auto"
              >
                <span className="flex flex-row items-center ">
                  <img
                    src={facebookLight}
                    alt="Facebook"
                  />
                  <span className="text-facebook-50 text-[14px] font-semibold pl-2">
                    Log in with Facebook
                  </span>
                </span>
              </button>
              <span className="my-[12px] leading-[16px] text-center text-[12px] cursor-pointer">
                <Link
                  to="/password-recovery"
                  className="font-system-primary font-normal text-facebook-100 "
                >
                  {' '}
                  Forgot password?
                </Link>
              </span>
            </div>
          </form>
        </>
      )}
    </Formik>
  )
}

export default form
