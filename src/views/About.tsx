import React from 'react';
import { AUTHORS } from '../data/mockData';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Introduction */}
      <section className="container mx-auto px-6 mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-6xl md:text-8xl mb-12 max-w-4xl leading-[0.9]"
        >
          We curate the <span className="italic text-accent-blue">unspoken</span> dialogue between art and attire.
        </motion.h1>
        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-4 border-t border-black pt-6">
             <span className="text-xs uppercase tracking-widest font-bold block mb-4">Our Philosophy</span>
           </div>
           <div className="md:col-span-8">
             <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-800">
               Art of Fashion was founded on a simple premise: that fashion is the most accessible form of art we possess. It is the architecture of the self. We reject the fleeting nature of trends in favor of the enduring power of style, craftsmanship, and sustainable innovation.
             </p>
           </div>
        </div>
      </section>

      {/* Masthead */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
             <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent-blue">The Masthead</span>
             <h2 className="font-serif text-4xl mt-4">Editors & Contributors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AUTHORS.map((author, i) => (
              <motion.div 
                key={author.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden aspect-square mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={author.avatar} alt={author.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-xl">{author.name}</h3>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">{author.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6 mt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-ink text-white p-12 md:p-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Join the Conversation</h2>
            <p className="text-zinc-400 font-light max-w-md">
              Inquiries, submissions, and letters to the editor are welcome. We read everything, even if we cannot reply to all.
            </p>
          </div>
          <div className="space-y-8 md:border-l md:border-white/20 md:pl-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-1">General Inquiries</span>
              <a href="mailto:hello@artoffashion.com" className="font-serif text-2xl hover:text-accent-blue transition-colors">hello@artoffashion.com</a>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-1">Press & Media</span>
              <a href="mailto:press@artoffashion.com" className="font-serif text-2xl hover:text-accent-blue transition-colors">press@artoffashion.com</a>
            </div>
            <div>
               <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-1">Office</span>
               <p className="font-serif text-xl">14 Rue de la Mode, 75001 Paris, France</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
