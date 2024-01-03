"use client";
import Image from "next/image";

import React, { useEffect } from "react";

export default function ArtistCard({ index, image, name }) {

  return (
    <section className="w-24 p-1 flex flex-col items-center justify-center flex-nowrap">
      <Image
        src={image?.url}
        height={image?.height}
        width={image?.width}
        alt="artist picture"
        className="mb-[0.5rem] md:w-[80%] h-16 w-16 object-fill rounded-full flex items-center  "
      />
      <div className="text-center w-24 items-center flex flex-col ">
        <h6 className="text-white">{index}. {name}</h6>
        <h4 className="text-[#898989] mt-[0.25rem]">3,679 Minutes</h4>
      </div>
    </section>
  );
}
