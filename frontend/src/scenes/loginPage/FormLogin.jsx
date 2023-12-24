import React, { useState } from 'react'
import { Formik } from 'formik'
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
            {' '}
            <input
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              className="bg-red-800"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <input
              label="Password"
              type="password"
              onBlur={handleBlur}
              className="bg-green-500"
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            {/* Buttons */}
            <div className="my-[8px] px-[40px] w-full flex-shrink-0 flex-grow-0 flex flex-col items-stretch self-auto justify-start">
              <button
                type="submit"
                className="bg-blueButton-50 w-full opacity-[0.7] rounded-lg text-center text-[14px] py-[7px] px-[16px] overflow-ellipsis font-medium leading-[18px] text-white"
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
            <a className="my-[12px] leading-[16px] text-center text-[12px]">
              <span className="font-system-primary font-medium  ">
                {' '}
                Forgot password?
              </span>
            </a>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default form
