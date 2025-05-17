
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
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
        <div className="flex justify-center md:justify-start gap-4 mt-2">
          <Link
            href={gitUrl}
            className="h-11 w-11 flex items-center justify-center border-2 border-[#ADB7BE] hover:border-white rounded-full transition duration-300"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-11 w-11 flex items-center justify-center border-2 border-[#ADB7BE] hover:border-white rounded-full transition duration-300"
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
