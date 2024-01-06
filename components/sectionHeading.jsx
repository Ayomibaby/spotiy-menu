"use client";
import {
  DropdownUp,
  MoreCircle,
  dropdown,
  dropdownUp,
} from "@/public/assets/svg";
import React, { useState } from "react";

export default function SectionHeading({
  title,
  range,
  setRange,
  page,
  view,
  setView,
}) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <section id="heading" className="flex justify-between items-start w-full">
      <div className="flex flex-col justify-center">
        <div className="flex gap-x-2 items-center">
          <h2>Top {title}</h2>

          <div>{MoreCircle}</div>
        </div>
        {!page && (
          <p className="mt-[0.5rem] text-[#898989] text-xs font-normal md:text-lg flex gap-x-1">
            You listened to <span className="text-[#306EF9]">17 {title}</span>
            this past week
          </p>
        )}
      </div>
      <div className="relative w-fit flex gap-2">
        <span
          onClick={() => setView("grid")}
          className="text-slate-200 text-xs"
        >
          {view}
        </span>
        <div
          onClick={() => setDropDown((prev) => !prev)}
          className="flex cursor-pointer w-fit gap-1 md:w-[7rem] items-center border-[1.5px] border-[#306EF9] rounded  py-1 px-2"
        >
          <h4>{range.text}</h4>
          <span className="md:text-[10rem]">{dropDown ? dropdownUp : dropdown}</span>
        </div>
        {dropDown && (
          <ul className="absolute w-[5.5rem] md:w-[7.5rem] top-7 md:top-10  z-20 right-0 text-[#306EF9] text-[10px] flex flex-col items-start gap-2  border-grey-100 border-[1px] lg:border-2 lg:rounded-lg rounded-md bg-white drop-shadow-md">
            <li
              onClick={() => {
                setRange({ range: "short_term", text: "4 Weeks" });
                setDropDown((prev) => !prev);
              }}
              className="font-medium cursor-pointer w-full pl-2 py-1 transition duration-300 ease-in-out  hover:bg-[#306EF9] hover:text-black"
            >
              4 Weeks
            </li>
            <li
              onClick={() => {
                setRange({ range: "medium_term", text: "6 Months" });
                setDropDown((prev) => !prev);
              }}
              className="font-medium cursor-pointer w-full pl-2 py-1 transition duration-300 ease-in-out  hover:bg-[#306EF9] hover:text-black"
            >
              6 Months
            </li>
            <li
              onClick={() => {
                setRange({ range: "long_term", text: "All Time" });
                setDropDown((prev) => !prev);
              }}
              className=" font-medium cursor-pointer w-full pl-2 py-1 transition duration-300 ease-in-out  hover:bg-[#306EF9] hover:text-black"
            >
              All Time
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}
