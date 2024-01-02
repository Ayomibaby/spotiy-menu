/* eslint-disable react/no-unescaped-entities */
import { SpotifySignInButton } from "@/components/Buttons/SpotifySignInButton";
import List from "@/components/List";
import Spotify from "next-auth/providers/spotify";
import { getProviders } from "next-auth/react";

import Link from "next/link";

export default function page({providers}) {
  return (
    <section className="flex h-screen ">
      {/* <Loader/> */}
      <div className="m-auto">
        <h2 className="text-center mb-[1rem]">Logo</h2>
        {/* <Link href={"/home"}>
          <button className="text-white font-semibold text-[1rem] border border-white rounded-lg py-[1rem] px-[1rem] hover:bg-white hover:text-black">
            Login with spotify
          </button>
        </Link> */}
        <SpotifySignInButton />
      </div>
    </section>
  );
}

export const getServerSideProps = async () => {
    const providers =  await getProviders()
    console.log(providers)
    return{
        props: {
            providers
        }
    }
};
