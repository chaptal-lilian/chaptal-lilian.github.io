import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import History from './components/History';
import Varieties from './components/Varieties';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="font-sans antialiased text-gray-900 bg-white">
          <SEO />
          <Navbar />
          <Hero />
          <Products />
          <History />
          <Varieties />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
