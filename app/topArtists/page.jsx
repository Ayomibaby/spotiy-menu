"use client";
import ArtistCard from "@/components/ArtistCard";
import ArtistCardList from "@/components/ArtistCardList";
import Profile from "@/components/profile";
import SectionHeading from "@/components/sectionHeading";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function TopArtists({ str }) {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [artists, setArtists] = useState([]);
  const [range, setRange] = useState({ range: "short_term", text: "4 Weeks" });
  const [view, setView] = useState("list")

  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopArtists({ time_range: range.range })
        .then((data) => {
          setArtists(data.body.items);
          console.log(data, "page");
        })
        .catch((err) => {
          return err;
        });
    }
  }, [session, spotifyApi, range]);
  return (
    <section className="my-16 w-full md:w-[95%] flex flex-col">
      {/* <Profile /> */}
      <div className="flex w-full px-5 items-start mb-3 justify-start text-white">
        <Link href={"/"}>back</Link>
      </div>
      <section className="px-5 ">
        <SectionHeading
          page={true}
          title={"Artists"}
          range={range}
          setRange={setRange}
          setView={setView} view={view} 
        />

        <section className={`my-5  grid md:grid-cols-5 ${ view === "grid" ? "grid-cols-4" : "grid-cols-1" } w-full  justify-left gap-x-5`}>
          {artists?.map((items, index) => (
            <ArtistCardList
              key={items?.id}
              index={index + 1}
              name={items?.name}
              image={items?.images[2]}
              view ={view}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

// export const getServerSideProps = async (context) => {
//   // const data = await spotifyApi();

//   // const tracks = data
//   //   .getMyTopArtists()
//   //   .then((res) => console.log(res))
//   //   .catch();
//   // console.log(tracks.data.body, "ghjk");
//   const str = 'Hello from SSR'
//   console.log(str) // log on the server-side
//   return {
//     props: { str } // will be passed to the page component as props
//   }
// };
