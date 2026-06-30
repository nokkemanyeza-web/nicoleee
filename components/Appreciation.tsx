"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../config";
import { Sparkles } from "lucide-react";

export default function Appreciation() {
  return (
    <section className="py-24 relative px-4 max-w-6xl mx-auto w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          Things I Appreciate About You <Sparkles className="text-purple-400" />
        </h2>
        <p className="text-slate-400">Just a few of the million reasons why you are so special.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {siteConfig.appreciations.map((text, index) => {
          const initialRotate = (index % 5) * 2 - 4;
          const animateRotate = (index % 3) * 2 - 2;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: initialRotate }}
              whileInView={{ opacity: 1, y: 0, rotate: animateRotate }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card max-w-xs w-full text-center p-6 relative group cursor-pointer"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-pink-500 rounded-full mix-blend-screen filter blur-[10px] opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <p className="text-lg font-medium text-slate-100">{text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
