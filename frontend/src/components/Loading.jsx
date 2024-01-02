import React from 'react'
import { meta, instagram } from '../assets/index'

const Loading = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="flex flex-col justify-center items-center flex-grow">
        <img
          src={instagram}
          alt="Loading..."
          className="w-[50px] h-[50px]"
        />
      </div>
      <div className="mb-4">
        <span className="flex flex-col align-middle justify-center items-center text-[#737373] font-system-primary text-[14px]">
          from
          <img
            src={meta}
            alt="From Meta"
            className="w-auto h-[25px]"
          />
        </span>
      </div>
    </div>
  )
}

export default Loading
