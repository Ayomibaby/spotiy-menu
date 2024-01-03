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
    <nav className="h-fit py-3 fixed w-screen  bg-[#121213] ">
      <div className="w-[90%] md:w-[95%] mx-auto flex justify-between items-center">
        <h2>
          <Link href={"/Stats/home"}> LOGO </Link>
        </h2>

        <ul className="flex gap-x-4 items-center">
          <li>Contact us</li>
          <SpotifySignOut />
        </ul>
      </div>
    </nav>
  );
}

// <nav className="w-full bg-transparent  text-white  shadow fixed z-30 font-programme ">
//   <div className="justify-between px-4 mx-auto md:max-w-7xl md:items-center lg:flex md:px-8">
//     <div>
//       <div className="flex items-center justify-between py-3 md:py-5 lg:py-2 ">
//         <Link href={"/"}>
//           {/* <Image
//             src={logo}
//             alt="logo ice"
//             className="invert"
//             height={40}
//             width={40}
//           /> */}
//           <h1>Logo</h1>
//         </Link>

//         <div className="lg:hidden">
//           <button
//             className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
//             onClick={() => setNavbar(!navbar)}
//           >
//             {navbar ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6 text-white"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div
//         className={`flex-1 justify-self-center pb-3 mb-4 mt-8 lg:block lg:pb-0 md:mt-3 ${
//           navbar ? "block" : "hidden"
//         }`}
//       >
//         <ul
//           className="items-center justify-center md:text-sm space-y-8 md:ml-[32rem] md:flex
//                         lg:flex-row md:flex-col lg:space-x-6 lg:mr-10 lg:space-y-0 md:space-x-10 md:space-y-8"
//         >
//           <li className="text-white  md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4  ">
//             <Link href="https://drive.google.com/file/d/1nhf5UYljPqCKKrWUZYCE8mXWhHoVQE9z/view?usp=sharing" target="_blank" onClick={() => setNavbar(!navbar)}>
//               Resume
//             </Link>
//           </li>
//           <li className="text-white  md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4  ">
//             <Link href="#about" onClick={() => setNavbar(!navbar)}>
//               About
//             </Link>
//           </li>
//           <li className="text-white md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4 ">
//             <Link href="#experience">
//               <button onClick={() => setNavbar(!navbar)}>Experience</button>
//             </Link>
//           </li>
//           <li className="text-white md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4 ">
//             <Link href="#skills">
//               <button onClick={() => setNavbar(!navbar)}>Tech Stack</button>
//             </Link>
//           </li>
//           <li className="text-white md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4 ">
//             <Link href="#projects">
//               <button onClick={() => setNavbar(!navbar)}>Projects</button>
//             </Link>
//           </li>
//           <li className="text-white md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4 ">
//             <Link href="#contact">
//               <button onClick={() => setNavbar(!navbar)}>Contact</button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </nav>
