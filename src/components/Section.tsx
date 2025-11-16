import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 border-t border-gray-700/50">
      <h2 className="text-3xl font-bold text-white mb-12 relative">
        {title}
        <span className="absolute -bottom-3 left-0 w-16 h-1 bg-sky-500"></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;