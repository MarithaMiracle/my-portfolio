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
import ThemeSelector from "./components/ThemeSelector";
import WelcomeScreen from "./components/WelcomeScreen";
import ChatWidget from "./components/ChatWidget";
import ConveyorBelt from "./components/ConveyorBelt";
import Clock from "./components/Clock";

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
      <div className="w-full max-w-screen-xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Game theme={theme} />
        <HeroSection />
        <Clock theme={theme} />
        <AchievementsSection />
        <AboutSection />
        <ConveyorBelt />
        <ProjectsSection />
        <EmailSection />
        <ChatWidget />
      </div>
      <Footer />

      
      
    </main>
  );
}
