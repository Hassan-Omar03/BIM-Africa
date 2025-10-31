"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";


/* Assets */
import logo from "../../Assests/srv.svg";
import Footer from "../Components/Footer";
import ServiceCards from "../Components/ServiceCards"
import WorkTogether from "../Components/WorkTogether";
import Navbar from "../Components/Navbar";

export default function ServicesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
 
  
  /* NAV items — mirror Contact navbar; Services active on this page */
 

 const premiumCards = [
    {
      title: "Premium Value",
      description:
        "We don't compete on being cheap — we compete on delivering excellence. Every solution is crafted to provide lasting value and measurable growth.",
    },
    {
      title: "Shared Success",
      description:
        "Your wins are our wins. We approach every project as a partnership, where your growth defines our success.",
    },
    {
      title: "Dedicated Support",
      description:
        "Exceptional service, whenever you need it. Our team is available to assist, advise, and ensure your digital journey is seamless and stress-free.",
    },
    {
      title: "Innovation at Core",
      description:
        "Creativity meets strategy. We bring forward-looking ideas and innovative solutions that set your brand apart from the competition.",
    },
  ];

  const formatTitleTwoLines = (title: string) => {
    const parts = title.split(" ");
    return (
      <>
        {parts[0]} <br /> {parts.slice(1).join(" ")}
      </>
    );
  };

  /* animation helpers */
  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 0.55 }, exit: { opacity: 0 } };
  const panelVariants = {
    hidden: { opacity: 0, y: -30, rotateX: 14, transformOrigin: "top center", scale: 0.995 },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.3, ease: [0.22, 0.8, 0.2, 1] } },
    exit: { opacity: 0, y: -28, rotateX: 12, scale: 0.995, transition: { duration: 0.22, ease: "easeInOut" } },
  };
  const listContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } } };
  const listItem = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } } };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${logo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      {/* helper for mobile bg repeat */}
      <style>{`
        @media (max-width: 640px) {
          .bg-hero { background-repeat: repeat-y !important; background-size: 100% auto !important; background-position: top center !important; }
        }
      `}</style>

    


      {/* ================== Hero ================== */}
      <section className="min-h-screen relative overflow-hidden py-4 sm:py-15 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white leading-tight">
              High-Impact <br />
              <span className="text-[#ff1f00]">Digital Services</span> <br />
               for Ambitious Brands
            </h1>
          </div>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-full lg:w-[460px] text-center lg:text-left">
               We believe in partnerships that go beyond projects. We collaborate with
        forward-thinking businesses and professionals to innovate, scale, and
        thrive in the digital age.
            </p>

            {/* CTA buttons: exact mobile stacking like Contact page */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/contactus" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                 CONTACT US

                </button>
              </Link>
              <a href="https://wa.me/352661784276" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  WHATSAPP US
                </button>
              </a>
            </div>
          </div>
        </div>

       <ServiceCards/>

      </section>

      {/* ================== Premium ================== */}
      <section className="py-10 sm:py-4 lg:py-[2px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Shaping premium <br />
          <span className="text-[#ff1f00]">digital experiences</span> <br />
          for brands that want more.
        </h2>

        {/* Premium CTA — two-line on mobile, side-by-side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[460px] mx-auto mt-6 sm:mt-8">
          <Link href="/contactus" className="w-full">
            <button className="w-full bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base">
              Contact Us
            </button>
          </Link>
          <a
            href="https://wa.me/352661784276"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base">
              WhatsApp Us
            </button>
          </a>
        </div>
      </div>

      {/* mobile slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 block sm:hidden">
        <div className="bg-black/40 border border-[#ff1f00] rounded-3xl p-8 min-h-[350px] flex flex-col justify-center">
          <h3 className="text-[#ff1f00] text-2xl text-center font-bold mb-8">
            {premiumCards[activeSlide].title}
          </h3>
          <p className="text-white text-sm text-center leading-relaxed">
            {premiumCards[activeSlide].description}
          </p>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {premiumCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-4 h-4 rounded-full transition-all ${
                activeSlide === i ? "bg-[#ff1f00]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* desktop grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 hidden sm:grid">
        {premiumCards.map((card, i) => (
          <div
            key={i}
            className="bg-black/40 border border-[#ff1f00] rounded-3xl sm:rounded-[3rem] p-6 sm:p-8"
          >
            <h3 className="text-[#ff1f00] text-lg sm:text-xl text-center font-bold">
             {card.title}
            </h3>
            <p className="text-white text-xs sm:text-sm mt-6 sm:mt-8 text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>

      {/* ================== Expertise Band (unchanged core) ================== */}
    <section className="py-12 sm:py-16 lg:py-20 relative">
  <div
    className="
      max-w-7xl mx-auto px-4 sm:px-8 lg:px-20
      border-t-[12px] border-t-[#ff1f00]
      rounded-t-[2rem]
      p-6 sm:p-8 lg:p-12 backdrop-blur-sm relative z-10
    "
    style={{
      borderLeft: "12px solid #ff1f00",
      borderRight: "12px solid #ff1f00",
      maskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
    }}
  >
    <div className="relative z-10">
      {/* mobile layout */}
      <div className="block lg:hidden">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-white mb-6 sm:mb-8 text-center">
          Expertise that drives digital success
        </h2>

        <div className="flex gap-6 sm:gap-8 justify-center mb-8 sm:mb-12">
          <div className="text-center border border-[#ff1f00] rounded-2xl p-4 sm:p-6">
            <div className="text-[#ff1f00] text-2xl sm:text-3xl font-bold">+60%</div>
            <p className="text-white text-xs sm:text-sm mt-2">
              By optimizing your website for search engines.
            </p>
          </div>
          <div className="text-center border border-[#ff1f00] rounded-2xl p-4 sm:p-6">
            <div className="text-[#ff1f00] text-2xl sm:text-3xl font-bold">+30%</div>
            <p className="text-white text-xs sm:text-sm mt-2">
              Rise in revenue as more visitors convert into paying customers.
            </p>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="text-center">
            <h3 className="text-[#ff1f00] text-xl sm:text-2xl">
              Social Media Management
            </h3>
            <p className="text-white text-sm sm:text-base mt-4">
              Our social media Management services focus on building and enhancing your brands online presence. We create engaging content, manage your social media accounts, and analyze performance.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-[#ff1f00] text-xl sm:text-2xl">
              E-commerce Solutions
            </h3>
            <p className="text-white text-sm sm:text-base mt-4">
              Our e-commerce solutions are designed to create seamless online shopping experiences for user-friendly website design to secure payment processing processing and inventory management.
            </p>
          </div>
        </div>
      </div>

      {/* desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        <div>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-medium text-white mb-6 sm:mb-8 text-center lg:text-left">
            Expertise that drives digital success
          </h2>
          <div className="flex gap-6 sm:gap-8 lg:gap-12 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="text-[#ff1f00] text-2xl sm:text-3xl lg:text-4xl">+60%</div>
              <p className="text-white text-xs sm:text-sm">
                By optimizing your website for search engines.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-[#ff1f00] text-2xl sm:text-3xl lg:text-4xl">+30%</div>
              <p className="text-white text-xs sm:text-sm">
                Rise in revenue as more visitors convert into paying customers.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div>
            <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
              Social Media Management
            </h3>
            <p className="text-white text-sm sm:text-base text-center lg:text-left">
              Our social media Management services focus on building and enhancing your brands online presence. We create engaging content, manage your social media accounts, and analyze performance.
            </p>
          </div>
          <div>
            <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
              E-commerce Solutions
            </h3>
            <p className="text-white text-sm sm:text-base text-center lg:text-left">
              Our e-commerce solutions are designed to create seamless online shopping experiences for user-friendly website design to secure payment processing processing and inventory management.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* placeholders under the band
  <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 space-y-6 sm:space-y-8">
    <div className="bg-gray-600 h-48 sm:h-56 lg:h-64 rounded-2xl" />
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
      <div className="bg-gray-600 h-40 sm:h-48 rounded-2xl" />
      <div className="bg-gray-600 h-40 sm:h-48 rounded-2xl" />
    </div>
  </div> */}
</section>
      {/* ================== Final CTA ================== */}
      <WorkTogether/>

   <Footer/>
    </div>
  );
}
