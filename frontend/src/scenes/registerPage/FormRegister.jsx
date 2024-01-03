import React, { useState, useEffect } from 'react'
import { Formik, useFormikContext } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/authSlice'
import axios from 'axios'
import {
  facebookDark,
  title,
  titleText,
  okTick,
  noTick,
  randomTick,
} from '../../assets'

const registerSchema = yup.object().shape({
  fullName: yup.string().required('required'),
  userName: yup.string().required('required'),
  email: yup.string().email('Invalid Email').required('required'),
  password: yup.string().required('required'),
})

const initalValuesRegister = {
  fullName: '',
  userName: '',
  email: '',
  password: '',
}
const openFacebook = () => {
  window.open('https://www.facebook.com', '_blank')
}
const form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const register = async (values, onSubmitProps) => {
    try {
      //   // This allows us to send form info with an image
      //   const formData = new FormData()
      //   for (const key in values) {
      //     formData.append(key, values[key])
      //   }
      //   // If 'picture' is a File object, append it directly.
      //   if (values.picture instanceof File) {
      //     formData.append('picture', values.picture, values.picture.name)
      //   }
      const body = JSON.stringify(values)

      const response = await axios.post('/api/auth/register', values)
      const token = response.data

      localStorage.setItem('token', token)
      dispatch(setLogin({ token: token }))

      // Navigate to the home page after successful login and fetching user
      navigate('/')
      onSubmitProps.resetForm()
    } catch (error) {
      // Handle the error here
      console.error(
        'Registration failed:',
        error.response ? error.response.data : error.message
      )
    }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    await register(values, onSubmitProps)
  }

  const [passwordType, setPasswordType] = useState('password')
  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initalValuesRegister}
      validationSchema={registerSchema}
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
            className="flex flex-col w-[100%] items-center border-igSeparator-50 border pb-[30px]"
          >
            <div className=" mt-[52px] mb-[15px] cursor-pointer">
              <img
                src={titleText}
                alt="Instagram"
                className="max-w-[175px] max-h-[52px]"
              />
            </div>
            <div className="mx-[40px] mb-[10px] block">
              <span className="leading-5  min-w-0 my-0 overflow-visible font-system text-[16px] text-center mx-0 text-wrap break-words font-semibold text-[#737373] relative block whitespace-pre-line  ">
                Sign up to see photos and videos from your friends.
              </span>
            </div>
            <div className="overflow-visible w-[268px] my-[8px] mx-[40px] bg-transparent flex flex-col items-stretch justify-start relative flex-grow-0 ">
              <button
                onClick={openFacebook}
                className={` w-auto text-center  rounded-lg  text-[14px] py-[7px] px-[16px] overflow-ellipsis font-semibold leading-[18px] bg-[#0095f6] opacity-[1]  hover:bg-blue-500 text-white   `}
              >
                <span className="flex flex-row items-center pl-8 ">
                  <img
                    src={facebookDark}
                    alt="Facebook"
                  />
                  <span className="text-white text-[14px] font-semibold pl-2">
                    Log in with Facebook
                  </span>
                </span>
              </button>
            </div>
            <div className="flex flex-row items-center justify-center mt-[10px] mb-[18px] px-[40px] w-full  ">
              <div className="flex-grow w-full h-[1px] bg-igSeparator-50" />
              <span className="mx-[18px] text-center text-textPrimary-50 font-medium uppercase text-[13px]">
                or
              </span>
              <div className="flex-grow flex-shrink w-full h-[1px] bg-igSeparator-50 " />
            </div>
            <div className=" flex flex-col w-[100%] items-center">
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
                          ? '-top-[1.0px] text-[10px]  '
                          : ' top-[10px] text-xs  '
                      } text-gray-600 cursor-text    transition-all`}
                    >
                      Mobile Number or Email
                    </span>
                    <span
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-[#262626] font-system font-semibold text-[14px]  ${
                        values.email !== '' ? 'visible' : 'invisible'
                      }`}
                    >
                      {values.email !== '' ? (
                        <img
                          src={okTick}
                          alt="OK"
                        />
                      ) : (
                        <img
                          src={noTick}
                          alt="OK"
                        />
                      )}
                    </span>
                  </label>
                </div>
              </div>
              <div className="block mb-[6px] px-[40px] w-full ">
                <div className=" bg-igSeparator-100 text-[12px] box-border flex flex-row relative w-full">
                  <label className="flex text-[100%] h-[38px] m-0 p-0 relative align-baseline w-full">
                    <input
                      label="Name"
                      name="fullName"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.fullName}
                      className="border rounded-sm  w-full focus:outline-none focus:border-igSeparator-150  peer text-[12px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[15px] pb-[10px]"
                      error={Boolean(touched.email) && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <span
                      className={`  w-fit  h-fit  select-none font-system-primary text-xs  m-0 overflow-hidden px-2  right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-[10px]  ${
                        values.fullName !== ''
                          ? '-top-[1.0px] text-[10px]  '
                          : ' top-[10px] text-xs  '
                      } text-gray-600 cursor-text    transition-all`}
                    >
                      Full Name
                    </span>
                    <span
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-[#262626] font-system font-semibold text-[14px]  ${
                        values.fullName !== '' ? 'visible' : 'invisible'
                      }`}
                    >
                      {values.fullName !== '' ? (
                        <img
                          src={okTick}
                          alt="OK"
                        />
                      ) : (
                        <img
                          src={noTick}
                          alt="OK"
                        />
                      )}
                    </span>
                  </label>
                </div>
              </div>
              <div className="block mb-[6px] px-[40px] w-full ">
                <div className=" bg-igSeparator-100 text-[12px] box-border flex flex-row relative w-full">
                  <label className="flex text-[100%] h-[38px] m-0 p-0 relative align-baseline w-full">
                    <input
                      label="Username"
                      name="userName"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.userName}
                      className="border rounded-sm  w-full focus:outline-none focus:border-igSeparator-150  peer text-[12px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[15px] pb-[10px]"
                      error={Boolean(touched.email) && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <span
                      className={`  w-fit  h-fit  select-none font-system-primary text-xs  m-0 overflow-hidden px-2  right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-[10px]  ${
                        values.userName !== ''
                          ? '-top-[1.0px] text-[10px]  '
                          : ' top-[10px] text-xs  '
                      } text-gray-600 cursor-text    transition-all`}
                    >
                      Username
                    </span>
                    <span
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-[#262626] font-system font-semibold text-[14px]  ${
                        values.userName !== '' ? 'visible' : 'invisible'
                      }`}
                    >
                      {values.userName !== '' ? (
                        <img
                          src={okTick}
                          alt="OK"
                        />
                      ) : (
                        <img
                          src={noTick}
                          alt="OK"
                        />
                      )}
                    </span>
                  </label>
                </div>
              </div>
              <div className="block  px-[40px] w-full ">
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
                          ? '-top-[1.0px] text-[10px]  '
                          : ' top-[10px] text-xs'
                      } text-gray-600 cursor-text   transition-all`}
                    >
                      Password
                    </span>
                    <span
                      className={`absolute right-14 top-1/2 transform -translate-y-1/2 text-[#262626] font-system font-semibold text-[14px]  ${
                        values.password !== '' ? 'visible' : 'invisible'
                      }`}
                    >
                      {values.password !== '' ? (
                        <img
                          src={okTick}
                          alt="OK"
                        />
                      ) : (
                        <img
                          src={noTick}
                          alt="OK"
                        />
                      )}
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
              <p className="text-[#737373] text-[12px] leading-4 my-[10px] mx-[40px] text-center block ">
                <span className="leading-4 max-w-full font-normal break-words whitespace-pre-line font-system-primary text-[12px]  ">
                  People who use our service may have uploaded your contact
                  information to Instagram.{' '}
                  <a
                    className="text-[#00376b]"
                    href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT3EejxA0atyPNH9gjDApdrcC9YQFBA_cz0LPR8MxRf7kmy0yZoQEdpQrDZgnmzmcf_GnHe-Zqi96ZS4O9gC55Cql0k_tgEiYt-jOoUbJ-_tlT2CUbOxo0z0EcH8fKFKSEtHDDUIF23YXKcuOl6Ybg"
                    target="_blank"
                  >
                    Learn More
                  </a>
                  <br />
                  <br />
                  By signing up, you agree to our
                  <a
                    href="https://help.instagram.com/581066165581870/?locale=en_US"
                    target="_blank"
                    className="text-[#00376b] px-[3px]"
                  >
                    Terms
                  </a>
                  ,
                  <a
                    href="https://www.facebook.com/privacy/policy"
                    target="_blank"
                    className="text-[#00376b] px-[2px] "
                  >
                    Privacy Policy
                  </a>{' '}
                  and
                  <a
                    href="https://www.instagram.com/legal/cookies/"
                    target="_blank"
                    className="text-[#00376b] px-[3px]"
                  >
                    Cookies Policy
                  </a>
                </span>
              </p>
              {/* Buttons */}
              <div className="my-[8px] px-[40px] w-full flex-shrink-0 flex-grow-0 flex flex-col items-stretch self-auto justify-start">
                <button
                  type="submit"
                  className={` w-full  rounded-lg text-center text-[14px] py-[7px] px-[16px] overflow-ellipsis font-medium leading-[18px]  text-white  ${
                    values.password !== '' && values.email !== ''
                      ? 'bg-[#0095f6] opacity-[1] hover:bg-[#1877f2] '
                      : 'bg-[#0095f6] opacity-[0.7] disabled cursor-default'
                  } `}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </Formik>
  )
}

export default form
