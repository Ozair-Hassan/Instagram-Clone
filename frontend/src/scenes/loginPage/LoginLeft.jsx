import React, { useState, useEffect } from 'react'
import {
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
} from '../../assets'
const MobileAd = () => {
  const images = [screenshot1, screenshot2, screenshot3, screenshot4]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 6000)

    return () => clearInterval(intervalId)
  }, [images.length])
  return (
    <div>
      <div className="h-[581.15px] mb-3 w-[380.312px] bg-[length:468.32px_634.15px] self-center flex basis-[380.32px] bg-[position:-46px_0]  bg-[url('./assets/homePhones.png')] ">
        <div className="py-0 w-full mt-[27px] ml-[112px] px-0 flex items-stretch relative align-baseline ">
          {images.map((image, index) => (
            <img
              key={index}
              className={`absolute left-0 w-[250px] h-[538.84px] transition duration-[2500ms] ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
              src={image}
              alt={`Screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileAd
