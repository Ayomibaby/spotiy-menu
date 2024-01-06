"use client";
import React, { useEffect, useState } from "react";
import { MoreCircle, dropdown, next } from "@/public/assets/svg";
import SectionHeading from "./sectionHeading";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import ArtistCard from "@/components/ArtistCard";

export default function TopArtists() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [artists, setArtists] = useState([]);
  const [range, setRange] = useState({ range: "short_term", text: "4 Weeks" });

  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopArtists({ time_range: range.range })
        .then((data) => {
          setArtists(data.body.items.slice(0, 7));
          console.log(data, "compoenet");
        })
        .catch((err) => {
          return err;
        });
    }
  }, [session, spotifyApi, range]);

  return (
    <section className="flex flex-col overflow-hidden" id="topArtists">
      <SectionHeading title="Artists" range={range} setRange={setRange} />

      <div className="flex items-start justify-start p-0 overflow-x-scroll mt-5 md:mt-10 lg:mt-16 no-scrollbar  gap-1 md:gap-2 lg:gap-[4rem]">
        {artists?.map((items, index) => (
          <ArtistCard
            key={items?.id}
            index={index + 1}
            name={items?.name}
            image={items?.images[0]}
          />
        ))}
      </div>
      <Link href={"/topArtists"} className=" w-full">
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
