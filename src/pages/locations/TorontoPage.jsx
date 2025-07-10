import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import HomeLayout from '../../components/HomeLayout';

export default function TorontoPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.toronto.title")}</title>
        <meta name="description" content={t("seo.toronto.description")} />
        <link rel="canonical" href="https://madewithlux.com/web-design-toronto" />
      </Helmet>

      {/* <HomeLayout
        cityOverrides={{
          hero: {
            title: t("cityPage.toronto.heroTitle"),
            subtitle: t("cityPage.toronto.heroSubtitle"),
          },
          about: {
            heading: t("cityPage.toronto.aboutHeading"),
          }
        }}
      /> */}

      <HomeLayout
        city="toronto"
        cityOverrides={{
            hero: {
            title: t("cityPage.toronto.heroTitle"),
            subtitle: t("cityPage.toronto.heroSubtitle"),
            },
            about: {
            heading: t("cityPage.toronto.about.heading"),
            para: t("cityPage.toronto.about.para"),
            services: t("cityPage.toronto.about.services", { returnObjects: true }),
            },
            faq: t("cityPage.toronto.faq", { returnObjects: true })
        }}
        
        />
    
    </>
  );
}
