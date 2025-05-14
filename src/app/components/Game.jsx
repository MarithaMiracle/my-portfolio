"use client";
import { useState, useEffect } from "react";
import Sparkle from "react-sparkle";

const Game = ({ theme }) => {
const [score, setScore] = useState(0);
const [gameStarted, setGameStarted] = useState(false);
const [iconPosition, setIconPosition] = useState({ top: "0px", left: "0px" });
const [gameOver, setGameOver] = useState(false);
const [isButterfly, setIsButterfly] = useState(theme === "dark");


const iconSize = 40;

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
    <div className="relative w-full">
        {/* Start Button */}
        {!gameStarted || gameOver ? (
            <button
                onClick={startGame}
                className={`absolute top-[-20px] left-[-100px] bg-transparent border text-sm rounded-full px-4 py-2 transition-all 
                    ${theme === "light"
                        ? "border-[#eb94cf] hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] hover:bg-[#eb94cf] text-[#eb94cf] hover:text-black"
                        : "border-[#03e9f4] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4] text-[#03e9f4] hover:bg-[#03e9f4] hover:text-black"}`}
            >
                Start Game
            </button>
        ) : (
            <>
                {/* Floating Game Icon */}
                {!gameOver && (
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
                        <img src={iconSrc} alt="icon" className="w-10 h-10" />
                    </div>
                )}

                {/* End Button */}
                <button
                    onClick={stopGame}
                    className={`absolute top-[-20px] left-[-100px] bg-transparent border text-sm rounded-full px-4 py-2 transition-all
                        ${theme === "light"
                            ? "border-[#eb94cf] hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] text-[#eb94cf] hover:bg-[#eb94cf] hover:text-black"
                            : "border-[#03e9f4] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4] text-[#03e9f4] hover:bg-[#03e9f4] hover:text-black"}`}
                >
                    End Game
                </button>

                {/* Instruction Text with Sparkles */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-sm font-bold text-white z-50 px-4">
                    <Sparkle
                        color={sparkleColor}
                        count={30}
                        minSize={5}
                        maxSize={8}
                        fadeOutSpeed={10}
                        flicker={false}
                        overflowPx={40}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 9999,
                            pointerEvents: "none",
                        }}
                    />
                    {instructionText}
                </div>
            </>
        )}

        {/* Game Over Text */}
        {gameOver && (
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-sm font-bold text-white text-left z-50 px-4">
                <Sparkle
                    color={sparkleColor}
                    count={30}
                    minSize={5}
                    maxSize={8}
                    fadeOutSpeed={10}
                    flicker={false}
                    overflowPx={40}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 9999,
                        pointerEvents: "none",
                    }}
                />
                Game Over!<br />Final Score: {score}
            </div>
        )}
    </div>
);


};

export default Game;
