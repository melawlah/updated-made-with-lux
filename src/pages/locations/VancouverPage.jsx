import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function VancouverPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.vancouver.title")}</title>
        <meta name="description" content={t("seo.vancouver.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-vancouver" />
      </Helmet>
      <HomeLayout
        city="vancouver"
        cityOverrides={{
            hero: {
            title: t("vancouver.heroTitle"),
            subtitle: t("vancouver.heroSubtitle"),
            },
            about: {
            heading: t("vancouver.about.heading"),
            para: t("vancouver.about.para"),
            services: t("vancouver.about.services", { returnObjects: true }),
            },
            faq: t("vancouver.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
