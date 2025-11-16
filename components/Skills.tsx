
import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SKILLS.map((category, index) => (
          <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-sky-400 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-gray-700 text-sky-300 text-sm font-medium px-3 py-1.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
