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
    <div className="flex h-screen items-center justify-center">
      {!session?.user && (
        <>
          <SpotifySignInButton />
        </>
      )}
    </div>
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
