"use client";
import Image from "next/image";

import React, { useEffect } from "react";

export default function ArtistCardList({ view, index, image, name }) {

  return (
    <section className={`w-full  p-1 ${view === "grid" ? "flex-col justify-center gap-0  items-center" : "justify-between gap-5"} flex     `}>
      <div className={`flex items-center ${view === "grid" ? "gap-2": "gap-7"}`}>
        <h4 className="text-sm">{index}</h4>
        <span className={`flex ${view === "grid" ? "flex-col gap-1" : " gap-5"} items-center`}>
          <Image
            src={image?.url}
            height={image?.height}
            width={image?.width}
            alt="artist picture"
            className="mb-[0.5rem] md:w-[80%] h-9 w-9 object-fill rounded-full flex items-center  "
          />
          <h6 className={`text-white ${view === "grid" ? "hidden": "text-sm"} `}>{name}</h6>
        </span>
      </div>

      <h4 className="text-[#898989] mt-[0.25rem]">3,679 Minutes</h4>
    </section>
  );
}
