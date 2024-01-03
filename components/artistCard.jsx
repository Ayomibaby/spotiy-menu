"use client"
import Image from "next/image";

import React, { useEffect } from "react";

export default function ArtistCard({ index, image, name }) {
  useEffect(() => {
    console.log(name, image);

  }, [name]);
  return (
    <section className="mt-[2rem] flex flex-col items-start">
      <div className="flex justify-center">
        <Image
          src={image?.url}
          width={70}
          height={50}
          alt="artist picture"
          className="mb-[0.5rem] md:w-[80%] rounded-full flex items-center  "
        />
      </div>
      <div className="text-center ">
        <h6 className="text-white">{name}</h6>
        <h4 className="text-[#898989] mt-[0.25rem]">3,679 Minutes</h4>
      </div>
    </section>
  );
}
