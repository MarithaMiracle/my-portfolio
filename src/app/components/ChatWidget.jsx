"use client";
import { useState } from "react";

const ChatWidget = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Whoa! Look who’s here! 🎉 Welcome to the party! I’m MariBot, your AI buddy, ready to sprinkle some fun and help you explore. Tap around, ask me anything, or just vibe with me. Let's roll!`,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  // Handle sending the input to the API and processing the response
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      if (res.ok) {
        const botReply = data.result || "Sorry, I didn't get that!";
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      } else {
        setMessages((prev) => [...prev, { sender: "bot", text: data.error }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Something went wrong! 🤖\n${error.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const circleColor = theme === "light" ? "#f785d3" : "#03e9f4"; // pink or blue circle

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="
            rounded-full shadow-lg flex items-center justify-center bg-transparent
            hover:scale-105 transition hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] 
            dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4]
            
            w-[48px] h-[48px]             /* base size for smallest screens */
            sm:w-[56px] sm:h-[56px]      /* small devices */
            md:w-[64px] md:h-[64px]      /* medium devices */
            lg:w-[72px] lg:h-[72px]      /* large devices */
            xl:w-[80px] xl:h-[80px]      /* extra large devices */
          "
        >
          {/* Circle SVG background */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pink circle for light */}
            <circle cx="32" cy="32" r="32" className="fill-[#f785d3] dark:fill-none" />
            {/* Blue circle for dark */}
            <circle cx="32" cy="32" r="32" className="fill-none dark:fill-[#03e9f4]" />
            {/* Logo inside circle */}
            <image href="/images/Logo.svg" x="12" y="12" width="40" height="40" />
          </svg>
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-black border border-pink-300 dark:border-blue-200 dark:bg-[#04060f] rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#eb94cf] to-pink-400 dark:from-[#03e9f4] dark:to-blue-400 text-black font-bold flex justify-between items-center">
            <span>MariBot AI Assistant</span>
            <button onClick={toggleChat}>✖</button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-white dark:text-gray-200">
            <div className="flex flex-col">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-4 max-w-[75%] p-3 rounded-lg shadow ${
                    msg.sender === "user"
                      ? "bg-pink-500 dark:bg-blue-600 self-end text-right"
                      : "bg-pink-200 dark:bg-blue-300 text-black dark:text-black"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            {loading && (
              <div className="text-sm text-gray-400 dark:text-gray-400">Thinking...</div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-pink-300 dark:border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-blue-400 text-black dark:text-black"
              placeholder="Type your question..."
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
