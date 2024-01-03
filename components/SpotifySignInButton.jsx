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
        className="bg-green-600 text-black px-5 py-3 font-semibold rounded-xl"
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
        className="bg-green-600 text-black text-xs px-3 py-1 font-semibold rounded-xl"
      >
      Log out
      </button>
    </div>
  );
};
