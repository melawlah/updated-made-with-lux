// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const FAQ = () => {
//   const { t } = useTranslation();
//   const faqList = t("faq", { returnObjects: true });
//   const faqTitle = t("faqTitle");
//   const faqIntro = t("faqIntro");

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 px-4 max-w-5xl mx-auto">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           {faqTitle}
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">{faqIntro}</p>
//       </div>

//       <div className="space-y-6">
//         {faqList.map((item, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//           >
//             <button
//               onClick={() => toggle(index)}
//               className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none hover:bg-gray-50 transition"
//             >
//               <span className="text-lg font-medium text-gray-900">
//                 {item.question}
//               </span>
//               <ChevronDownIcon
//                 className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             <AnimatePresence>
//               {openIndex === index && (
//                 <motion.div
//                   key="content"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="px-6 pb-5 text-gray-700 leading-relaxed text-md"
//                 >
//                   {item.answer}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const { t } = useTranslation();
  const faqList = t("faq", { returnObjects: true });
  const faqTitle = t("faqTitle");
  const faqIntro = t("faqIntro");

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        {/* <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4"> */}
        <h2 className="text-4xl md:text-5xl font-bold mt-2" >
          {faqTitle}
        </h2>
        {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"> */}
        <p  className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mt-4 mx-auto">
          {faqIntro}
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {faqList.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 ${
              openIndex === index ? "shadow-md ring-1 ring-black/5" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left group focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-1 text-gray-700 text-base leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

