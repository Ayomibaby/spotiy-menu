import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <section className="w-[100%] bg-[#121213]">
      <div className="w-[90%] md:w-[95%] mx-auto py-[2.5rem] flex justify-center ">
        <div  className="flex gap-x-2 items-center">
        <div>
          <Image
            src={`https://res.cloudinary.com/dhvwthnzq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1694269357/spotify/Ellipse_6_k6qyov.svg`}
            width={100}
            height={50}
            alt="artist picture"
            // className="mb-[0.5rem] md:w-[80%] "
          />
        </div>
        <div>
          <h2>Banji</h2>
          <h5 className="text-[#BFBFBF]">1 follower</h5>
        </div>
        </div>
      </div>
    </section>
  );
}
