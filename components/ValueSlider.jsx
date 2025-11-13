"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ValueSlider({ lang }) {
  const slides = [
    {
      title: "Fire Rated Doors",
      subtitle: "Steel/Wood/Glass Fire Protection Solutions",
      description: "Specifications typically include details on the door leaf and frame materials, fire resistance rating, hardware, seals, and finish. Common specifications involve using galvanized steel for the door and frame, a core material like honeycomb or a mineral core, and a powder-coated or fire-retardant paint finish.",
      features: [
        "Galvanized steel door & frame",
        "Honeycomb or mineral core",
        "Fire-resistant hardware & seals",
        "Powder-coated finish"
      ],
      image: "/Fire4.jpg",
    },
    {
      title: "High Speed Fabric Doors",
      subtitle: "Rapid Operation for High-Traffic Areas",
      description: "Curtain material (like PVC-coated polyester), operational speed (often 50-70 inches per second), wind resistance (up to 22 psf for heavy-duty models), and safety features (such as infrared sensors, reversing edges, and breakaway bottom bars).",
      features: [
        "50-70 inches per second speed",
        "Up to 22 psf wind resistance",
        "Infrared safety sensors",
        "PVC-coated polyester curtain"
      ],
      image: "/High2.jpg",
    },
    {
      title: "Garage Doors",
      subtitle: "Commercial, Industrial & Residential Solutions",
      description: "Suitable for commercial, industrial, or residential use. You can adjust details depending on the type (manual, automatic, sectional, or roller shutter). Constructed from galvanized steel or aluminum sheets with polyurethane foam insulation.",
      features: [
        "Galvanized steel/aluminum construction",
        "40-50mm insulation thickness",
        "Sectional/Roller/Overhead types",
        "Stainless steel vision panels"
      ],
      image: "/Gar2.jpg",
    },
    {
      title: "Rolling Shutter Doors",
      subtitle: "Secure & Durable Industrial Solutions",
      description: "Manually or Motor Operated Rolling Shutter Door, Vertical rolling type, guided within steel side channels. Suitable for industrial, commercial, warehouse, and parking areas with inside or outside wall face installation.",
      features: [
        "Manual or motor operated",
        "Vertical rolling design",
        "Steel side channels",
        "Industrial & commercial use"
      ],
      image: "/ar2.jpg",
    },
    {
      title: "Bullet & Blast Resistant Doors",
      subtitle: "Maximum Security Protection",
      description: "Hinged single or double leaf doors designed to resist ballistic penetration and overpressure blast loads. Tested and certified to UL 752 Levels 1–10 or EN 1522/1523 for security control rooms, data centers, embassies, and high-risk areas.",
      features: [
        "UL 752 & EN 1522/1523 certified",
        "Ballistic penetration resistance",
        "Blast load protection",
        "High-security facilities"
      ],
      image: "/Bul4.jpg",
    },
    {
      title: "Structural Steel Fabrication",
      subtitle: "Precision Engineering & Construction",
      description: "The work includes the supply, fabrication, welding, surface preparation, painting, delivery, and erection of all structural steel components as per approved drawings and standards for industrial buildings, warehouses, platforms, and structural elements.",
      features: [
        "Complete fabrication services",
        "Welding & surface preparation",
        "Industrial building structures",
        "Quality standards compliance"
      ],
      image: "/Ste1.jpg",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Provide These Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive door solutions and structural steel fabrication services for commercial, industrial, and residential applications
          </p>
        </div>

        <div className="ValueProposition_container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="StackedSlider_container ValueProposition_slideContainer"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="StackedSlider_slide StackedSlider_baseSlide">
                <div className="ValueProposition_slideContent">
                  {/* Left Content */}
                  <div className="ValueProposition_left">
                    <div className="ValueProposition_badge">
                      {slide.title}
                    </div>
                    <h2 className="sectionTitle">
                      {slide.subtitle}
                    </h2>
                    <p className="sectionDescription">
                      {slide.description}
                    </p>
                    <div className="ValueProposition_featuresRow">
                      {slide.features.map((feature, i) => (
                        <div key={i} className="ValueProposition_featureItem">
                          <div className="featureIcon">✓</div>
                          <div className="ValueProposition_featureSubtitle">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="ValueProposition_right">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="ValueProposition_image"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Arrows - Positioned on sides */}
            <div className="StackedSlider_arrows">
              <button 
                className="swiper-button-prev StackedSlider_arrowButton StackedSlider_arrowLeft" 
                type="button"
              >
                <svg fill="none" height="28" viewBox="0 0 42 42" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 6C29.284 6 36 12.716 36 21C36 29.284 29.284 36 21 36C12.716 36 6 29.284 6 21C6 12.716 12.716 6 21 6ZM12 21V21.004C12 21.1345 12.0258 21.2637 12.0759 21.3841C12.126 21.5046 12.1995 21.614 12.292 21.706L18.292 27.706C18.4806 27.8882 18.7332 27.989 18.9954 27.9867C19.2576 27.9844 19.5084 27.8792 19.6938 27.6938C19.8792 27.5084 19.9844 27.2576 19.9867 26.9954C19.989 26.7332 19.8882 26.4806 19.706 26.292L15.414 22H31C31.2652 22 31.5196 21.8946 31.7071 21.7071C31.8946 21.5196 32 21.2652 32 21C32 20.7348 31.8946 20.4804 31.7071 20.2929C31.5196 20.1054 31.2652 20 31 20H15.414L19.708 15.708C19.8902 15.5194 19.991 15.2668 19.9887 15.0046C19.9864 14.7424 19.8812 14.4916 19.6958 14.3062C19.5104 14.1208 19.2596 14.0156 18.9974 14.0133C18.7352 14.011 18.4826 14.1118 18.294 14.294L12.294 20.294C12.2013 20.3866 12.1278 20.4968 12.078 20.618C12.0265 20.7388 12 20.8687 12 21Z" fill="currentColor"></path>
                </svg>
              </button>
              <button 
                className="swiper-button-next StackedSlider_arrowButton StackedSlider_arrowRight" 
                type="button"
              >
                <svg fill="none" height="28" viewBox="0 0 42 42" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 6C12.716 6 6 12.716 6 21C6 29.284 12.716 36 21 36C29.284 36 36 29.284 36 21C36 12.716 29.284 6 21 6ZM30 21V21.004C30 21.1345 29.9742 21.2637 29.9241 21.3841C29.874 21.5046 29.8005 21.614 29.708 21.706L23.708 27.706C23.5194 27.8882 23.2668 27.989 23.0046 27.9867C22.7424 27.9844 22.4916 27.8792 22.3062 27.6938C22.1208 27.5084 22.0156 27.2576 22.0133 26.9954C22.011 26.7332 22.1118 26.4806 22.294 26.292L26.586 22H11C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21C10 20.7348 10.1054 20.4804 10.2929 20.2929C10.4804 20.1054 10.7348 20 11 20H26.586L22.292 15.708C22.1098 15.5194 22.009 15.2668 22.0113 15.0046C22.0136 14.7424 22.1188 14.4916 22.3042 14.3062C22.4896 14.1208 22.7404 14.0156 23.0026 14.0133C23.2648 14.011 23.5174 14.1118 23.706 14.294L29.706 20.294C29.7987 20.3866 29.8722 20.4968 29.922 20.618C29.9735 20.7388 30 20.8687 30 21Z" fill="currentColor"></path>
                </svg>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="swiper-pagination StackedSlider_dots"></div>
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .ValueProposition_container {
          position: relative;
        }

        .StackedSlider_container {
          position: relative;
        }

        .ValueProposition_slideContainer {
          margin: 0 auto;
        }

        .StackedSlider_slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .StackedSlider_baseSlide {
          min-height: 600px;
        }

        .ValueProposition_slideContent {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .ValueProposition_left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ValueProposition_badge {
          background: #f3f4f6;
          color: #374151;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
          width: fit-content;
        }

        .sectionTitle {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #111827;
          margin: 0;
        }

        .sectionDescription {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #6b7280;
          margin: 0;
        }

        .ValueProposition_featuresRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .ValueProposition_featureItem {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .featureIcon {
          background: #10b981;
          color: white;
          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .ValueProposition_featureSubtitle {
          font-size: 0.95rem;
          color: #374151;
          line-height: 1.4;
          font-weight: 500;
        }

        .ValueProposition_right {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .ValueProposition_image {
          object-fit: cover;
          border-radius: 1rem;
        }

        /* Navigation Arrows - Positioned on sides */
        .StackedSlider_arrows {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 10;
          pointer-events: none;
        }

        .StackedSlider_arrowButton {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: #374151;
          pointer-events: all;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .StackedSlider_arrowButton:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          transform: scale(1.05);
        }

        .StackedSlider_dots {
          display: flex;
          gap: 0.5rem;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .swiper-pagination-bullet {
          width: 0.5rem;
          height: 0.5rem;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
        }

        .swiper-pagination-bullet-active {
          background: #374151;
          transform: scale(1.2);
        }

        /* Swiper overrides */
        .swiper {
          padding-bottom: 6rem;
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: scale(1) !important;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .StackedSlider_arrows {
            padding: 0 1rem;
          }
          
          .StackedSlider_arrowButton {
            width: 2.5rem;
            height: 2.5rem;
          }
          
          .ValueProposition_slideContent {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .sectionTitle {
            font-size: 2rem;
          }
          
          .sectionDescription {
            font-size: 1rem;
          }
          
          .ValueProposition_featuresRow {
            grid-template-columns: 1fr;
          }
          
          .ValueProposition_right {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}