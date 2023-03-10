import React from "react";
import { BsPerson } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsFilter } from "react-icons/bs";
import { JobCard } from "../JobCard/JobCard";
import { JobsListing } from "../JobsListing/JobsListing";

function JobsFilterSection() {
  return (
    <div className=" mt-6">
      <p className="text-3xl font-bold mb-4">Search for jobs</p>
      {/* Tabs : Browse all , Saved , hidden */}
      <div className="text-sm  flex gap-5 tracking-tighter">
        <p className="font-semibold underline underline-offset-8 cursor-pointer">
          Browse all
        </p>
        <p className="cursor-pointer">
          Saved
          <span className="bg-neutral-200 m-1 text-xs px-0.5 rounded">0</span>
        </p>
        <p className="cursor-pointer">Hidden</p>
      </div>
      <div className="flex flex-col w-full mt-6 border-solid border-2 border-neutral-200 px-4 py-4 rounded-t-md border-b-0">
        <div className="flex gap-4">
          <div className="flex items-center gap-4 w-3/6 px-2 py-2 rounded-md bg-[#f1f6fd] border-solid border border-[#398afb]">
            <BsPerson className="text-[#398afb]" />
            <p>Frontend Developer</p>
          </div>
          <div className="flex items-center gap-4 w-3/6 px-2 py-2 rounded-md bg-[#f1f6fd] border-solid border border-[#398afb]">
            <FaCity className="text-[#398afb]" />
            <p>India</p>
          </div>
        </div>
        <div className="flex gap-1 items-center border border-solid border-[#398afb] w-fit mt-4 rounded-md px-2.5 py-0.5 tracking-tighter bg-[#f1f6fd]">
          <p>Internship</p>
          <RxCross2 className="text-[#398afb] cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center items-center font-bold py-1 border-2 border-solid border-neutral-200 gap-2 rounded-b-md border-b-4 cursor-pointer">
        <BsFilter className="text-[#398afb] " />
        <p>Filter</p>
      </div>
    </div>
  );
}
export { JobsFilterSection };
