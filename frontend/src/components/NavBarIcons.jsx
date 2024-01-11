import React from 'react'

const NavBarIcons = ({ icon, text }) => {
  return (
    <div className="group my-[4px]  py-3 w-full px-6 hover:bg-gray-100  items-center flex-row rounded-lg flex">
      <div>
        <div className="overflow-visible bg-transparent box-border flex flex-col items-stretch justify-start relative">
          <div className="h-[27px] w-[27px] box-border block">
            <img
              src={icon}
              alt=""
              className="transition-transform group-hover:scale-110 "
            />
          </div>
        </div>
      </div>
      <div className="opacity-100 flex h-6 w-fit overflow-hidden items-center box-border pl-[15px] cursor-pointer">
        <div className="w-full block">
          <span className="leading-5 overflow-visible w-full text-[16px]  break-words relative block ml-0">
            {text}
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavBarIcons
