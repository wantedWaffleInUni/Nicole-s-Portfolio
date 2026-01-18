import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        
        {/* Left Col - Bio Header */}
        <div className="md:col-span-5 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
            Driven by data,<br />defined by strategy.
          </h2>
          <div className="w-16 h-0.5 bg-stone-300"></div>
          <p className="text-stone-600 leading-loose text-lg font-light">
            I am a final-year Business and Commerce undergraduate at Monash University, specializing in Applied Economics and Finance. 
            My passion lies in bridging the analytical world of finance with the creative demands of marketing to drive business growth.
          </p>
        </div>

        {/* Right Col - Education Card */}
        <div className="md:col-span-7">
          <div className="bg-stone-50 border border-stone-100 p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <GraduationCap size={120} />
            </div>
            
            <span className="text-stone-400 text-sm uppercase tracking-wider block mb-2">Education</span>
            <h3 className="font-serif text-2xl text-stone-900 mb-1">{EDUCATION.institution}</h3>
            <p className="text-stone-600 font-medium mb-4">{EDUCATION.degree}</p>
            <p className="text-stone-500 text-sm mb-6 font-mono">{EDUCATION.period}</p>
            
            <ul className="space-y-3">
              {EDUCATION.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-stone-600 leading-relaxed">
                  <span className="mr-3 mt-2 block w-1.5 h-1.5 bg-stone-400 rounded-full flex-shrink-0"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;