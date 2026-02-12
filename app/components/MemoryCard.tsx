"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export default function MemoryCard({ memory }: { memory: Memory }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={() => setOpen(!open)}
      className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <p className="text-pink-600 font-semibold">{memory.date}</p>
      <h2 className="text-xl text-gray-400 font-bold mt-2">{memory.title}</h2>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4"
        >
          <p className="text-gray-700">{memory.description}</p>
          {memory.image && (
            <Image
              src={memory.image}
              width={300}
              height={300}
              alt=""
              className="mt-4 rounded-xl"
            />
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
