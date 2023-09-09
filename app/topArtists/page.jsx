import ArtistCard from '@/components/UI/artistCard'
import SectionHeading from '@/components/UI/sectionHeading'
import React from 'react'





export default function Page() {
  return (
    <section id='topArtists' className='mt-[3rem] w-[90%] mx-auto'>
        <section>
            <SectionHeading/>
        </section>
        
       
        <section className='grid grid-cols-4 gap-x-5'>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            
        </section>

     
    </section>
  )
}
