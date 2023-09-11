import React from "react";
import SectionHeading from "../UI/sectionHeading";
import SongCard from "../UI/SongCard";
import { next } from "@/public/assets/svg/moreCircle";
import Link from "next/link";

export default function TopSongs() {
  return (
    <section className="my-[5rem]">
      <SectionHeading />

      <section className="flex justify-between w-[100%]">
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div className="hidden md:contents">
          <SongCard />
        </div>
      </section>

      <Link href={"/Stats/topTracks"}>
        <section className="mt-[1.5rem] flex  gap-x-1  items-center justify-end ">
          <h4 className="font-bold">SEE ALL</h4>
          <div className="md:hidden contents">{next}</div>
        </section>
      </Link>
    </section>
  );
}
