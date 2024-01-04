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
    <section className="w-[100%]  mt-5 bg-[#121213]">
      <div className="w-[90%] md:w-[95%] mx-auto py-[2.5rem] flex justify-center ">
        <div className="flex gap-x-2 items-center">
          <div>
            <Image
              src={session?.user.image}
              width={60}
              height={60}
              alt="artist picture"
              className="rounded-full"
            />
          </div>
          <div>
            <h2>{session?.user.name}</h2>
            <h5 className="text-[#BFBFBF]">{followers ?? "0"} follower</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
