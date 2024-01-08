"use client";

import { signIn, signOut } from "next-auth/react";
import React from "react";

export const SpotifySignInButton = () => {
  const handleClick = () => {
    signIn("spotify", { callbackUrl: "/" });
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-600 text-white px-5 py-3 font-semibold rounded-xl"
      >
        Continue with Spotify
      </button>
    </div>
  );
};

export const SpotifySignOut = () => {
  const handleClick = () => {
    signOut();
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-400 text-black px-1 py-1 lg:px-3 cursor-pointer text-[0.65rem] font-medium md:text-[1rem]  rounded-md border-2 border-black"
      >
      Log out
      </button>
    </div>
  );
};
