"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    // Check if dark mode is enabled from localStorage
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
      <div className="flex container mx-auto py-2 px-4 flex-wrap items-center justify-between">
        <Link href={"/"} className="text-sm md:text-base lg:text-xl dark:text-cyan-100 text-pink-200 font-semibold">
          ../maritha.dev
        </Link>

        {/* Dark Mode Button */}
        {/* Uncomment if you want a button to toggle dark mode */}
        {/* <button
          onClick={toggleDarkMode}
          className="group relative flex items-center gap-2 text-white p-2 rounded transition"
          title="Toggle Dark Mode"
        >
          <Image
            src={isDarkMode ? "/butterfly-svgrepo-com.svg" : "/flower-svgrepo-com (1).svg"}
            alt="Theme Icon"
            width={40}
            height={40}
            className="transition duration-300 ease-in-out"
          />
        </button> */}

        {/* Mobile Menu Button
        <div className="mobile-menu block">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white"
          >
            <Image
              src={navbarOpen ? "/butterfly-svgrepo-com.svg" : "/flower-svgrepo-com (1).svg"}
              alt="Toggle menu"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </button>
        </div> */}

        {/* Desktop Menu */}
        <div className="block">
          <ul className="flex mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`block py-2 pl-3 pr-4 text-sm rounded transition-all 
                    ${isDarkMode ? "text-white hover:text-[#03e9f4] hover:drop-shadow-[0_0_10px_#03e9f4]" : "text-white hover:text-[#eb94cf] hover:drop-shadow-[0_0_10px_#eb94cf]"}`
                  }
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
