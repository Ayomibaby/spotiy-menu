import { Beyonce } from '@/public/assets/svg/moreCircle'
import Image from 'next/image'
import React from 'react'

export default function ArtistCard() {
  return (
 <section>
    <div>{Beyonce}</div>
    <Image
      src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1694000577/spotify/Resized_pvxs9n.jpg"}
      width={50}
      height={50}
      alt='shoes'
    />

 </section>
  )
}
