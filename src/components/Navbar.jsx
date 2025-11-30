import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), to: 'home' },
    { name: t('nav.products'), to: 'produits' },
    { name: t('nav.history'), to: 'histoire' },
    { name: t('nav.varieties'), to: 'varietes' },
    { name: t('nav.contact'), to: 'contact' },
  ];

  const languages = [
    { code: 'fr', flag: '/icones/france.png', label: 'Français' },
    { code: 'eng', flag: '/icones/royaume-uni.png', label: 'English' },
    { code: 'esp', flag: '/icones/espagne.png', label: 'Español' },
    { code: 'ita', flag: '/icones/italie.png', label: 'Italiano' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              <h1 className={`text-2xl font-serif font-bold ${scrolled ? 'text-vine' : 'text-white'} transition-colors`}>NIEL MC</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer font-medium hover:text-earth transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-earth`}>
                <Globe size={20} />
                <span className="uppercase">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img src={lang.flag} alt={lang.label} className="w-5 h-5 mr-3" />
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-vine hover:bg-gray-50 rounded-md cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="px-3 text-sm text-gray-500 mb-2">{t('nav.language')}</p>
                <div className="flex space-x-4 px-3">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsOpen(false); }}>
                      <img src={lang.flag} alt={lang.label} className={`w-8 h-8 rounded-full border-2 ${language === lang.code ? 'border-vine' : 'border-transparent'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
