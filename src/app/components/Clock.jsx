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
      className={`flex items-center px-2 py-1 rounded whitespace-nowrap font-mono tabular-nums
        ${theme === "light" ? "text-pink-400" : "text-[#03e9f4]"}
        text-xs sm:text-sm md:text-base font-semibold`}
      title="Current time"
      aria-live="polite"
    >
      {formattedTime}
    </div>
  );
};

export default Clock;
