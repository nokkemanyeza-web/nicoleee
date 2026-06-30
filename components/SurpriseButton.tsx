"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function SurpriseButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ec4899', '#a855f7', '#fb7185']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#a855f7', '#fb7185']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-shadow"
      >
        <Gift className="w-8 h-8 animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-gradient-to-br from-pink-950 to-purple-950 border border-pink-500/30 p-8 md:p-12 rounded-3xl max-w-lg w-full text-center relative shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto mb-6 animate-pulse" />
              
              <h3 className="text-3xl font-bold text-white mb-6 font-handwriting tracking-wider">
                A Little Surprise
              </h3>
              
              <p className="text-xl md:text-2xl text-pink-100 font-light leading-relaxed">
                "Out of the billions of people in this world... somehow I got lucky enough to find you."
              </p>
              
              <div className="mt-8">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10"
                >
                  I love you too
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
