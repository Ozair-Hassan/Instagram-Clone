import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './components/Loading'
import Footer from './components/Footer'
import Layout from './components/Layout'
import LoginFull from './scenes/loginPage/LoginFull'
import Dashboard from './scenes/dashboard/Dashboard'
import Register from './scenes/registerPage/Register'
import ForgotPassword from './scenes/forgotPasswordPage/ForgotPassword'
import { setLogin, setLogout } from './redux/authSlice'

const App = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => Boolean(state.auth.token))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyToken = async () => {
      const token = Cookies.get('token')
      if (token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          const response = await axios.get('/api/auth/verifyToken', config)
          const user = response.data

          dispatch(setLogin({ user, token }))
        } catch (error) {
          Cookies.remove('token')
          dispatch(setLogout())
        }
      }
      setLoading(false)
    }

    verifyToken()
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to="/home" />
            ) : (
              <Layout showFooter={true}>
                <LoginFull />
              </Layout>
            )
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/password-recovery"
          element={
            <Layout>
              <ForgotPassword />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            isAuth ? (
              <Layout showFooter={false}>
                <Dashboard />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
