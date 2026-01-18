import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Skills & Expertise</h2>
        <p className="text-stone-500 max-w-xl mx-auto">A blend of analytical rigor and creative execution.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <div key={idx} className="bg-white p-6 border-l-2 border-stone-200 hover:border-stone-900 transition-colors duration-300">
            <h3 className="font-serif text-xl text-stone-900 mb-6">{skillGroup.category}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="text-stone-600 text-sm tracking-wide border-b border-stone-100 pb-2 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;