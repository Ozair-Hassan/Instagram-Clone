import React from 'react'

import NavBar from '../../components/NavBar'
import Feed from '../feed/Feed'
import MiniProfile from '../profile/MiniProfile'

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col absolute left-0">
          {' '}
          <NavBar />
        </div>

        <div className="flex flex-col absolute top-0">
          {' '}
          <Feed />
        </div>

        <div className="flex flex-col absolute right-[83px] mt-1">
          {' '}
          <MiniProfile />
        </div>
      </div>
    </>
  )
}

export default Dashboard
