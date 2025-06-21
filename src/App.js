import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudy from './components/CaseStudy';
import WhatsHot from './components/WhatsHot';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <CaseStudy />
      <WhatsHot />
      <Footer />
    </div>
  );
}

export default App;
