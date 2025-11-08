import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// function Hero() {
//   const { t, i18n } = useTranslation();
//   const [showBonjour, setShowBonjour] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowBonjour((prev) => !prev);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const greeting = showBonjour ? t('bonjour') : t('hello');

//   const splitLetters = (text) =>
//     text.split('').map((letter, index) => (
//       <motion.span
//         key={`${text}-${index}`}
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: index * 0.07 }}
//         className="inline-block"
//       >
//         <span className="text-[clamp(3rem,10vw,12rem)] font-extrabold text-white drop-shadow-md tracking-wide">
//           {letter}
//         </span>
//       </motion.span>
//     ));

//   return (
//     <section
//       className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 text-center bg-black"
//       id="home"
//     >
//       {/* Optional background overlay or effect */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_0%,_transparent_70%)]" />

//       <div className="relative z-10 flex flex-col items-center justify-center gap-6">
//         <h1 className="flex flex-wrap justify-center leading-none">
//           {splitLetters(greeting)}
//         </h1>

//          <h1 className="text-white text-md sm:text-base md:text-xl lg:text-2xl max-w-3xl font-medium tracking-wide">
//           {t('welcome1')}
//         </h1>
//          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-light tracking-wide">
//           {t('welcome2')}
//         </p>

//         {/* <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto mb-3 tracking-wide">
//           {t('welcome1')}
//         </h2>

//         <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto tracking-normal">
//           {t('welcome2')}
//         </p> */}

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() =>
//             document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
//           }
//           className="mt-6 bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300 font-medium tracking-wide text-sm sm:text-base cursor-pointer"
//         >
//           {t('viewPortfolio')}
//         </motion.button>
//       </div>
//     </section>
//   );
// }

function Hero({ cityOverrides = {} }) {
  const { t } = useTranslation();
  const [showBonjour, setShowBonjour] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBonjour((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const greeting = showBonjour ? t('bonjour') : t('hello');

  const splitLetters = (text) =>
    text.split('').map((letter, index) => (
      <motion.span
        key={`${text}-${index}`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        className="inline-block"
      >
        <span className="text-[clamp(3rem,10vw,12rem)] font-extrabold text-white drop-shadow-md tracking-wide">
          {letter}
        </span>
      </motion.span>
    ));

  // Use override if provided, otherwise fallback to translations
  const heading = cityOverrides.title || t('welcome1');
  const subtitle = cityOverrides.subtitle || t('welcome2');

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 text-center bg-black"
      id="home"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <h1 className="flex flex-wrap justify-center leading-none">
          {splitLetters(greeting)}
        </h1>

        <h1 className="text-white text-md sm:text-base md:text-xl lg:text-2xl max-w-3xl font-medium tracking-wide">
          {heading}
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-light tracking-wide">
          {subtitle}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="mt-6 bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300 font-medium tracking-wide text-sm sm:text-base cursor-pointer"
        >
          {t('viewPortfolio')}
        </motion.button>
      </div>
    </section>
  );
}


export default Hero;