"use client";
import React, { useEffect, useState } from "react";
import { MoreCircle, dropdown, next } from "@/public/assets/svg/moreCircle";
import ArtistCard from "./artistCard";
import SectionHeading from "./sectionHeading";
import Link from "next/link";
import { useSession } from "next-auth/react";
import spotifyApi from "@/lib/spotify";
import useSpotify from "@/hooks/useSpotify";

export default function TopArtists() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopArtists()
        .then((data) => setArtists(data.body.items.slice(0, 5)));
    }
  }, [session, spotifyApi]);
  return (
    <section id="topArtists">
      <section>
        <SectionHeading />
      </section>

      <section className="flex items-center justify-around w-[100%]">
        {artists?.map((items, index) => (
          <ArtistCard
            key={items?.id}
            index={index}
            name={items?.name}
            image={items?.images[1]}
          />
        ))}
      </section>

      <Link href={"/Stats/topArtists"}>
        <section className="mt-[1.5rem] flex justify-end  gap-x-1 items-center  ">
          <h4 className="font-bold">SEE ALL</h4>
          <div className="md:hidden contents">{next}</div>
        </section>
      </Link>
    </section>
  );
}

export const getServerSideProps = async () => {
  const data = spotifyApi.getMyTopArtists().then;
  console.log(providers);
  return {
    props: {
      providers,
    },
  };
};
