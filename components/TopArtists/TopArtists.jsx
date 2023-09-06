import React from 'react'

//svgs
import MoreCircle from "../../public/assets/svg/moreCircle.svg"

export default function TopArtists() {
  return (
    <section id='topArtists'>
        <section id='heading'>
            <div>
                <div className='flex gap-x-2'>
                <h2 className='text'>Top Artists</h2>
                <img src={MoreCircle}/>
                </div>
                <h5 className='mt-[0.5rem] flex gap-x-1'>You listened to <h5 className='text-[#306EF9]'>17 Artists</h5> this past week</h5>
            </div>
            <div>
                
            </div>
        </section>
    </section>
  )
}
