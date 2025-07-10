import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function MontrealPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.montreal.title")}</title>
        <meta name="description" content={t("seo.montreal.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-montreal" />
      </Helmet>
      <HomeLayout
        city="montreal"
        cityOverrides={{
            hero: {
            title: t("montreal.heroTitle"),
            subtitle: t("montreal.heroSubtitle"),
            },
            about: {
            heading: t("montreal.about.heading"),
            para: t("montreal.about.para"),
            services: t("montreal.about.services", { returnObjects: true }),
            },
            faq: t("montreal.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
