import React from 'react'
import FYP from './FYP'
import Stories from './Stories'

const Feed = () => {
  return (
    <section className=" mt-[10px] max-w-[640px]   mr-[164px]">
      <div className="items-center box-border flex collapse pt-[14px] "></div>
      {/* Stories */}
      <Stories />
      {/* For You Page */}
      <FYP />
    </section>
  )
}

export default Feed
