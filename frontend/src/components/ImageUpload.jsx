import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const ImageUpload = ({ onImageSelect }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false)
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      onImageSelect(acceptedFiles[0])
      setIsImageUploaded(true) // Set the state to true when an image is uploaded
    },
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {!isImageUploaded && (
        <p className="h-auto font-semibold inline text-ellipsis bg-transparent cursor-pointer text-center relative text-[14px] leading-[14px] text-[#0095ff]">
          Change profile photo
        </p>
      )}
    </div>
  )
}

export default ImageUpload
