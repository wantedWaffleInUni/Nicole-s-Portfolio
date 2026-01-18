import React from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-stone-100">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Endorsements</h2>
        <p className="text-stone-500 max-w-xl mx-auto">Feedback from colleagues and clients.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {TESTIMONIALS.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-500 group relative"
          >
            <div className="absolute top-8 left-8 text-stone-200 group-hover:text-stone-300 transition-colors">
              <Quote size={40} />
            </div>
            
            <div className="relative z-10 pt-8">
              <p className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex flex-col">
                <span className="text-sm font-bold text-stone-900 uppercase tracking-widest">
                  {testimonial.author}
                </span>
                <span className="text-xs text-stone-500 font-mono mt-1">
                  {testimonial.role} {testimonial.company && `— ${testimonial.company}`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;