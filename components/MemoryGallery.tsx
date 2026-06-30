"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

// We'll use 5 images based on the ones you provided
const galleryImages = [
  { id: 1, src: "/gallery/1.jpg", caption: "Looking beautiful as always" },
  { id: 2, src: "/gallery/2.jpg", caption: "My favorite smile" },
  { id: 3, src: "/gallery/3.jpg", caption: "Stunning" },
  { id: 4, src: "/gallery/4.jpg", caption: "Absolutely gorgeous" },
  { id: 5, src: "/gallery/5.jpg", caption: "Perfect in every way" }
];

export default function MemoryGallery() {
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
          Memory Gallery <Camera className="text-purple-400" />
        </h2>
        <p className="text-slate-400">Some of my absolute favorite photos of you.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((img, index) => (
          <PolaroidCard key={img.id} src={img.src} caption={img.caption} index={index} />
        ))}
      </div>
    </section>
  );
}

function PolaroidCard({ src, caption, index }: { src: string, caption: string, index: number }) {
  const rotation = index % 2 === 0 ? (index % 3) * -2 - 2 : (index % 3) * 2 + 2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-4 pb-6 shadow-xl rounded-sm cursor-pointer relative"
      style={{ rotate: `${rotation}deg` }}
    >
      <div className="w-full aspect-square bg-slate-200 rounded-sm mb-4 overflow-hidden relative flex items-center justify-center">
        {/* Render the actual image */}
        <Image 
          src={src}
          alt={caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="font-handwriting text-2xl text-slate-800 text-center">{caption}</p>
    </motion.div>
  );
}
