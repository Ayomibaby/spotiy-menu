/* eslint-disable react/no-unescaped-entities */
"use client"
import Footer from "@/components/Footer/footer";
import Profile from "@/components/Profile/profile";
import TopArtists from "@/components/TopArtists/TopArtists";
import TopSongs from "@/components/TopSongs/TopSongs";
import { useSession } from "next-auth/react";



export default function Home() {

  const { data: session } = useSession()

  console.log(session)
  return (
    <>
    <Profile/>
    <div className="w-[90%] md:w-[95%] mx-auto mt-[2rem] ">
   
    <TopArtists/>
    <TopSongs/>
    </div>
    <Footer/>
    </>
  );
}
