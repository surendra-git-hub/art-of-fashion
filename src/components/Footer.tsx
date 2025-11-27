import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useRouter } from '../router';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-ink text-white pt-20 pb-10 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="font-serif text-2xl font-bold tracking-tighter mb-6">
              ART <span className="italic font-light">of</span> FASHION
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Curating the sharpest edges of luxury, sustainability, and artistic expression in the modern world.
            </p>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-zinc-500">Sections</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => navigate('CATEGORY', { category: 'Runway' })} className="hover:text-accent-blue transition-colors">Runway</button></li>
              <li><button onClick={() => navigate('CATEGORY', { category: 'Street Style' })} className="hover:text-accent-blue transition-colors">Street Style</button></li>
              <li><button onClick={() => navigate('CATEGORY', { category: 'Editorial' })} className="hover:text-accent-blue transition-colors">Editorial</button></li>
              <li><button onClick={() => navigate('ABOUT')} className="hover:text-accent-blue transition-colors">About Us</button></li>
            </ul>
          </div>

          <div>
             <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-zinc-500">Connect</h4>
             <ul className="space-y-3 text-sm">
               <li><a href="#" className="flex items-center gap-2 hover:text-accent-blue transition-colors"><Instagram size={16}/> Instagram</a></li>
               <li><a href="#" className="flex items-center gap-2 hover:text-accent-blue transition-colors"><Twitter size={16}/> Twitter</a></li>
               <li><a href="#" className="flex items-center gap-2 hover:text-accent-blue transition-colors"><Facebook size={16}/> Facebook</a></li>
             </ul>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-zinc-500">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="YOUR@EMAIL.COM" 
                className="bg-zinc-900 border border-zinc-800 p-3 text-sm focus:outline-none focus:border-accent-blue transition-colors text-white placeholder-zinc-600 rounded-none"
              />
              <button className="bg-white text-ink px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-accent-blue hover:text-white transition-colors rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase tracking-wider">
          <p>&copy; 2024 Art of Fashion Magazine.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Privacy</a>
            <a href="#" className="hover:text-zinc-400">Terms</a>
            <a href="#" className="hover:text-zinc-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
