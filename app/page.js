/* eslint-disable react/no-unescaped-entities */
import List from "@/components/List";
import TopArtists from "@/components/TopArtists/TopArtists";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col m-5 w-[40rem] gap-10 ml-20">
<TopArtists/>
    </div>
  );
}
