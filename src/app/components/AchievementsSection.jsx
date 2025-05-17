"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const achievementsList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "1000",
  },
  {
    metric: "Years",
    value: "4",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-4 px-2 sm:py-8 sm:px-4 xl:px-8">
      <div className="border border-[#1f2937] rounded-3xl py-4 px-2 sm:px-4 md:px-6 flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 overflow-x-auto no-scrollbar">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[80px]"
          >
            <h2 className="flex items-center text-white font-bold text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px]">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white font-bold ml-1"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-[8px] sm:text-[10px] md:text-[12px] mt-1 sm:mt-2">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
