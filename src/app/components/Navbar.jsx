"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";


const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDarkMode(isDark);
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl dark:text-cyan-100 text-pink-200 font-semibold">
          Portfolio
        </Link>

        {/* Dark Mode Button */}
<button
  onClick={toggleDarkMode}
  className="group relative flex items-center gap-2 text-white p-2 rounded transition"
  title="Toggle Dark Mode"
>
  {/* Left text */}
  <span className="text-xs font-semibold text-[#eb94cf] dark:text-[#03e9f4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
    Click
  </span>

  {/* Icon */}
  <img
    src={isDarkMode ? "/butterfly-svgrepo-com.svg" : "/flower-svgrepo-com (1).svg"}
    alt="Theme Icon"
    width={40}
    height={40}
    className={`transition duration-300 ease-in-out active:scale-95 animate-bounce 
      group-hover:drop-shadow-[0_0_10px_#eb94cf] dark:group-hover:drop-shadow-[0_0_10px_#03e9f4]`}
  />

  {/* Right text */}
  <span className="text-xs font-semibold text-[#eb94cf] dark:text-[#03e9f4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
    Me!
  </span>
</button>


        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
  <img src="/public/butterfly-svgrepo-com.svg" alt="Close menu" className="h-10 w-10" />
) : (
  <img src="/public/flower-svgrepo-com (1).svg" alt="Open menu" className="h-10 w-10" />
)}

          </button>
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
