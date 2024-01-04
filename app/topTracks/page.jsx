import React from "react";

import { next } from "@/public/assets/svg/moreCircle";
import SongCard from "@/components/SongCard";
import SectionHeading from "@/components/sectionHeading";

export default function TopSongs() {
  return (
    <section className="my-[3rem] w-[90%] md:w-[95%] mx-auto">
      <SectionHeading />

      <section className="grid grid-cols-4  md:grid-cols-5 md:gap-x-6 gap-x-4 ">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </section>
    </section>
  );
}
