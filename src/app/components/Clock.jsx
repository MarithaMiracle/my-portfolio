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
      className={`fixed top-16 right-4 z-50 flex items-center min-w-[100px] px-2 py-1 rounded whitespace-nowrap
        ${
          theme === "light"
            ? "text-[#eb94cf]"
            : "text-[#03e9f4]"
        }
        text-base sm:text-lg md:text-xl font-bold
        flex-shrink`}
      // remove backdropFilter since no background
      title="Current Time"
    >
      {formattedTime}
    </div>
  );
};

export default Clock;
