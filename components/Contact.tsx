import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-stone-900 text-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Let's create something impactful together.
          </h2>
          <p className="text-stone-400 text-lg font-light leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities in marketing strategy and financial analysis.
          </p>
          
          <div className="space-y-4 pt-8">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-4 text-xl hover:text-stone-300 transition-colors group">
              <div className="p-3 bg-stone-800 rounded-full group-hover:bg-stone-700 transition-colors">
                <Mail size={24} />
              </div>
              <span>{PERSONAL_INFO.email}</span>
            </a>
            
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-xl hover:text-stone-300 transition-colors group">
              <div className="p-3 bg-stone-800 rounded-full group-hover:bg-stone-700 transition-colors">
                <Linkedin size={24} />
              </div>
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="bg-stone-800 p-8 md:p-12 rounded-sm border border-stone-700">
           <h3 className="font-serif text-2xl mb-6">Quick Inquiry</h3>
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-stone-400">Name</label>
                 <input type="text" className="w-full bg-stone-900 border border-stone-700 p-3 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Jane Doe" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-stone-400">Email</label>
                 <input type="email" className="w-full bg-stone-900 border border-stone-700 p-3 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors" placeholder="jane@example.com" />
               </div>
             </div>
             
             <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">Message</label>
                <textarea className="w-full bg-stone-900 border border-stone-700 p-3 h-32 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Tell me about your project..."></textarea>
             </div>

             <button type="submit" className="w-full py-4 bg-stone-100 text-stone-900 font-medium uppercase tracking-widest text-xs hover:bg-stone-200 transition-colors">
               Send Message
             </button>
           </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;