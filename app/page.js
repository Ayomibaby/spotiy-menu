/* eslint-disable react/no-unescaped-entities */
import List from "@/components/List";
import TopArtists from "@/components/TopArtists/TopArtists";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col m-5 w-[40rem] gap-10 ml-20">
      <h4 className="text-slate-800">Hi, the name is</h4>
      <h1 className="text-4xl ">Ayodeji Atanda.</h1>
      <div>
        <h2 className="font-bold text-3xl">
          I'm a freelance Fullstack Web Developed
        </h2>
      </div>

      <p className="text-slate-800">
        I'm a freelance Fullstack Web Developer with a passion for crafting
        exceptional digital experiences. My expertise lies in building
        accessible, human-centered, and SEO-friendly products. As a freelancer,
        I have the flexibility to work on various projects and I'm currently
        available for new opportunities. Let's collaborate to create outstanding
        solutions tailored to your needs.
      </p>
      <button></button>
    </div>
  );
}
