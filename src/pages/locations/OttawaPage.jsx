import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function OttawaPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.ottawa.title")}</title>
        <meta name="description" content={t("seo.ottawa.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-ottawa" />
      </Helmet>
      <HomeLayout
        city="ottawa"
        cityOverrides={{
            hero: {
            title: t("ottawa.heroTitle"),
            subtitle: t("ottawa.heroSubtitle"),
            },
            about: {
            heading: t("ottawa.about.heading"),
            para: t("ottawa.about.para"),
            services: t("ottawa.about.services", { returnObjects: true }),
            },
            faq: t("ottawa.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
