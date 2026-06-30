"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const wishes = [
  "I wished for someone exactly like you.",
  "I wished we'd meet someday.",
  "My biggest wish already came true.",
  "I wish to hold your hand soon.",
  "I wish for your happiness every single day.",
  "I wish to wake up next to you.",
  "I wish to travel the world with you."
];

export default function InteractiveSky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section ref={containerRef} className="h-screen min-h-[600px] relative w-full overflow-hidden flex flex-col items-center justify-center bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-slate-950 z-0"></div>
      
      {/* Stars Generation */}
      {isMounted && Array.from({ length: 50 }).map((_, i) => (
        <StarItem key={i} wish={wishes[i % wishes.length]} index={i} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center pointer-events-none"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          A Sky Full of Stars
        </h2>
        <p className="text-slate-300 max-w-md mx-auto">
          Every star holds a wish I've made for us. Tap a star to reveal it.
        </p>
      </motion.div>
    </section>
  );
}

function StarItem({ wish, index }: { wish: string, index: number }) {
  // Using deterministic psuedo-random values based on index to avoid hydration mismatch
  // even though it's inside isMounted, it's safer.
  const top = (index * 13) % 100;
  const left = (index * 29) % 100;
  const size = (index % 3) * 0.5 + 0.5;
  const delay = (index % 5) * 0.5;

  return (
    <div 
      className="absolute group z-20"
      style={{ top: `${top}%`, left: `${left}%` }}
    >
      <motion.button
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay }}
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 1.5 }}
        className="text-yellow-200"
      >
        <Star style={{ width: `${size}rem`, height: `${size}rem` }} className="fill-yellow-200 drop-shadow-[0_0_10px_rgba(254,240,138,0.8)]" />
      </motion.button>
      
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-[200px] bg-white/10 backdrop-blur-md text-white text-xs p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/20 shadow-xl">
        "{wish}"
      </div>
    </div>
  );
}
