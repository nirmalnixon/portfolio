import React from 'react';
import Navigation from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navigation />
    <HeroSection />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;