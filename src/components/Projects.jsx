// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import ProjectModal from "./ProjectModal";

// const projects = [
//   {
//     id: 1,
//     title: "E-commerce Website",
//     description: "A modern e-commerce platform with seamless user experience.",
//     image: "/assets/project1.jpg",
//     link: "/projects/ecommerce",
//     challenges: "Managing product inventory and integrating payment gateways.",
//     solutions: "Optimized backend for seamless inventory updates and implemented secure payment systems.",
//     results: "Increased sales by 40% within 3 months of launch.",
//   },
//   {
//     id: 2,
//     title: "Branding for Luxury Cafe",
//     description: "A branding project for a high-end cafe with a unique visual identity.",
//     image: "/assets/project2.jpg",
//     link: "/projects/branding",
//     challenges: "Creating a brand identity that resonated with high-end clientele.",
//     solutions: "Developed a sophisticated logo and cohesive brand guidelines with premium finishes.",
//     results: "Enhanced brand recognition and customer loyalty, leading to a 25% increase in foot traffic.",
//   },
//   {
//     id: 3,
//     title: "Corporate Website Redesign",
//     description: "Revamping a corporate website for improved user flow and aesthetics.",
//     image: "/assets/project3.jpg",
//     link: "/projects/corporate",
//     challenges: "Ensuring an intuitive user experience for a diverse audience.",
//     solutions: "Created a simplified and accessible design with intuitive navigation.",
//     results: "Achieved a 50% reduction in bounce rate and improved customer engagement.",
//   },
//   {
//     id: 4,
//     title: "Luxury App Design",
//     description: "A sleek mobile app design for a luxury brand with an emphasis on simplicity.",
//     image: "/assets/project4.jpg",
//     link: "/projects/luxury-app",
//     challenges: "Designing a seamless experience for high-end users.",
//     solutions: "Created a minimalistic design with smooth animations and intuitive interactions.",
//     results: "App launched successfully with over 50,000 downloads within the first month.",
//   },
//   // You can add more projects here to test pagination
// ];

// const ProjectsSection = () => {
//   const { t } = useTranslation();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [activeProject, setActiveProject] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 4;

//   const openModal = (project) => {
//     setActiveProject(project);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setActiveProject(null);
//   };

//   const handlePagination = (direction) => {
//     if (direction === "next" && currentPage < Math.ceil(projects.length / projectsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     } else if (direction === "prev" && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const currentProjects = projects.slice(
//     (currentPage - 1) * projectsPerPage,
//     currentPage * projectsPerPage
//   );

//   return (
//     <section id="projects" className="py-24 px-8 sm:px-12 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Heading and Paragraph */}
//         <div className="mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl font-extrabold text-black mb-4"
//           >
//             {t("projects.title")}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-md text-gray-700 max-w-2xl mx-auto"
//           >
//             {t("projects.subtitle")}
//           </motion.p>
//         </div>

//         {/* Right-aligned CTA Button */}
//         <div className="mb-16">
//           <a
//             href="#contactUs"
//             className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all w-full sm:w-auto"
//           >
//             {t("projects.contactUs")}
//           </a>
//         </div>
//       </div>

//       {/* Project Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
//         {currentProjects.map((project) => (
//           <motion.div
//             key={project.id}
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-gray-100 group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition duration-300"
//             onClick={() => openModal(project)}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-6 left-6">
//                 <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
//                 <p className="text-white mt-2">{project.description}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination Controls (only shown if more than 4 projects) */}
//       {projects.length > projectsPerPage && (
//         <div className="flex justify-center mt-12">
//           <button
//             className="px-4 py-2 bg-black text-white rounded-lg mx-2 disabled:opacity-50"
//             onClick={() => handlePagination("prev")}
//             disabled={currentPage === 1}
//           >
//             {t("projects.prev")}
//           </button>
//           <button
//             className="px-4 py-2 bg-black text-white rounded-lg mx-2 disabled:opacity-50"
//             onClick={() => handlePagination("next")}
//             disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
//           >
//             {t("projects.next")}
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProjectsSection;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";
import ReactModal from "react-modal";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A modern e-commerce platform with seamless user experience.",
    images: [
      "/assets/flortig-hero-ss.png",
      "/assets/flortig-hero-ss.png",
      "/assets/flortig-hero-ss.png"
    ],
    link: "/projects/ecommerce",
    challenges: "Managing product inventory and integrating payment gateways.",
    solutions: "Optimized backend for seamless inventory updates and implemented secure payment systems.",
    results: "Increased sales by 40% within 3 months of launch.",
  },
  {
    id: 2,
    title: "Branding for Luxury Cafe",
    description: "A branding project for a high-end cafe with a unique visual identity.",
    images: [
      "/assets/project2.jpg",
      "/assets/project2-mockup1.jpg",
      "/assets/project2-mockup2.jpg"
    ],
    link: "/projects/branding",
    challenges: "Creating a brand identity that resonated with high-end clientele.",
    solutions: "Developed a sophisticated logo and cohesive brand guidelines with premium finishes.",
    results: "Enhanced brand recognition and customer loyalty, leading to a 25% increase in foot traffic.",
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    description: "Revamping a corporate website for improved user flow and aesthetics.",
    images: [
      "/assets/project3.jpg",
      "/assets/project3-mockup1.jpg",
      "/assets/project3-mockup2.jpg"
    ],
    link: "/projects/corporate",
    challenges: "Ensuring an intuitive user experience for a diverse audience.",
    solutions: "Created a simplified and accessible design with intuitive navigation.",
    results: "Achieved a 50% reduction in bounce rate and improved customer engagement.",
  },
  {
    id: 4,
    title: "Luxury App Design",
    description: "A sleek mobile app design for a luxury brand with an emphasis on simplicity.",
    images: [
      "/assets/project4.jpg",
      "/assets/project4-mockup1.jpg",
      "/assets/project4-mockup2.jpg"
    ],
    link: "/projects/luxury-app",
    challenges: "Designing a seamless experience for high-end users.",
    solutions: "Created a minimalistic design with smooth animations and intuitive interactions.",
    results: "App launched successfully with over 50,000 downloads within the first month.",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const projectsPerPage = 4;

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  const handlePagination = (direction) => {
    if (direction === "next" && currentPage < Math.ceil(projects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <section id="projects" className="py-24 px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Paragraph */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold text-black mb-4"
          >
            {t("projects.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-md text-gray-700 max-w-2xl mx-auto"
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>

        {/* Right-aligned CTA Button */}
        <div className="mb-16">
          <a
            href="#contactUs"
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all w-full sm:w-auto"
          >
            {t("projects.contactUs")}
          </a>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-100 group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition duration-300"
            onClick={() => openModal(project)}
          >
            <img
              src={project.images[0]} // First image as the preview
              alt={project.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
                <p className="text-white mt-2">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      {projects.length > projectsPerPage && (
        <div className="flex justify-center mt-12">
          <button
            className="px-4 py-2 bg-black text-white rounded-lg mx-2 disabled:opacity-50"
            onClick={() => handlePagination("prev")}
            disabled={currentPage === 1}
          >
            {t("projects.prev")}
          </button>
          <button
            className="px-4 py-2 bg-black text-white rounded-lg mx-2 disabled:opacity-50"
            onClick={() => handlePagination("next")}
            disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
          >
            {t("projects.next")}
          </button>
        </div>
      )}

      {/* Lightbox for viewing mockups */}
      <ReactModal
        isOpen={lightboxOpen}
        onRequestClose={closeLightbox}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="relative">
          <button
            onClick={closeLightbox}
            className="absolute top-0 right-0 text-white p-4 bg-black bg-opacity-50 rounded-full"
          >
            X
          </button>
          <img
            src={currentImage}
            alt="Mockup"
            className="max-w-full max-h-screen object-contain"
          />
        </div>
      </ReactModal>
    </section>
  );
};

export default ProjectsSection;
