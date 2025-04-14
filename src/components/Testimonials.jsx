import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// import img from '../../public/assets/IMG_5156.jpg'

const testimonials = [
  {
    id: 1,
    testimonial: "testimonial1",
    name: "John Doe",
    designation: "CEO",
    company: "TechCorp",
    image: "/assets/IMG_5165.jpg",
    // image: "../"
  },
  {
    id: 2,
    testimonial: "testimonial2",
    name: "Jane Smith",
    designation: "CTO",
    company: "InnovateX",
    image: "./assets/swirl-pattern.jpg",
  },
  {
    id: 3,
    testimonial: "testimonial3",
    name: "Emily Johnson",
    designation: "Product Manager",
    company: "FutureHub",
    image: "./assets/swirl-pattern.jpg",
  },
];

const TestimonialCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="bg-white shadow-xl p-10 rounded-3xl w-full max-w-[380px] transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <p className="text-6xl text-black font-bold leading-none mb-6">“</p>

      <p className="text-gray-800 text-lg leading-relaxed mb-8">
        {t(testimonial)}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-black font-semibold text-lg">@{t(name)}</p>
          <p className="text-gray-500 text-sm mt-1">
            {t(designation)} {t("of")} {t(company)}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 text-black px-6 md:px-12 py-24" id="testimonials">
      <div className="text-center mb-20">
        <p className="text-gray-500 uppercase tracking-wide text-sm mb-3">
          {t("whatOthersSay")}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          {t("testimonials")}
        </h2>
      </div>

      {/* Flex row on md+, column on smaller screens */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-12 items-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
