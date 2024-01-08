import React, { useState, useEffect } from 'react'
import { Formik, useFormikContext } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/authSlice'
import axios from 'axios'
import { facebookLight, title, titleText } from '../../assets'
import Cookies from 'js-cookie'

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

      // Store the token in a cookie instead of localStorage
      Cookies.set('token', token, { expires: 7 })
      dispatch(setLogin({ token: token }))

      // Token to fetch the user's details
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const userResponse = await axios.get('/api/auth/verifyToken', config)
      const user = userResponse.data

      // Store the user's details in Redux store
      dispatch(setLogin({ user: user, token: token }))

      // Navigate to the home page after successful login and fetching user
      navigate('/home')
    } catch (error) {
      console.error(
        'Login failed:',
        error.response ? error.response.data : error.message
      )
    } finally {
      // Reset the form in any case
      onSubmitProps.resetForm()
    }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps)
  }

  const [passwordType, setPasswordType] = useState('password')
  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initalValuesLogin}
      validationSchema={loginSchema}
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
              <div className="block mb-[6px] px-[40px] w-full ">
                <div className=" bg-igSeparator-100 text-[12px] box-border flex flex-row relative w-full">
                  <label className="flex text-[100%] h-[38px] m-0 p-0 relative align-baseline w-full">
                    <input
                      label="Email"
                      name="email"
                      type="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className="border rounded-sm  w-full focus:outline-none focus:border-igSeparator-150  peer text-[12px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[15px] pb-[10px]"
                      error={Boolean(touched.email) && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <span
                      className={`  w-fit  h-fit  select-none font-system-primary text-xs  m-0 overflow-hidden px-2  right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-[10px]  ${
                        values.email !== ''
                          ? '-translate-y-2 text-[10px]  '
                          : ' top-[10px] text-xs  '
                      } text-gray-600 cursor-text    transition-all`}
                    >
                      Phone number, username or email
                    </span>
                  </label>
                </div>
              </div>
              <div className="block mb-[6px] px-[40px] w-full ">
                <div className=" bg-igSeparator-100  text-[12px] box-border flex flex-row relative w-full">
                  <label className="flex text-[100%] h-[38px] m-0 p-0 relative align-baseline w-full">
                    <input
                      label="Password"
                      type={passwordType}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="border rounded-sm  w-full focus:outline-none  focus:border-igSeparator-150  peer text-[12px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[20px] pb-[10px]"
                      value={values.password}
                      // error={
                      //   Boolean(touched.password) && Boolean(errors.password)
                      // }
                      // helperText={touched.password && errors.password}
                    />
                    <span
                      className={`  w-fit  h-fit  select-none font-system-primary text-xs  m-0 overflow-hidden px-2  right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-[10px]  ${
                        values.password !== ''
                          ? '-translate-y-2 text-[10px]  '
                          : ' top-[10px] text-xs'
                      } text-gray-600 cursor-text   transition-all`}
                    >
                      Password
                    </span>
                    <button
                      type="button"
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-[#262626] font-system font-semibold text-[14px] hover:opacity-[.75] ${
                        values.password !== '' ? 'visible' : 'invisible'
                      }`}
                      onClick={togglePassword}
                    >
                      {passwordType === 'password' ? 'Show' : 'Hide'}
                    </button>
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
