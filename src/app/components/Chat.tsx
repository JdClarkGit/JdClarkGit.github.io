"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with AI service
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:p-8">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          Talk to A.I. Joseph{" "}
          <span role="img" aria-label="robot">
            🤖
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Want to reach out, but don&apos;t want the hassle? Chat with this AI
          representation of me. Ask about my skills, experience and how I might
          be able to contribute. (note this model may occasionally hallucinate,
          so don&apos;t take everything it says as truth about me.)
        </p>

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything!"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            disabled={!message.trim()}
          >
            <Send className="w-6 h-6" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Chat;
