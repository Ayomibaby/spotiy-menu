"use client";
import ArtistCard from "@/components/ArtistCard";
import ArtistCardList from "@/components/ArtistCardList";
import Profile from "@/components/profile";
import SectionHeading from "@/components/sectionHeading";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function TopArtists({ str }) {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMyTopArtists({ time_range: "short_term" })
        .then((data) => {
          setArtists(data.body.items);
          console.log(data);
        })
        .catch((err) => {
          return err;
        });
    }
  }, [session, spotifyApi]);
  return (
    <section className="my-14 w-full md:w-[95%] flex flex-col">
      {/* <Profile /> */}

      <section className="px-5 ">
        <SectionHeading title={"Artists"} />

        <section className="my-5  grid md:grid-cols-5 grid-cols-1 w-full  justify-left gap-x-5">
          {artists?.map((items, index) => (
            <ArtistCardList
              key={items?.id}
              index={index + 1}
              name={items?.name}
              image={items?.images[2]}
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
