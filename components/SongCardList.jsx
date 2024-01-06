"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function SongCardList({ index, image, name, artist, view }) {
  return (
    <section
      className={`w-full  p-1 ${
        view === "grid"
          ? "flex-col justify-center gap-0  items-center"
          : "justify-between gap-5"
      } flex `}
    >
      <div className="flex items-center justify-stretch gap-5">
        <h4 className=" mb-3 w-fit ">{index}</h4>
        <span className="flex items-start md:items-center w-full gap-5 md:gap-8">
          <Image
            src={image?.url}
            height={image?.height}
            width={image?.width}
            alt="artist picture"
            className="mb-[0.5rem] md:w-[4rem] md:h-[4rem] h-9 w-9 object-fill flex items-center  "
          />
          <span>
            <p className="text-black text-xs lg:text-[23px] ">{name}</p>
            <p className="text-[10px] md:text-sm">{artist}</p>
          </span>
        </span>
      </div>

      <h4 className="text-[#898989] mt-[0.25rem]">3,679 Minutes</h4>
    </section>
  );
}
