import React from 'react'
import Login from './scenes/loginPage/Login'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <div className=" flex align-top flex-shrink-0 w-full max-h-[590px] mb-16 ">
        <Login />
      </div>
      <Footer />
    </>
  )
}

export default App
