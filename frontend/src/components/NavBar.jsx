import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
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
import NavBarIcons from './NavBarIcons'

const NavBar = () => {
  const profile = useSelector((state) => state.profile.currentProfile)
  const userName = profile?.userName
  const profilePicture = profile?.picturePath

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    dispatch({ type: 'auth/setLogout' })
    Cookies.remove('token')
    dispatch({ type: 'profile/clearProfile' })
    navigate('/')
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="overflow-visible w-fit h-screen top-0 bg-transparent fixed flex flex-col box-border items-stretch justify-start z-10 font-system-primary text-[14px] leading-[18px]">
        <div className="h-dvh flex flex-row justify-between relative">
          <div className="border-r border-igSeparator-50 z-[1] block">
            {/* Title */}
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
            {/* Home */}
            <div className="font-bold">
              <NavBarIcons
                icon={home}
                text={'Home'}
                link={'/home'}
              />
            </div>
            {/* Search */}
            <NavBarIcons
              icon={search}
              text={'Search'}
              link={'/home'}
            />
            {/* Explore */}
            <NavBarIcons
              icon={explore}
              text={'Explore'}
              link={'/home'}
            />
            {/* Reels */}
            <NavBarIcons
              icon={reels}
              text={'Reels'}
              link={'/home'}
            />
            {/* Messages */}
            <NavBarIcons
              icon={message}
              text={'Messages'}
              link={'/home'}
            />
            {/* Notifications */}
            <NavBarIcons
              icon={notification}
              text={'Notifications'}
              link={'/home'}
            />
            {/* Create */}
            <NavBarIcons
              icon={create}
              text={'Create'}
              link={'/home'}
            />
            {/* Profile */}
            <div className="w-full flex-grow block ">
              <Link to={`/profile/${userName}`}>
                <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center  flex-row rounded-lg flex ">
                  <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch  justify-start relative  rounded-full border-2 border-black ">
                    <img
                      src={profilePicture}
                      alt="Profile Picture"
                      className="h-[27px] w-[27px] object-cover rounded-full transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
                    <span className=" leading-5 overflow-visible w-full text-[16px] font-normal break-words relative block ml-0">
                      Profile
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="absolute bottom-5 flex flex-col w-full">
              {/* Threads */}
              <NavBarIcons
                icon={threads}
                text={'Threads'}
                link={'/home'}
              />
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
                    <div className="py-1">
                      <button
                        onClick={{}}
                        className="text-gray-700 block px-4 py-2 text-sm"
                      >
                        Settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="text-gray-700 block px-4 py-2 text-sm"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
