"use client";
import React from "react";

const frameworks = [
  { name: "Node.js", color: "#90E0EF" },       // pastel blue
  { name: "Express", color: "#FFB3C1" },       // soft coral pink
  { name: "PostgreSQL", color: "#FFE066" },    // pastel yellow
  { name: "MongoDB", color: "#77DD77" },       // soft mint green
  { name: "Sequelize", color: "#D0BFFF" },     // soft lilac
  { name: "JavaScript", color: "#FFE5B4" },    // peachy pastel
  { name: "React", color: "#A0C4FF" },         // baby blue
  { name: "Next.js", color: "#FFADAD" },       // warm pastel red
  { name: "Tailwind CSS", color: "#BDE0FE" },  // sky pastel
  { name: "TypeScript", color: "#77DD77" },    // soft green
  { name: "Docker", color: "#A9DEF9" },        // light azure
];


const repeatedFrameworks = [...frameworks, ...frameworks];

const ConveyorBeltSingle = ({ reverse = false }) => {
  return (
    <div className="relative z-50 flex w-full items-center select-none px-1 sm:px-4 md:px-6">
      <div
        className={`flex whitespace-nowrap items-center gap-6 sm:gap-10 md:gap-18 animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
      >
        {repeatedFrameworks.map((fw, i) => (
          <button
            key={i}
            type="button"
            className="flex items-center flex-shrink-0 rounded-full cursor-default select-text border border-slate-800 px-2 py-0.5 sm:px-4 sm:py-1 md:px-5 md:py-2"
            title={fw.name}
            style={{ backgroundColor: "transparent", minWidth: "60px" }}
          >
            <span
              className="inline-block rounded-full mr-2 sm:mr-3"
              style={{
                width: 9,
                height: 9,
                backgroundColor: fw.color,
                // Removed border here
              }}
            ></span>
            <span className="text-white font-normal text-[9px] sm:text-[12px] md:text-[14px]">
              {fw.name}
            </span>
          </button>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation-direction: reverse;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

const ConveyorBelt = () => {
  return (
    <div className="mt-4 w-full space-y-2 sm:space-y-3 md:space-y-4">
      <ConveyorBeltSingle />
      <ConveyorBeltSingle reverse />
    </div>
  );
};

export default ConveyorBelt;
