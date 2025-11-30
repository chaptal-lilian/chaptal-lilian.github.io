import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const family = [
  { name: "Abel Niel", image: "/images/grand_pere.jpg" },
  { name: "Georges Niel", image: "/images/georgesN.JPG" },
  { name: "Marie-Christine Niel", image: "/images/mcn.JPG" }
];

const History = () => {
  const { t } = useLanguage();
  const content = t('history.content');

  return (
    <section id="histoire" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-vine mb-4">{t('history.title')}</h2>
          <p className="text-lg text-gray-600">{t('history.subtitle')}</p>
        </div>

        {/* Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {family.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-gray-800">{person.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
          {Array.isArray(content) ? content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 font-serif leading-relaxed text-justify"
            >
              {paragraph}
            </motion.p>
          )) : <p>{content}</p>}
        </div>
      </div>
    </section>
  );
};

export default History;
