import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-scroll';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">{t('footer.rights')}</p>
        </div>
        <div className="flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors"
          >
            {t('nav.home')}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
