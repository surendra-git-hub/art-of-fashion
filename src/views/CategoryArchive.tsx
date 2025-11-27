import React, { useState, useMemo } from 'react';
import { useRouter } from '../router';
import { ARTICLES } from '../data/mockData';
import { ArticleCard } from '../components/ArticleCard';
import { motion, AnimatePresence } from 'framer-motion';

export const CategoryArchive: React.FC = () => {
  const { params } = useRouter();
  const categoryName = params.category || "All Stories";
  const [filter, setFilter] = useState<'LATEST' | 'POPULAR'>('LATEST');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredArticles = useMemo(() => {
    let arts = params.category 
      ? ARTICLES.filter(a => a.category === params.category)
      : ARTICLES;
    
    if (filter === 'POPULAR') {
      arts = [...arts].sort((a, b) => b.likes - a.likes);
    } else {
      arts = [...arts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return arts;
  }, [params.category, filter]);

  const displayArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-black pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Archive</span>
            <h1 className="font-serif text-6xl md:text-8xl text-ink leading-none">{categoryName}</h1>
          </div>
          
          {/* Filters */}
          <div className="flex gap-1 mt-8 md:mt-0 bg-zinc-100 p-1">
             <button 
               onClick={() => setFilter('LATEST')}
               className={`px-6 py-2 text-xs uppercase tracking-widest font-bold transition-all ${filter === 'LATEST' ? 'bg-white shadow-sm text-ink' : 'text-zinc-500 hover:text-ink'}`}
             >
               Latest
             </button>
             <button 
               onClick={() => setFilter('POPULAR')}
               className={`px-6 py-2 text-xs uppercase tracking-widest font-bold transition-all ${filter === 'POPULAR' ? 'bg-white shadow-sm text-ink' : 'text-zinc-500 hover:text-ink'}`}
             >
               Popular
             </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence>
            {displayArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {visibleCount < filteredArticles.length && (
          <div className="flex justify-center mt-24">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="group relative px-8 py-4 bg-ink text-white overflow-hidden"
            >
              <span className="relative z-10 text-xs uppercase tracking-widest font-bold">Load More Stories</span>
              <div className="absolute inset-0 bg-accent-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
