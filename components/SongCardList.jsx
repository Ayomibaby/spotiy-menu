"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function SongCardList({ index, image, name, artist }) {
  return (
    <section className="w-full  p-1 flex  gap-5 items-start justify-between ">
      <div className="flex items-center justify-stretch gap-5">
        <h4 className="text-sm mb-3 w-fit ">{index}</h4>
        <span className="flex items-start w-full gap-5">
          <Image
            src={image?.url}
            height={image?.height}
            width={image?.width}
            alt="artist picture"
            className="mb-[0.5rem] md:w-[80%] h-9 w-9 object-fill flex items-center  "
          />
          <span>
            <h6 className="text-white text-xs">{name}</h6>
            <h6 className="text-[10px]">{artist}</h6>
          </span>
        </span>
      </div>

      <h4 className="text-[#898989] mt-[0.25rem]">3,679 Minutes</h4>
    </section>
  );
}
