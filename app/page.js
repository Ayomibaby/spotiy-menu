import List from "@/components/List";
import TopArtists from "@/components/TopArtists/TopArtists";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-white  md:bg-[#090A0C]">
      <div className="w-[90%] mx-auto pt-[2rem]">
        <TopArtists/>
      </div>
    </main>
  );
}

{
  /* <div className='h-46 text-white mt-20 '>
jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 
      </div> */
}
// <List/>
