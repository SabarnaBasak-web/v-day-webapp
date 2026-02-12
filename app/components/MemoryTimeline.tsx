"use client";

import MemoryCard from "./MemoryCard";
import { memories } from "../data/memories";

export default function MemoryTimeline() {
  return (
    <div className="relative max-w-3xl mx-auto py-20 px-6">
      {/* Vertical Line */}
      <div className="absolute left-1/2 w-1 bg-pink-300 h-full -translate-x-1/2" />

      <div className="space-y-16">
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-[45%]">
              <MemoryCard memory={memory} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
