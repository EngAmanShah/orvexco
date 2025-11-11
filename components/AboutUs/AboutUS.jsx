"use client";

import React, { useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
  FaServer,
  }
 from "react-icons/fa";
 import { motion } from "framer-motion";
 import styles from "./aboutus.module.css";
 export default function AboutUs({ params }) {
  const resolvedParams = use(params);
  const currentLang = resolvedParams?.lang || "en";

  const router = useRouter();

  const starCanvasHero = useRef(null);
  const starCanvasStory = useRef(null);
  const starCanvasServices = useRef(null);

   //Starfield Animation
  const useStarfield = (canvasRef) => {
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", resize);

      const stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      }));

      function draw() {
        ctx.fillStyle = "#001233";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#fff";
        stars.forEach((s) => {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fill();

          s.x += s.dx;
          s.y += s.dy;
          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;
        });

        requestAnimationFrame(draw);
      }
      draw();

      return () => window.removeEventListener("resize", resize);
    }, []);
  };

  useStarfield(starCanvasHero);
  useStarfield(starCanvasStory);
  useStarfield(starCanvasServices);

  // Translations
  const content = {
    en: {
      heroTitle: "About ORVEXCO",
      heroSubtitle:
        "Engineering Strength — Building the Future with Iron, Aluminum, and Solar Energy.",
      heroExtra:
        "Orvexco is a multidisciplinary engineering and software solutions company that operates across industrial and digital sectors. With a strong foundation in innovation and reliability, we specialize in delivering end-to-end engineering, construction, IT, and digital transformation services.",
      history:
        "Team Orvexco was established in the USA in 2009 as CIL, expanded to Kuwait in 2010 (officially registered in 2024), and further strengthened its presence in Saudi Arabia in 2025. With a strong engineering foundation and years of technical expertise, Orvexco has built a solid reputation for delivering innovative and reliable solutions in the construction, architectural, and digital sectors. Under the leadership of a new generation of engineers, Orvexco continues to evolve — focusing on modernization, sustainability, and excellence. Our mission is simple — to engineer progress, build trust, and empower clients with reliable technology and sustainable infrastructure.",
      servicesTitle: "Our Expertise",
      storyHeading: "Our Journey",
      buttons: {
        industry: "Industrial Solutions",
        solar: "Solar Systems",
        fabrication: "Fabrication Works",
        project: "Project Management",
        construction: "Construction Services",
        digital: "Digital Solutions",
      },
    },
   ar: {
      heroTitle: "عن أورفكسو",
      heroSubtitle:
        "قوة الهندسة — نبني المستقبل من الحديد والألمنيوم والطاقة الشمسية.",
      heroExtra:
        "أورفكسو هي شركة متعددة التخصصات في مجالات الهندسة والبرمجيات، تعمل في القطاعات الصناعية والرقمية. بفضل أساسها القوي من الابتكار والموثوقية، تتخصص أورفكسو في تقديم خدمات متكاملة في الهندسة والبناء والتحول الرقمي.",
      history:
        "تأسس فريق أورفكسو في الولايات المتحدة الأمريكية عام 2009 باسم CIL، وتوسع إلى الكويت في عام 2010 (وسُجل رسميًا في عام 2024)، وعزز وجوده في المملكة العربية السعودية في عام 2025. بفضل خبراتها الهندسية القوية وسنوات من الكفاءة التقنية، بنت أورفكسو سمعة راسخة في تقديم حلول مبتكرة وموثوقة في مجالات البناء والهندسة المعمارية والخدمات الرقمية. تحت قيادة الجيل الجديد من المهندسين، تواصل أورفكسو التطور والتركيز على التحديث والاستدامة والتميز. مهمتنا بسيطة — هندسة التقدم، وبناء الثقة، وتمكين العملاء من خلال التكنولوجيا الموثوقة والبنية التحتية المستدامة.",
      servicesTitle: "مجالات خبرتنا",
      storyHeading: "رحلتنا",
      buttons: {
        industry: "الحلول الصناعية",
        solar: "أنظمة الطاقة الشمسية",
        fabrication: "أعمال التصنيع",
        project: "إدارة المشاريع",
        construction: "خدمات البناء",
        digital: "الحلول الرقمية",
      },
    },
  };

  const t = content[currentLang];

 const services = [
  {
    image: "/fire-door.gif",
    title: { en: "Fire Rated Doors (Steel/Wood/Glass)", ar: "أبواب مقاومة للحريق (فولاذ / خشب / زجاج)" },
    text: {
      en: "Certified fire-rated doors designed for safety and durability in commercial and industrial applications.",
      ar: "أبواب معتمدة مقاومة للحريق توفر الأمان والمتانة في البيئات التجارية والصناعية.",
    },
    link: "/service/firedoor",
    btnKey: "industry",
  },
  {
    image: "/services/fabric-door.gif",
    title: { en: "High Speed Fabric Doors", ar: "أبواب قماشية عالية السرعة" },
    text: {
      en: "Fast, reliable, and durable fabric doors ideal for industrial environments requiring efficient access.",
      ar: "أبواب سريعة وموثوقة مصممة لزيادة كفاءة الحركة في المصانع والمنشآت.",
    },
    link: "/service/fabricdoor",
    btnKey: "solar",
  },
  {
    image: "/services/garage-door.gif",
    title: { en: "Garage Doors", ar: "أبواب الجراج" },
    text: {
      en: "Strong, secure, and customizable garage doors for residential, commercial, and industrial spaces.",
      ar: "أبواب قوية وآمنة وقابلة للتخصيص للمنازل والمنشآت التجارية والصناعية.",
    },
    link: "/service/garagedoor",
    btnKey: "fabrication",
  },
  {
    image: "/services/rolling-shutter.gif",
    title: { en: "Rolling Shutter Doors", ar: "أبواب الدحرجة المقاومة للحريق" },
    text: {
      en: "Fire-rated rolling shutters offering safety and performance for industrial and commercial use.",
      ar: "أبواب دحرجة مقاومة للحريق توفر الأمان والأداء العالي للمشاريع الصناعية والتجارية.",
    },
    link: "/service/rollingdoor",
    btnKey: "project",
  },
  {
    image: "/services/bullet-door.gif",
    title: { en: "Bullet & Blast Resistant Doors", ar: "أبواب مقاومة للرصاص والانفجارات" },
    text: {
      en: "Advanced ballistic and blast-resistant doors providing maximum protection and reliability.",
      ar: "أبواب متقدمة مقاومة للرصاص والانفجارات توفر أقصى درجات الحماية والموثوقية.",
    },
    link: "/service/bulletdoor",
    btnKey: "construction",
  },
  {
    image: "/services/steel-fabrication.gif",
    title: { en: "Structural Steel Fabrication", ar: "تصنيع الهياكل الفولاذية" },
    text: {
      en: "Precision fabrication and installation of high-quality structural steel for all industrial projects.",
      ar: "تصنيع دقيق للهياكل الفولاذية عالية الجودة لجميع المشاريع الصناعية.",
    },
    link: "/service/steelfab",
    btnKey: "digital",
  },
];


  return (
    <div className={styles.container}>
      {/* ⭐ Hero Section */}
      <section className={styles.heroSection}>
        <canvas ref={starCanvasHero} className={styles.heroCanvas} />
        <motion.div className={styles.heroContent}>
          <motion.h1 className={styles.heroTitle}>{t.heroTitle}</motion.h1>
          <motion.p className={styles.heroSubtitle}>{t.heroSubtitle}</motion.p>
          <motion.p className={styles.heroExtra}>{t.heroExtra}</motion.p>
        </motion.div>
      </section>

      {/* 🧬 Story Section */}
      <section className={styles.storySection}>
        <canvas ref={starCanvasStory} className={styles.storyCanvas} />
        <div
          className={styles.storyWrapper}
          style={{
            flexDirection: currentLang === "ar" ? "row-reverse" : "row",
          }}
        >
          <motion.div className={styles.storyText}>
            <h2 className={styles.storyHeading}>{t.storyHeading}</h2>
            <p className={styles.storyParagraph}>{t.history}</p>
          </motion.div>
          <motion.div className={styles.storyImage}>
            <img src="/bg.webp" alt="Our Story" />
          </motion.div>
        </div>
      </section>

      {/* 🧩 Services Section */}
      <section className={styles.servicesSection}>
        <canvas ref={starCanvasServices} className={styles.storyCanvas} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className={styles.servicesTitle}>{t.servicesTitle}</h2>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title[currentLang]}</h3>
                <p className={styles.serviceText}>{s.text[currentLang]}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.serviceButton}
                  onClick={() => router.push(s.link)}
                >
                  {t.buttons[s.btnKey]}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
