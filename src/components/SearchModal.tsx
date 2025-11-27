import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import type { Article } from '../types';
import { ARTICLES } from '../data/mockData';
import { useRouter } from '../router';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = ARTICLES.filter(art => 
        art.title.toLowerCase().includes(query.toLowerCase()) || 
        art.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-3xl bg-white p-8 md:p-12 shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-400 hover:text-ink">
          <X size={24} />
        </button>

        <h2 className="font-serif text-3xl font-bold mb-8 text-center">SEARCH ARCHIVE</h2>
        
        <input 
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search editorials, authors, or trends..."
          className="w-full border-b-2 border-zinc-200 py-4 text-xl md:text-2xl font-serif focus:outline-none focus:border-accent-blue placeholder-zinc-300"
        />

        <div className="mt-8 space-y-4">
          {results.length > 0 ? (
            results.map(article => (
              <div 
                key={article.id}
                onClick={() => { navigate('ARTICLE', { id: article.id }); onClose(); }}
                className="flex items-center justify-between group cursor-pointer py-3 border-b border-zinc-100 last:border-0"
              >
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-accent-blue block mb-1">{article.category}</span>
                   <h4 className="font-serif text-lg group-hover:text-accent-blue transition-colors">{article.title}</h4>
                </div>
                <ArrowRight size={16} className="text-zinc-300 group-hover:text-accent-blue transition-colors opacity-0 group-hover:opacity-100" />
              </div>
            ))
          ) : query.length > 1 ? (
             <p className="text-zinc-400 text-center italic mt-12">No results found for "{query}"</p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
};
