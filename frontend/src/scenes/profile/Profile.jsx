import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Profile = () => {
  const profile = useSelector((state) => state.profile.currentProfile)
  const userName = profile?.userName
  return (
    <div>
      <h1>Profile info</h1>
      <Link to={`/edit-profile`}>Edit Profile</Link>
    </div>
  )
}

export default Profile
