"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

const SpotifySignInButton = () => {
const handleClick = () =>{
    signIn("spotify")
}

  return (
    <div>
        <button onClick={handleClick} className='bg-green-600 text-black rounded-2xl'>
           <span>Continue with Spotify</span> 
        </button>
    </div>
  )
}

export default SpotifySignInButton