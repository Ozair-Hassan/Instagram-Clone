import React, { useState, useEffect } from 'react'
import { Formik, useFormikContext } from 'formik'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/authSlice'
import axios from 'axios'
import { facebookLight, lock } from '../../assets'

const passwordRecoverySchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('required'),
})

const initalValuesPasswordRecovery = {
  email: '',
}

const form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const login = async (values, onSubmitProps) => {
  //   try {
  //     const loginResponse = await axios.post('/api/auth/login', values)
  //     const token = loginResponse.data.token

  //     localStorage.setItem('token', token)
  //     dispatch(setLogin({ token: token }))

  //     //  token to fetch the user's details
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //     const userResponse = await axios.get('/api/auth', config)
  //     const user = userResponse.data

  //     // Store the user's details in Redux store
  //     dispatch(setLogin({ user: user, token: token }))

  //     // Navigate to the home page after successful login and fetching user
  //     navigate('/home')
  //   } catch (error) {
  //     console.error(
  //       'Login failed:',
  //       error.response ? error.response.data : error.message
  //     )
  //   } finally {
  //     // Reset the form in any case
  //     onSubmitProps.resetForm()
  //   }
  // }
  const handleFormSubmit = async (values, onSubmitProps) => {
    // await login(values, onSubmitProps)
    console.log('Feature in development')
  }

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initalValuesPasswordRecovery}
      validationSchema={passwordRecoverySchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[100%] items-center border-igSeparator-50 border  mt-[60px]"
          >
            <div className=" mt-[24px] mb-[12px] cursor-pointer overflow-visible bg-transparent flex-col flex box-border items-center self-auto justify-start relative">
              <img
                src={lock}
                alt="Instagram"
                className="max-w-[100px] max-h-[100px]"
              />
            </div>
            <div className=" overflow-visible mb-[12px] flex flex-col box-border mx-[44px] items-stretch self-auto justify-start relative">
              <span className="leading-5 overflow-visible mb-0 max-w-full text-[16px] text-center font-semibold relative block font-system-primary whitespace-pre-line break-words ">
                Trouble logging in?
              </span>
            </div>
            <div className="overflow-visible mb-[16px] bg-transparent flex flex-col box-border mx-[44px] items-stretch self-auto justify-start relative">
              <span className="leading-[18px] overflow-visible mb-0 max-w-full text-[14px] text-[#737373] text-center font-normal relative block font-system-primary whitespace-pre-line break-words ">
                Enter your email, phone, or username and we'll send you a link
                to get back into your account
              </span>
            </div>
            <div className=" flex flex-col w-[100%] items-center">
              <div className="block mb-[6px] px-[40px] w-full ">
                <div className=" bg-igSeparator-100 text-[12px] box-border flex flex-row relative w-full">
                  <label className="flex text-[100%] h-[42px] m-0 p-0 relative align-baseline w-full">
                    <input
                      label="Email"
                      name="email"
                      type="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className="border rounded-md  w-full focus:outline-none focus:border-igSeparator-150  peer text-[14px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[15px] pb-[10px]"
                      error={Boolean(touched.email) && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <span
                      className={`  w-fit  h-fit  select-none font-system-primary text-sm  m-0 overflow-hidden px-2 text-[#777777bd] right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-[10px]  ${
                        values.email !== ''
                          ? '-top-[1px] text-[12px]  '
                          : ' top-[12px] text-sm  '
                      } text-gray-600 cursor-text    transition-all`}
                    >
                      Email, Phone or Username
                    </span>
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="my-[8px] px-[40px] w-full flex-shrink-0 flex-grow-0 flex flex-col items-stretch self-auto justify-start">
                <button
                  type="submit"
                  className={` w-full  rounded-lg text-center text-[14px] py-[7px] px-[16px] overflow-ellipsis font-medium leading-[18px]  text-white  ${
                    values.password !== '' && values.email !== ''
                      ? 'bg-[#0095f6] opacity-[1] hover:bg-blue-500 '
                      : 'bg-[#0095f6] opacity-[0.5] disabled cursor-default'
                  } `}
                >
                  Send login link
                </button>
                <a className="my-[12px] leading-[16px] text-center text-[12px] cursor-pointer">
                  <a
                    href="https://help.instagram.com/374546259294234"
                    className="font-system-primary font-normal text-facebook-100 "
                  >
                    {' '}
                    Can't reset your password?
                  </a>
                </a>
              </div>
              <div className="flex flex-row items-center justify-center mt-[10px] mb-[18px] px-[40px] w-full  ">
                <div className="flex-grow w-full h-[1px] bg-igSeparator-50" />
                <span className="mx-[18px] text-center text-textPrimary-50 font-medium uppercase text-[13px]">
                  or
                </span>
                <div className="flex-grow flex-shrink w-full h-[1px] bg-igSeparator-50 " />
              </div>
              <div className="overflow-visible mb-[16px] bg-transparent box-border mx-[44px] items-stretch self-auto justify-start flex flex-col ">
                <Link
                  to="/register"
                  className="text-[#262626] font-semibold text-ellipsis  text-center text-[14px] leading-4"
                >
                  Create new account
                </Link>
              </div>
              <div className="mt-[68px] w-full  overflow-visible bg-transparent flex flex-col box-border static items-stretch self-auto justify-start ">
                <div className="h-[44px] items-center mb-0 border overflow-visible border-igSeparator-50 bg-[#fafafa] flex flex-col box-border justify-around ">
                  <Link
                    to="/"
                    className="h-auto w-auto font-semibold text-ellipsis bg-transparent text-center text-[14px] mb-0 hover:opacity-50"
                  >
                    Back to login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </Formik>
  )
}

export default form
