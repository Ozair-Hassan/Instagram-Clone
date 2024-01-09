import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Formik, Form, Field } from 'formik'

import { useSelector } from 'react-redux'
import ImageUpload from '../../components/ImageUpload'
import { defaultProfilePicture } from '../../assets'

const ProfileSetup = () => {
  const user = useSelector((state) => state.auth.user)

  // Accessing specific properties from the user object
  const userName = user?.userName
  const fullName = user?.fullName
  const [profileImage, setProfileImage] = useState(null)

  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    const newText = event.target.value
    if (newText.length <= 150) {
      setText(newText)
    }
  }
  const handleImageSelect = (file) => {
    setProfileImage(file)
    // If needed, you can also update the Formik state here
  }
  const handleSubmit = async (values) => {
    // Process form submission here
    // Upload image to cloud and save form data to MongoDB
  }

  return (
    <>
      <NavBar />
      {/* Settings */}
      <section className="min-h-screen overflow-x-hidden flex flex-col ml-[300px] mt-10">
        <Formik
          initialValues={{ bio: '' }}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="items-stretch box-border flex flex-row justify-start mt-8 mb-8 relative align-baseline">
                <div className="mt-[4px] ml-[135px] mr-[21px] items-stretch box-border flex flex-col h-[38px] w-[38px]  relative align-baseline ">
                  <div className="rounded-[50%] box-border h-full w-full overflow-hidden relative">
                    <button>
                      <img
                        src={defaultProfilePicture}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div className="items-stretch box-border flex flex-grow-0 flex-shrink flex-col mr-[20px] overflow-x-hidden relative align-baseline">
                  <div className="my-1">
                    <span className=" overflow-visible max-w-full text-[16px] text-left break-words relative ">
                      {userName}
                    </span>
                  </div>
                  <div className="-mt-[10px]">
                    <ImageUpload onImageSelect={handleImageSelect} />
                    {profileImage && (
                      <p>Image selected: {profileImage.name}</p> // Optional: display selected image name
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start mb-4">
                <label className="px-[32px] text-right box-border flex-grow-0 flex-shrink-0 basis-[194px] text-[16px] font-semibold leading-[18px] mt-[6px] block">
                  Bio
                </label>
                <div className="max-w-[355px] w-full overflow-visible content-stretch bg-transparent flex flex-row items-stretch self-auto justify-start relative flex-wrap">
                  <textarea
                    name="bio"
                    type="text"
                    className="border border-igSeparator-50 rounded box-border flex-grow-0 flex-shrink basis-[355px] text-[16px] h-[60px] py-[6px] px-[10px] resize-y"
                    value={text}
                    onChange={handleTextChange}
                  />
                  <div className="overflow-visible mt-2 bg-transparent flex flex-col box-border items-stretch self-auto justify-start relative">
                    <span className="leading-4 max-w-full break-words font-normal text-[#737373] whitespace-pre-line text-[12px]">
                      {text.length} / 150
                    </span>
                  </div>
                </div>
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </section>
      <Footer />
    </>
  )
}

export default ProfileSetup
