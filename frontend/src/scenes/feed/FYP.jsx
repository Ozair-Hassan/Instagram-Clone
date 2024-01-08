import React, { useState } from 'react'
import { defaultProfilePicture, placeHolder } from '../../assets'
import HeartIcon from './HeartIcon'
import MediaDisplay from '../../components/MediaDisplay'

const FYP = () => {
  return (
    <div className="w-full overflow-visible bg-transparent flex flex-col items-center box-border static justify-start">
      <div className="max-w-[470px] w-full block">
        <div className="mt-[16px] overflow-visible bg-transparent flex flex-col box-border items-stretch justify-start relative ">
          {/* Content */}
          <div className="block">
            <div className="flex flex-col pb-[6897.84px] relative">
              {/* One Post Styles */}
              <div className="mb-3 pb-4 border-b border-igSeparator-50">
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
                          <div className="b-[1px] box-border block max-w-full p-[1px] relative align-baseline">
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
                  <div className="rounded overflow-hidden border border-igSeparator-50">
                    <div className="block">
                      <div className="pb-[125%] relative block">
                        <div className="w-full h-full absolute bg-black block">
                          <div className="w-full h-full relative block z-0">
                            <div className="w-full h-full relative block">
                              <div className="w-full h-full relative block">
                                <div className="w-full h-full flex justify-center items-center">
                                  <MediaDisplay fileType={'image'} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Comments & Likes */}
                  <div className="overflow-visible bg-transparent flex flex-col items-stretch self-auto relative justify-start ">
                    <div className="flex flex-col relative rounded-lg">
                      <div className="border-0 box-border flex flex-col min-w-[355px] relative w-full">
                        {/* Likes & Comments & save */}
                        <section className="mt-1 flex flex-row overflow-visible pb-[6px]">
                          {/* Heart / Like */}
                          <span className="inline-block -ml-2">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <HeartIcon />
                              </div>
                            </div>
                          </span>
                          {/* Comment */}
                          <span className="inline-block ">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <button>
                                  <svg
                                    aria-label="Comment"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                  >
                                    <title>Comment</title>
                                    <path
                                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </span>
                          {/* Share */}
                          <span className="inline-block  ">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <button>
                                  <svg
                                    aria-label="Share Post"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                  >
                                    <title>Share Post</title>
                                    <line
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      x1="22"
                                      x2="9.218"
                                      y1="3"
                                      y2="10.083"
                                    ></line>
                                    <polygon
                                      fill="none"
                                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                      stroke="currentColor"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></polygon>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </span>
                          {/* Save Post */}
                          <span className="inline-block ml-auto -mr-[10px] ">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <button>
                                  <svg
                                    aria-label="Save"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                  >
                                    <title>Save</title>
                                    <polygon
                                      fill="none"
                                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></polygon>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </span>
                        </section>
                        {/* Liked by Section */}
                        <section className="overflow-visible mb-2 block">
                          <div className="overflow-visible bg-transparent items-stretch flex flex-row relative">
                            <div className="overflow-visible mt-auto mb-auto content-stretch bg-transparent flex flex-col box-border justify-start relative items-start flex-wrap">
                              <span className="leading-[18px] overflow-visible text-[14px] break-words relative block font-system-primary whitespace-pre-line">
                                Liked by{' '}
                                <a
                                  href="#"
                                  className="cursor-pointer"
                                >
                                  <span className="font-semibold">Person1</span>
                                </a>{' '}
                                and{' '}
                                <a
                                  href="#"
                                  className="cursor-pointer"
                                >
                                  <span className="font-semibold">others</span>
                                </a>
                              </span>
                            </div>
                          </div>
                        </section>
                        {/* Caption Section */}
                        <section className="overflow-visible flex flex-col  relative">
                          <div className="overflow-visible bg-transparent flex flex-col items-stretch self-auto justify-start relative">
                            <div className="overflow-visible mb-2 bg-transparent flex flex-col box-border items-stretch self-auto justify-start relative">
                              <div>
                                <div className="inline-block">
                                  <a
                                    href="#"
                                    className="inline cursor-pointer"
                                  >
                                    <div className="overflow-visible bg-transparent box-border static inline-block">
                                      <div className="overflow-visible box-border flex flex-row items-center justify-start relative">
                                        <span className="font-semibold leading-[14px] text-[14px] font-system-primary">
                                          Person 1
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>{' '}
                                {/* Caption */}
                                <span className="font-normal leading-[14px] text-[14px] font-system inline">
                                  <h1 className="inline">
                                    Part of the caption...
                                  </h1>
                                </span>
                                {/* @ToDo transform caption div from mini caption to full caption */}
                                <div className="text-[#737373] leading-[14px] text-[14px] cursor-pointer">
                                  more
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* Comments */}
                        <div className="overflow-visible bg-transparent flex flex-col self-auto pb-2  justify-start relative items-start">
                          <a
                            href="#"
                            className="inline bg-transparent box-border cursor-pointer "
                          >
                            <span className="leading-[18px] overflow-visible text-[14px] break-words relative text-[#737373] whitespace-pre-line">
                              View all
                              <span> 38 </span> comments
                            </span>
                          </a>
                        </div>
                        <section className="text-[#737373] text-[14px]  leading-[14px] relative">
                          <div className="block">
                            <form
                              action="submit"
                              className="flex flex-row "
                            >
                              <div className="items-center flex flex-row flex-grow flex-shrink align-baseline">
                                <div className="order-3 block">
                                  <div className="justify-center bg-transparent box-border flex items-center cursor-pointer">
                                    <div className="justify-center flex flex-col items-center">
                                      <svg
                                        aria-label="Emoji"
                                        class="x1lliihq x1n2onr6 x1roi4f4"
                                        fill="currentColor"
                                        height="13"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="13"
                                      >
                                        <title>Emoji</title>
                                        <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <textarea
                                  name=""
                                  id=""
                                  autoComplete="off"
                                  autoCorrect="off"
                                  placeholder="Add a comment..."
                                  className="max-h-[80px] leading-[14px] resize-none flex-grow text-black font-system-primary"
                                ></textarea>
                              </div>
                            </form>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second dummy post */}
              <div className="mb-3 pb-4 border-b border-igSeparator-50">
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
                          <div className="b-[1px] box-border block max-w-full p-[1px] relative align-baseline">
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
                  <div className="rounded overflow-hidden border border-igSeparator-50">
                    <div className="block">
                      <div className="pb-[125%] relative block">
                        <div className="w-full h-full absolute bg-black block">
                          <div className="w-full h-full relative block z-0">
                            <div className="w-full h-full relative block">
                              <div className="w-full h-full relative block">
                                <div className="w-full h-full flex justify-center items-center">
                                  <MediaDisplay fileType={'image'} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Comments & Likes */}
                  <div className="overflow-visible bg-transparent flex flex-col items-stretch self-auto relative justify-start ">
                    <div className="flex flex-col relative rounded-lg">
                      <div className="border-0 box-border flex flex-col min-w-[355px] relative w-full">
                        {/* Likes & Comments & save */}
                        <section className="mt-1 flex flex-row overflow-visible pb-[6px]">
                          {/* Heart / Like */}
                          <span className="inline-block -ml-2">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <HeartIcon />
                              </div>
                            </div>
                          </span>
                          {/* Comment */}
                          <span className="inline-block ">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <button>
                                  <svg
                                    aria-label="Comment"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                  >
                                    <title>Comment</title>
                                    <path
                                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </span>
                          {/* Share */}
                          <span className="inline-block  ">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <button>
                                  <svg
                                    aria-label="Share Post"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                  >
                                    <title>Share Post</title>
                                    <line
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      x1="22"
                                      x2="9.218"
                                      y1="3"
                                      y2="10.083"
                                    ></line>
                                    <polygon
                                      fill="none"
                                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                      stroke="currentColor"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></polygon>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </span>
                          {/* Save Post */}
                          <span className="inline-block ml-auto -mr-[10px] ">
                            <div className="py-2 px-2 bg-transparent justify-center box-border flex ">
                              <div className="justify-center flex flex-col items-center">
                                <button>
                                  <svg
                                    aria-label="Save"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                  >
                                    <title>Save</title>
                                    <polygon
                                      fill="none"
                                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></polygon>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </span>
                        </section>
                        {/* Liked by Section */}
                        <section className="overflow-visible mb-2 block">
                          <div className="overflow-visible bg-transparent items-stretch flex flex-row relative">
                            <div className="overflow-visible mt-auto mb-auto content-stretch bg-transparent flex flex-col box-border justify-start relative items-start flex-wrap">
                              <span className="leading-[18px] overflow-visible text-[14px] break-words relative block font-system-primary whitespace-pre-line">
                                Liked by{' '}
                                <a
                                  href="#"
                                  className="cursor-pointer"
                                >
                                  <span className="font-semibold">Person1</span>
                                </a>{' '}
                                and{' '}
                                <a
                                  href="#"
                                  className="cursor-pointer"
                                >
                                  <span className="font-semibold">others</span>
                                </a>
                              </span>
                            </div>
                          </div>
                        </section>
                        {/* Caption Section */}
                        <section className="overflow-visible flex flex-col  relative">
                          <div className="overflow-visible bg-transparent flex flex-col items-stretch self-auto justify-start relative">
                            <div className="overflow-visible mb-2 bg-transparent flex flex-col box-border items-stretch self-auto justify-start relative">
                              <div>
                                <div className="inline-block">
                                  <a
                                    href="#"
                                    className="inline cursor-pointer"
                                  >
                                    <div className="overflow-visible bg-transparent box-border static inline-block">
                                      <div className="overflow-visible box-border flex flex-row items-center justify-start relative">
                                        <span className="font-semibold leading-[14px] text-[14px] font-system-primary">
                                          Person 1
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>{' '}
                                {/* Caption */}
                                <span className="font-normal leading-[14px] text-[14px] font-system inline">
                                  <h1 className="inline">
                                    Part of the caption...
                                  </h1>
                                </span>
                                {/* @ToDo transform caption div from mini caption to full caption */}
                                <div className="text-[#737373] leading-[14px] text-[14px] cursor-pointer">
                                  more
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* Comments */}
                        <div className="overflow-visible bg-transparent pb-2 flex flex-col self-auto justify-start relative items-start">
                          <a
                            href="#"
                            className="inline bg-transparent box-border cursor-pointer "
                          >
                            <span className="leading-[18px] overflow-visible text-[14px] break-words relative text-[#737373] whitespace-pre-line">
                              View all
                              <span> 38 </span> comments
                            </span>
                          </a>
                        </div>
                        <section className="text-[#737373] text-[14px] leading-[14px] relative">
                          <div className="block">
                            <form
                              action="submit"
                              className="flex flex-row "
                            >
                              <div className="items-center flex flex-row flex-grow flex-shrink align-baseline">
                                <div className="order-3 block">
                                  <div className="justify-center bg-transparent box-border flex items-center cursor-pointer">
                                    <div className="justify-center flex flex-col items-center">
                                      <svg
                                        aria-label="Emoji"
                                        class="x1lliihq x1n2onr6 x1roi4f4"
                                        fill="currentColor"
                                        height="13"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="13"
                                      >
                                        <title>Emoji</title>
                                        <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <textarea
                                  name=""
                                  id=""
                                  autoComplete="off"
                                  autoCorrect="off"
                                  placeholder="Add a comment..."
                                  className="max-h-[80px] leading-[14px] outline-none resize-none flex-grow text-black font-system-primary"
                                ></textarea>
                              </div>
                            </form>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
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
