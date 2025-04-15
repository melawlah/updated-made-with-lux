// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import ProjectModal from "./ProjectModal";

// const projects = [
//   {
//     id: 1,
//     title: "Website Redesign for an Event Planning & Rental Company",
//     description: "Made it easy for customers to explore services and book rentals online.",
//     images: [
//         "/assets/flortig-mock-up.png",
//     ],
//     link: "https://peru-monkey-684859.hostingersite.com/",
//     caseStudyDesc: "Through strategic design and thoughtful development, we were able to address key challenges Events by Lorlar faced in customer engagement and service presentation. By implementing intuitive user experiences, clear service showcases, and valuable content, we helped drive stronger client interactions.",
//     gallery: [
//       {
//         url: "/assets/flortig-shop-ss.png",
//         challenges: "Customers lacked an easy, intuitive way to browse and rent items online, resulting in a cumbersome booking process.",
//         solutions: "We developed a streamlined, user-friendly rental store allowing customers to effortlessly browse and book items with just a few clicks.",
//         results: "The new system has made it easier for customers to easily rent items online, reducing back-and-forth.",
//       },
//       {
//         url: "/assets/event-planning-fortig.png",
//         challenges: "The website did not effectively communicate the full range of event planning services, leaving potential clients uncertain about the value offered.",
//         solutions: "We created a dedicated, visually engaging section to highlight event planning services and showcase past work in a professional manner.",
//         results: "The new service presentation has improved client understanding of the business's offerings, helping attract and engage more prospective clients.",
//       },
//       {
//         url: "/assets/blogpage-flortig 4.png",
//         challenges: "The site lacked a central platform for sharing valuable content like event planning tips, trends, and inspiration, limiting opportunities to engage with potential clients.",
//         solutions: "We added a dynamic blog section where the team can regularly share insights, trends, and event ideas, positioning the brand as an authority in the industry.",
//         results: "The blog will foster increased trust with visitors, showcasing expertise and making it easier for potential clients to connect with and choose the services.",
//       },
//     ]
//   },
//   {
//     id: 2,
//     title: "Custom Website for a Bakery Business",
//     description: "A warm, inviting website that highlights their work and lets customers place custom cake orders with ease.",
//     images: [
//       "/assets/lawlah-sweets-mockup.png",
//     ],
//     link: "/projects/luxury-app",
//     caseStudyDesc: "we focused on streamlining the customer journey — from visual inspiration to custom orders. The result is a beautiful, functional site that not only showcases their products but also simplifies the ordering process, helping the business run more efficiently while delivering a premium experience.",
//     gallery: [
//       {
//         url: "/assets/lawlahsweets-showcase-ss.png",
//         challenges: "Customers couldn’t easily explore the full range of cakes and pastries, making it difficult to decide or place orders.",
//         solutions: "We designed a visually rich menu that elegantly showcases all available baked goods, organized for easy browsing.",
//         results: "The enhanced product display enables customers to browse and place orders effortlessly, creating a smoother, more enjoyable user experience.",
//       },
//       {
//         url: "/assets/custom-order-form.png",
//         challenges: "The ordering process was manual and inefficient, requiring back-and-forth communication to capture order details accurately.",
//         solutions: "We developed a comprehensive, easy-to-use custom order form with fields for size, flavor, design preferences, and special requests, all handled online.",
//         results: "The business now receives complete, accurate orders while saving time on admin, reducing errors, and improving customer satisfaction.",
//       },
//     ]
//   },
//   {
//     id: 3,
//     title: "AI prompt application",
//     description: "An open-source AI prompting tool for modern world to discover, create and share creative prompts",
//     images: [
//       "/assets/ipad-prototype.png"
//     ],
//     link: "https://ai-prompts-app-one.vercel.app/",
//     caseStudyDesc: "This project is all about empowering creators in the AI space. By building a modern, open-source tool focused on accessibility and design, we helped turn an idea into a collaborative, community-driven platform for the future of AI creativity.",
//     gallery: [
//       {
//         url: "/assets/promptopia-project-img.png",
//         challenges: "There was no visually engaging, user-friendly platform for discovering and sharing AI prompts — especially one that caters to a modern, creative audience.",
//         solutions: "We designed and developed an open-source web app where users can explore, create, and share AI prompts effortlessly. The interface emphasizes simplicity, community, and creativity, with built-in tools for managing and showcasing prompts.",
//         results: "Users now have a centralized, intuitive space to organize, reuse, and discover AI prompts — saving time and sparking more consistent creativity.",
//       }
      
//     ]
//   },
//   {
//     id: 4,
//     title: "Portfolio Website for a Software Developer",
//     description: "A professional, easy-to-navigate website that highlights their work, experience, and writing.",
//     images: [
//       "/assets/r-ariyo-portfolio-mockup.png"
//     ],
//     link: "https://ruth-portfolio-iota.vercel.app/",
//     caseStudyDesc:"This project focused on bridging the gap between technical depth and visual storytelling. By reimagining how portfolio projects are presented, we created a more inclusive, professional, and impactful experience that better communicates the developer's skills and value.",
//     gallery: [
//       {
//         url: "/assets/r-portfolio-website-update.png",
//         challenges: "While each project had a detailed README on GitHub, the portfolio lacked a visual presentation, making it less accessible to non-technical visitors and potential collaborators.",
//         solutions: "We designed and developed a dedicated portfolio section that transforms GitHub projects into engaging showcases — complete with visuals, concise summaries, and key tech stacks — tailored for both technical and non-technical audiences.",
//         results: "The portfolio now provides a clear, visually rich overview of the developer’s work, allowing visitors to quickly grasp project scope, impact, and relevance at a glance.",
//       }
//     ]
//   },

// ];

// const Projects = () => {
//   const { t } = useTranslation();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [activeProject, setActiveProject] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);
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

//   const openLightbox = (image) => {
//     setCurrentImage(image);
//     setLightboxOpen(true);
//   };

//   const closeLightbox = () => {
//     setLightboxOpen(false);
//     setCurrentImage(null);
//   };

//   return (
//     <section id="works" className="py-24 px-8 sm:px-12 md:px-16 lg:px-24">
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
//             className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mx-auto"
//           >
//             {t("projects.subtitle")}
//           </motion.p>
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
//               src={project.images[0]} // First image as the preview
//               alt={project.title}
//               className="w-full object-cover group-hover:scale-110 transition-all duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-6 left-6">
//                 <h3 className="text-white text-lg font-semibold">{project.title}</h3>
//                 <p className="text-white mt-2">{project.description}</p>
//                 <button className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-300 transition-all w-full mt-2 sm:w-auto" onClick={() => openModal(project)}>{t("showMore")}</button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
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

//       {modalOpen && <ProjectModal project={activeProject} closeModal={closeModal} />}
//     </section>
//   );
// };

// export default Projects;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Access the projects from translation files
  const projects = t("portfolio", { returnObjects: true });

  // Ensure that 'projects' is always an array
  const currentProjects = Array.isArray(projects) ? projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  ) : [];

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
            className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mx-auto"
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <motion.div
              key={project.id} // Ensure a unique key for each project
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
                  <button
                    className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-300 transition-all w-full mt-2 sm:w-auto"
                    onClick={() => openModal(project)}
                  >
                    {t("showMore")}
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>{t("projects.noProjects")}</p> // You can define a message like "No projects available."
        )}
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


