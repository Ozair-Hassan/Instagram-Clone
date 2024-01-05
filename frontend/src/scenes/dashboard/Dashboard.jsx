import React from 'react'

import NavBar from '../../components/NavBar'
import Feed from '../feed/Feed'
import MiniProfile from '../profile/MiniProfile'

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex-none ">
          {' '}
          <NavBar />
        </div>

        <div className=" flex-none mx-auto ">
          {' '}
          <Feed />
        </div>

        <div className="flex-none absolute right-[83px]  mt-1">
          {' '}
          <MiniProfile />
        </div>
      </div>
    </>
  )
}

export default Dashboard
