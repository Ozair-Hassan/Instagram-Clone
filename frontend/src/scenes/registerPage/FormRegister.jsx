import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomInputFields from '../loginPage/CustomInputFields'
import axios from 'axios'
import { facebookDark, titleText } from '../../assets'

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
      const body = JSON.stringify(values)

      const response = await axios.post('/api/auth/register', values)

      navigate('/')
      onSubmitProps.resetForm()
    } catch (error) {
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
              <CustomInputFields
                label={'Fullname'}
                name={'fullName'}
                type={'text'}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                data={values.fullName !== '' ? 'true' : 'false'}
                placeholder={'Full Name'}
              />
              <CustomInputFields
                label={'Username'}
                name={'userName'}
                type={'text'}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                data={values.userName !== '' ? 'true' : 'false'}
                placeholder={'Username'}
              />

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
