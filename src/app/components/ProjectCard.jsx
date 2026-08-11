"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  stack = [],
  badge,
  previewUrl,
  previewLabel,
  gitUrl,
  links = [],
  caseStudyHighlights = [],
  imageLeft = true,
  imagePosition = "object-center",
}) => {
  return (
    <div
      className={`flex flex-col ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-between gap-6 bg-transparent border border-slate-700 rounded-[2rem] p-4 transition-all duration-300 hover:shadow-lg`}
    >
      <div className="w-full md:w-[350px] h-[300px] p-2 overflow-hidden rounded-[2rem]">
        <div className="w-full h-full rounded-[2rem] overflow-hidden group bg-slate-900">
          <img
            src={imgUrl}
            alt={typeof title === "string" ? title : "Project preview"}
            className={`w-full h-full object-cover rounded-[2rem] transition-transform duration-500 group-hover:scale-110 ${imagePosition}`}
          />
        </div>
      </div>

      <div className="flex-1 px-2 md:px-4 text-white text-center md:text-left">
        {badge && (
          <span className="inline-block mb-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#eb94cf] dark:text-cyan-400 border border-[#eb94cf]/40 dark:border-cyan-400/40 rounded-full px-3 py-1">
            {badge}
          </span>
        )}

        <h5 className="text-xl sm:text-2xl font-semibold mb-2 text-[#eb94cf] dark:text-[#03e9f4]">
          {title}
        </h5>

        <p className="text-sm sm:text-base text-[#ADB7BE] mb-4">{description}</p>

        {caseStudyHighlights.length > 0 && (
          <ul className="text-left text-sm text-[#ADB7BE] mb-4 space-y-1 list-disc pl-5">
            {caseStudyHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {stack.length > 0 && (
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] sm:text-xs text-white/80 border border-slate-600 rounded-full px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-4">
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-b border-[#ADB7BE] pb-0.5 text-[#ADB7BE] transition-colors duration-300 group hover:text-pink-300 dark:hover:text-cyan-400"
            >
              <span className="pr-1">
                {previewLabel ||
                  (badge?.includes("Private") ? "Website" : "Live demo")}
              </span>
              <ArrowRightIcon className="h-3 w-3 ml-1 transform scale-x-150 -rotate-45 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
          )}
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-b border-[#ADB7BE] pb-0.5 text-[#ADB7BE] transition-colors duration-300 group hover:text-pink-300 dark:hover:text-cyan-400"
            >
              <span className="pr-1">Repository</span>
              <ArrowRightIcon className="h-3 w-3 ml-1 transform scale-x-150 -rotate-45 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
          )}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-b border-[#ADB7BE] pb-0.5 text-[#ADB7BE] transition-colors duration-300 group hover:text-pink-300 dark:hover:text-cyan-400"
            >
              <span className="pr-1">{link.label}</span>
              <ArrowRightIcon className="h-3 w-3 ml-1 transform scale-x-150 -rotate-45 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
