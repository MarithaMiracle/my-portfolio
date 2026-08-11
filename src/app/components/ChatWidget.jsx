"use client";
import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "What's her experience?",
  "Tell me about GoWithMe",
  "What is CleanScape?",
  "What stack does she use?",
  "How can I contact her?",
  "Open to European roles?",
];

const WELCOME =
  "Hi, I'm MariBot! Ask me about Maritha's experience, projects, stack, or how to get in touch. Random questions are welcome too.";

function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12px] sm:text-sm leading-relaxed shadow-sm ${
          isUser
            ? "rounded-br-md bg-[#eb94cf] text-black dark:bg-[#03e9f4] dark:text-black"
            : "rounded-bl-md border border-white/10 bg-white/10 text-white"
        }`}
      >
        {!isUser && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#eb94cf] dark:text-cyan-300">
            MariBot
          </p>
        )}
        <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{text}</p>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#eb94cf] dark:bg-cyan-300 [animation-delay:-0.2s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#eb94cf] dark:bg-cyan-300 [animation-delay:-0.1s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#eb94cf] dark:bg-cyan-300" />
        </div>
      </div>
    </div>
  );
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ sender: "bot", text: WELCOME }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const [canScrollSuggestions, setCanScrollSuggestions] = useState(false);
  const [suggestionsAtEnd, setSuggestionsAtEnd] = useState(false);

  const showSuggestions = messages.length <= 1 && !loading;

  const updateSuggestionsScrollState = () => {
    const el = suggestionsRef.current;
    if (!el) return;
    const overflow = el.scrollWidth - el.clientWidth > 4;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setCanScrollSuggestions(overflow);
    setSuggestionsAtEnd(atEnd);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!showSuggestions || !isOpen) return undefined;
    const frame = requestAnimationFrame(updateSuggestionsScrollState);
    const el = suggestionsRef.current;
    if (!el) return () => cancelAnimationFrame(frame);
    const onScroll = () => updateSuggestionsScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateSuggestionsScrollState);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateSuggestionsScrollState);
    };
  }, [showSuggestions, isOpen, messages.length]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    setError("");
  };

  const sendMessage = async (rawText) => {
    const text = rawText.trim();
    if (!text || loading) return;

    const userMessage = { sender: "user", text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError("");

    const history = nextMessages
      .filter((m) => m.sender === "user" || m.sender === "bot")
      .slice(0, -1)
      .map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }));

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text, messages: history }),
      });

      const data = await res.json();
      if (!res.ok) {
        const failText = data.error || "Something went wrong.";
        setError(failText);
        setMessages((prev) => [...prev, { sender: "bot", text: failText }]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.result || "Sorry, I didn't get that." },
      ]);
    } catch (err) {
      const failText = `Couldn't reach MariBot right now. ${err.message || ""}`.trim();
      setError(failText);
      setMessages((prev) => [...prev, { sender: "bot", text: failText }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div
      className="fixed z-[60]"
      style={{
        right: "max(0.75rem, env(safe-area-inset-right))",
        bottom: "max(0.75rem, env(safe-area-inset-bottom))",
      }}
    >
      {!isOpen && (
        <button
          type="button"
          onClick={toggleChat}
          aria-label="Open MariBot chat"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#121212] shadow-[0_0_0_1px_rgba(235,148,207,0.35),0_10px_30px_rgba(0,0,0,0.45)] transition hover:scale-105 hover:shadow-[0_0_20px_rgba(235,148,207,0.45)] dark:border-cyan-400/30 dark:shadow-[0_0_0_1px_rgba(3,233,244,0.45),0_10px_30px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_0_20px_rgba(3,233,244,0.45)] sm:h-14 sm:w-14"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            className="h-full w-full p-1.5 sm:p-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="28" className="fill-[#eb94cf]/20 dark:fill-cyan-400/20" />
            <image href="/images/Logo.svg" x="14" y="14" width="36" height="36" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-label="MariBot chat"
          className="flex w-[min(320px,calc(100vw-1.5rem))] h-[min(420px,58dvh)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_16px_40px_rgba(0,0,0,0.5)] dark:bg-[#04060f] sm:w-[360px] sm:h-[480px]"
        >
          <div className="relative shrink-0 border-b border-white/10 px-3 py-2.5">
            <div className="absolute inset-0 bg-gradient-to-r from-[#eb94cf]/20 via-transparent to-transparent dark:from-cyan-400/20" />
            <div className="relative flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eb94cf]/15 dark:bg-cyan-400/15">
                  <img src="/images/Logo.svg" alt="" className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">MariBot</p>
                  <p className="truncate text-[10px] text-[#ADB7BE]">Career · or anything</p>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleChat}
                aria-label="Close chat"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm text-[#ADB7BE] transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="min-h-0 flex-1 space-y-2.5 overflow-y-auto overscroll-contain px-3 py-2.5"
          >
            {messages.map((msg, idx) => (
              <MessageBubble key={`${msg.sender}-${idx}`} sender={msg.sender} text={msg.text} />
            ))}
            {loading && <TypingIndicator />}
          </div>

          {showSuggestions && (
            <div className="relative shrink-0 px-3 pb-2">
              {canScrollSuggestions && (
                <p className="mb-1 flex items-center gap-1 text-[10px] text-[#6b7280]">
                  <span>Swipe for more</span>
                  <span
                    className={`inline-block transition ${
                      suggestionsAtEnd ? "opacity-30" : "animate-pulse text-[#eb94cf] dark:text-cyan-300"
                    }`}
                    aria-hidden
                  >
                    →
                  </span>
                </p>
              )}
              <div className="relative">
                <div
                  ref={suggestionsRef}
                  className="flex gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-[#ADB7BE] transition hover:border-[#eb94cf]/50 hover:text-white dark:hover:border-cyan-400/50 sm:text-[11px]"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                {canScrollSuggestions && !suggestionsAtEnd && (
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent dark:from-[#04060f]"
                    aria-hidden
                  />
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSend} className="shrink-0 border-t border-white/10 p-2.5">
            <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 focus-within:border-[#eb94cf]/50 dark:focus-within:border-cyan-400/50">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                disabled={loading}
                placeholder="Ask anything..."
                className="max-h-20 min-h-[32px] w-0 flex-1 resize-none bg-transparent py-1 text-[13px] text-white placeholder:text-[#6b7280] focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eb94cf] text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-[#03e9f4]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
            {error ? <p className="mt-1.5 text-[10px] text-red-300/90">{error}</p> : null}
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
