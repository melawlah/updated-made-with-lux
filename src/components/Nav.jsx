import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
    FaLocationArrow
  } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('');

  const location = useLocation();

  const cityMatch = location.pathname.match(/web-design-([a-zA-Z-]+)/);
  const citySlug = cityMatch ? cityMatch[1] : null;

  const logoHref = citySlug ? `/web-design-${citySlug}` : '/';


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
  { id: 'about', label: t('aboutUs') },
  { id: 'work', label: t('ourWorks') },
  { id: 'contactUs', label: t('contactUs') },
  { id: 'blog', label: 'Blog', external: true, href: '/blog' }, // External route
];

  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black border-b border-gray-200 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
       <Link to={logoHref} className="text-sm sm:text-md font-bold text-white tracking-wide">
        Made With Lux
      </Link>

        <div className="lg:hidden flex items-center gap-2">
  <a
    href="https://calendly.com/lawlahruth/strategy-session"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 shadow">
      <FaLocationArrow className="text-xs" />
      {t("footer.cta")}
    </button>
  </a>

 
</div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Bars3Icon className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium text-white items-center">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={clsx(
                  'relative px-1 transition-colors hover:text-white',
                  activeSection === id && 'text-white font-semibold'
                )}
              >
                <span
                  className={clsx(
                    'absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300',
                    activeSection === id && 'scale-x-100'
                  )}
                ></span>
                {label}
              </a>
            </li>
          ))}
          {/* <div className="flex justify-center"> */}
          <li> 
            <a href="https://calendly.com/lawlahruth/strategy-session" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-4 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 shadow-xl text-center whitespace-normal max-w-xs cursor-pointer">
                <FaLocationArrow />
                {t("footer.cta")}
              </button>
            </a>
          </li>
          {/* </div> */}

          {/* Language Toggle */}
          <li>
            <button
              onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
              className="px-3 py-1 border border-gray-300 rounded-full text-xs hover:bg-white hover:text-black transition-colors"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </li>
        </ul>
      </div>

      {isOpen && (
  <div className="lg:hidden px-4 pt-2 pb-6 bg-black shadow-lg border-t border-gray-200">
    <ul className="flex flex-col space-y-4 text-sm font-medium text-white">
      {navLinks.map(({ id, label, external, href }) => (
        <li key={id}>
          {external ? (
            <a
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-1 hover:text-white"
            >
              {label}
            </a>
          ) : (
            <a
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className={clsx(
                'block py-1 transition-colors hover:text-white',
                activeSection === id && 'text-white font-semibold'
              )}
            >
              {label}
            </a>
          )}
        </li>
      ))}

      <li>
        <button
          onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
          className="px-3 py-1 border border-gray-300 rounded-full text-xs hover:bg-white hover:text-black transition-colors"
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