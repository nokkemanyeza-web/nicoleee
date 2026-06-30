"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../config";
import { motion } from "framer-motion";
import { Clock, Heart, Calendar } from "lucide-react";

export default function LoveCounter() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(siteConfig.anniversaryDate).getTime();
      const now = new Date().getTime();
      
      const difference = now - start;
      if (difference < 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTime({ days, hours, minutes });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

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
          Our Journey <Heart className="text-pink-500 fill-pink-500" />
        </h2>
        <p className="text-slate-400">Counting every single moment since you became mine.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <CounterCard 
          icon={<Calendar className="w-8 h-8 text-pink-400" />} 
          value={time.days} 
          label="Days we've been together" 
          delay={0.1}
        />
        <CounterCard 
          icon={<Clock className="w-8 h-8 text-purple-400" />} 
          value={time.days * 24 + time.hours} 
          label="Hours we've spent loving each other" 
          delay={0.2}
        />
        <CounterCard 
          icon={<Heart className="w-8 h-8 text-red-400" />} 
          value={time.days * 24 * 60 + time.hours * 60 + time.minutes} 
          label="Minutes you've been on my mind" 
          delay={0.3}
        />
      </div>
    </section>
  );
}

function CounterCard({ icon, value, label, delay }: { icon: React.ReactNode, value: number, label: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="glass-card flex flex-col items-center text-center group"
    >
      <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
        {value.toLocaleString()}
      </div>
      <div className="text-sm md:text-base text-slate-300 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
