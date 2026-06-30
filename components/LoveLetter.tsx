"use client";

import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <section className="py-24 relative px-4 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-16 shadow-2xl border border-white/20"
      >
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-pink-400/50 shadow-[0_0_10px_rgba(244,114,182,0.8)]"></div>
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-purple-400/50 shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-pink-400/50 shadow-[0_0_10px_rgba(244,114,182,0.8)]"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-purple-400/50 shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-gradient">
          A Letter From My Heart
        </h2>
        
        <div className="font-handwriting text-2xl md:text-4xl leading-relaxed text-slate-200 space-y-6">
          <p>My Dearest Nicole,</p>
          
          <p>
            I wanted to make something special for you, something that could hold a little piece of my heart 
            for you to look at whenever you miss me. You mean more to me than I could ever possibly explain 
            in words, but I will spend the rest of my life trying to show you.
          </p>

          <p>
            Since the day our paths crossed, you have brought so much happiness, light, and warmth into my life.
            I am incredibly grateful for you. Even though we are far apart right now, you never feel far from my heart.
            Every conversation we have becomes the absolute best part of my day.
          </p>

          <p>
            I admire your kindness, your beautiful heart, your gorgeous smile, your strength, and the incredible 
            person you are. You inspire me to be better. I look forward to the day we finally meet in person, 
            to hold you and never want to let go.
          </p>

          <p className="font-bold text-pink-300">
            I love you more than words could ever explain.
          </p>

          <p className="pt-4 text-right">
            Yours always,<br/>
            Nathan
          </p>
        </div>
      </motion.div>
    </section>
  );
}
