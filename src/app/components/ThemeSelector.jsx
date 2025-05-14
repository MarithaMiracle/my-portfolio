"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ThemeSelector = ({ onSelect }) => {
  const [hasChosen, setHasChosen] = useState(false);

  const handleSelect = (theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    setHasChosen(true);
    setTimeout(() => {
      onSelect(theme); // ✅ fixed here
    }, 500);
  };
  

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-screen bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        hasChosen ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="text-white text-3xl mb-8 text-center px-4">
        Choose your preferred theme
      </h1>

      <div className="flex space-x-12">
        <button
          onClick={() => handleSelect("light")}
          className="flex flex-col items-center"
        >
          <Image
            src="/flower-svgrepo-com (1).svg"
            alt="Pink Theme"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <span className="text-pink-300 mt-2 font-semibold">Pink Theme</span>
        </button>

        <button
          onClick={() => handleSelect("dark")}
          className="flex flex-col items-center"
        >
          <Image
            src="/butterfly-svgrepo-com.svg"
            alt="Blue Theme"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <span className="text-cyan-300 mt-2 font-semibold">Blue Theme</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
