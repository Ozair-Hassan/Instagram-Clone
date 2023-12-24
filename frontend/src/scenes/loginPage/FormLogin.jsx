import React, { useState, useEffect } from 'react'
import { Formik, useFormikContext } from 'formik'
import * as yup from 'yup'
import { facebookLight, title } from '../../assets'

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
  const [isInputActiveEmail, setIsInputActiveEmail] = useState(false)
  const [isInputActivePassword, setIsInputActivePassword] = useState(false)

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps)
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
        resetForm,
      }) => (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[100%] items-center border-igSeparator-50 border pb-[10px]"
          >
            <img
              src={title}
              alt="Instagram"
              className="max-w-[175px] max-h-[51px] mt-[36px] mb-[12px]  "
            />
            <div className="mt-[24px] flex flex-col w-[100%] items-center">
              <div className="block mb-[6px] px-[40px] w-full ">
                <div className=" bg-igSeparator-100 text-[12px] box-border flex flex-row relative w-full">
                  <label className="flex text-[100%] h-[36px] m-0 p-0 relative align-baseline w-full">
                    <input
                      label="Email"
                      name="email"
                      type="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className="border rounded-sm  w-full focus:outline-none focus:border-igSeparator-150  peer text-[12px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[15px] pb-[10px]"
                      // error={Boolean(touched.email) && Boolean(errors.email)}
                      // helperText={touched.email && errors.email}
                    />
                    <span
                      className={`  w-fit  h-fit  select-none font-system-primary text-[12px]  m-0 overflow-hidden px-2  right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-2  ${
                        values.email !== '' ? '-top-[1px] text-xs ' : ' top-2  '
                      } text-gray-600 cursor-text    transition-all`}
                    >
                      Phone number, username or email
                    </span>
                  </label>
                </div>
              </div>

              <div className="block mb-[6px] px-[40px] w-full ">
                <div className=" bg-igSeparator-100 text-[12px] box-border flex flex-row relative w-full">
                  <label className="flex text-[100%] h-[36px] m-0 p-0 relative align-baseline w-full">
                    <input
                      label="Password"
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="border rounded-sm  w-full focus:outline-none focus:border-igSeparator-150  peer text-[12px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[20px] pb-[10px]"
                      value={values.password}
                      // error={
                      //   Boolean(touched.password) && Boolean(errors.password)
                      // }
                      // helperText={touched.password && errors.password}
                    />
                    <span
                      className={`  w-fit  h-fit  select-none font-system-primary text-[12px]  m-0 overflow-hidden px-2  right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-2  ${
                        values.password !== ''
                          ? '-top-[1px] text-xs '
                          : ' top-2 '
                      } text-gray-600 cursor-text   transition-all`}
                    >
                      Password
                    </span>
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="my-[8px] px-[40px] w-full flex-shrink-0 flex-grow-0 flex flex-col items-stretch self-auto justify-start">
                <button
                  type="submit"
                  className={` w-full opacity-[0.7] rounded-lg text-center text-[14px] py-[7px] px-[16px] overflow-ellipsis font-medium leading-[18px] text-white  ${
                    values.password !== '' && values.email !== ''
                      ? 'bg-sky-500  hover:bg-blueButton-150 '
                      : 'bg-sky-500/50'
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
              <a className="my-[12px] leading-[16px] text-center text-[12px] cursor-pointer">
                <span className="font-system-primary font-normal text-facebook-100 ">
                  {' '}
                  Forgot password?
                </span>
              </a>
            </div>
          </form>
        </>
      )}
    </Formik>
  )
}

export default form
