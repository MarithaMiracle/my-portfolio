"use client";
import React from "react";

const frameworks = [
  { name: "TypeScript", color: "#77DD77" },
  { name: "Node.js", color: "#90E0EF" },
  { name: "NestJS", color: "#FFB3C1" },
  { name: "PostgreSQL", color: "#FFE066" },
  { name: "Express", color: "#D0BFFF" },
  { name: "React", color: "#A0C4FF" },
  { name: "Next.js", color: "#FFADAD" },
  { name: "Supabase", color: "#BDE0FE" },
  { name: "Stripe", color: "#FFE5B4" },
  { name: "Sequelize", color: "#77DD77" },
  { name: "Docker", color: "#A9DEF9" },
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
