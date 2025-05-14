"use client";
import { useEffect, useState } from "react";

const messages = [
  "Welcome",
  "Bienvenido",
  "Bienvenue",
  "Willkommen",
  "Benvenuto",
  "ようこそ",
  "환영합니다",
  "欢迎",
  "Добро пожаловать",
  "स्वागत है",
];

const TYPING_SPEED = 50;
const DELETING_SPEED = 25;
const DELAY_AFTER_WORD = 100;

export default function WelcomeScreen({ onFinish }) {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = messages[messageIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          const nextIndex = messageIndex + 1;

          if (nextIndex >= messages.length) {
            onFinish(); // ✅ Transition to main site
          } else {
            setMessageIndex(nextIndex);
          }
        }
      }, DELETING_SPEED);
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), DELAY_AFTER_WORD);
        }
      }, TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, messageIndex]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white text-4xl md:text-6xl font-bold">
      <span className="animate-pulse">{text}</span>
      <span className="ml-1 text-pink-500 dark:text-cyan-400">|</span>
    </div>
  );
}
