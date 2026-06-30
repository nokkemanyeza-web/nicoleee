"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart } from "lucide-react";

const notes = [
  "I hope today reminds you how amazing you are.",
  "I miss you.",
  "I can't wait to hug you.",
  "Thank you for loving me.",
  "I'm proud of you.",
  "You're my favorite thought.",
  "You are so beautiful.",
  "I'm so lucky to have you."
];

export default function LoveNotes() {
  const [activeNote, setActiveNote] = useState<string | null>(null);

  // Generate deterministic random positions for 5 envelopes
  const envelopes = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    left: `${15 + (i * 15)}%`,
    delay: i * 2,
    duration: 15 + (i % 3) * 5,
    note: notes[i % notes.length]
  }));

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {envelopes.map((env) => (
          <motion.div
            key={env.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: env.duration, 
              repeat: Infinity, 
              delay: env.delay,
              ease: "linear"
            }}
            className="absolute pointer-events-auto cursor-pointer"
            style={{ left: env.left }}
            onClick={() => setActiveNote(env.note)}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <div className="relative group">
              <Mail className="w-10 h-10 text-pink-300 drop-shadow-lg group-hover:text-pink-400 transition-colors" fill="currentColor" />
              <Heart className="w-4 h-4 text-red-500 fill-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity animate-bounce" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeNote && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setActiveNote(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white p-8 md:p-12 rounded-lg max-w-sm w-full text-center shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500 mx-auto mb-4" />
              <p className="font-handwriting text-3xl text-slate-800 leading-relaxed">
                "{activeNote}"
              </p>
              <p className="text-right font-handwriting text-xl text-slate-500 mt-4">- N</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
