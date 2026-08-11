"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const navLinks = [
  { title: "about", path: "#about" },
  { title: "projects", path: "#projects" },
  { title: "contact", path: "#contact" },
];

const Navbar = ({ theme = "light", onThemeChange }) => {
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    onThemeChange?.(isDarkMode ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 w-full">
      <div className="flex container mx-auto py-1 px-4 flex-wrap items-center justify-between gap-2">
        <Link
          href="/"
          className="text-sm sm:text-md md:text-lg lg:text-xl dark:text-cyan-100 text-pink-200 font-semibold tracking-tight"
        >
          ../maritha.dev
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <ul className="flex mt-0 space-x-1 sm:space-x-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`block py-1 px-2 text-[10px] sm:text-sm md:text-md lg:text-xl rounded transition-all 
                    ${
                      isDarkMode
                        ? "text-white hover:text-[#03e9f4] hover:drop-shadow-[0_0_10px_#03e9f4]"
                        : "text-white hover:text-[#eb94cf] hover:drop-shadow-[0_0_10px_#eb94cf]"
                    }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to pink theme" : "Switch to blue theme"}
            title={isDarkMode ? "Switch to pink theme" : "Switch to blue theme"}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-600 px-2 py-1 sm:px-2.5 sm:py-1.5 text-[10px] sm:text-xs text-[#ADB7BE] transition-colors hover:border-[#eb94cf] hover:text-[#eb94cf] dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            <Image
              src={
                isDarkMode
                  ? "/butterfly-svgrepo-com.svg"
                  : "/flower-svgrepo-com (1).svg"
              }
              alt=""
              width={18}
              height={18}
              className="sm:h-[20px] sm:w-[20px]"
            />
            <span className="font-medium tracking-wide uppercase text-white/80">
              {isDarkMode ? "Blue theme" : "Pink theme"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
