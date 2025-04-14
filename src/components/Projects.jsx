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
    title: "Website Redesign for an Event Planning & Rental Company",
    description: "Made it easy for customers to explore services and book rentals online.",
    images: [
        "/assets/flortig-mock-up.png",
      "/assets/project2-mockup1.jpg",
      "/assets/project2-mockup2.jpg"
    ],
    link: "https://peru-monkey-684859.hostingersite.com/",
    challenges: "Creating a brand identity that resonated with high-end clientele.",
    solutions: "Developed a sophisticated logo and cohesive brand guidelines with premium finishes.",
    results: "Enhanced brand recognition and customer loyalty, leading to a 25% increase in foot traffic.",
    gallery: [
      {
        url: "/assets/flortig-shop-ss.png",
        challenges: "Customers had no easy way to browse or rent items online.",
        solutions: "Built a user-friendly rental store that lets customers browse and book items in just a few clicks.",
        results: "Customers can now easily rent items online, reducing back-and-forth and increasing conversions.",
      },
      {
        url: "/assets/event-planning-fortig.png",
        challenges: "Event planning services weren’t clearly showcased on the website.",
        solutions: "Created a dedicated section to professionally showcase event planning services and past work.",
        results: "Clear service presentation has helped potential clients understand the full value the business offers.",
      },
      {
        url: "/assets/blogpage-flortig 4.png",
        challenges: "No central place to share ideas, tips, or inspiration with potential clients.",
        solutions: "Added a blog to share event tips, trends, and ideas to help build trust and attract new visitors.",
        results: "The blog reinforces the brand’s expertise, making it easier for potential clients to trust and choose their services.",
      },
    ]
  },
  {
    id: 2,
    title: "Custom Website for a Bakery Business",
    description: "A warm, inviting website that highlights their work and lets customers place custom cake orders with ease.",
    images: [
      // "/assets/lawlahsweets-mockup.png",
      "/assets/lawlah-sweets-mockup.png",
      // "/assets/project4-mockup1.jpg",
      // "/assets/project4-mockup2.jpg"
    ],
    link: "/projects/luxury-app",
    challenges: "Designing a seamless experience for high-end users.",
    solutions: "Created a minimalistic design with smooth animations and intuitive interactions.",
    results: "App launched successfully with over 50,000 downloads within the first month.",
    gallery: [
      {
        url: "/assets/lawlahsweets-showcase-ss.png",
        challenges: "Customers couldn’t easily see all the cakes and pastries available.",
        solutions: "Created a visual menu that beautifully showcases their full range of baked goods.",
        results: "Customers can now browse products and place orders with zero friction.",
      },
      {
        url: "/assets/custom-order-form.png",
        challenges: "Ordering was manual and time-consuming, requiring back-and-forth messages to get details right.",
        solutions: "Built a detailed order form with all customization options, so customers can order exactly what they want, right from the website.",
        results: "The team saves time and receives clearer, more complete orders.",
      },
    ]
  },
  {
    id: 3,
    title: "AI prompt application",
    description: "AI prompt application.",
    images: [
      "/assets/ipad-prototype.png",
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
    title: "Portfolio Website for a Software Developer",
    description: "A professional, easy-to-navigate website that highlights their work, experience, and writing.",
    images: [
      "/assets/r-ariyo-portfolio-mockup.png",
      "/assets/flortig-hero-ss.png",
      "/assets/flortig-hero-ss.png"
    ],
    link: "https://ruth-portfolio-iota.vercel.app/",
    challenges: "Managing product inventory and integrating payment gateways.",
    solutions: "Optimized backend for seamless inventory updates and implemented secure payment systems.",
    results: "Increased sales by 40% within 3 months of launch.",
    gallery: [
      {
        url: "/assets/project1-main.jpg",
        challenges: "Handling large volume of transactions",
        solutions: "Used caching, lazy loading, and serverless functions",
        results: "Improved checkout speed by 70%",
      },
      {
        url: "/assets/project1-dashboard.jpg",
        challenges: "Visualizing sales data",
        solutions: "Designed intuitive analytics dashboard",
        results: "Helped team identify key buying trends",
      },
      // Add more images/entries as needed
    ]
  },

];

const Projects = () => {
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
    <section id="works" className="py-24 px-8 sm:px-12 md:px-16 lg:px-24">
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
            // className="text-lg text-gray-700 max-w-2xl mx-auto"
             className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mx-auto"
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
            {t("contactUs")}
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
              className="w-full object-cover group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-white mt-2">{project.description}</p>
                <button className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-300 transition-all w-full mt-2 sm:w-auto" onClick={() => openModal(project)}>{t("showMore")}</button>
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

      {modalOpen && <ProjectModal project={activeProject} closeModal={closeModal} />}
    </section>
  );
};

export default Projects;
