"use client";

import React, { use, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function FireDoorsPage({ params }) {
  const { lang } = use(params);
  const isArabic = lang === "ar";
  const [quantity, setQuantity] = useState(1);

  const productData = {
    en: {
      product: {
        title: "Fire door SFFECO galvanized steel with Bottom Louver Model SF/DD",
        specs: "Double Door leaf size 1950×1900 mm Color Beige",
        views: "(1863 Product Views)",
        status: "in stock",
        description: "Fire-resistant doors from SFFECO Model SF / DD, size 1950 x 1900 mm, Beige color, made of Galvanized Steel to comply with various architectural requirements, applications include the entrances of industrial buildings, and the service doors of commercial stores, and they are also widely used as partition or external doors in Electrical and petrochemical factories, Available now in the highest quality. Delivery available.",
        fullDescription: "Fire-Resistant Doors from SFFECO, made of Galvanized Steel to comply with various architectural requirements, applications include the entrances of industrial buildings, and the service doors of commercial stores, and they are also widely used as partition or external doors in Electrical and petrochemical factories, Available now in the highest quality.",
        specifications: [
          { label: "Model", value: "SF/DD" },
          { label: "Door Width", value: "1900 mm" },
          { label: "Door Height", value: "1950 mm" },
          { label: "Door Depth", value: "45 mm" },
          { label: "Door color", value: "Beige" },
          { label: "Material", value: "Galvanized Steel" },
          { label: "Fire Rating", value: "120 minutes" },
          { label: "Features", value: "Bottom Louver" }
        ],
        note: "Colors and sizes are available as per customer request."
      },
      relatedProducts: [
        {
          category: "Fire Rated Doors",
          title: "Fire door SFFECO stainless steel without Window Model SF/SD",
          specs: "Single Door leaf size 1950×900 mm Color Red",
          description: "Fire-resistant doors from SFFECO company Model SF / SD, size 1950×900 mm, Red color...",
          status: "in stock",
          image: "/services/fir1.jpg"
        },
        {
          category: "Fire Rated Doors",
          title: "Fire door Alsafi Cold rolled steel with square glass window",
          specs: "Single Door leaf size 794 × 1934 mm Frame size 900 × 2000 mm Color Red",
          description: "Fire door Alsafi with a small square glass window, model SF-DD Single Door leaf s...",
          status: "in stock",
          image: "/services/fir2.jpg"
        },
        {
          category: "Fire Rated Doors",
          title: "Fire door SFFECO stainless steel with square glass window",
          specs: "Double Door leaf size 1900 × 1950 mm Color Red",
          description: "Fire-resistant doors from SFFECO Model SF / DD, size 1950 x 1900 mm, Red color...",
          status: "in stock",
          image: "/services/fir3.jpg"
        }
      ],
      buttons: {
        getQuote: "Get Quote",
        callNow: "Call Now",
        chatNow: "Chat Now"
      },
      sections: {
        productDescription: "Product description",
        relatedProducts: "Related products"
      },
      quantityText: "Quantity"
    },
    ar: {
      product: {
        title: "باب حريق SFFECO فولاذ مجلفن مع فتحة تهوية سفلية موديل SF/DD",
        specs: "مقاس ورقة الباب المزدوج 1950×1900 ملم لون بيج",
        views: "(1863 مشاهدة للمنتج)",
        status: "متوفر",
        description: "أبواب مقاومة للحريق من SFFECO موديل SF/DD، مقاس 1950 × 1900 ملم، لون بيج، مصنوعة من الفولاذ المجلفن لتتوافق مع متطلبات الهندسة المعمارية المختلفة، تشمل التطبيقات مداخل المباني الصناعية، وأبواب الخدمة للمتاجر التجارية، وتستخدم على نطاق واسع كأبواب تقسيم أو أبواب خارجية في المصانع الكهربائية والبتروكيماوية، متوفرة الآن بأعلى جودة. توصيل متاح.",
        fullDescription: "أبواب مقاومة للحريق من SFFECO، مصنوعة من الفولاذ المجلفن لتتوافق مع متطلبات الهندسة المعمارية المختلفة، تشمل التطبيقات مداخل المباني الصناعية، وأبواب الخدمة للمتاجر التجارية، وتستخدم على نطاق واسع كأبواب تقسيم أو أبواب خارجية في المصانع الكهربائية والبتروكيماوية، متوفرة الآن بأعلى جودة.",
        specifications: [
          { label: "الموديل", value: "SF/DD" },
          { label: "عرض الباب", value: "1900 ملم" },
          { label: "ارتفاع الباب", value: "1950 ملم" },
          { label: "عمق الباب", value: "45 ملم" },
          { label: "لون الباب", value: "بيج" },
          { label: "المادة", value: "فولاذ مجلفن" },
          { label: "مقاومة الحريق", value: "120 دقيقة" },
          { label: "المميزات", value: "فتحة تهوية سفلية" }
        ],
        note: "الألوان والمقاسات متوفرة حسب طلب العميل."
      },
      relatedProducts: [
        {
          category: "أبواب مقاومة للحريق",
          title: "باب حريق SFFECO ستانلس ستيل بدون نافذة موديل SF/SD",
          specs: "مقاس ورقة الباب المفرد 1950×900 ملم لون أحمر",
          description: "أبواب مقاومة للحريق من شركة SFFECO موديل SF/SD، مقاس 1950×900 ملم، لون أحمر...",
          status: "متوفر",
          image: "/services/fir1.jpg"
        },
        {
          category: "أبواب مقاومة للحريق",
          title: "باب حريق الصفوي صلب مدلفن بارد مع نافذة زجاجية مربعة",
          specs: "مقاس ورقة الباب المفرد 794 × 1934 ملم مقاس الإطار 900 × 2000 ملم لون أحمر",
          description: "باب حريق الصفوي مع نافذة زجاجية مربعة صغيرة، موديل SF-DD ورقة باب مفرد...",
          status: "متوفر",
          image: "/services/fir2.jpg"
        },
        {
          category: "أبواب مقاومة للحريق",
          title: "باب حريق SFFECO ستانلس ستيل مع نافذة زجاجية مربعة",
          specs: "مقاس ورقة الباب المزدوج 1900 × 1950 ملم لون أحمر",
          description: "أبواب مقاومة للحريق من SFFECO موديل SF/DD، مقاس 1950 × 1900 ملم، لون أحمر...",
          status: "متوفر",
          image: "/services/fir3.jpg"
        }
      ],
      buttons: {
        getQuote: "اطلب عرض سعر",
        callNow: "اتصل الآن",
        chatNow: "محادثة"
      },
      sections: {
        productDescription: "وصف المنتج",
        relatedProducts: "منتجات ذات صلة"
      },
      quantityText: "الكمية"
    }
  };

  const content = productData[lang] || productData.en;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  // Fallback image component to handle missing images
  const ImageWithFallback = ({ src, alt, className, fill = false, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);
    
    return (
      <Image
        src={imgSrc}
        alt={alt}
        className={className}
        fill={fill}
        onError={() => setImgSrc("/placeholder.jpg")}
        {...props}
      />
    );
  };

  return (
    <>
      <Head>
        <title>{content.product.title} | YouMats</title>
        <meta name="description" content={content.product.description} />
      </Head>

      <section dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-3 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-gray-500 text-sm">YouMats</h1>
          </div>
        </header>

        {/* Main Product Section */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            {/* Product Title and Views */}
            <div className="mb-4">
              <h1 className="text-xl font-bold text-gray-900 mb-2">
                {content.product.title}
              </h1>
              <p className="text-gray-600 text-sm mb-1">{content.product.specs}</p>
              <p className="text-gray-400 text-xs">{content.product.views}</p>
            </div>

            {/* Product Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="/services/hero.jpg"
                    alt={content.product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["/services/fir1.jpg", "/services/fir2.jpg", "/services/fir3.jpg"].map((src, index) => (
                    <div key={index} className="relative h-24 bg-gray-100 rounded-md overflow-hidden">
                      <ImageWithFallback
                        src={src}
                        alt={`${content.product.title} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                {/* Stock Status */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    content.product.status === "in stock" || content.product.status === "متوفر" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {content.product.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {content.product.description}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <span className="text-gray-700 font-medium">{content.quantityText}</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={decrementQuantity}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300 min-w-12 text-center">
                      {quantity}
                    </span>
                    <button 
                      onClick={incrementQuantity}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <span>📄</span>
                    {content.buttons.getQuote}
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <span>📞</span>
                    {content.buttons.callNow}
                  </button>
                  <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <span>💬</span>
                    {content.buttons.chatNow}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {content.sections.productDescription}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {content.product.fullDescription}
            </p>
            
            {/* Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {content.product.specifications.map((spec, index) => (
                <div key={index} className="flex border-b border-gray-100 py-2">
                  <span className="font-medium text-gray-600 min-w-32 rtl:min-w-36">
                    {spec.label}:
                  </span>
                  <span className="text-gray-800">{spec.value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 text-sm italic">
              {content.product.note}
            </p>
          </div>

          {/* Related Products */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              {content.sections.relatedProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.relatedProducts.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-gray-100">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-blue-600 font-medium mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-2">
                      {product.specs}
                    </p>
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 text-xs font-medium">
                        {product.status}
                      </span>
                      <div className="flex items-center gap-1">
                        <button className="text-gray-500 hover:text-gray-700 p-1">
                          📄
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 p-1">
                          📞
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 p-1">
                          💬
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 YouMats. All Rights Reserved.
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}