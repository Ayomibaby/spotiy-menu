import { MoreCircle, dropdown } from "@/public/assets/svg/moreCircle";
import React, { useState } from "react";

export default function SectionHeading({ title }) {
  const [dropdown, setDropdown] = useState(false);
  const [range, setRange] = useState({ range: "short_term", text: "4 Weeks" });

  return (
    <section id="heading" className="flex justify-between items-center w-full">
      <div>
        <div className="flex gap-x-2 items-center">
          <h2>Top {title}</h2>

          <div>{MoreCircle}</div>
        </div>
        <h5 className="mt-[0.5rem] flex gap-x-1">
          You listened to <span className="text-[#22C55E]">17 {title}</span>
          this past week
        </h5>
      </div>
      <div className="relative w-fit">
        <div
          onClick={() => setDropdown((prev) => !prev)}
          className="flex justify-between  w-[5rem] items-center border-[1.5px] border-[#22C55E] rounded-[0.1875rem] py-[0.25rem] px-[0.5rem]"
        >
          <h4>
            {range.text} {dropdown}
          </h4>
          <span></span>
        </div>
        {dropdown && (
          <ul className="absolute z-20  w-[5rem] right-0 text-[#22C55E] text-[10px] flex flex-col items-start gap-2  border-[#22C55E] border-[1.5px] rounded-b-md bg-black">
            <li
              onClick={() => {
                setRange({ range: "short_term", text: "4 Weeks" });
                setDropdown((prev) => !prev);
              }}
              className="bg-black font-medium cursor-pointer w-full pl-2 py-1  hover:bg-[#22c55e] hover:text-white"
            >
              4 Weeks
            </li>
            <li
              onClick={() => {
                setRange({ range: "medium_term", text: "6 Months" });
                setDropdown((prev) => !prev);
              }}
              className="bg-black font-medium cursor-pointer w-full pl-2 py-1  hover:bg-[#22c55e] hover:text-white"
            >
              6 Months
            </li>
            <li
              onClick={() => {
                setRange({ range: "long_term", text: "All Time" });
                setDropdown((prev) => !prev);
              }}
              className="bg-black font-medium cursor-pointer w-full pl-2 py-1  hover:bg-[#22c55e] hover:text-white"
            >
              All Time
            </li>
          </ul>
        )}
        {/* <select onClick={handleRange} className="absolute right-0 text-[#22C55E] text-[10px] flex flex-col gap-4  border-[#22C55E] border-[1.5px] rounded-[0.1875rem] bg-black py-[0.25rem] px-[0.5rem] ">
          <option value="short_term"  className="bg-black font-medium border-[#22C55E] border-[1.5px]  hover:bg-[#22c55e] hover:text-white" defaultValue selected>4 Weeks</option>
          <option value="medium_term" className="bg-black font-medium border-[#22C55E] border-[1.5px]  focus:bg-[#22c55e] hover:text-pink-900" >6 Months</option>
          <option value="long_term" className="bg-black font-medium border-[#22C55E] border-[1.5px]  hover:bg-[#22c55e] hover:text-white" >All Time</option>
        </select> */}
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
