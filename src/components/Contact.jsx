import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-vine mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
              <div className="flex items-start space-x-4">
                <User className="text-vine shrink-0" />
                <span className="font-medium text-gray-800">Pépinière viticole Marie-Christine Niel</span>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-vine shrink-0" />
                <span className="text-gray-600">1037 chemin du Mas de Borne,<br />30720 Ribaute-les-Tavernes</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-vine shrink-0" />
                <a href="mailto:mariechristineniel@gmail.com" className="text-gray-600 hover:text-vine transition-colors">mariechristineniel@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-vine shrink-0" />
                <a href="tel:+33682180410" className="text-gray-600 hover:text-vine transition-colors">06 82 18 04 10</a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.5199791874043!2d4.079275631553185!3d44.05197035011883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4403075fc819f%3A0x8e9a0d72b52485be!2sNiel%20Marie%20Christine!5e0!3m2!1sfr!2sfr!4v1687685811702!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form action="https://formspree.io/f/xdovrpwk" method="POST" target="_blank" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vine focus:border-transparent outline-none transition-all"
                  placeholder={t('contact.form.name')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vine focus:border-transparent outline-none transition-all"
                  placeholder={t('contact.form.phone')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vine focus:border-transparent outline-none transition-all"
                  placeholder={t('contact.form.email')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vine focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t('contact.form.message')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-vine text-white font-bold py-3 px-6 rounded-lg hover:bg-vine-dark transition-colors flex items-center justify-center space-x-2"
              >
                <span>{t('contact.form.submit')}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
