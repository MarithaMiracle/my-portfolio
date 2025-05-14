// import { useState } from "react";

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi there! I'm your fun AI assistant. Ask me anything!" }
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     const prompt = `
// You are a fun, helpful, and witty assistant on a personal portfolio website. Answer playfully but informatively.
// User: ${input}
// Assistant:
//     `.trim();

//     try {
//       const res = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
//   "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           inputs: prompt,
//           parameters: {
//             max_new_tokens: 100,
//             temperature: 0.8
//           }
//         })
//       });

//       const data = await res.json();
//       const botReply = data?.[0]?.generated_text?.split("Assistant:")?.[1]?.trim() || "Oops, no reply!";

//       setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
//     } catch (error) {
//       setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong! 🤖" }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-white dark:bg-gray-900 rounded-lg max-w-md mx-auto shadow-lg">
//       <h2 className="text-xl font-bold mb-2 text-center">💬 AI Assistant</h2>
//       <div className="h-64 overflow-y-auto space-y-2 mb-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`p-2 rounded ${
//               msg.sender === "user" ? "bg-blue-100 dark:bg-blue-600 self-end text-right" : "bg-pink-100 dark:bg-pink-600"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         {loading && <div className="text-sm text-gray-400">Thinking...</div>}
//       </div>
//       <div className="flex space-x-2">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           className="flex-1 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
//           placeholder="Ask me anything..."
//         />
//         <button
//           onClick={handleSend}
//           disabled={loading}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;
