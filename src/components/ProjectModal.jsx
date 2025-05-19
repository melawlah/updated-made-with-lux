// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// const ProjectModal = ({ project, closeModal }) => {
//   const { t } = useTranslation();
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const selectedImage = project.gallery?.[selectedIndex];

//   return (
//     <div
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50"
//       onClick={closeModal}
//     >
//       <motion.div
//         className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-6xl w-full overflow-y-auto max-h-[95vh]"
//         initial={{ opacity: 0, scale: 0.92 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute top-5 right-5 text-gray-600 hover:text-black transition-colors p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <XMarkIcon className="w-5 h-5" />
//         </button>

//         {/* Title & CTA */}
//         <div className="text-center mb-10">
//           <h3 className="text-3xl font-semibold text-black mb-4">{t(project.title)}</h3>
//           <p className="text-gray-700 text-md pb-4">{project.caseStudyDesc}</p>
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
//           >
//             {t("viewLiveSite")}
//             <ArrowTopRightOnSquareIcon className="w-4 h-4" />
//           </a>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//           {/* Left: Image Gallery */}
//           <div>
//             <img
//               src={selectedImage?.url || project.image}
//               alt={project.title}
//               className="w-full object-cover rounded-xs border border-gray-200 mb-4"
//               // className="w-full h-[300px] md:h-[400px] object-cover rounded-xs border border-gray-200 mb-4"
//             />
//             {project.gallery?.length > 1 && (
//               <div className="flex gap-3 overflow-x-auto">
//                 {project.gallery.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedIndex(idx)}
//                     className={`w-20 h-20 border rounded-lg overflow-hidden shrink-0 ${
//                       idx === selectedIndex ? "border-black" : "border-gray-300"
//                     }`}
//                   >
//                     <img
//                       src={item.url}
//                       alt={`Thumbnail ${idx + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Right: Details */}
//           <div className="space-y-6">
//             {selectedImage?.challenges && (
//               <div>
//                 <h4 className="text-xl font-semibold text-black mb-2">{t("challenges")}</h4>
//                 <p className="text-gray-700 text-md">{t(selectedImage.challenges)}</p>
//               </div>
//             )}
//             {selectedImage?.solutions && (
//               <div>
//                 <h4 className="text-xl font-semibold text-black mb-2">{t("solutions")}</h4>
//                 <p className="text-gray-700 text-md">{t(selectedImage.solutions)}</p>
//               </div>
//             )}
//             {selectedImage?.results && (
//               <div>
//                 <h4 className="text-xl font-semibold text-black mb-2">{t("results")}</h4>
//                 <p className="text-gray-700 text-md">{t(selectedImage.results)}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectModal;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const ProjectModal = ({ project, closeModal }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = project.gallery?.[selectedIndex];

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50"
      onClick={closeModal}
    >
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-6xl w-full overflow-y-auto max-h-[95vh] space-y-12"
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

        {/* Title & CTA */}
        <div className="text-center space-y-5">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 leading-snug">
            {t(project.title)}
          </h3>
          <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed tracking-wide max-w-5xl mx-auto">
            {project.caseStudyDesc}
          </p>
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

        {/* Divider */}
        <div className="border-t border-gray-200 mt-6" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Image Gallery */}
          <div>
            <img
              src={selectedImage?.url || project.image}
              alt={project.title}
              title={project.title}
              className="w-full h-auto rounded-lg border border-gray-200 mb-6"
            />
            {project.gallery?.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-20 h-20 border-2 rounded-md overflow-hidden shrink-0 transition-all ${
                      idx === selectedIndex ? "border-black" : "border-gray-300"
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="space-y-8">
            {selectedImage?.challenges && (
              <div>
                <h4 className="text-xl font-semibold text-black mb-2">{t("challenges")}</h4>
                <p className="text-gray-700 text-md leading-relaxed">
                  {t(selectedImage.challenges)}
                </p>
              </div>
            )}
            {selectedImage?.solutions && (
              <div>
                <h4 className="text-xl font-semibold text-black mb-2">{t("solutions")}</h4>
                <p className="text-gray-700 text-md leading-relaxed">
                  {t(selectedImage.solutions)}
                </p>
              </div>
            )}
            {selectedImage?.results && (
              <div>
                <h4 className="text-xl font-semibold text-black mb-2">{t("results")}</h4>
                <p className="text-gray-700 text-md leading-relaxed">
                  {t(selectedImage.results)}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;



