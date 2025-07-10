import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function KitchenerPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.kitchener.title")}</title>
        <meta name="description" content={t("seo.kitchener.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-kitchener" />
      </Helmet>
      <HomeLayout
        city="kitchener"
        cityOverrides={{
            hero: {
            title: t("kitchener.heroTitle"),
            subtitle: t("kitchener.heroSubtitle"),
            },
            about: {
            heading: t("kitchener.about.heading"),
            para: t("kitchener.about.para"),
            services: t("kitchener.about.services", { returnObjects: true }),
            },
            faq: t("kitchener.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
