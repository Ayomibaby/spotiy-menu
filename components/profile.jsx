"use client";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    console.log(session);
    if (spotifyApi.getAccessToken) {
      spotifyApi
        .getMe()
        .then((data) => {
          setFollowers(data.body.followers.total);
          console.log(data.body);
        })
        .catch((err) => {
          return err;
        });
    }
  }, [session, spotifyApi]);

  return (
    <section className="w-screen justify-center items-start gap-3 py-8 md:py-16 flex  h-full lg:h-56 mt-14 bg-[#121213]">   
          <div>
            <Image
              src={session?.user.image}
              width={60}
              height={60}
              alt="artist picture"
              className="rounded-full h-9 w-9 md:h-16 md:w-16"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white">{session?.user.name}</h2>
            <h5 className="text-[#BFBFBF] text-[10px] md:text-sm">{followers ?? "--"} followers</h5>
          </div>
    </section>
  );
}
