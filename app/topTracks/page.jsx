"use client";
import React, { useEffect, useState } from "react";
import { next } from "@/public/assets/svg";
import SongCard from "@/components/SongCard";
import SectionHeading from "@/components/sectionHeading";
import SongCardList from "@/components/SongCardList";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import Link from "next/link";

export default function TopTracks() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [tracks, setTracks] = useState([]);
  const [range, setRange] = useState({ range: "short_term", text: "4 Weeks" });
  const [view, setView] = useState("list");

  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopTracks({ time_range: range.range })
        .then((data) => {
          setTracks(data.body.items);
          console.log(data, "song page");
        })
        .catch((err) => {
          return err;
        });
    }
  }, [session, spotifyApi, range]);
  return (
    <section className="my-16 w-full md:w-[95%] flex flex-col">
      <div className="flex w-full px-5 items-start mb-3 justify-start text-black">
        <Link href={"/"}>back</Link>
      </div>
      <section className="px-5  md:px-8">
        <SectionHeading
          title={"Songs"}
          setView={setView}
          view={view}
          range={range}
          setRange={setRange}
        />

        <section
          className={`my-5  grid  ${
            view === "grid" ? "grid-cols-4 md:grid-cols-5" : "grid-cols-1"
          } w-full  justify-left gap-5`}
        >
          {tracks?.map((items, index) => (
            <SongCardList
              key={items?.id}
              index={index + 1}
              artist={items?.artists[0].name}
              name={items.name}
              image={items?.album.images[2]}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
