import Image from 'next/image'
import React from 'react'

export default function SongCard() {
  return (
  <section className='mt-[1.5rem]'>
    <div>
    <Image
    src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1694272158/Rectangle_5642_lebbxq.svg"}
    width={70}
    height={50}
    alt='song cover'
    className='mb-[0.5rem]'
    />
    </div>

    <div>
    <h6>1. STAR LIFE</h6>
    <h5 className='text-[#130F26]'>BlaqBonez</h5>
    <h4 className='text-[#898989] mt-[0.25rem]'>40 Plays</h4>
    </div>

  </section>
  )
}
