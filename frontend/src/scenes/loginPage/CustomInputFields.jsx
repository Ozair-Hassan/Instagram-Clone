import React, { useState } from 'react'

const CustomInputFields = ({
  label,
  name,
  type,
  onBlur,
  onChange,
  value,
  data,
  placeholder,
  showButton,
}) => {
  const [passwordType, setPasswordType] = useState('password')
  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }
  return (
    <div className="block mb-[6px] px-[40px] w-full ">
      <div className=" bg-igSeparator-100 text-[12px] box-border flex flex-row relative w-full">
        <label className="flex text-[100%] h-[38px] m-0 p-0 relative align-baseline w-full">
          <input
            label={label}
            name={name}
            type={type === 'password' ? passwordType : type}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            className="border rounded-sm  w-full focus:outline-none focus:border-igSeparator-150  peer text-[12px]  font-system-primary text-left bg-igSeparator-100 font-normal pl-[8px] pt-[15px] pb-[10px]"
          />
          <span
            className={`  w-fit  h-fit  select-none font-system-primary text-xs  m-0 overflow-hidden px-2  right-0 text-ellipsis origin-left  ease-out duration-100 align-middle whitespace-nowrap  absolute left-0 top-[10px]  ${
              data === 'true'
                ? '-translate-y-2 text-[10px]  '
                : ' top-[10px] text-xs  '
            } text-gray-600 cursor-text    transition-all`}
          >
            {placeholder}
          </span>
          {showButton && data === 'true' && (
            <button
              type="button"
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-[#262626] font-system font-semibold text-[14px] hover:opacity-[.75]`}
              onClick={togglePassword}
            >
              {passwordType === 'password' ? 'Show' : 'Hide'}
            </button>
          )}
        </label>
      </div>
    </div>
  )
}

export default CustomInputFields
