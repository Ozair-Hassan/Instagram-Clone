import React from 'react'
import { useSelector } from 'react-redux'
import { defaultProfilePicture } from '../../assets'

const MiniProfile = () => {
  const user = useSelector((state) => state.auth.user)
  const profile = useSelector((state) => state.profile.currentProfile)

  const userName = user?.userName
  const fullName = user?.fullName
  const profilePicture = profile?.picturePath

  return (
    <>
      <section className="max-w-[320px] w-[320px] flex flex-col h-screen pt-[30px] ml-[5px] ">
        {/* Users Mini Profile */}
        <div className="w-full h-[66px] mb-[10px] mt-[16px] items-center flex flex-row justify-between ">
          <div className="w-full overflow-visible mr-1 bg-transparent flex flex-col box-border static items-stretch self-auto justify-start">
            <div className="w-full max-w-full block">
              <div className="overflow-visible p-0 box-border flex flex-col bg-transparent static items-stretch justify-start">
                <div className="min-w-0 justify-center flex flex-col box-border items-stretch relative z-0 flex-grow">
                  <div className="flex-nowrap box-border flex center flex-row justify-between relative">
                    {/* Profile Picture */}
                    <div className="min-w-0 max-w-full w-[62px] flex-col flex self-center box-border relative z-0">
                      <div className="overflow-visible mr-2 bg-transparent flex flex-col box-border static items-stretch self-auto justify-start">
                        <div className="self-center block relative w-[60px]">
                          <img
                            src={profilePicture || defaultProfilePicture}
                            alt="Profile Picture"
                            className="h-[56px] w-[56px] object-cover rounded-full" // Added 'object-cover' and 'rounded-full' for a circular image
                          />
                        </div>
                      </div>
                    </div>
                    {/* UserName + FullName */}
                    <div className="min-w-0 flex-shrink basis-auto max-w-full flex-col flex flex-wrap pt-2 flex-grow box-border justify-between relative z-0">
                      <div className="min-w-0 max-w-full flex flex-col box-border relative flex-grow z-0">
                        <div className="overflow-visible bg-transparent box-border flex flex-col static justify-start self-auto items-start">
                          {/* UserName */}
                          <div className="overflow-visible bg-transparent box-border static items-stretch flex flex-col self-auto justify-start flex-grow ml-3">
                            <span className="overflow-hidden font-semibold text-ellipsis inline bg-transparent box-border cursor-pointer text-[14px] text-black ">
                              {userName}
                            </span>
                          </div>
                          {/* FullName */}
                          <span className="leading-[18px] overflow-visible max-w-full font-normal break-words text-[#737373] text-[14px] relative block whitespace-pre-line font-system ">
                            <span className="overflow-hidden max-w-full whitespace-nowrap text-ellipsis block">
                              <div className="overflow-visible bg-transparent flex flex-col static items-stretch justify-start ml-3">
                                <span className="leading-[18px] max-w-full inline ">
                                  {fullName}
                                </span>
                              </div>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Switch */}
                    <div className="min-w-0 max-w-full flex-col flex self-center box-border relative z-0">
                      <div className="overflow-visible flex-shrink bg-transparent box-border static items-stretch flex flex-row self-auto justify-start ml-[12px]">
                        <div className="h-auto w-auto font-bold leading-[18px] cursor-pointer font-system bg-transparent items-center text-center relative text-[12px] text-[#42b3ff] inline-flex">
                          Switch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Suggested for you section */}
        <div className=" bg-white flex flex-col -ml-[16px] mb-3 w-[351px]">
          {/* Title */}
          <div className="overflow-visible py-1 bg-transparent flex items-center flex-row self-auto px-4 justify-start">
            <div className="overflow-visible min-w-0 min-h-0 bg-transparent box-border self-auto justify-start relative flex-grow items-start">
              <span className="leading-[16px] max-w-full break-words text-[#737373] relative block font-semibold font-system-primary text-[14px]">
                Suggested for you
              </span>
            </div>
            <a
              href="#"
              className="text-[#262626] bg-transparent inline-block relative text-center"
            >
              <span className="leading-[16px] max-w-full break-words text-black relative block font-semibold font-system-primary text-[12px]">
                See All
              </span>
            </a>
          </div>
          {/* Suggested Persons */}
          <div className="overflow-visible ml-1 mb-1 bg-transparent box-border items-stretch self-auto justify-start relative">
            <div className="pb-2 overflow-visible bg-transparent flex flex-col box-border static items-stretch justify-start">
              <div className="h-auto overflow-auto">
                <div className="flex flex-col pb-0 pt-1 relative">
                  {/* First Suggested */}
                  <div className="w-full max-w-full block">
                    <div className="py-2 overflow-visible px-4 flex flex-col static items-stretch justify-start  ">
                      <div className="min-w-0 justify-center flex-col box-border flex relative">
                        <div className="flex-nowrap box-border flex flex-row items-center justify-between relative">
                          {/* Profile Picture */}
                          <div className="min-w-0 max-w-full w-[44px] flex-col flex self-center box-border relative z-0">
                            <div className="overflow-visible mr-2 bg-transparent flex flex-col box-border static items-stretch self-auto justify-start">
                              <div className="self-center block relative w-[44px]">
                                <img
                                  src={defaultProfilePicture}
                                  alt="Profile Picture"
                                  className="h-[36px] w-[36px]"
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
                                      <span className="leading-[18px] max-w-full inline ">
                                        {fullName}
                                      </span>
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Switch */}
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
                  {/* Second Suggested */}
                  <div className="w-full max-w-full block">
                    <div className="py-2 overflow-visible px-4 flex flex-col static items-stretch justify-start  ">
                      <div className="min-w-0 justify-center flex-col box-border flex relative">
                        <div className="flex-nowrap box-border flex flex-row items-center justify-between relative">
                          {/* Profile Picture */}
                          <div className="min-w-0 max-w-full w-[44px] flex-col flex self-center box-border relative z-0">
                            <div className="overflow-visible mr-2 bg-transparent flex flex-col box-border static items-stretch self-auto justify-start">
                              <div className="self-center block relative w-[44px]">
                                <img
                                  src={defaultProfilePicture}
                                  alt="Profile Picture"
                                  className="h-[36px] w-[36px]"
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
                                      <span className="leading-[18px] max-w-full inline ">
                                        {fullName}
                                      </span>
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Switch */}
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
                  {/* Third Suggested */}
                  <div className="w-full max-w-full block">
                    <div className="py-2 overflow-visible px-4 flex flex-col static items-stretch justify-start  ">
                      <div className="min-w-0 justify-center flex-col box-border flex relative">
                        <div className="flex-nowrap box-border flex flex-row items-center justify-between relative">
                          {/* Profile Picture */}
                          <div className="min-w-0 max-w-full w-[44px] flex-col flex self-center box-border relative z-0">
                            <div className="overflow-visible mr-2 bg-transparent flex flex-col box-border static items-stretch self-auto justify-start">
                              <div className="self-center block relative w-[44px]">
                                <img
                                  src={defaultProfilePicture}
                                  alt="Profile Picture"
                                  className="h-[36px] w-[36px]"
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
                                      <span className="leading-[18px] max-w-full inline ">
                                        {fullName}
                                      </span>
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Switch */}
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
                  {/* Fourth Suggested */}
                  <div className="w-full max-w-full block">
                    <div className="py-2 overflow-visible px-4 flex flex-col static items-stretch justify-start  ">
                      <div className="min-w-0 justify-center flex-col box-border flex relative">
                        <div className="flex-nowrap box-border flex flex-row items-center justify-between relative">
                          {/* Profile Picture */}
                          <div className="min-w-0 max-w-full w-[44px] flex-col flex self-center box-border relative z-0">
                            <div className="overflow-visible mr-2 bg-transparent flex flex-col box-border static items-stretch self-auto justify-start">
                              <div className="self-center block relative w-[44px]">
                                <img
                                  src={defaultProfilePicture}
                                  alt="Profile Picture"
                                  className="h-[36px] w-[36px]"
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
                                      <span className="leading-[18px] max-w-full inline ">
                                        {fullName}
                                      </span>
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Switch */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="pt-0 w-[876px] max-w-[876px] pb-[38px] block">
          <nav className="flex flex-col mb-4 max-w-full ">
            <ul className="mr-0 flex-grow font-system-primary mb-[3px] align-baseline flex flex-row flex-wrap gap-2 max-w-[319px]">
              {/* About */}
              <li className="text-[#c7c7c7] text-[12px] font-normal  ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    About
                  </span>
                </a>
              </li>
              {/* Help */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Help
                  </span>
                </a>
              </li>
              {/* Press */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Press
                  </span>
                </a>
              </li>
              {/* API */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    API
                  </span>
                </a>
              </li>
              {/* Jobs */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Jobs
                  </span>
                </a>
              </li>
              {/* Privacy */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Privacy
                  </span>
                </a>
              </li>
              {/* Terms */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Terms
                  </span>
                </a>
              </li>
              {/* Locations */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Locations
                  </span>
                </a>
              </li>
              {/* Language */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Language
                  </span>
                </a>
              </li>
              {/* Meta Verified */}
              <li className="text-[#c7c7c7] text-[12px] font-normal ">
                <a
                  href="#"
                  className="text-[#c7c7c7] text-[12px] font-normal "
                >
                  <span className="leading-4 overflow-visible max-w-full break-words relative block whitespace-pre-line">
                    Meta Verified
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <span className="uppercase text-[#c7c7c7] text-[12px] font-normal font-system-primary">
            <span className="leading-4 overflow-visible break-words relative block  ">
              © 2024 Instagram from Meta
            </span>
          </span>
        </div>
      </section>
    </>
  )
}

export default MiniProfile
