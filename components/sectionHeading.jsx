
"use client"
import { DropdownUp, MoreCircle, dropdown, dropdownUp } from "@/public/assets/svg";
import React, { useState } from "react";

export default function SectionHeading({ title, range, setRange, page , view, setView }) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <section id="heading" className="flex justify-between items-start w-full">
      <div>
        <div className="flex gap-x-2 items-center">
          <h2>Top {title}</h2>

          <div>{MoreCircle}</div>
        </div>
        {!page && (
          <h5 className="mt-[0.5rem] flex gap-x-1">
            You listened to <span className="text-[#22C55E]">17 {title}</span>
            this past week
          </h5>
        )}
      </div>
      <div className="relative w-fit flex gap-2">
        <span onClick={()=>setView("grid")} className="text-slate-200 text-xs">{view}</span>
        <div
          onClick={() => setDropDown((prev) => !prev)}
          className="flex cursor-pointer justify-between  w-[5rem] items-center border-[1.5px] border-[#22C55E] rounded-[0.1875rem] py-[0.25rem] px-[0.5rem]"
        >
          <h4>{range.text}</h4>
          <span>{dropDown ? dropdownUp :  dropdown }</span>
        </div>
        {dropDown && (
          <ul className="absolute z-20  w-[5rem] right-0 text-[#22C55E] text-[10px] flex flex-col items-start gap-2  border-[#22C55E] border-[1.5px] rounded-b-md bg-black">
            <li
              onClick={() => {
                setRange({ range: "short_term", text: "4 Weeks" });
                setDropDown((prev) => !prev);
              }}
              className="bg-black font-medium cursor-pointer w-full pl-2 py-1 transition duration-300 ease-in-out  hover:bg-[#22c55e] hover:text-white"
            >
              4 Weeks
            </li>
            <li
              onClick={() => {
                setRange({ range: "medium_term", text: "6 Months" });
                setDropDown((prev) => !prev);
              }}
              className="bg-black font-medium cursor-pointer w-full pl-2 py-1 transition duration-300 ease-in-out  hover:bg-[#22c55e] hover:text-white"
            >
              6 Months
            </li>
            <li
              onClick={() => {
                setRange({ range: "long_term", text: "All Time" });
                setDropDown((prev) => !prev);
              }}
              className="bg-black font-medium cursor-pointer w-full pl-2 py-1 transition duration-300 ease-in-out  hover:bg-[#22c55e] hover:text-white"
            >
              All Time
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}
