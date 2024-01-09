import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div>
      <h1>Profile info</h1>
      <Link to="/edit-profile">Edit Profile</Link>
    </div>
  )
}

export default Profile
