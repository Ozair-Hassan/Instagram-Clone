import React from 'react'
import { titleText } from '../../assets'
import Form from './FormPasswordRecovery'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="flex h-screen -mb-14 w-full justify-center">
      <div className="  flex-shrink-0">
        <div className="w-[388px] mx-auto flex flex-col  items-center">
          {/* Header */}
          <div className="items-center border-igSeparator-50 border-b box-border flex flex-col h-[60px] fixed top-0 w-full z-10 text-[14px] leading-4 bg-white">
            <div className="items-center box-border flex flex-row h-[60px] justify-center max-w-[975px] mt-2 px-[20px] w-full z-20">
              <div className="flex-grow flex-shrink-0 w-32 block ">
                <div className="overflow-visible bg-transparent flex items-stretch flex-row justify-start relative ">
                  <img
                    src={titleText}
                    alt="Instagram"
                    className="max-w-[103px] max-h-[36px] p-0 inline "
                  />
                </div>
              </div>
            </div>
            {/* Form */}
          </div>
          <div className="my-[44px]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
