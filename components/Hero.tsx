import React from 'react';
import Section from './Section';
import Placeholder from './Placeholder';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-28">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left space-y-8 animate-fadeIn order-2 lg:order-1">
          <div className="space-y-4">
            <p className="text-stone-500 uppercase tracking-[0.2em] text-sm md:text-base">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 tracking-tight leading-[1.1]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-light text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto lg:mx-0 pt-4 leading-relaxed">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <p className="text-stone-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-stone-900 text-white text-sm uppercase tracking-wider hover:bg-stone-700 transition-colors duration-300 text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-stone-300 text-stone-800 text-sm uppercase tracking-wider hover:bg-stone-200 transition-colors duration-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Portrait Placeholder */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-64 h-80 md:w-80 md:h-[30rem] lg:w-full lg:h-[36rem] relative">
            <Placeholder label="Portrait Image" className="shadow-2xl shadow-stone-200" />
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border border-stone-200 hidden md:block"></div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
         <ArrowDown className="text-stone-400 w-6 h-6" />
      </div>
    </Section>
  );
};

export default Hero;