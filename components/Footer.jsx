"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaSnapchatGhost,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Footer({ lang }) {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // Hide footer on admin pages
  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) {
    return null;
  }

  const arabicText = {
    companyName: "أورفكسكو",
    description:
      "فريق أورفكسكو متخصص في تقديم حلول هندسية متكاملة، من التصميم إلى التنفيذ، في مجالات البناء، الأبواب المقاومة للحريق، والصلب الإنشائي.",
    companyTitle: "الشركة",
    helpTitle: "المساعدة",
    links: {
      home: "الرئيسية",
      about: "من نحن",
      contact: "اتصل بنا",
      blog: "المدونة",
      faq: "الأسئلة الشائعة",
    },
    rightsReserved: "جميع الحقوق محفوظة.",
    phone: "+966557828312",
    email: "abc@orvexco.com",
    location: "الجبيل الصناعية، شارع الملك فيصل بن عبدالعزيز، المملكة العربية السعودية",
  };

  const englishText = {
    companyName: "ORVEXCO",
    description:
      "Team Orvexco delivers innovative and reliable engineering solutions in construction, fire-rated doors, and structural steel fabrication across Saudi Arabia and beyond.",
    companyTitle: "Company",
    helpTitle: "Help",
    links: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
      blog: "Blog",
      faq: "FAQ",
    },
    rightsReserved: "All Rights Reserved.",
    phone: "+966 55 993 1444",
    email: "abc@orvexco.com",
    location:
      "Jubail Industrial City, King Faisal Bin Abdulaziz Street, Saudi Arabia",
  };

  const t = lang === "ar" ? arabicText : englishText;

  return (
    <footer
      className={`footer lh-lg text-center-sm text-black ${
        lang === "ar" ? "text-end" : "text-start"
      }`}
      style={{ backgroundColor: "#F0F0F0" }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row pt-5">
          {/* Company Info */}
          <div className="col-md-6 mb-4 text-center text-md-start">
            <Link href={`/${lang}`}>
              <img
                src="/logo_black.png"
                alt={`${t.companyName} logo`}
                style={{ width: "200px", height: "auto" }}
              />
            </Link>
            <p className="mt-4" style={{ fontSize: "18px", lineHeight: "1.7" }}>
              <span className="fw-bold">{t.companyName}</span> — {t.description}
            </p>

            {/* Social Media */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3 flex-wrap">
              <a
                href="https://facebook.com/orvexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://x.com/orvexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://instagram.com/orvexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/orvexco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://github.com/orvexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.fiverr.com/orvexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Fiverr"
              >
                <SiFiverr size={28} />
              </a>

              <a
                href="https://www.snapchat.com/add/orvexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Snapchat"
              >
                <FaSnapchatGhost size={22} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="mb-4 fw-semibold">{t.companyTitle}</h4>
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <Link
                  href={`/${lang}`}
                  className="text-decoration-none text-black"
                >
                  {t.links.home}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href={`/${lang}/about-us`}
                  className="text-decoration-none text-black"
                >
                  {t.links.about}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href={`/${lang}/contact-us`}
                  className="text-decoration-none text-black"
                >
                  {t.links.contact}
                </Link>
              </h6>
              <h6>
                <Link
                  href={`/${lang}/blog`}
                  className="text-decoration-none text-black"
                >
                  {t.links.blog}
                </Link>
              </h6>
            </div>
          </div>

          {/* Help & Contact */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="mb-4 fw-semibold">{t.helpTitle}</h4>
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <Link
                  href={`/${lang}/faq`}
                  className="text-decoration-none text-black"
                >
                  {t.links.faq}
                </Link>
              </h6>

              {/* Phone */}
              <h6 className="mb-3">
                <a
                  href={`tel:${t.phone}`}
                  className="text-decoration-none text-black"
                >
                  {t.phone}
                </a>
              </h6>

              {/* Email */}
              <h6 className="mb-3">
                <a
                  href={`mailto:${t.email}`}
                  className="text-decoration-none text-black"
                >
                  {t.email}
                </a>
              </h6>

              {/* Location */}
              <h6 className="mb-3" style={{ fontSize: "15px" }}>
                {t.location}
              </h6>
            </div>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="row text-center" style={{ color: "black" }}>
          <div className="col pb-3">
            &copy; {currentDate?.getFullYear()} {t.companyName}
            <span className="d-none d-sm-inline"> | </span>
            <br className="d-sm-none" />
            <span>{t.rightsReserved}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
