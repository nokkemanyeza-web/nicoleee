"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import LoveCounter from "@/components/LoveCounter";
import Appreciation from "@/components/Appreciation";
import LoveLetter from "@/components/LoveLetter";
import DeepQuestions from "@/components/DeepQuestions";
import Reasons from "@/components/Reasons";
import Timeline from "@/components/Timeline";
import MemoryGallery from "@/components/MemoryGallery";
import InteractiveSky from "@/components/InteractiveSky";
import FinalEnding from "@/components/FinalEnding";
import SurpriseButton from "@/components/SurpriseButton";
import LoveNotes from "@/components/LoveNotes";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-pink-500/30 overflow-hidden relative">
      <AnimatePresence>
        {!isOpened ? (
          <Hero key="hero" onOpen={() => setIsOpened(true)} />
        ) : (
          <div className="w-full flex flex-col items-center">
            <AudioPlayer isPlaying={isOpened} />
            
            {/* The main content that appears after clicking Open My Heart */}
            <div className="w-full relative z-10 flex flex-col items-center">
              {/* Subtle background gradient overlay */}
              <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/10 via-slate-950 to-slate-950 z-0"></div>
              
              <LoveCounter />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              
              <Appreciation />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              
              <LoveLetter />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              
              <DeepQuestions />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              
              <Reasons />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              
              <Timeline />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              
              <MemoryGallery />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              
              <InteractiveSky />
              
              <FinalEnding />

              {/* Floating interactive elements */}
              <SurpriseButton />
              <LoveNotes />
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
