import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const graftables = [
  { name: "Gravesac", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/Gravesac" },
  { name: "SO4", url: "https://www.vignevin-occitanie.com/fiches-pratiques/cepages-et-porte-greffes-utilises-dans-le-sud-ouest/le-so4/" },
  { name: "Rupestris du Lot", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/Rupestris%20du%20Lot" },
  { name: "333EM", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/333%20Ecole%20de%20Montpellier" },
  { name: "3309 Couderc", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/3309%20Couderc" },
  { name: "Ruggeri 140", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/140%20Ruggeri" },
  { name: "Fercal", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/Fercal" },
  { name: "Paulsen 1103", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/1103%20Paulsen" },
  { name: "101-14 MGT", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/101-14%20Millardet%20et%20de%20Grasset" },
  { name: "RIP Gloire Montp.", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/Riparia%20Gloire%20de%20Montpellier" },
  { name: "41B MGT", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/41%20B%20Millardet%20et%20de%20Grasset" },
  { name: "Richter 110", url: "https://plantgrape.plantnet-project.org/fr/porte-greffe/110%20Richter" },
];

const scions = [
  { name: "Sauvignon blanc", url: "https://plantgrape.plantnet-project.org/fr/cepage/Sauvignon" },
  { name: "Grenache blanc", url: "https://plantgrape.plantnet-project.org/fr/cepage/Grenache%20blanc" },
  { name: "Cinsaut", url: "https://plantgrape.plantnet-project.org/fr/cepage/Cinsaut" },
  { name: "Syrah", url: "https://plantgrape.plantnet-project.org/fr/cepage/Syrah" },
];

const Varieties = () => {
  const { t } = useLanguage();

  const ListSection = ({ title, items }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-vine">
      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-700 group-hover:text-vine transition-colors">{item.name}</span>
              <ExternalLink size={18} className="text-gray-400 group-hover:text-vine transition-colors" />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="varietes" className="py-20 bg-earth-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-vine mb-4">{t('varieties.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ListSection title={t('varieties.graftable')} items={graftables} />
          <ListSection title={t('varieties.scions')} items={scions} />
        </div>
      </div>
    </section>
  );
};

export default Varieties;
