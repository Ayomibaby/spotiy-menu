import ArtistCard from "@/components/artistCard";
import SectionHeading from "@/components/sectionHeading";
import React from "react";

export default function Page() {
  return (
    <section id="topArtists" className="my-[3rem] w-[90%] md:w-[95%] mx-auto">
      <section>
        <SectionHeading />
      </section>

      <section className="grid md:grid-cols-5 grid-cols-4 gap-x-5">
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </section>
    </section>
  );
}
