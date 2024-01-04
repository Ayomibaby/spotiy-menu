/* eslint-disable react/no-unescaped-entities */


import Link from "next/link";

export default function Home() {
  return (
   <section className="flex h-screen bg-black ">
    {/* <Loader/> */}
    <div className="m-auto">
    <h2 className="text-center mb-[1rem]">Logo</h2>
    <Link href={"/Stats/home"}>
    <button className="text-white font-semibold text-[1rem] border border-white rounded-lg py-[1rem] px-[1rem] hover:bg-white hover:text-black">Login with spotify</button>
    </Link>
    </div>
   </section>
  );
}
