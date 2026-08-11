"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Game from "./components/Game";
import ChatWidget from "./components/ChatWidget";
import ConveyorBelt from "./components/ConveyorBelt";
import Clock from "./components/Clock";

export default function Page() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const handleThemeChange = (nextTheme) => {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <main className="dark:bg-[#04060f] flex min-h-screen flex-col bg-[#000000]">
      <Navbar theme={theme} onThemeChange={handleThemeChange} />
      <div className="w-full max-w-screen-xl mt-20 sm:mt-24 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <HeroSection />

        <div className="mb-2 flex flex-col gap-2 border-b border-slate-800/50 pb-3 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
          <Game theme={theme} />
          <div className="flex items-center justify-between gap-2 sm:justify-end">
            <span className="text-[10px] uppercase tracking-wide text-[#6b7280] sm:hidden">
              Local time
            </span>
            <Clock theme={theme} />
          </div>
        </div>

        <AchievementsSection />
        <AboutSection />
        <ConveyorBelt />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <ChatWidget />
    </main>
  );
}
