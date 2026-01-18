import React from 'react';
import Section from './Section';
import { EXPERIENCE, ACHIEVEMENTS } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Experience Column */}
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl text-stone-900 mb-10">Experience & Leadership</h2>
          <div className="space-y-12 border-l border-stone-200 pl-8 md:pl-12 relative">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full border-2 border-stone-300 bg-white group-hover:border-stone-900 transition-colors"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-medium text-stone-900">{job.role}</h3>
                  <span className="text-sm text-stone-400 font-mono mt-1 md:mt-0">{job.period}</span>
                </div>
                <p className="text-stone-500 font-serif italic mb-4">{job.company}</p>
                <ul className="space-y-2">
                  {job.description.map((desc, i) => (
                    <li key={i} className="text-stone-600 text-sm leading-relaxed">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div className="lg:col-span-5">
           <h2 className="font-serif text-3xl text-stone-900 mb-10">Recognition</h2>
           <div className="space-y-6">
             {ACHIEVEMENTS.map((award, idx) => (
               <div key={idx} className="bg-stone-50 p-6 hover:bg-stone-100 transition-colors duration-300">
                  <span className="text-xs text-stone-400 font-mono uppercase tracking-widest block mb-2">{award.date}</span>
                  <h3 className="font-medium text-stone-900 text-lg mb-2">{award.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{award.description}</p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </Section>
  );
};

export default Experience;