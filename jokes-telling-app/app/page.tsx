"use client";

import { useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, append, isLoading } = useChat();
  const genres = [
    { emoji: "💡", value: "One-line joke" },
    { emoji: "🕵️", value: "Observational comedy" },
    { emoji: "📚", value: "Wordplay Comedy" },
  ];
  const tones = [
    { emoji: "😊", value: "Happy" },
    { emoji: "😢", value: "Sad" },
    { emoji: "😏", value: "Sarcastic" },
    { emoji: "😎", value: "clever" },
  ];
  const [state, setState] = useState({
    genre: "",
    tone: "",
  });
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <main className="mx-auto w-full p-24 flex flex-col">
      <div className="p4 m-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Joke Generation App</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Customize the joke by selecting the theme and tone.
            </p>
          </div>

          {/* genre selection code */}

          {/* tone selection code */}

          {/* button code */}

          {/* chat messages code */}
        </div>
      </div>
    </main>
  );
}
