import React from 'react'
import { microsoft, title, playstore } from '../../assets'
import Form from './FormLogin'
const Login = () => {
  return (
    <div className="flex h-screen  w-full justify-center">
      <div className="  flex-shrink-0">
        <div className="w-[350px] mx-auto flex flex-col  items-center">
          <Form />
          <div className="flex flex-col w-[100%] items-center text-center mt-[10px] p-[1px] border-igSeparator-50 border  leading-[18px]">
            <p className="text-[14px] text-center m-[20px]">
              Don't have an account?{' '}
              <a
                href="https://www.instagram.com/"
                target="_blank"
              >
                <span className="text-[#0095f6] font-semibold  text-[14px]">
                  Sign up
                </span>
              </a>
            </p>
          </div>
          <p className="text-[14px] my-[10px] mx-[20px]">Get the app.</p>
          <div className="flex flex-row items-center px-4 my-[5px] ">
            <img
              src={playstore}
              alt="Get it on Google Playstore"
              className="max-w[132px] max-h-[40px] mr-2 "
            />
            <img
              src={microsoft}
              alt="Get it from Microsoft"
              className="max-w[111px] max-h-[40px] "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
