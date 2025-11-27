import React from 'react';
import { HeroSwiper } from '../components/HeroSwiper';
import { ArticleCard } from '../components/ArticleCard';
import { ARTICLES } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../router';

export const Home: React.FC = () => {
  const { navigate } = useRouter();
  
  // Curate content
  const editorsPick = ARTICLES[0]; // Met Gala
  const trendingArticles = ARTICLES.slice(1, 7); // Next 6 articles
  
  return (
    <div className="min-h-screen">
      <HeroSwiper articles={ARTICLES} />
      
      {/* SECTION 1: EDITOR'S FOCUS (Asymmetrical Split) */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <span className="text-accent-blue uppercase text-xs tracking-[0.3em] font-bold mb-6 block">Editor's Focus</span>
             <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] mb-8">
               {editorsPick.title}
             </h2>
             <p className="text-xl font-serif italic text-zinc-500 mb-8 leading-relaxed border-l-2 border-accent-blue pl-6">
               "{editorsPick.subtitle}"
             </p>
             <div className="prose prose-zinc mb-10 text-zinc-600 font-light">
               <p>{editorsPick.excerpt}</p>
             </div>
             <button 
               onClick={() => navigate('ARTICLE', { id: editorsPick.id })}
               className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold border-b border-black pb-2 hover:text-accent-blue hover:border-accent-blue transition-all"
             >
               Read Full Story <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={editorsPick.mainImage} 
                alt={editorsPick.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MANIFESTO / NEWSLETTER (Visual Break) */}
      <section className="bg-ink text-white py-24 md:py-32 my-12">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block border border-white/20 px-4 py-1 rounded-full text-[10px] uppercase tracking-widest mb-8">The Inner Circle</span>
          <h2 className="font-serif text-4xl md:text-6xl max-w-4xl mx-auto leading-tight mb-8">
            "Fashion is not about utility. An accessory is merely a piece of iconography used to express individual identity."
          </h2>
          <p className="text-zinc-400 italic font-serif mb-12">— The Art of Fashion Manifesto</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="w-full bg-transparent border-b border-white/30 py-3 text-center text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
            />
            <button className="whitespace-nowrap px-8 py-3 bg-white text-ink text-xs uppercase tracking-widest font-bold hover:bg-accent-blue hover:text-white transition-colors">
              Join The List
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRENDING GRID */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-20">
          <span className="text-zinc-400 uppercase text-[10px] tracking-[0.4em] font-bold mb-4">Curated For You</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-center">Trending Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {trendingArticles.map((article, idx) => (
             <ArticleCard 
                key={article.id} 
                article={article} 
                // Feature the first item in the grid slightly differently if desired, 
                // but a uniform luxury grid is also very 'editorial'
             />
          ))}
        </div>
        
        <div className="flex justify-center mt-24">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('CATEGORY', { category: 'Runway' })}
            className="border border-ink text-ink px-12 py-5 uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-ink hover:text-white transition-colors"
          >
            View Full Archive
          </motion.button>
        </div>
      </section>
    </div>
  );
};