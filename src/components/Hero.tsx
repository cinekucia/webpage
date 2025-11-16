import React from 'react';
import { PERSONAL_INFO } from '../constants';

const MailIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.249H8.014V8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.336 8.905H4.002V8.59h2.671v7.748zM18 0H2C.895 0 0 .895 0 2v16c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z" clipRule="evenodd" />
  </svg>
);

const GitHubIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);


const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center pt-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full">
        <div className="md:col-span-2 text-left">
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-8">
            {PERSONAL_INFO.title}
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-lg text-gray-300 hover:text-sky-400 transition-colors duration-300">
              <MailIcon />
              {PERSONAL_INFO.email}
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-300 hover:text-sky-400 transition-colors duration-300">
              <LinkedInIcon />
              LinkedIn Profile
            </a>
             <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-300 hover:text-sky-400 transition-colors duration-300">
              <GitHubIcon />
              GitHub Profile
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-first md:order-last">
            {/* To replace this image, update the 'imageUrl' in `src/constants.ts` with a URL to your photo. */}
            <img 
                src={PERSONAL_INFO.imageUrl} 
                alt="Filip Kucia" 
                className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-sky-500/50 shadow-2xl shadow-sky-500/10" 
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;