/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const List = () => {
  return (
    <div className='text-white w-full p-24'>
        <div className='flex items-start justify-between gap-10'>
        <div>
    <div>
        <h3 className='text-2xl'>Top Artists</h3>
    </div>
    <p className='text-[#898989]'>You've listened to <span className='text-[#22C55E]'>17 artists</span> this week</p>
        </div>
        <div className='flex gap-4 text-sm'>
        <p className='text-[#22C55E]'>THIS WEEK</p>
        <p>4 MONTHS</p>
        <p>6 MONTHS</p>
        </div>
        </div>
        <div>
            images
        </div>
    </div>
  )
}

export default List