import React from 'react'
import SectionHeading from '../UI/sectionHeading'
import SongCard from '../UI/SongCard'
import {  next } from '@/public/assets/svg/moreCircle'

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

    <section className='mt-[1.5rem] flex justify-end gap-x-1 items-center'>
            <h4 className='font-bold'>SEE ALL</h4>
            <div>{next}</div>
            
        </section>
  </section>
  )
}
