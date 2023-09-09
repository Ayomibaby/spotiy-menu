/* eslint-disable react/no-unescaped-entities */
import List from "@/components/List";
import TopArtists from "@/components/TopArtists/TopArtists";
import TopSongs from "@/components/TopSongs/TopSongs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto mt-[2rem] ">
    <TopArtists/>
    <TopSongs/>
    </div>
  );
}
