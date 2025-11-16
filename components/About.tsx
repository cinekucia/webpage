
import React from 'react';
import { PROFILE_TEXT } from '../constants';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
        {PROFILE_TEXT}
      </p>
    </Section>
  );
};

export default About;
