/* eslint-disable react/no-unescaped-entities */
import { SpotifySignOut } from "@/components/SpotifySignInButton";
import List from "@/components/List";
import Spotify from "next-auth/providers/spotify";
import { signOut } from "next-auth/react";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import TopArtists from "@/components/TopArtists";
import TopSongs from "@/components/TopSongs";

export default function Home() {
  return (
    <main className=" flex flex-col items-center">
      <Profile />
      <div className="  w-full px-5 md:px-8 lg:px-14 my-[2rem] md:mb-[6rem] flex flex-col gap-12 md:gap-32 ">
        <TopArtists />
        <TopSongs />
      </div>
      <Footer />
    </main>
  );
}
