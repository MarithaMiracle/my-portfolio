"use client";
import { useEffect, useState } from "react";

const Clock = ({ theme }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  return (
    <div
      className={`fixed top-[3.75rem] right-3 z-20 flex items-center px-1.5 py-0.5 rounded whitespace-nowrap
        sm:top-16 sm:right-4 sm:px-2 sm:py-1
        ${theme === "light" ? "text-pink-400" : "text-[#03e9f4]"}
        text-[11px] sm:text-sm md:text-base lg:text-lg
        font-bold transition-all duration-300 ease-in-out`}
      title="Current Time"
    >
      {formattedTime}
    </div>
  );
};

export default Clock;
