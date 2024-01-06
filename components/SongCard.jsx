import Image from "next/image";
import React from "react";

export default function SongCard({ index, image, name, artist }) {
  return (
    <section className="w-24  md:w-full lg:w-80 flex flex-col items-start  justify-center flex-nowrap">
      <Image
        src={image?.url}
        height={image?.height}
        width={image?.width}
        alt="cong cover"
        className="mb-[0.5rem] md:w-[8rem] md:h-[8rem] lg:w-[12rem] lg:h-[12rem] h-20 w-20 object-fill rounded-lg  flex items-center  "
      />
      <div className=" justify-start  overflow-clip w-24 md:w-40 lg:w-[12.5rem] items-start flex flex-col ">
        <span className="flex items-start pr-2 gap-1 w-24 md:w-40 lg:w-[12.5rem]">
          <h6 className="text-black text-ellipsis text-start ">{index}.</h6>
          <h6 className="text-black text-ellipsis text-start w-fit no-scrollbar overflow-x-scroll whitespace-nowrap  ">{name}</h6>
        </span>
        <h6 className="text-black text-start hover:underline cursor-pointer ">
          {artist}
        </h6>
        <p className="text-[#898989] text-xs font-normal md:text-lg mt-[0.25rem] lg:text-xl ">
          37 Plays
        </p>
      </div>
    </section>
  );
}
