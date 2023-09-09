

import Image from 'next/image'

import React from 'react'

export default function ArtistCard() {
  return (

 <section className='mt-[2rem]'>
    <div className='flex justify-center'>
    <Image
      src={"https://res.cloudinary.com/dhvwthnzq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1694269357/spotify/Ellipse_6_k6qyov.svg"}
      width={70}
      height={50}
      alt='artist picture'
      className='mb-[0.5rem] md:w-[80%] '
    />
    </div>
    <div className='text-center '>
    <h6>1. Beyonce</h6>
    <h4 className='text-[#898989] mt-[0.25rem]'>3,679 Minutes</h4>
    </div>

 </section>
  )
}
