import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Puzzle, Compass, BadgeCheck } from 'lucide-react';

function AboutUsOne() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Puzzle className="h-8 w-8 text-black" />,
      title: t('features.customSolutions.title'),
      desc: t('features.customSolutions.desc'),
    },
    {
      icon: <Compass className="h-8 w-8 text-black" />,
      title: t('features.userCentric.title'),
      desc: t('features.userCentric.desc'),
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-black" />,
      title: t('features.professionalPresence.title'),
      desc: t('features.professionalPresence.desc'),
    },
  ];

  return (
    <>
    <section
      id="about"
      className="bg-white text-black overflow-x-hidden min-h-[80vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-8 sm:px-10 md:px-16 lg:px-24 py-24 flex flex-col justify-center items-center text-center">

        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-black mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('aboutUs')}
        </motion.h2>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-3 max-w-5xl w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 flex flex-col items-center text-center space-y-4"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
     

    </section>
 
    </>
  );
}

export default AboutUsOne;