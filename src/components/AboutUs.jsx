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

// const AboutUs = () => {
//   const { t } = useTranslation();
//   const services = t("servicesSection.list", { returnObjects: true });

const AboutUs = ({ cityOverrides = {} }) => {
  const { t } = useTranslation();

  const services = cityOverrides.services || t("servicesSection.list", { returnObjects: true });
  const heading = cityOverrides.heading || t("servicesSection.heading");
  const paragraph = cityOverrides.para || t("servicesSection.para");


  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-6 md:px-12">
          {/* <h2 className="text-4xl md:text-5xl font-bold mt-2 text-center text-black mb-4">
          {t("servicesSection.heading")}
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-center text-black mb-4">
            {heading}
          </h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mx-auto mb-16"
          >
            {t("servicesSection.para")}
          </motion.p> */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mx-auto mb-16"
          >
            {paragraph}
          </motion.p>

          <div className="grid gap-14 md:grid-cols-2">
            {services.map((service, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
