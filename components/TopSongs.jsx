"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./sectionHeading";
import SongCard from "./SongCard";
import { next } from "@/public/assets/svg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";

export default function TopSongs() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [tracks, setTracks] = useState([]);
  const [range, setRange] = useState({ range: "short_term", text: "4 Weeks" });

  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopTracks({ time_range: range.range })
        .then((data) => {
          setTracks(data.body.items.slice(0, 7));
          console.log(data, "song comp");
        })
        .catch((err) => {
          return err;
        });
    }
  }, [session, spotifyApi, range]);

  return (
    <section className="flex flex-col overflow-hidden">
      <SectionHeading title={"Songs"} range={range} setRange={setRange} />

      <section className="flex items-start justify-start p-0 overflow-x-scroll mt-5 md:mt-10 lg:mt-16 no-scrollbar  gap-2 lg:gap-[4rem]">
        {tracks?.map((items, index) => (
          <SongCard
            key={items?.id}
            index={index + 1}
            artist={items?.artists[0].name}
            name={items.name}
            image={items?.album.images[0]}
          />
        ))}
      </section>

      <Link href={"/topTracks"} className=" w-full">
        <section className="mt-[1.5rem] flex  gap-1 cursor-pointer   items-center justify-end ">
        <p className="font-bold text-[#306EF9] text-xs md:text-sm lg:text-base hover:bg-[#306EF9] hover:text-black lg:px-2 lg:py-1">
            SEE ALL
          </p>
          <div className="md:hidden contents">{next}</div>
        </section>
      </Link>
    </section>
  );
}
