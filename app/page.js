/* eslint-disable react/no-unescaped-entities */
import { SpotifySignOut } from "@/components/Buttons/SpotifySignInButton";
import List from "@/components/List";
import Spotify from "next-auth/providers/spotify";
import { signOut } from "next-auth/react";

import Link from "next/link";

export default function Home() {
  
  return (
    <section className="flex h-screen ">
      {/* <Loader/> */}
      <div className="m-auto">
        <h2 className="text-center mb-[1rem]">Logo</h2>
      <SpotifySignOut/>
      </div>
    </section>
  );
}
