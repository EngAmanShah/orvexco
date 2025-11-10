import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Hero from '../../components/Hero';
import Features from '../../components/Feature';
import Badge from '../../components/Badge/Badge';
import Market from "@/components/MarketLeader/Market";
import Team from "@/components/Team/Team";
import Skills from "@/components/Skills/Skills";
import StartProject from "@/components/StartProject/StartProject";
import "@/styles/globals.css";
import ValueSlider from "@/components/ValueSlider";

export default async function Home({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

const content = {
  en: {
    heroTitle: "Engineering Strength, Building the Future",
    heroDescription:
      "Team Orvexco was established in the USA in 2009 as CIL, expanded to Kuwait in 2010, and officially registered in 2024. The company further strengthened its presence in Saudi Arabia in 2025, delivering innovative and reliable engineering solutions across the construction and architectural sectors.",
    shopNow: "Contact Us",
    whyChooseTitle: "Why Choose ORVEXCO",
    whyChooseDescription:
      "We combine experience with innovation to redefine industry standards through quality workmanship, advanced design, and customer-focused excellence.",
    features: [
      {
        title: "Experienced Leadership",
        description:
          "Led by Mr. Abdul Aziz Al Mhan and Eng. Chakola, bringing decades of expertise in industrial, aluminum, and solar energy sectors.",
      },
      {
        title: "Quality & Efficiency",
        description:
          "We ensure every project meets global standards with a strong focus on quality, efficiency, and sustainability.",
      },
      {
        title: "Comprehensive Solutions",
        description:
          "From fire-rated openings to structural steel fabrication, we deliver end-to-end industrial solutions.",
      },
      {
        title: "Global Reach",
        description:
          "With operations in the USA, Kuwait, and Saudi Arabia, ORVEXCO serves clients across 15+ countries.",
      },
    ],
    discoverTitle: "Our Core Services",
    discoverDescription:
      "ORVEXCO delivers a wide range of industrial and construction solutions designed for safety, strength, and precision.",
    services: [
      {
        title: "Fire Rated Doors (Steel/Wood/Glass)",
        image: "/fire-door.png",
        description:
          "Specifications typically include details on the door leaf and frame materials, fire resistance rating, hardware, seals, and finish. Common specifications involve using galvanized steel for the door and frame, a core material like honeycomb or a mineral core, and a powder-coated or fire-retardant paint finish. Critical components like hinges, locks, closers, and intumescent seals must also meet the specified fire rating and be installed according to manufacturer and relevant standards.",
      },
      {
        title: "High Speed Fabric Doors",
        image: "/fabric-door.png",
        description:
          "Curtain material (like PVC-coated polyester), operational speed (often 50-70 inches per second), wind resistance (up to 22 psf for heavy-duty models), and safety features (such as infrared sensors, reversing edges, and breakaway bottom bars). Other specifications include a control panel, activation options (push button, loop detector), and optional features like vision panels or insulation",
      },
      {
        title: "Garage Doors",
        image: "/garage-door.png",
        description:
          "Suitable for commercial, industrial, or residential use. You can adjust details depending on the type (manual, automatic, sectional, or roller shutter). Sectional / Roller / Overhead / High-Speed Garage Door (as specified), Constructed from galvanized steel or aluminum sheets, Polyurethane foam (PU) or polystyrene insulation, 40–50 mm thick, Polyurethane foam (PU) or polystyrene insulation, 40–50 mm thick, Stainless steel or glass vision panels ",
      },
      {
        title: "Rolling Shutter Doors",
        image: "/rolling-shutter.png",
        description:
          "Manually or Motor Operated Rolling Shutter Door, Vertical rolling type, guided within steel side channels, Inside or outside wall face / within structural opening, Industrial, commercial, warehouse, and parking areas",
      },
      {
        title: "Bullet & Blast Resistant Doors",
        image: "/bullet-door.png",
        description:
          " Hinged single or double leaf, outward/inward opening as specified, Security control rooms, data centers, embassies, defense facilities, banks, substations, or other high-risk areas, Designed to resist ballistic penetration and overpressure blast loads, tested and certified to UL 752 Levels 1–10 or EN 1522/1523 (FB4 to FB7)Bullet-resistant glazing to BR4–BR7 as per EN 1063",
      },
      {
        title: "Structural Steel Fabrication",
        image: "/steel-fabrication.jpg",
        description:
          "The work includes the supply, fabrication, welding, surface preparation, painting, delivery, and erection of all structural steel components as per approved drawings and standards. Industrial buildings, warehouses, platforms, pipe supports, trusses, frames, and other structural elements",
      },
      
      
    ],
    stats: {
      years: "15+ Years of Excellence",
      projects: "800+ Completed Projects",
      countries: "15+ Countries Served",
      workshops: "50,000㎡ across 4 workshops",
    },
    contact: {
      email: "abc@orvexco.com",
      phone: "055 993 1444",
    },
  },

  ar: {
    heroTitle: "قوة هندسية تبني المستقبل",
    heroDescription:
      "تأسست شركة أورفكسو في الولايات المتحدة عام 2009 باسم CIL، وتوسعت إلى الكويت في عام 2010، وتم تسجيلها رسميًا في عام 2024، كما عززت وجودها في المملكة العربية السعودية في عام 2025. تقدم الشركة حلولًا هندسية مبتكرة وموثوقة في مجالات البناء والعمارة.",
    shopNow: "تواصل معنا",
    whyChooseTitle: "لماذا تختار أورفكسو",
    whyChooseDescription:
      "نجمع بين الخبرة والابتكار لإعادة تعريف معايير الصناعة من خلال الجودة العالية، والتصميم المتقدم، والتميز في خدمة العملاء.",
    features: [
      {
        title: "قيادة ذات خبرة",
        description:
          "بقيادة  عبدالعزيز علي المهّان والمهندس تشاكولا، بخبرة تمتد لعقود في مجالات الحديد والألمنيوم والطاقة الشمسية.",
      },
      {
        title: "الجودة والكفاءة",
        description:
          "نلتزم بالمعايير العالمية مع التركيز على الجودة، الكفاءة، والاستدامة في جميع المشاريع.",
      },
      {
        title: "حلول شاملة",
        description:
          "من الأبواب المقاومة للحريق إلى تصنيع الهياكل الفولاذية — نقدم حلولاً صناعية متكاملة.",
      },
      {
        title: "انتشار عالمي",
        description:
          "بعمليات في الولايات المتحدة والكويت والمملكة العربية السعودية، نخدم عملاء في أكثر من 15 دولة.",
      },
    ],
    discoverTitle: "خدماتنا الأساسية",
    discoverDescription:
      "تقدم أورفكسو مجموعة واسعة من الحلول الصناعية والإنشائية المصممة لتحقيق الأمان والدقة العالية.",
    services: [
      {
        title: "أبواب مقاومة للحريق (فولاذ / خشب / زجاج)",
        image: "/fire-door.png",
        description:
          "أبواب معتمدة مقاومة للحريق توفر الأمان والمتانة في البيئات التجارية والصناعية.",
      },
      {
        title: "أبواب قماشية عالية السرعة",
        image: "/fabric-door.png",
        description:
          "أبواب سريعة وموثوقة مصممة لزيادة كفاءة الحركة في المصانع والمنشآت.",
      },
      {
        title: "أبواب الجراج",
        image: "/garage-door.png",
        description:
          "أبواب قوية وآمنة وقابلة للتخصيص للمنازل والمنشآت التجارية والصناعية.",
      },
      {
        title: "أبواب الدحرجة المقاومة للحريق",
        image: "/rolling-shutter.png",
        description:
          "أبواب دحرجة مقاومة للحريق توفر الأمان والأداء العالي للمشاريع الصناعية والتجارية.",
      },
      {
        title: "أبواب مقاومة للرصاص والانفجارات",
        image: "/bullet-door.png",
        description:
          "أبواب متقدمة مقاومة للرصاص والانفجارات توفر أقصى درجات الحماية والموثوقية.",
      },
      {
        title: "تصنيع الهياكل الفولاذية",
        image: "/steel-fabrication.jpg",
        description:
          "تصنيع دقيق للهياكل الفولاذية عالية الجودة لجميع المشاريع الصناعية.",
      },
    ],
    stats: {
      years: "15+ سنة من التميز",
      projects: "800+ مشروع مكتمل",
      countries: "15+ دولة حول العالم",
      workshops: "50,000㎡ عبر 4 ورش عمل",
    },
    contact: {
      email: "abc@orvexco.com",
      phone: "055 993 1444",
    },
  },
};

  const {
    heroTitle,
    heroDescription,
    shopNow,
    whyChooseTitle,
    whyChooseDescription,
    features,
    discoverTitle,
    discoverDescription,
    services,
    heroButton,

    products,


  } = content[lang] || content.en;

  return (
    <>
      {/* Hero Section */}
      <Hero lang={lang} text={heroButton} heroTitle={heroTitle} heroDescription={heroDescription} />
      {/* Feature Section */}
      <Features
        title={whyChooseTitle}
        description={whyChooseDescription}
        features={features}
          lang={lang}
      />
      {/* Services */}
      <Services
        lang={lang}
        servicesData={services}
        sectionTitle={discoverTitle}
        sectionDescription={discoverDescription}
      />
      {/* Badge  */}
 <Badge    lang={lang} />

        {/* Market  */}
<Market   lang={lang}  />

   {/* Team  */}
   <Team lang={lang}/>
       {/* Products  */}
      <Products lang={lang} />
         {/* Skills  */}
         <Skills lang={lang}/>
              {/* Start Project  */}
         {/* <ValueSlider lang={lang} /> */}

    <StartProject lang={lang} />
   
    </>
  );
}


