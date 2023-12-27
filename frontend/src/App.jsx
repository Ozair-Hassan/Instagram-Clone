import React from 'react'
import Login from './scenes/loginPage/Login'
import Footer from './components/Footer'
import MobileAd from './components/MobileAd'
const App = () => {
  return (
    <>
      <div className="flex w-full max-h-[590px] mb-12 lg:mb-14 mt-10 pb-[32px] justify-center mx-auto items-stretch align-baseline md:mt-[32px] lg:mt-[32px]">
        <div className="hidden md:hidden lg:block">
          <MobileAd />
        </div>
        <div className="lg:ml-8 lg:mt-3">
          <Login />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
