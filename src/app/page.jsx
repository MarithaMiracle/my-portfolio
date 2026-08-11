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
      <div className="w-full max-w-screen-xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <HeroSection />
        <Clock theme={theme} />
        <AchievementsSection />
        <AboutSection />
        <ConveyorBelt />
        <ProjectsSection />
        <Game theme={theme} />
        <EmailSection />
      </div>
      <Footer />
      <ChatWidget />
    </main>
  );
}
