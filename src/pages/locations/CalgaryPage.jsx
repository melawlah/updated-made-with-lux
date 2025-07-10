import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function CalgaryPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.calgary.title")}</title>
        <meta name="description" content={t("seo.calgary.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-calgary" />
      </Helmet>
      <HomeLayout
        city="calgary"
        cityOverrides={{
            hero: {
            title: t("calgary.heroTitle"),
            subtitle: t("calgary.heroSubtitle"),
            },
            about: {
            heading: t("calgary.about.heading"),
            para: t("calgary.about.para"),
            services: t("calgary.about.services", { returnObjects: true }),
            },
            faq: t("calgary.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
