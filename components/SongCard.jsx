import Image from 'next/image'
import React from 'react'

export default function SongCard({ index, image, name, artist }) {
  return (
    <section className="w-24 p-1 flex flex-col items-start justify-center flex-nowrap">
      <Image
        src={image?.url}
        height={image?.height}
        width={image?.width}
        alt="cong cover"
        className="mb-[0.5rem] md:w-[80%] h-16 w-16 object-fill rounded-sm flex items-center  "
      />
      <div className=" justify-start  overflow-hidden w-24 items-start flex flex-col ">
        <h6 className="text-white text-ellipsis text-start ">{index}. {name}</h6>
        <h6 className='text-white text-start  '>{artist}</h6>
        <h4 className="text-[#898989] mt-[0.25rem]">37 Plays</h4>
      </div>
    </section>
  )
}
