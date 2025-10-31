"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  Facebook,
  Linkedin as Linked,
  X,
  ArrowRight,
  Navigation2Off,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Assets used by header/footer (kept unchanged) */
import logo from "../../Assests/srv.svg";
import logo2 from "../../Assests/newlogo.png";
import header from "../../Assests/HEADER.png";
import mobile from "../../Assests/new.jpeg";
import selected from "../../Assests/selected.png";
import nonselected from "../../Assests/nonselected.png";
import map from "../../Assests/map.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function ServicesPage() {
  
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
      <Navbar/>
      {/* helper for mobile bg repeat */}
      <style>{`
        @media (max-width: 640px) {
          .bg-hero { background-repeat: repeat-y !important; background-size: 100% auto !important; background-position: top center !important; }
        }
       
      `}</style>

     
    

      {/* ================== MAIN: TEXT-ONLY FULL PAGE CASE STUDY (REPLACED WITH CASE STUDY 2) ================== */}
      <main className="py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <article className="bg-black/30 border border-white/6 rounded-2xl p-8 md:p-12">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">Mauritius Health Travel: Connecting Patients to World-Class Treatments</h1>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Client Overview</h2>
            <p className="text-white/90 mb-6">
              Mauritius Health Travel connects patients in Mauritius with leading medical providers in India, offering seamless access to world-class treatments, consultations, and post-treatment support.
              Before partnering with BIM Africa, the client lacked a professional digital presence, limiting their ability to:
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Establish credibility with international healthcare providers</li>
              <li>Gain trust from patients seeking specialized treatments abroad</li>
              <li>Streamline inquiries and patient onboarding</li>
            </ul>

            <p className="text-white/90 mb-6">
              The goal was clear: Develop a secure, professional, and high-performance online platform that communicates trust, reliability, and medical expertise to both patients and international partners.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Challenge</h2>
            <p className="text-white/90 mb-4">
              The healthcare and medical tourism industry is highly sensitive — trust, security, and professionalism are critical. BIM Africa needed to build a platform that would:
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Showcase medical services and treatment options clearly</li>
              <li>Provide a user-friendly interface for patients to submit inquiries</li>
              <li>Establish authority and credibility with international providers</li>
              <li>Ensure compliance with privacy and data protection standards</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Our Approach</h2>
            <p className="text-white/90 mb-4">
              BIM Africa took a strategic and technical approach, focusing on both design and performance:
            </p>

            <h3 className="text-white font-semibold mb-2">Step 1 — Discovery &amp; Content Strategy</h3>
            <p className="text-white/90 mb-4">
              We worked closely with Mauritius Health Travel to understand patient journeys, common questions, and key selling points for medical treatments abroad. The website structure was designed to guide visitors from awareness → confidence → action (inquiry submission).
            </p>

            <h3 className="text-white font-semibold mb-2">Step 2 — Premium Design</h3>
            <p className="text-white/90 mb-4">
              The design was clean, minimal, and professional — conveying trust and expertise:
            </p>
            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Clear hierarchy of information for treatments, services, and partners</li>
              <li>Strong visual elements to highlight safety, quality, and care</li>
              <li>Intuitive navigation to reduce friction in booking consultations</li>
            </ul>

            <h3 className="text-white font-semibold mb-2">Step 3 — High-Performance Development</h3>
            <p className="text-white/90 mb-4">
              The platform was developed to ensure speed, security, and reliability:
            </p>
            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>SSL encryption for secure patient inquiries</li>
              <li>Optimized pages for global performance, especially targeting patients accessing from Mauritius and India</li>
              <li>SEO-ready architecture to improve visibility for patients searching for medical travel services</li>
              <li>Scalable design to accommodate future services and partner listings</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Outcome</h2>
            <p className="text-white/90 mb-4">
              Mauritius Health Travel now operates a professional, trustworthy, and user-friendly digital platform, giving patients confidence to make informed medical decisions.
            </p>

            <h3 className="text-[#ff1f00] font-semibold mb-3">Key outcomes include:</h3>
            <ul className="text-white/90 list-none space-y-2 mb-6">
              <li>●✅ Increased patient inquiries and international engagement</li>
              <li>●✅ Stronger trust signals with secure forms and professional presentation</li>
              <li>●✅ Optimized for both local and international audiences</li>
              <li>●✅ Scalable, reliable infrastructure for future growth</li>
            </ul>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Reflection</h3>
            <p className="text-white/90">
              This project highlights BIM Africa’s ability to transform high-stakes industries digitally. For medical tourism, credibility is everything — and a modern, high-performance website is the first step in earning patient trust. By combining premium design and technical precision, Mauritius Health Travel now offers a digital experience that reflects the quality and safety of the medical services they provide, positioning the brand as a trusted bridge between Mauritius and world-class healthcare providers in India.
            </p>
          </article>
        </div>
      </main>

    <Footer/>
    </div>
  );
}
