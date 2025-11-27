import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Article } from "../types";
import { useRouter } from "../router";

interface HeroSwiperProps {
  articles: Article[];
}

export const HeroSwiper: React.FC<HeroSwiperProps> = ({ articles }) => {
  const { navigate } = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = articles.slice(0, 5); // Take first 5 as featured

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentArticle = slides[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-ink">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentArticle.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }} // Slower, more cinematic Ken Burns
          className="absolute inset-0 z-0"
        >
          {/* 
             Fix for Desktop: object-cover object-top
             This positions the image so the top of the image (faces) is preserved.
             This works better than center alignment for fashion photography on wide screens.
          */}
          <img
            src={currentArticle.mainImage}
            alt={currentArticle.title}
            className="w-full h-full object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          key={`text-${currentArticle.id}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1 mb-6 border border-white/30 text-white text-xs uppercase tracking-[0.25em] backdrop-blur-md">
            Featured Issue
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white leading-[0.9] mb-8 drop-shadow-2xl tracking-tight">
            {currentArticle.title}
          </h1>
          <p className="text-zinc-200 text-lg md:text-2xl font-light italic max-w-2xl mb-10 leading-relaxed shadow-black drop-shadow-md">
            {currentArticle.subtitle}
          </p>
          <button
            onClick={() => navigate("ARTICLE", { id: currentArticle.id })}
            className="group flex items-center gap-6 text-white uppercase text-sm tracking-[0.2em] font-bold hover:text-accent-blue transition-colors"
          >
            Read Article
            <span className="bg-white group-hover:bg-accent-blue text-ink group-hover:text-white p-3 transition-colors duration-300">
              <ArrowRight size={18} />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Film Strip */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-ink/40 backdrop-blur-xl">
        <div className="container mx-auto grid grid-cols-5 divide-x divide-white/10">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative p-6 text-left group transition-all duration-500 ${
                idx === currentIndex ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              {idx === currentIndex && (
                <motion.div
                  layoutId="active-strip"
                  className="absolute top-0 left-0 w-full h-0.5 bg-accent-blue"
                />
              )}
              <span
                className={`block text-[10px] uppercase tracking-widest mb-2 ${
                  idx === currentIndex ? "text-accent-blue" : "text-zinc-500"
                }`}
              >
                0{idx + 1} — {slide.category}
              </span>
              <span
                className={`block font-serif text-sm truncate leading-relaxed ${
                  idx === currentIndex
                    ? "text-white"
                    : "text-zinc-400 group-hover:text-zinc-200"
                }`}
              >
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Indicators */}
      <div className="md:hidden absolute bottom-6 left-6 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
