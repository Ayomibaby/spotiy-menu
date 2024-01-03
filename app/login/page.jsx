/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  SpotifySignInButton,
  SpotifySignOut,
} from "@/components/SpotifySignInButton";
import List from "@/components/List";
import Spotify from "next-auth/providers/spotify";
import { getProviders, useSession } from "next-auth/react";

import Link from "next/link";

export default function Login({ providers }) {
  const { data: session } = useSession();
  return (
    <section className="flex h-screen ">
      {/* <Loader/> */}
      <div className="m-auto">
        <h2 className="text-center mb-[1rem]">
          {!session?.user && (
            <>
              <SpotifySignInButton />
            </>
          )}
        </h2>
      </div>
    </section>
  );
}

export const getServerSideProps = async () => {
  const providers = await getProviders();
  console.log(providers);
  return {
    props: {
      providers,
    },
  };
};
