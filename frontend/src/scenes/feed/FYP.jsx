import React from 'react'
import { defaultProfilePicture } from '../../assets'

const FYP = () => {
  return (
    <div className="w-full overflow-visible bg-transparent flex flex-col items-center box-border static justify-start">
      <div className="max-w-[470px] w-full block">
        <div className="mt-[16px] overflow-visible bg-transparent flex flex-col box-border items-stretch justify-start relative ">
          {/* Content */}
          <div className="block">
            <div className="flex flex-col pb-[6897.84px] relative">
              {/* One Post Styles */}
              <div className="mb-3 pb-5 border-b border-igSeparator-50">
                <div className="overflow-visible justify-center bg-transparent flex flex-col box-border items-stretch relative">
                  {/* Post Info */}
                  <div className="block">
                    <div className="overflow-visible bg-transparent box-border flex flex-row items-center justify-between relative">
                      {/* Header */}
                      <div className="my-2 ml-[5px] mr-[4px] items-center box-border flex flex-row flex-grow flex-shrink max-w-[422px] relative">
                        {/* User Picture */}
                        <div className="block">
                          <div className="block relative cursor-pointer rounded-full ring-radial-border">
                            <img
                              className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-white"
                              src={defaultProfilePicture}
                              alt="Person"
                            />
                          </div>
                        </div>
                        {/* User & Post Info */}
                        <div className="justify-center ml-[12px] min-h-[40px] flex flex-col items-start box-border flex-grow flex-shrink overflow-hidden relative">
                          {/* User */}
                          <div className="w-full flex ">
                            <div className="flex">
                              <div className="box-border flex-grow flex-shrink max-w-full overflow-hidden relative top-[1px] align-baseline ">
                                <div className="overflow-visible bg-transparent box-border flex items-center flex-row justify-start relative">
                                  <span className="leading-[18px] overflow-visible max-w-full  text-[14px] break-words block relative font-semibold font-system-primary whitespace-pre-line">
                                    <a
                                      href="#"
                                      className="text-black hover:text-[#262626] hover:opacity-50 "
                                    >
                                      Person
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="overflow-visible bg-transparent box-border items-center flex flex-row relative">
                                <div className="top-[1px] relative block">
                                  <span className="leading-[18px] overflow-visible font-system-primary max-w-full break-words relative text-[#737373] block whitespace-pre-line">
                                    <span className="mx-1 inline-block text-[14px] ">
                                      • 24h
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Post */}
                          <div className="b-[1px] box-border block max-w-full p-[2px] relative align-baseline">
                            <span className="leading-4 overflow-visible max-w-full break-words block relative whitespace-pre-line font-system-primary text-[12px]"></span>
                            <div className="flex">
                              <a
                                href="#"
                                className="w-full inline bg-transparent box-border cursor-pointer "
                              >
                                <span className="leading-4 overflow-visible max-w-full break-words block relative whitespace-pre-line font-system-primary text-[12px]">
                                  <div className="w-full flex">
                                    <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                                      Info part 1
                                    </span>
                                    <span className="mx-[4px] inline-block">
                                      <span className=" leading-[18px] max-w-full inline break-words whitespace-pre-line text-[14px]">
                                        •
                                      </span>
                                    </span>
                                    part2
                                  </div>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* More Button */}
                      <div className=" -mr-2 block">
                        <div className="block">
                          <div className="py-2 px-2 justify-center box-border flex cursor-pointer">
                            <div className="justify-center flex flex-col items-center">
                              <div className="h-6 w-6 overflow-visible justify-center bg-transparent flex flex-col items-center self-auto relative">
                                <svg
                                  aria-label="More options"
                                  classname="h-6 w-6 text-current"
                                  fill="currentColor"
                                  height="24"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  width="24"
                                >
                                  <title>More options</title>
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="1.5"
                                  ></circle>
                                  <circle
                                    cx="6"
                                    cy="12"
                                    r="1.5"
                                  ></circle>
                                  <circle
                                    cx="18"
                                    cy="12"
                                    r="1.5"
                                  ></circle>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Post Content */}
                  <div></div>
                  {/* Comments & Likes */}
                  <div></div>
                </div>
              </div>
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
