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
    <nav className=" py-3 top-0 z-50 fixed w-screen border-b-2 border-b-gray-100 drop-shadow-sm  bg-white ">
      <div className="w-[90%] md:w-[95%] mx-auto flex justify-between items-center">
        <h2 className="text-black">
          <Link href={"/"}> LOGO </Link>
        </h2>

        <ul className="flex gap-3 items-center ">
          <li className="text-black bg-yellow-500 hover:bg-yellow-400 cursor-pointer py-1 px-1 lg:px-3 rounded-md border-2 border-black">Contact us</li>
          {
            session && <SpotifySignOut />
          }
        </ul>
      </div>
    </nav>
  );
}
