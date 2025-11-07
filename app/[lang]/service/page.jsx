import React from "react";
import Page from "../../../components/Service/Page";

export async function generateMetadata({ params }) {
  const { lang } = params;

  const translations = {
    en: {
      title: "Our Services | ORVEXCO",
      description:
        "Explore ORVEXCO services: Fire Rated Doors, High-Speed Fabric Doors, Garage Doors, Rolling Shutters, Bullet & Blast Resistant Doors, Structural Steel Fabrication — engineered for safety, precision, and industrial excellence.",
      keywords:
        "ORVEXCO services, fire rated doors, high-speed fabric doors, garage doors, rolling shutters, bullet resistant doors, blast resistant doors, structural steel fabrication, industrial solutions, engineering services",
    },
    ar: {
      title: "خدماتنا | أورفكسو",
      description:
        "استكشف خدمات أورفكسو: الأبواب المقاومة للحريق، أبواب قماشية عالية السرعة، أبواب الجراج، أبواب الدحرجة، الأبواب المقاومة للرصاص والانفجارات، تصنيع الهياكل الفولاذية — مصممة لتحقيق الأمان والدقة والتميز الصناعي.",
      keywords:
        "خدمات أورفكسو, أبواب مقاومة للحريق, أبواب قماشية عالية السرعة, أبواب الجراج, أبواب الدحرجة, أبواب مقاومة للرصاص, أبواب مقاومة للانفجارات, تصنيع الهياكل الفولاذية, حلول صناعية, خدمات هندسية",
    },
  };

  const t = translations[lang] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://brandraize.com/services/${lang}`,
      siteName: "BrandRaize",
      images: [
        {
          url: "https://brandraize.com/images/services-banner.jpg",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
      locale: lang === "ar" ? "ar" : "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["https://brandraize.com/images/services-banner.jpg"],
    },
  };
}

export default function ServicesPage({ params }) {
  return <Page params={params} />;
}
