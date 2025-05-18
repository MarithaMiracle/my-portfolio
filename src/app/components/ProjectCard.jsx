"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, imageLeft = true }) => {
  return (
    <div
      className={`flex flex-col ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-between gap-6 bg-transparent border border-slate-700 rounded-[2rem] p-4 transition-all duration-300 hover:shadow-lg`}
    >
      {/* Image Section */}
      <div className="w-full md:w-[350px] h-[300px] p-2 overflow-hidden rounded-[2rem]">
        <div className="w-full h-full rounded-[2rem] overflow-hidden group">
          <img
            src={imgUrl}
            alt={typeof title === "string" ? title : ""}
            className="w-full h-full object-cover rounded-[2rem] transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-2 md:px-4 text-white text-center md:text-left">
        <h5 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h5>
        <p className="text-sm sm:text-base text-[#ADB7BE] mb-4">{description}</p>

        {/* Visit here link */}
        {previewUrl && (
          <div className="mt-4 text-center md:text-left">
            <Link
  href={previewUrl}
  className="inline-flex items-center border-b border-[#ADB7BE] pb-0.5 text-[#ADB7BE] transition-colors duration-300 group hover:text-pink-300 dark:hover:text-cyan-400"
>
  <span className="pr-1">Visit here</span>
  <ArrowRightIcon
    className="h-3 w-3 ml-1 transform scale-x-150 hover:text-pink-300 dark:hover:text-cyan-500 -rotate-45 transition-transform duration-300 group-hover:rotate-180"
  />
</Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
