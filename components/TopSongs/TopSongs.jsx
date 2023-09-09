import React from 'react'
import SectionHeading from '../UI/sectionHeading'
import SongCard from '../UI/SongCard'

export default function TopSongs() {
  return (
  <section className='mt-[3rem]'>
    <SectionHeading/>

    <section className='flex justify-between'>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
    </section>
  </section>
  )
}
