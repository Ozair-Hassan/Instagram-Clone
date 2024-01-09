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
import ProfileSetup from './scenes/profile/ProfileSetup'
import { setLogin, setLogout } from './redux/authSlice'
import { setProfile } from './redux/profileSlice'
import Profile from './scenes/profile/Profile'

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

          // Fetch profile data
          const profileResponse = await axios.get(
            `/api/profile/${user.userName}`,
            config
          )
          const profileData = profileResponse.data

          // Dispatch setProfile action to update the profile state
          dispatch(setProfile(profileData))
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
        {/* @ToDo  */}
        <Route
          path="/profile/:userName"
          element={
            isAuth ? (
              <Layout showFooter={false}>
                <Profile />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/edit-profile"
          element={
            isAuth ? (
              <Layout showFooter={false}>
                <ProfileSetup />
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
