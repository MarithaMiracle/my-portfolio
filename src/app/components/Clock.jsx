"use client";
import { useEffect, useState } from "react";

const Clock = ({ theme }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Format the time (to ensure double digits for single digit numbers)
    const formattedTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    return (
        <div
                className={`absolute top-0 right-[-50px] text-lg font-bold ${theme === "light" ? "text-[#eb94cf]" : "text-[#03e9f4]"}`}
        >
            {formattedTime}
        </div>
    );
};

export default Clock;
