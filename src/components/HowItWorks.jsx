import React from "react";
import { useTranslation } from "react-i18next";


const steps = [
  { id: 1, titleKey: "step1Title", descKey: "step1Desc" },
  { id: 2, titleKey: "step2Title", descKey: "step2Desc" },
  { id: 3, titleKey: "step3Title", descKey: "step3Desc" },
  { id: 4, titleKey: "step4Title", descKey: "step4Desc" },
  { id: 5, titleKey: "step5Title", descKey: "step5Desc" },
  { id: 6, titleKey: "step6Title", descKey: "step6Desc" },
];

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section id="process" className="bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        {/* <p className="uppercase text-sm text-gray-500 tracking-wide">
          {t("howItWorksTagline")}
        </p> */}
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          {t("howItWorksTitle")}
        </h2>
        <p 
        // className="text-gray-500 max-w-2xl mx-auto mt-4"
         className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-3xl mt-4 mx-auto"
        >
          {t("howItWorksDesc")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-start bg-gray-50 hover:bg-gray-100 transition rounded-2xl p-8 gap-4 shadow-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-semibold text-sm">
              {step.id}
            </div>
            <h3 className="text-xl font-semibold">{t(step.titleKey)}</h3>
            <p className="text-gray-600 text-sm">{t(step.descKey)}</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
