import React from 'react'
import { microsoft, title, playstore } from '../../assets'
import Form from './FormLogin'
import { Link } from 'react-router-dom'
import Register from '../registerPage/Register'
const Login = () => {
  return (
    <div className="flex h-screen  w-full justify-center">
      <div className="  flex-shrink-0">
        <div className="w-[350px] mx-auto flex flex-col  items-center">
          <Form />
          <div className="flex flex-col w-[100%] items-center text-center mt-[10px] p-[1px] border-igSeparator-50 border  leading-[18px]">
            <p className="text-[14px] text-center m-[20px]">
              Don't have an account?{' '}
              <Link to="/register">
                <span className="text-[#0095f6] font-semibold  text-[14px]">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
          <p className="text-[14px] my-[10px] mx-[20px]">Get the app.</p>
          <div className="flex flex-row items-center px-4 my-[5px] ">
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DD42A630F-990E-45DB-8018-C662E3673354%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.google.com%2F"
              target="_blank"
            >
              <img
                src={playstore}
                alt="Get it on Google Playstore"
                className="max-w[132px] max-h-[40px] mr-2 "
              />
            </a>
            <a
              href="https://www.microsoft.com/store/productId/9NBLGGH5L9XT?ocid=pdpshare"
              target="_blank"
            >
              <img
                src={microsoft}
                alt="Get it from Microsoft"
                className="max-w[111px] max-h-[40px] "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
