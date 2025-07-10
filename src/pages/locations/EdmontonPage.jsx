import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function EdmontonPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.edmonton.title")}</title>
        <meta name="description" content={t("seo.edmonton.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-edmonton" />
      </Helmet>
      <HomeLayout
        city="edmonton"
        cityOverrides={{
            hero: {
            title: t("edmonton.heroTitle"),
            subtitle: t("edmonton.heroSubtitle"),
            },
            about: {
            heading: t("edmonton.about.heading"),
            para: t("edmonton.about.para"),
            services: t("edmonton.about.services", { returnObjects: true }),
            },
            faq: t("edmonton.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
