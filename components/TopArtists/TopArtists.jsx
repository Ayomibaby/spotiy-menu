import React from 'react'
import { MoreCircle, dropdown, next } from '@/public/assets/svg/moreCircle'
import ArtistCard from '../UI/artistCard'
import SectionHeading from '../UI/sectionHeading'




export default function TopArtists() {
  return (
    <section id='topArtists'>
        <section>
            <SectionHeading/>
        </section>
        
       
        <section className='flex justify-between w-[100%]'>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
        </section>

        <section className='mt-[1.5rem] flex justify-end gap-x-1 items-center'>
            <h4 className='font-bold'>SEE ALL</h4>
            <div>{next}</div>
            
        </section>
    </section>
  )
}
