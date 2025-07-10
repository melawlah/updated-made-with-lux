import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function HalifaxPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.halifax.title")}</title>
        <meta name="description" content={t("seo.halifax.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-halifax" />
      </Helmet>
      <HomeLayout
        city="halifax"
        cityOverrides={{
            hero: {
            title: t("halifax.heroTitle"),
            subtitle: t("halifax.heroSubtitle"),
            },
            about: {
            heading: t("halifax.about.heading"),
            para: t("halifax.about.para"),
            services: t("halifax.about.services", { returnObjects: true }),
            },
            faq: t("halifax.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
