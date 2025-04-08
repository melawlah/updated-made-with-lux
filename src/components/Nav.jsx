import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    // { id: 'home', label: t('home') },
    { id: 'about', label: t('aboutUs') },
    { id: 'works', label: t('ourWorks') },
    // { id: 'testimonials', label: t('testimonials') },
    // { id: 'process', label: t('ourProcess') }, 
    { id: 'contactUs', label: t('contactUs') },
  ];
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="text-md sm:text-lg font-bold text-gray-900 tracking-wide">
          Made With Lux
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Bars3Icon className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 items-center">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={clsx(
                  'relative px-1 transition-colors hover:text-black',
                  activeSection === id && 'text-black font-semibold'
                )}
              >
                <span
                  className={clsx(
                    'absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 origin-left transition-transform duration-300',
                    activeSection === id && 'scale-x-100'
                  )}
                ></span>
                {label}
              </a>
            </li>
          ))}

          {/* Language Toggle */}
          <li>
            <button
              onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
              className="px-3 py-1 border border-gray-300 rounded-full text-xs hover:bg-black hover:text-white transition-colors"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-800">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'block py-1 transition-colors hover:text-black',
                    activeSection === id && 'text-black font-semibold'
                  )}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Language Toggle */}
            <li>
              <button
                onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
                className="px-3 py-1 border border-gray-300 rounded-full text-xs hover:bg-black hover:text-white transition-colors"
              >
                {i18n.language === 'en' ? 'FR' : 'EN'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;