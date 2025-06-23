import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Gallery from '../components/Gallery';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Benefits />
      <Gallery />
    </div>
  );
};

export default LandingPage;