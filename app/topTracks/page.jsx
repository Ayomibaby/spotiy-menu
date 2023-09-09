import React from 'react'


import {  next } from '@/public/assets/svg/moreCircle'
import SongCard from '@/components/UI/SongCard'
import SectionHeading from '@/components/UI/sectionHeading'

export default function TopSongs() {
  return (
  <section className='mt-[3rem] w-[90%] mx-auto'>
    <SectionHeading />

    <section className='grid grid-cols-4 gap-x-4'>
       
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
    </section>

   
  </section>
  )
}
