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
      <div className=" md:w-[95%] w-full px-5 mt-[2rem] ">
        <TopArtists />
        <TopSongs />
      </div>
      <Footer />
    </main>
  );
}
