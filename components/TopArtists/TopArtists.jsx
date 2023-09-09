import React from 'react'
import { MoreCircle, dropdown } from '@/public/assets/svg/moreCircle'
import ArtistCard from '../UI/artistCard'




export default function TopArtists() {
  return (
    <section id='topArtists'>
        <section id='heading' className='flex justify-between'>
            <div>
                <div className='flex gap-x-2 items-center'>
                <h2>Top Artists</h2>
                    <div>{MoreCircle}</div>
                </div>
                <h5 className='mt-[0.5rem] flex gap-x-1'>You listened to <h5 className='text-[#306EF9]'>17 Artists</h5> this past week</h5>
            </div>
            <div>
                <div className=' w-[100%] flex gap-x-2 items-center border border-[1.5px] border-solid border-[#306EF9] rounded-[0.1875rem] py-[0.25rem] px-[0.5rem]'>
                    <h4>4 weeks</h4>
                    <div>{dropdown}</div>
                </div>
            </div>
        </section>
        <section>
            <ArtistCard/>
        </section>
    </section>
  )
}
