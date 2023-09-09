
import React from "react";
import { MoreCircle, dropdown, next } from "@/public/assets/svg/moreCircle";
import ArtistCard from "../UI/artistCard";
import SectionHeading from "../UI/sectionHeading";
import Link from "next/link";

export default function TopArtists() {
  return (
    <section id="topArtists">
      <section>
        <SectionHeading />
      </section>

      <section className="flex justify-between w-[100%]">
        <div>
          <ArtistCard />
        </div>
        <div>
          <ArtistCard />
        </div>
        <div>
          <ArtistCard />
        </div>
        <div>
          <ArtistCard />
        </div>
        <div className="hidden md:contents">
          <ArtistCard />
        </div>
      </section>

      <Link href={"/topArtists"}>
        <section className="mt-[1.5rem] flex justify-end  gap-x-1 items-center  ">
          <h4 className="font-bold">SEE ALL</h4>
          <div className="md:hidden contents">{next}</div>
        </section>
      </Link>

    </section>
  );
}
