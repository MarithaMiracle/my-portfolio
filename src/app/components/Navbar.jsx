"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "about", path: "#about" },
  { title: "projects", path: "#projects" },
  { title: "contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDarkMode(isDark);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 w-full">
      <div className="flex container mx-auto py-1 px-4 flex-wrap items-center justify-between">
        {/* Site title on the left, smaller */}
        <Link
          href="/"
          className="text-sm sm:text-md md:text-lg lg:text-xl dark:text-cyan-100 text-pink-200 font-semibold"
        >
          ../maritha.dev
        </Link>

        {/* Nav links container fills available space and pushes content right */}
        <div className="flex flex-1 justify-end">
          <ul className="flex mt-0 space-x-3">
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* {navbarOpen && <MenuOverlay links={navLinks} />} */}
    </nav>
  );
};

export default Navbar;
