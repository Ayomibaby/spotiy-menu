"use client";
import Image from "next/image";

import React, { useEffect } from "react";

export default function ArtistCardList({ index, image, name }) {

  return (
    <section className="w-full  p-1 flex  gap-5 items-center justify-between ">
      <div className="flex items-center gap-7">
        <h4 className="text-sm">{index}</h4>
        <span className="flex items-center gap-5">
          <Image
            src={image?.url}
            height={image?.height}
            width={image?.width}
            alt="artist picture"
            className="mb-[0.5rem] md:w-[80%] h-9 w-9 object-fill rounded-full flex items-center  "
          />
          <h6 className="text-white text-sm">{name}</h6>
        </span>
      </div>

      <h4 className="text-[#898989] mt-[0.25rem]">3,679 Minutes</h4>
    </section>
  );
}
