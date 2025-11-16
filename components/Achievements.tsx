import React from 'react';
import { PHD_JOURNEY_ITEMS } from '../constants';
import Section from './Section';

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UniversityIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-3.07-.722a51.214 51.214 0 01-1.58-6.148A51.21 51.21 0 0112 1.056a51.21 51.21 0 017.25 3.197m-3.07-.722l3.07.722m0 0a50.57 50.57 0 012.658-.813m-15.482 0a50.57 50.57 0 00-2.658-.813M12 6.373a3.375 3.375 0 00-3.375 3.375h6.75A3.375 3.375 0 0012 6.373z" />
  </svg>
);

const PaperIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const iconMap: { [key: string]: React.ReactNode } = {
  university: <UniversityIcon />,
  paper: <PaperIcon />,
};


const Achievements: React.FC = () => {
  return (
    <Section id="phd-journey" title="PhD Journey">
      <div className="space-y-12">
        {PHD_JOURNEY_ITEMS.map((achievement, index) => (
          <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              {achievement.icon && <div className="mr-4 flex-shrink-0">{iconMap[achievement.icon]}</div>}
              <h3 className="text-xl font-semibold text-sky-400">{achievement.title}</h3>
            </div>
            <ul className="space-y-3 pl-1">
              {achievement.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-4 text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;