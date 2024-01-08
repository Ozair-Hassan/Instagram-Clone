import React, { useState } from 'react'
import { motion } from 'framer-motion'

const HeartIcon = () => {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  const variants = {
    liked: {
      scale: [1, 2, 1],
      fill: '#ef4444',
      transition: { duration: 0.3 },
    },
    unliked: {
      scale: 1,
      fill: 'none',
      stroke: '#000000',
      strokeWidth: '10', // Adjust this value for the desired thickness
      transition: { duration: 0.2 },
    },
  }

  return (
    <button
      onClick={toggleLike}
      aria-label={liked ? 'Unlike' : 'Like'}
      className="focus:outline-none hover:scale-110 duration-500"
    >
      <motion.svg
        animate={liked ? 'liked' : 'unliked'}
        variants={variants}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        role="img"
        viewBox="0 -10 120 134"
        width="24"
        className="transition duration-150 ease-in-out"
      >
        <title>{liked ? 'Unlike' : 'Like'}</title>
        <path
          d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
          style={{
            fill: variants[liked ? 'liked' : 'unliked'].fill,
            stroke: variants[liked ? 'liked' : 'unliked'].stroke,
            strokeWidth: variants[liked ? 'liked' : 'unliked'].strokeWidth,
          }}
        />
      </motion.svg>
    </button>
  )
}

export default HeartIcon
