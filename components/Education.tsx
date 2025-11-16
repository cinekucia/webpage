
import React from 'react';
import { EDUCATION_HISTORY } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="relative border-l-2 border-sky-500/30 ml-4 md:ml-0">
        {EDUCATION_HISTORY.map((edu, index) => (
          <div key={index} className="mb-12 ml-10">
             <div className="absolute -left-[11px] mt-1.5 h-5 w-5 rounded-full bg-sky-500 border-2 border-gray-900"></div>
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg relative">
              <div className="absolute -left-6 top-6 w-0 h-0 
                border-t-[10px] border-t-transparent
                border-r-[10px] border-r-gray-800/50
                border-b-[10px] border-b-transparent md:hidden"></div>
              <p className="text-sm font-semibold text-sky-400 mb-1">{edu.period}</p>
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-md text-gray-400 mb-3">{edu.institution}</p>
              {edu.details && (
                <p className="text-sm text-gray-300 italic">
                  {edu.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
