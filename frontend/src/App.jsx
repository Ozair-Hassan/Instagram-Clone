import React from 'react'

import Footer from './components/Footer'
import LoginFull from './scenes/loginPage/LoginFull'
import Dashboard from './scenes/dashboard/Dashboard'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Register from './scenes/registerPage/Register'
import ForgotPassword from './scenes/forgotPasswordPage/ForgotPassword'
const App = () => {
  const isAuth = useSelector((state) => Boolean(state.auth.token))
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginFull />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/password-recovery"
            element={<ForgotPassword />}
          />
          <Route
            path="/home"
            element={isAuth ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
