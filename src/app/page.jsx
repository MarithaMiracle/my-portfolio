"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Clock from "./components/Clock";
import ThemeSelector from "./components/ThemeSelector";
import WelcomeScreen from "./components/WelcomeScreen";
import ChatWidget from "./components/ChatWidget";

export default function Page() {
  const [themeChosen, setThemeChosen] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [theme, setTheme] = useState("light");

  if (!themeChosen) {
    return (
      <ThemeSelector
        onSelect={(chosenTheme) => {
          setTheme(chosenTheme);
          setThemeChosen(true);
        }}
      />
    );
  }

  if (!showMain) {
    return <WelcomeScreen onFinish={() => setShowMain(true)} />;
  }

  return (
    <main className="dark:bg-[#04060f] flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 relative">
        <Game theme={theme} />
        <HeroSection />
        <Clock theme={theme} />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <ChatWidget />
      </div>
      <Footer />

      
      
    </main>
  );
}
