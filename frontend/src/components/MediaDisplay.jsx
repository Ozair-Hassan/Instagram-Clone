import React from 'react'
import { placeHolder, testImagePost } from '../assets'

const MediaDisplay = ({ fileType }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      {fileType === 'video' ? (
        <video
          className="max-w-full max-h-full object-contain"
          controls
        >
          <source
            src="" // Add your video source here
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={testImagePost}
          alt="Media content"
          className="max-w-full max-h-full object-contain"
        />
      )}
    </div>
  )
}

export default MediaDisplay
