"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../config";
import { Heart } from "lucide-react";

export default function Timeline() {
  return (
    <section className="py-24 relative px-4 max-w-5xl mx-auto w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Future</h2>
        <p className="text-slate-400">Every moment leading up to forever.</p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full md:-translate-x-1/2 opacity-50"></div>

        <div className="space-y-12">
          {siteConfig.milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-4 border-pink-500 md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] z-10 -translate-x-[14px] md:translate-x-0">
                  <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="glass-card inline-block w-full hover:scale-105 transition-transform duration-300">
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-2 block">{milestone.date}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-slate-300">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
