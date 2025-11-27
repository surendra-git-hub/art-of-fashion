import React, { useEffect, useState } from 'react';
import type { Article, Author, Product } from '../types';
import { ARTICLES, AUTHORS } from '../data/mockData';
import { useRouter } from '../router';
import { motion } from 'framer-motion';
import { Share2, Heart, Clock, ArrowRight } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';

export const ArticleDetail: React.FC = () => {
  const { params, navigate } = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const found = ARTICLES.find(a => a.id === params.id);
    if (found) {
      setArticle(found);
      setAuthor(AUTHORS.find(a => a.id === found.authorId) || null);
    }
  }, [params.id]);

  if (!article) return <div className="min-h-screen flex items-center justify-center font-serif text-xl">Loading...</div>;

  // Simulate related content
  const related = ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Hero */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={article.mainImage} 
          alt={article.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 lg:p-24 text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl"
          >
            <div className="flex items-center gap-4 mb-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">
               <span>{article.category}</span>
               <span className="w-8 h-px bg-white/50" />
               <span>{article.readingTime}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 drop-shadow-lg">{article.title}</h1>
            <p className="text-lg md:text-2xl font-light italic text-white/90 max-w-3xl leading-relaxed">{article.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 lg:grid lg:grid-cols-12 gap-16">
        
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-16">
            {/* Author */}
            {author && (
              <div className="border-t-2 border-black pt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-6 text-zinc-400">Words By</span>
                <div className="flex items-start gap-4 mb-6">
                  <img src={author.avatar} alt={author.name} className="w-14 h-14 object-cover grayscale rounded-none" />
                  <div>
                    <h4 className="font-serif text-xl leading-none mb-1">{author.name}</h4>
                    <span className="text-[10px] text-accent-blue uppercase tracking-wider">{author.role}</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed font-serif italic border-l border-zinc-200 pl-4">{author.bio}</p>
              </div>
            )}

            {/* Shop The Look */}
            {article.products && article.products.length > 0 && (
              <div className="border-t-2 border-black pt-6">
                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-8 text-zinc-400">Shop The Look</span>
                 <div className="space-y-8">
                   {article.products.map(product => (
                     <a key={product.id} href={product.url} className="group block">
                       <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-zinc-100">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute bottom-0 left-0 w-full bg-white/90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                             <span className="text-[10px] uppercase tracking-widest flex items-center justify-between">Shop <ArrowRight size={10}/></span>
                          </div>
                       </div>
                       <p className="font-serif text-base leading-tight group-hover:text-accent-blue transition-colors">{product.name}</p>
                       <p className="text-xs text-zinc-500 mt-1 font-mono">{product.price}</p>
                     </a>
                   ))}
                 </div>
              </div>
            )}
            
            {/* Stats */}
            <div className="flex gap-6 pt-4">
               <button className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-red-600 transition-colors">
                  <Heart size={16} /> {article.likes}
               </button>
               <button className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-accent-blue transition-colors">
                  <Share2 size={16} /> Share
               </button>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-8 lg:col-start-5">
           <div className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:font-normal prose-p:font-light prose-p:leading-8 prose-p:text-zinc-700 prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-3xl prose-blockquote:leading-normal prose-blockquote:border-none prose-blockquote:pl-0 prose-blockquote:text-center prose-blockquote:my-12 prose-img:w-full prose-img:aspect-[16/9] prose-img:object-cover max-w-none">
             {/* Mobile Date */}
             <div className="lg:hidden mb-8 text-xs uppercase tracking-widest text-zinc-500 border-b border-zinc-200 pb-4">
               {new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
             </div>

             <div dangerouslySetInnerHTML={{ __html: article.content.replace('<p>', '<p class="first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-[-6px] first-letter:text-ink font-serif first-letter:leading-[0.8]">') }} />
           </div>

           {/* Tags */}
           <div className="mt-20 pt-10 border-t border-zinc-200">
             <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-4 block">Filed Under</span>
             <div className="flex flex-wrap gap-3">
               {article.tags.map(tag => (
                 <button 
                   onClick={() => navigate('CATEGORY', { category: article.category })}
                   key={tag} 
                   className="px-6 py-2 border border-zinc-200 text-xs uppercase tracking-widest hover:bg-ink hover:text-white hover:border-ink transition-colors"
                 >
                   {tag}
                 </button>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* More from Category */}
      <section className="bg-zinc-50 py-24 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-200 pb-6">
             <div>
                <span className="text-[10px] uppercase tracking-widest text-accent-blue font-bold mb-2 block">Related Stories</span>
                <h3 className="font-serif text-3xl md:text-4xl">More from {article.category}</h3>
             </div>
             <button 
                onClick={() => navigate('CATEGORY', { category: article.category })}
                className="mt-6 md:mt-0 text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-accent-blue hover:border-accent-blue transition-colors"
             >
               View Archive
             </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map(art => (
              <ArticleCard key={art.id} article={art} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};