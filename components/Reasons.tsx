"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "../config";
import { Heart } from "lucide-react";

export default function Reasons() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 relative px-4 max-w-4xl mx-auto w-full">
      <div className="text-center mb-24 sticky top-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-slate-950/80 backdrop-blur-md rounded-2xl p-6 border border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-3 text-gradient">
            Reasons I Love You
          </h2>
          <p className="text-slate-400">Keep scrolling...</p>
        </motion.div>
      </div>

      <div className="space-y-32">
        {siteConfig.reasons.map((reason, index) => (
          <ReasonItem key={index} reason={reason} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

function ReasonItem({ reason, index }: { reason: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="flex flex-col items-center text-center relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-32 bg-pink-500/10 rounded-full mix-blend-screen filter blur-[50px]"></div>
      
      <span className="text-pink-500 font-bold text-xl mb-4 flex items-center gap-2">
        <Heart className="w-4 h-4 fill-pink-500" /> Reason #{index}
      </span>
      <h3 className="text-2xl md:text-4xl font-medium text-white max-w-2xl leading-tight">
        "{reason}"
      </h3>
    </motion.div>
  );
}
