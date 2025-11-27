import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Article } from '../types';
import { useRouter } from '../router';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const { navigate } = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax movement - reduced range to prevent edge bleeding on different viewports
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`group cursor-pointer flex flex-col ${featured ? 'md:col-span-2' : ''}`}
      onClick={() => navigate('ARTICLE', { id: article.id })}
    >
      {/* 
        Image Container
        - Added aspect ratio classes for consistent geometry
        - overflow-hidden + transform-gpu strictly enforces clipping
      */}
      <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-zinc-100 transform-gpu z-0">
        
        {/* Parallax Image Wrapper */}
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 h-[120%] -top-[10%] w-full"
        >
          <motion.img 
            src={article.mainImage} 
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
          />
        </motion.div>

        {/* Cinematic Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700 ease-in-out" />
        
        {/* CTA Reveal - Perfectly Centered */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <div className="bg-white/95 backdrop-blur-md text-ink px-8 py-4 uppercase text-[10px] tracking-[0.25em] font-bold flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl border border-white/40">
            Read Story <ArrowUpRight size={12} className="text-accent-blue" />
          </div>
        </div>
      </div>

      <div className="pt-6 pb-2 pr-4 relative">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">
          <span className="text-accent-blue">{article.category}</span>
          <span className="w-px h-3 bg-zinc-200"></span>
          <span>{new Date(article.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
        </div>
        <h3 className={`font-serif font-medium leading-[1.1] group-hover:text-accent-blue transition-colors duration-500 ${featured ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
          {article.title}
        </h3>
        {featured && (
          <p className="mt-4 text-zinc-500 font-light text-base leading-relaxed max-w-xl">
            {article.subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};