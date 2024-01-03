"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function Profile() {
  const { data: session} = useSession()
  console.log(session)
  return (
    <section className="w-[100%] bg-[#121213]">
      <div className="w-[90%] md:w-[95%] mx-auto py-[2.5rem] flex justify-center ">
        <div  className="flex gap-x-2 items-center">
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
          <h5 className="text-[#BFBFBF]">1 follower</h5>
        </div>
        </div>
      </div>
    </section>
  );
}
