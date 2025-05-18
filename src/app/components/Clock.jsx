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
      className={`fixed top-12 right-4 z-50 flex items-center px-2 py-1 rounded whitespace-nowrap
        ${theme === "light" ? "text-pink-400" : "text-[#03e9f4]"}
        text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]
        font-bold flex-shrink transition-all duration-300 ease-in-out`}
      title="Current Time"
    >
      {formattedTime}
    </div>
  );
};

export default Clock;
