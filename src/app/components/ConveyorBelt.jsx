"use client";
import React from "react";

const frameworks = [
  { name: "Node.js", color: "#00B4D8" },
  { name: "Express", color: "#EF476F" },
  { name: "PostgreSQL", color: "#FFD166" },
  { name: "MongoDB", color: "#06D6A0" },
  { name: "Sequelize", color: "#9B5DE5" },
  { name: "JavaScript", color: "#F4A261" },
  { name: "React", color: "#118AB2" },
  { name: "Next.js", color: "#FF595E" },
  { name: "Tailwind CSS", color: "#3A86FF" },
];

const repeatedFrameworks = [...frameworks, ...frameworks];

const ConveyorBeltSingle = ({ reverse = false }) => {
  return (
    <div className="relative z-50 flex w-full items-center select-none px-1 sm:px-4 md:px-6">
      <div
        className={`flex whitespace-nowrap items-center gap-3 sm:gap-6 md:gap-8 animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
      >
        {repeatedFrameworks.map((fw, i) => (
          <button
            key={i}
            type="button"
            className="flex items-center flex-shrink-0 rounded-full cursor-default select-text border border-slate-600 px-2 py-0.5 sm:px-4 sm:py-1 md:px-5 md:py-2"
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
          animation: marquee 15s linear infinite;
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
    <div className="mt-4 w-full space-y-1 sm:space-y-2">
      <ConveyorBeltSingle />
      <ConveyorBeltSingle reverse />
    </div>
  );
};

export default ConveyorBelt;
