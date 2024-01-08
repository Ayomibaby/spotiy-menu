"use client";
import Image from "next/image";

import React, { useEffect } from "react";

export default function ArtistCard({ index, image, name }) {
  return (
    <section className=" relative w-24  md:w-fit  lg:w-80 flex flex-col items-center justify-center lg:gap-5 flex-nowrap">
      {/* <div className="absolute hover:animate-shine bg-gradient-to-r from-transparent top-0 to-white opacity-40 md:w-[8rem] md:h-[8rem] lg:w-[12rem] lg:h-[12rem] h-16 w-16  rounded-[50%] "></div> */}
      <Image
        src={image?.url}
        height={image?.height}
        width={image?.width}
        alt="artist picture"
        className="mb-[0.5rem] md:w-[8rem] md:h-[8rem] lg:w-[12rem] lg:h-[12rem] h-16 w-16  rounded-[50%] flex items-center  "
      />
      <div className="text-center w-24 md:w-40  lg:w-[12.5rem] items-center flex flex-col ">
        <p className="text-black hover:cursor-pointer text-xs md:text-lg lg:text-[23px] font-semibold">
          {index}. {name}
        </p>
        <p className="text-[#898989] text-xs font-normal md:text-lg mt-[0.25rem] lg:text-xl ">
          3,679 Minutes
        </p>
      </div>
    </section>
  );
}
