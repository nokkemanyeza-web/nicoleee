"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FinalEnding() {
  return (
    <section className="h-screen min-h-[800px] relative w-full flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Night Sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0"></div>
      
      {/* Glowing Moon */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-slate-100 shadow-[0_0_100px_rgba(255,255,255,0.4)] z-10"
      >
        {/* Moon craters */}
        <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-slate-200/50 blur-[2px]"></div>
        <div className="absolute bottom-10 right-8 w-6 h-6 rounded-full bg-slate-200/30 blur-[1px]"></div>
        <div className="absolute top-12 right-6 w-4 h-4 rounded-full bg-slate-200/40 blur-[1px]"></div>
      </motion.div>

      {/* Floating Stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 31) % 100}%`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: (i % 3) + 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-slate-300 font-light leading-relaxed mb-6"
        >
          No matter where life takes us...
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xl md:text-3xl text-slate-300 font-light leading-relaxed mb-6"
        >
          No matter how many miles separate us...
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 3.5 }}
          className="text-xl md:text-3xl text-slate-300 font-light leading-relaxed mb-12"
        >
          No matter how much time passes...
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, delay: 5 }}
        >
          <p className="text-3xl md:text-5xl font-bold text-white mb-6">
            I'll always choose you.
          </p>
          <p className="text-2xl md:text-4xl font-bold text-white mb-6">
            Every single time.
          </p>
          <p className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-16">
            Forever.
          </p>
          
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mb-6" />
            </motion.div>
            
            <p className="font-handwriting text-3xl text-pink-200">
              Love,<br/>Ash2flyy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
