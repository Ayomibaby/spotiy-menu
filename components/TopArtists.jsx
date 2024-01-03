"use client";
import React, { useEffect, useState } from "react";
import { MoreCircle, dropdown, next } from "@/public/assets/svg/moreCircle";
import SectionHeading from "./sectionHeading";
import Link from "next/link";
import { useSession } from "next-auth/react";
import spotifyApi from "@/lib/spotify";
import useSpotify from "@/hooks/useSpotify";
import ArtistCard from "@/components/ArtistCard";

export default function TopArtists() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopArtists({time_range: "long_term"})
        .then((data) => {
          setArtists(data.body.items.slice(0, 7))
          console.log(data)
        })
        .catch(err =>{
          return err
        });
    }
  }, [session, spotifyApi]);

  return (
    <section className="flex flex-col overflow-hidden" id="topArtists">
      <SectionHeading title="Artists" />

      <div className="flex items-center justify-start overflow-x-scroll mt-5 no-scrollbar  gap-1 ">
        {artists?.map((items, index) => (
          <ArtistCard
            key={items?.id}
            index={index + 1}
            name={items?.name}
            image={items?.images[2]}
          />
        ))}
      </div>
      <Link href={"/topArtists"}>
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
