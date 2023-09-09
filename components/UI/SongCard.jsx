import Image from 'next/image'
import React from 'react'

export default function SongCard() {
  return (
  <section className='mt-[1.5rem] '>
    <div className=''>
    <Image
    src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1694272158/Rectangle_5642_lebbxq.svg"}
    width={70}
    height={50}
    alt='song cover'
    className=' md:w-[80%] md:h-[200px]'
    />
    </div>

    <div>
    <h6 className='md:text-[1.2rem]'>1. STAR LIFE</h6>
    <h5 className='text-white my-[0.25rem] md:text-[1rem]'>BlaqBonez</h5>
    <h4 className='text-[#898989] md:text-[1rem]'>40 Plays</h4>
    </div>

  </section>
  )
}
