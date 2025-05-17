import { motion } from "framer-motion";
import {
  FaGlobe,
  FaShoppingCart,
  FaCode,
  FaRedo,
  FaTools,
  FaRocket,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const icons = [
  <FaGlobe className="text-3xl text-black" />,
  <FaShoppingCart className="text-3xl text-black" />,
  <FaCode className="text-3xl text-black" />,
  <FaRedo className="text-3xl text-black" />,
  <FaTools className="text-3xl text-black" />,
  <FaRocket className="text-3xl text-black" />,
];

const AboutUs = () => {
  const { t } = useTranslation();
  const services = t("servicesSection.list", { returnObjects: true });

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-6 md:px-12">
          {/* <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-black text-center mb-16"
          >
            {t("servicesSection.heading")}
          </motion.h2> */}
          {/* <h2 className="text-4xl font-bold text-black text-center mb-16"> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-center text-black mb-4">
          {t("servicesSection.heading")}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mx-auto mb-16"
          >
            {t("servicesSection.para")}
          </motion.p>

          <div className="grid gap-14 md:grid-cols-2">
            {services.map((service, index) => (
            //   <motion.div
            //     key={index}
            //     initial={{ opacity: 0, y: 40 }}
            //     whileInView={{ opacity: 1, y: 0 }}
            //     transition={{ duration: 0.6, delay: index * 0.2 }}
            //     className="flex items-start gap-6"
            //   >
            <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-gray-100 rounded-full">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 max-w-md">{service.description}</p>
                </div>
                </div>
            //   </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center bg-gray-100 rounded-3xl py-12 px-6 md:px-16 shadow-md"
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              {t("servicesSection.ctaTitle")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              {t("servicesSection.ctaSubtitle")}
            </p>
            <a
              href="mailto:youremail@example.com"
              className="inline-block bg-black text-white text-sm font-medium py-3 px-6 rounded-full hover:bg-gray-900 transition-colors duration-300"
            >
              {t("servicesSection.ctaButton")}
            </a>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
