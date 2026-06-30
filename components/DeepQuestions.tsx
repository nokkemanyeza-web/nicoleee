"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../config";
import { MessageCircleHeart, CheckCircle2, Send } from "lucide-react";

export default function DeepQuestions() {
  const handleSendWhatsApp = () => {
    let message = "💌 *My Answers for You* 💌\n\n";
    
    let hasAnswers = false;
    siteConfig.deepQuestions.forEach((q, idx) => {
      const answer = localStorage.getItem(`q-${idx}`);
      if (answer && answer.trim() !== "") {
        hasAnswers = true;
        message += `*${q}*\n${answer}\n\n`;
      }
    });

    if (!hasAnswers) {
      alert("You haven't answered any questions yet!");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-24 relative px-4 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          Questions From My Heart <MessageCircleHeart className="text-pink-400" />
        </h2>
        <p className="text-slate-400">Tap a card to answer. Your answers are saved just for you.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {siteConfig.deepQuestions.map((q, idx) => (
          <FlipCard key={idx} question={q} id={`q-${idx}`} />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSendWhatsApp}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <Send className="w-5 h-5" />
          Send My Answers to You 💌
        </button>
      </div>
    </section>
  );
}

function FlipCard({ question, id }: { question: string, id: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(id);
    if (saved) {
      setAnswer(saved);
    }
  }, [id]);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.setItem(id, answer);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="relative h-64 w-full" style={{ perspective: 1000 }}>
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => !isFlipped && setIsFlipped(true)}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden glass-card flex flex-col items-center justify-center text-center p-6 border-pink-500/30 hover:border-pink-500/80 transition-colors"
        >
          <div className="absolute top-4 right-4 opacity-50">
            <MessageCircleHeart className="w-6 h-6 text-pink-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">{question}</h3>
          <p className="text-sm text-pink-300 mt-4 opacity-70">Tap to answer</p>
          {answer && (
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Answered
              </span>
            </div>
          )}
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden glass-card flex flex-col p-4 bg-slate-900/90"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-pink-300 truncate pr-2">{question}</h4>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Type your answer here..."
            className="flex-1 w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white resize-none focus:outline-none focus:border-pink-500/50 transition-colors"
          />
          <div className="mt-3 flex justify-end items-center gap-3">
            <AnimatePresence>
              {isSaved && (
                <motion.span 
                  initial={{ opacity: 0, x: 10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0 }}
                  className="text-xs text-green-400 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3" /> Saved
                </motion.span>
              )}
            </AnimatePresence>
            <button
              onClick={handleSave}
              className="px-4 py-1.5 bg-pink-600 hover:bg-pink-500 text-white text-sm rounded-full transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
