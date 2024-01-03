'use client'
import React, { useEffect, useState } from "react";
import SectionHeading from "./sectionHeading";
import SongCard from "./SongCard";
import { next } from "@/public/assets/svg/moreCircle";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";

export default function TopSongs() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopTracks({time_range: "short_term"})
        .then((data) => {
          setTracks(data.body.items.slice(0, 7))
          console.log(data)
        })
        .catch(err =>{
          return err
        });
    }
  }, [session, spotifyApi]);

  return (
    <section className="flex flex-col overflow-hidden">
      <SectionHeading title={"Songs"}/>

      <section className="flex items-start justify-start overflow-x-scroll mt-5 no-scrollbar  gap-1 ">
      {tracks?.map((items, index) => (
          <SongCard
            key={items?.id}
            index={index + 1}
            artist={items?.artists[0].name}
            name={items.name}
            image={items?.album.images[2]}
          />
        ))}
      </section>

      <Link href={"/Stats/topTracks"}>
        <section className="mt-[1.5rem] flex  gap-x-1  items-center justify-end ">
          <h4 className="font-bold">SEE ALL</h4>
          <div className="md:hidden contents">{next}</div>
        </section>
      </Link>
    </section>
  );
}
