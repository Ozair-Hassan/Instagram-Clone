import React from 'react'

const Footer = () => {
  return (
    <footer className="text-[#737373] font-system-primary text-[12px] break-words px-[16px]">
      <div className="mt-[24px] flex flex-col items-stretch relative flex-grow-0">
        <div className=" flex flex-row justify-center items-center flex-wrap leading-[15px]">
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Meta</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>About</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Blog</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Jobs</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Help</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>API</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Privacy</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Terms</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Locations</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Instagram Lite</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Threads</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Contact & Uploading Non-Users</a>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <a>Meta Verified</a>
          </div>
        </div>
        <br />
        <div className="flex flex-row justify-center items-center mb-10 -mt-3">
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <select
              className=" max-w-[62px]"
              name="languages"
              id="language-select"
            >
              <option
                value="en"
                selected
              >
                English
              </option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
              <option value="ru">Russian</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="nl">Dutch</option>
              <option value="tr">Turkish</option>
              <option value="ur">Urdu</option>
              <option value="pl">Polish</option>
            </select>
          </div>
          <div className="mb-[12px] overflow-visible flex items-stretch self-auto justify-start relative mx-[8px] ">
            <p>© 2023 Instagram from Meta</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
