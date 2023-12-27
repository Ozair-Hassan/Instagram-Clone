import React from 'react'
import MobileAd from './LoginLeft'
import Login from './LoginRight'
const LoginFull = () => {
  return (
    <div className="flex w-full max-h-[590px] mb-12 mt-10 pb-[32px] justify-center mx-auto items-stretch align-baseline md:mt-[32px] lg:mt-[150px] lg:mb-[190px]">
      <div className="hidden md:hidden lg:block">
        <MobileAd />
      </div>
      <div className="lg:ml-8 lg:mt-3">
        <Login />
      </div>
    </div>
  )
}

export default LoginFull
