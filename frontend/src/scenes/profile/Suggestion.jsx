// Suggestion.jsx
import React from 'react'
import { Link } from 'react-router-dom'
const Suggestion = ({ picturePath, userName, bio }) => {
  return (
    <div className="w-full max-w-full block">
      <div className="py-2 overflow-visible px-4 flex flex-col static items-stretch justify-start  ">
        <div className="min-w-0 justify-center flex-col box-border flex relative">
          <div className="flex-nowrap box-border flex flex-row items-center justify-between relative">
            <Link
              to={`/profile/${userName}`}
              className="flex-nowrap box-border flex flex-row items-center justify-between relative"
            >
              {/* Profile Picture */}
              <div className="min-w-0 max-w-full w-[44px] flex-col flex self-center box-border relative z-0">
                <div className="overflow-visible mr-2 bg-transparent flex flex-col box-border static items-stretch self-auto justify-start">
                  <div className="self-center block relative w-[44px]">
                    <img
                      src={picturePath}
                      alt="Profile Picture"
                      className="h-[36px] w-[36px] object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              {/* UserName + FullName */}
              <div className="min-w-0 flex-shrink basis-auto max-w-full flex-col flex flex-wrap pt-0 flex-grow box-border justify-between relative z-0">
                <div className="min-w-0 max-w-full flex flex-col box-border relative flex-grow z-0">
                  <div className="overflow-visible bg-transparent box-border flex flex-col static justify-start self-auto items-start">
                    {/* UserName */}
                    <div className="overflow-visible bg-transparent box-border static items-stretch flex flex-col self-auto justify-start flex-grow ">
                      <span className="overflow-hidden font-semibold text-ellipsis inline bg-transparent box-border cursor-pointer text-[14px] text-black ">
                        {userName}
                      </span>
                    </div>
                    {/* FullName */}
                    <span className="leading-[18px] overflow-visible max-w-full font-normal break-words text-[#737373] text-[12px] relative block whitespace-pre-line font-system ">
                      <span className="overflow-hidden max-w-full whitespace-nowrap text-ellipsis block">
                        <div className="overflow-visible bg-transparent flex flex-col static items-stretch justify-start ">
                          <span className="leading-[18px] max-w-full inline text-ellipsis">
                            {bio}
                          </span>
                        </div>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            {/* Follow */}
            <div className="min-w-0 max-w-full flex-col flex self-center box-border relative z-0">
              <div className="overflow-visible flex-shrink bg-transparent box-border static items-stretch flex flex-row self-auto justify-start ml-[12px]">
                <div className="h-auto w-auto font-bold leading-[18px] cursor-pointer font-system bg-transparent items-center text-center relative text-[12px] text-[#42b3ff] inline-flex">
                  Follow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestion
