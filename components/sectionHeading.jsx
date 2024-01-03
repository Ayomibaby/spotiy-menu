import { MoreCircle, dropdown } from "@/public/assets/svg/moreCircle";
import React from "react";

export default function SectionHeading() {
  return (
    <section id="heading" className="flex justify-between items-center">
      <div>
        <div className="flex gap-x-2 items-center">
          <h2 >Top Artists</h2>

          <div>{MoreCircle}</div>
        </div>
        <h5 className="mt-[0.5rem] flex gap-x-1">
          You listened to <span className="text-[#22C55E]">17 Artists</span>{" "}
          this past week
        </h5>
      </div>
      <div className="md:hidden contents">
        <div className="flex gap-x-2 items-center border-[1.5px] border-solid border-[#22C55E] rounded-[0.1875rem] py-[0.25rem] px-[0.5rem]">
          <h4>4 weeks</h4>
          <div>{dropdown}</div>
        </div>
      </div>

      <div className="md:contents hidden">
        <div className="flex gap-x-4 ">
        <h2 className="text-[0.85rem] text-[#22C55E] ">THIS WEEK</h2>
        <h2 className="text-[0.85rem] text-[#898989]">4 WEEKS</h2>
        <h2 className="text-[0.85rem] text-[#898989]">CHOOSE DATE</h2>
        </div>
      </div>
    </section>
  );
}
