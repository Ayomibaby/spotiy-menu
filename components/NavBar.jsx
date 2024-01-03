"use client";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { SpotifySignOut } from "./SpotifySignInButton";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className=" py-3 top-0 z-50 fixed w-screen  bg-[#121213] ">
      <div className="w-[90%] md:w-[95%] mx-auto flex justify-between items-center">
        <h2>
          <Link href={"/"}> LOGO </Link>
        </h2>

        <ul className="flex gap-x-4 items-center">
          <li>Contact us</li>
          <SpotifySignOut />
        </ul>
      </div>
    </nav>
  );
}
