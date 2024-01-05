import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import { scrollRight, scrollLeft, defaultProfilePicture } from '../../assets'
const Feed = () => {
  const [showPrevButton, setShowPrevButton] = useState(false)
  const [showNextButton, setShowNextButton] = useState(true)
  const dummyData = [
    { id: 1, borderColor: 'ring-pink-500' },
    { id: 2, borderColor: 'ring-red-500' },
    { id: 3, borderColor: 'ring-green-500' },
    { id: 4, borderColor: 'ring-blue-500' },
    { id: 5, borderColor: 'ring-yellow-500' },
    { id: 6, borderColor: 'ring-pink-500' },
    { id: 7, borderColor: 'ring-red-500' },
    { id: 8, borderColor: 'ring-green-500' },
    { id: 9, borderColor: 'ring-yellow-500' },
    { id: 10, borderColor: 'ring-blue-500' },
  ]
  return (
    <section className=" mt-[10px] max-w-[640px]   mr-[164px]">
      <div className="items-center box-border flex collapse pt-[14px] "></div>
      {/* Stories */}
      <div className="rounded-lg mt-[16px] pt-[10px] pb-[16px] box-border block overflow-y-hidden relative ">
        <div className="items-stretch flex flex-col h-[85px] relative overflow-y-hidden">
          <div className="items-stretch box-border flex flex-col h-full relative align-baseline  w-full">
            {/* Presentation */}
            <div className="items-stretch flex flex-row relative overflow-x-auto overflow-y-hidden ">
              <div className="items-stretch box-border flex flex-row h-full relative align-baseline overflow-x-hidden max-w-[630px]">
                <Swiper
                  modules={[Navigation]}
                  watchOverflow={true}
                  loop={false}
                  navigation={{
                    prevEl: '.custom-swiper-button-prev',
                    nextEl: '.custom-swiper-button-next',
                  }}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl =
                      '.custom-swiper-button-prev'
                    swiper.params.navigation.nextEl =
                      '.custom-swiper-button-next'
                    swiper.navigation.init()
                    swiper.navigation.update()
                  }}
                  spaceBetween={10}
                  slidesPerView={8} // Show 8 items at a time
                  onSlideChange={(swiper) => {
                    setShowPrevButton(!swiper.isBeginning)
                    setShowNextButton(!swiper.isEnd)
                  }}
                  className="mySwiper "
                >
                  {dummyData.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="flex justify-center"
                    >
                      <div className="flex flex-col">
                        {/* @TODO Replace the  div with profile picture */}
                        <div
                          className={`relative flex justify-center items-center w-[56px] h-[56px]  bg-white rounded-full shadow-md overflow-hidden ring-2 ${item.borderColor} m-1`}
                        >
                          <img
                            src={defaultProfilePicture}
                            alt=""
                          />
                        </div>
                        {/* @TODO Replace the content of the span with profile picture */}
                        <span className="block w-full max-w-[62px] whitespace-nowrap overflow-hidden overflow-ellipsis text-center text-xs leading-3 tracking-normal font-normal">
                          Person {item.id}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className={`custom-swiper-button-prev ${
                    showPrevButton ? 'block' : 'hidden'
                  } absolute top-[38%] left-4 -translate-y-1/2 bg-white w-6 h-6 flex justify-center items-center rounded-full z-10`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <button
                  className={`custom-swiper-button-next ${
                    showNextButton ? 'block' : 'hidden'
                  } absolute top-[37.5%] right-4 -translate-y-1/2 bg-white w-6 h-6 flex justify-center items-center rounded-full z-10`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Button */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feed
