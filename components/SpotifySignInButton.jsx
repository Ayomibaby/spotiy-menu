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
        className="bg-green-600 text-black rounded-2xl"
      >
        <span>Continue with Spotify</span>
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
        className="bg-green-600 text-black rounded-2xl"
      >
        <span>Log out</span>
      </button>
    </div>
  );
};
