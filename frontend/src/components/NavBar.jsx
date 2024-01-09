import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { titleText } from '../assets'
import {
  home,
  create,
  explore,
  menu,
  message,
  notification,
  reels,
  search,
  threads,
} from '../assets/navbar'
import Cookies from 'js-cookie'

const NavBar = () => {
  const profile = useSelector((state) => state.profile.currentProfile)
  const userName = profile?.userName
  const profilePicture = profile?.picturePath

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    dispatch({ type: 'auth/setLogout' })
    Cookies.remove('token')
    navigate('/')
  }

  return (
    <>
      <div className="overflow-visible w-fit h-screen top-0 bg-transparent fixed flex flex-col box-border items-stretch justify-start z-10 ">
        <div className="font-system-primary text-[14px] leading-[18px] ">
          <div className="h-dvh flex flex-row justify-between relative">
            <div className="border-r border-igSeparator-50 z-[1] block">
              <div className="w-[244px] pt-2 pb-1 px-3 bg-white flex flex-col box-border justify-start">
                <div className="w-full h-[92px] relative block">
                  <div className="h-[73px] w-full pt-[28px] mb-[19px] pb-[16px] px-[12px] left-0 absolute block">
                    <img
                      src={titleText}
                      alt="Instagram"
                      className="max-w-[190px] max-h-[33px] "
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link to="/home">
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center flex-row rounded-lg flex">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch justify-start relative">
                                <div className="h-[27px] w-[27px] box-border block">
                                  <img
                                    src={home}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className="leading-5 overflow-visible w-full text-[16px] font-bold break-words relative block ml-0">
                                  Home
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* Search */}
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link>
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                <div className="h-[27px] w-[27px] box-border block">
                                  <img
                                    src={search}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                  Search
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* Explore */}
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link>
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                <div className="h-[27px] w-[27px] box-border block">
                                  <img
                                    src={explore}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                  Explore
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* Reels */}
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link>
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                <div className="h-[25px] w-[25px] box-border block">
                                  <img
                                    src={reels}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                  Reels
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* Messages */}
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link>
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                <div className="h-[27px] w-[27px] box-border block">
                                  <img
                                    src={message}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                  Messages
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* Notifications */}
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link>
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                <div className="h-[27px] w-[27px] box-border block">
                                  <img
                                    src={notification}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                  Notifications
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* Create */}
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link>
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                <div className="h-[27px] w-[27px] box-border block">
                                  <img
                                    src={create}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                  Create
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* Profile */}
              <div className="w-full flex-grow block ">
                <div className="block ">
                  <div className=" relative block">
                    <span>
                      <div>
                        <Link to={`/profile/${userName}`}>
                          <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                            <div>
                              <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                <div className="h-[27px] w-[27px] box-border block">
                                  <img
                                    src={profilePicture}
                                    alt=""
                                    className="transition-transform group-hover:scale-110"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                              <div className="w-full block">
                                <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                  Profile
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 flex flex-col w-full">
                {/* Threads */}
                <div className="w-full flex-grow block ">
                  <div className="block ">
                    <div className=" relative block">
                      <span>
                        <div>
                          <Link>
                            <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                              <div>
                                <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative">
                                  <div className="h-[27px] w-[27px] box-border block">
                                    <img
                                      src={threads}
                                      alt=""
                                      className="transition-transform group-hover:scale-110"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                                <div className="w-full block">
                                  <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                                    Threads
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                {/* More */}
                <div className="w-full flex-grow">
                  <button
                    onClick={toggleDropdown}
                    className="block w-full text-left"
                  >
                    <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  flex items-center flex-row rounded-lg">
                      <div className="h-[27px] w-[27px]">
                        <img
                          src={menu}
                          alt="Menu"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                      <span className="ml-[15px] leading-5 text-[16px] font-normal">
                        More
                      </span>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="origin-top-right absolute left-[24px]  bottom-12 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                      {console.log(isOpen)}
                      <div className="py-1">
                        {/* Add your menu items here */}
                        <button
                          onClick={handleLogout}
                          className="text-gray-700 block px-4 py-2 text-sm"
                        >
                          Log out
                        </button>
                        {/* You can add more items here */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
