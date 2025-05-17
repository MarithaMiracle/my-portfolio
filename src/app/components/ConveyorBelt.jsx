"use client";
import React from "react";

const frameworks = [
  { name: "Node.js", color: "#A8DADC" },
  { name: "Express", color: "#FAD4D4" },
  { name: "PostgreSQL", color: "#FFE5B4" },
  { name: "MongoDB", color: "#C1E1C1" },
  { name: "Sequelize", color: "#D7BDE2" },
  { name: "JavaScript", color: "#FFD6A5" },
  { name: "React", color: "#A0CED9" },
  { name: "Next.js", color: "#F5B7B1" },
  { name: "Tailwind CSS", color: "#B0E0E6" },
];

const repeatedFrameworks = [...frameworks, ...frameworks];

const ConveyorBeltSingle = ({ reverse = false }) => {
  return (
    <div className="relative right-6 left-6 z-50 flex w-full items-center min-w-[100px] select-none">

      <div
        className={`flex whitespace-nowrap items-center gap-20 animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
      >
        {repeatedFrameworks.map((fw, i) => (
          <button
            key={i}
            type="button"
            className="flex items-center flex-shrink-0 rounded-full px-3 py-2 cursor-default select-text border border-slate-700"
            title={fw.name}
            style={{ backgroundColor: "transparent", minWidth: "90px" }}
          >
            <span
              className="inline-block rounded-full mr-4"
              style={{
                width: 10,
                height: 10,
                backgroundColor: fw.color,
                boxShadow: `0 0 4px ${fw.color}`,
              }}
            ></span>
            <span className="text-white font-semibold text-sm">{fw.name}</span>
          </button>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
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
    <div className="mt-16 w-full space-y-4">
      <ConveyorBeltSingle />
      <ConveyorBeltSingle reverse />
    </div>
  );
};

export default ConveyorBelt;
