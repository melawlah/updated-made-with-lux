import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const ProjectModal = ({ project, closeModal }) => {
  const { t } = useTranslation();

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50"
      onClick={closeModal}
    >
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-4xl w-full overflow-y-auto max-h-[90vh]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-gray-600 hover:text-black transition-colors p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Title */}
        <h3 className="text-3xl font-semibold text-black mb-6">{t(project.title)}</h3>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 md:h-96 object-cover rounded-xl mb-8 border border-gray-200"
        />

        {/* Description */}
        <p className="text-gray-800 text-lg mb-10 leading-relaxed">{t(project.description)}</p>

        {/* Sections */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">{t("challenges")}</h4>
            <p className="text-gray-700 text-md">{t(project.challenges)}</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">{t("solutions")}</h4>
            <p className="text-gray-700 text-md">{t(project.solutions)}</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">{t("results")}</h4>
            <p className="text-gray-700 text-md">{t(project.results)}</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
          >
            {t("viewLiveSite")}
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;