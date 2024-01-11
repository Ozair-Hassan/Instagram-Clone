import React from 'react'
import SinglePost from './SinglePost'

const FYP = () => {
  return (
    <div className="w-full overflow-visible bg-transparent flex flex-col items-center box-border static justify-start">
      <div className="max-w-[470px] w-full block">
        <div className="mt-[16px] overflow-visible bg-transparent flex flex-col box-border items-stretch justify-start relative ">
          {/* Content */}
          <div className="block">
            <div className="flex flex-col pb-[6897.84px] relative">
              {/* One Post Styles */}
              <SinglePost />
              {/* Second dummy post */}
              <SinglePost />
            </div>
          </div>
          {/* Loading? */}
          <div></div>
        </div>
      </div>
      <h1>Feed</h1>
    </div>
  )
}

export default FYP
