"use client";

import { useState, useEffect } from "react";
import Sparkle from "react-sparkle";

const Game = ({ theme }) => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: "0px", left: "0px" });
  const [gameOver, setGameOver] = useState(false);
  const [isButterfly, setIsButterfly] = useState(theme === "dark");

  const iconSize = 20;

  const getRandomPosition = () => {
    const padding = 100;
    const windowWidth = window.innerWidth - iconSize - padding;
    const windowHeight = window.innerHeight - iconSize - padding;

    const top = Math.floor(Math.random() * windowHeight);
    const left = Math.floor(Math.random() * windowWidth);

    return { top: `${top}px`, left: `${left}px` };
  };

  const handleIconClick = () => {
    if (gameOver) return;
    setScore((prev) => prev + 1);
    setIconPosition(getRandomPosition());
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setIconPosition(getRandomPosition());
  };

  const stopGame = () => {
    setGameOver(true);
  };

  useEffect(() => {
    if (gameStarted && !gameOver) {
      setIconPosition(getRandomPosition());
    }
  }, [gameStarted]);

  const iconSrc = isButterfly
    ? "/butterfly-svgrepo-com.svg"
    : "/flower-svgrepo-com (1).svg";

  const sparkleColor = theme === "light" ? "#eb94cf" : "#03e9f4";
  const instructionText = isButterfly ? "Click the butterfly!" : "Click the flower!";

  return (
    <>
      {/* Top-left controls */}
      <div className="fixed top-12 left-4 z-50 flex items-center gap-2 flex-wrap max-w-full">
        {!gameStarted || gameOver ? (
          <button
            onClick={startGame}
            className={`min-w-[60px] px-3 py-1 text-[10px] sm:text-sm md:text-md rounded-full border transition-all whitespace-nowrap
              ${
                theme === "light"
                  ? "border-[#eb94cf] text-[#eb94cf] hover:bg-[#eb94cf] hover:text-black hover:shadow-[0_0_4px_#eb94cf,0_0_10px_#eb94cf]"
                  : "border-[#03e9f4] text-[#03e9f4] hover:bg-[#03e9f4] hover:text-black hover:shadow-[0_0_4px_#03e9f4,0_0_10px_#03e9f4]"
              }`}
          >
            Start Game
          </button>
        ) : (
          <button
            onClick={stopGame}
            className={`min-w-[60px] px-3 py-1 text-[10px] sm:text-sm md:text-md rounded-full border transition-all whitespace-nowrap
              ${
                theme === "light"
                  ? "border-[#eb94cf] text-[#eb94cf] hover:bg-[#eb94cf] hover:text-black hover:shadow-[0_0_4px_#eb94cf,0_0_10px_#eb94cf]"
                  : "border-[#03e9f4] text-[#03e9f4] hover:bg-[#03e9f4] hover:text-black hover:shadow-[0_0_4px_#03e9f4,0_0_10px_#03e9f4]"
              }`}
          >
            End Game
          </button>
        )}

        {/* Instruction or Game Over Text */}
        {gameStarted && !gameOver && (
          <div className="relative font-bold text-white text-[10px] sm:text-sm md:text-md flex items-center pr-2">
            <Sparkle
              color={sparkleColor}
              count={20}
              minSize={3}
              maxSize={6}
              fadeOutSpeed={10}
              flicker={false}
              overflowPx={30}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 9999,
                pointerEvents: "none",
                borderRadius: "4px",
              }}
            />
            <p className="relative z-10 whitespace-nowrap">{instructionText}</p>
          </div>
        )}

        {gameOver && (
          <div className="relative font-bold text-white text-[10px] sm:text-sm md:text-md flex items-center pr-2">
            <Sparkle
              color={sparkleColor}
              count={20}
              minSize={3}
              maxSize={6}
              fadeOutSpeed={10}
              flicker={false}
              overflowPx={30}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 9999,
                pointerEvents: "none",
                borderRadius: "4px",
              }}
            />
            <p className="relative z-10 whitespace-nowrap">
              Game Over!<br />Final Score: {score}
            </p>
          </div>
        )}
      </div>

      {/* Floating Game Icon */}
      {!gameOver && gameStarted && (
        <div
          onClick={handleIconClick}
          className="fixed cursor-pointer"
          style={{
            top: iconPosition.top,
            left: iconPosition.left,
            transition: "top 0.2s, left 0.2s",
            zIndex: 50,
          }}
        >
          <img
            src={iconSrc}
            alt="icon"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          />
        </div>
      )}
    </>
  );
};

export default Game;
