import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch({ type: 'auth/setLogout' })
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Dashboard
