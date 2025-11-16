
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-6 py-24 sm:px-8 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;