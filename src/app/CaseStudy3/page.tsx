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

    

      {/* ================== MAIN: TEXT-ONLY FULL PAGE CASE STUDY ================== */}
      <main className="py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <article className="bg-black/30 border border-white/6 rounded-2xl p-8 md:p-12">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">Mauritius Travel & Tour: Building a Digital Identity from the Ground Up with Next.js</h1>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Client Overview</h2>
            <p className="text-white/90 mb-6">
              Mauritius Travel & Tour is an independent tour operator offering authentic travel experiences across Mauritius — from scenic excursions to personalized island adventures. Built on personalized hospitality and authentic local experiences, the brand focuses on delivering seamless, trustworthy, and flexible tour options for visitors exploring the island.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Before partnering with BIM Africa</h2>
            <p className="text-white/90 mb-6">
              Before partnering with BIM Africa, the client operated entirely offline — managing bookings through WhatsApp and social media messages. With tourism becoming increasingly digital, this lack of online presence limited visibility and trust, especially with international clients.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Objective</h2>
            <p className="text-white/90 mb-6">
              Create a professional, high-performance website that would position a small local operator as a credible, globally accessible travel service.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Challenge</h2>
            <p className="text-white/90 mb-4">
              Mauritius Travel & Tour started from zero digital foundation — no prior website, no brand materials, and no system for online visibility.
              We had to design and develop a website that would:
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Instantly build trust and authority online</li>
              <li>Load fast worldwide, especially for travelers abroad</li>
              <li>Support future scalability for new tours or packages</li>
              <li>Reflect the warm, personal nature of the service</li>
              <li>Be easy for the client to manage independently</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Our Approach</h2>
            <p className="text-white/90 mb-4">
              BIM Africa took a complete end-to-end approach — from planning and design to development and deployment — focusing on delivering world-class performance through Next.js, the same technology trusted by Netflix, TikTok, Uber, and Twitch.
            </p>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Step 1 — Strategic Planning</h3>
            <p className="text-white/90 mb-4">
              We began by understanding the client’s unique model — personalized tours, flexible routes, and one-on-one communication.
              This helped us design a content structure that builds confidence quickly and guides visitors to take action (book or message).
            </p>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Step 2 — Experience-Driven Design</h3>
            <p className="text-white/90 mb-4">
              The website design was tailored around simplicity and conversion.
              Clean layouts, subtle animations, and carefully written copy were used to convey professionalism without losing the charm of a local operator.
              We used visuals that highlight real experiences in Mauritius rather than stock imagery — making it relatable and genuine.
            </p>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Step 3 — Next.js Development</h3>
            <p className="text-white/90 mb-4">
              To ensure long-term performance and scalability, we built the site on Next.js, one of the most advanced web frameworks used globally.
              Using Next.js gave Mauritius Travel & Tour a distinct edge:
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>⚡ Lightning-fast performance through static and server-side rendering</li>
              <li>🔒 Enhanced security with SSL and modern hosting via Vercel</li>
              <li>🌍 Global accessibility through optimized CDN delivery</li>
              <li>📈 SEO excellence — each page pre-rendered for Google’s crawler</li>
              <li>🧩 Scalable structure to easily add new tours, galleries, or languages</li>
            </ul>

            <p className="text-white/90 mb-4">
              The entire system was built with reliability in mind — no database dependencies, no heavy CMS. Just a modern, stable, and ultra-fast setup that could grow with the business.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Performance Benchmark</h2>
            <p className="text-white/90 mb-4">
              To validate our technical choices, the final build was tested using GTmetrix, achieving top-tier results:
            </p>

            <ul className="text-white/90 mb-6 space-y-2">
              <li>Grade: A</li>
              <li>Performance: 100%</li>
              <li>Structure: 99%</li>
              <li>Web Vitals: LCP 325ms · TBT 40ms · CLS 0</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Outcome</h2>
            <p className="text-white/90 mb-6">
              Mauritius Travel & Tour’s website launched as one of the first Next.js-powered tourism platforms in Mauritius — a milestone for both the client and BIM Africa.
              For the first time, the client could share a professional, secure, and mobile-friendly website directly with international travelers — instantly improving trust and conversion rates.
            </p>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Key Achievements</h3>
            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>✅ Fully functional website launched within deadline</li>
              <li>✅ 0 previous web presence → full professional digital identity</li>
              <li>✅ 3× faster than traditional CMS-based websites</li>
              <li>✅ Optimized for SEO and international reach</li>
              <li>✅ Designed and developed 100% in-house by BIM Africa</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Reflection</h2>
            <p className="text-white/90">
              This project embodies BIM Africa’s commitment to elevating small businesses to world-class standards — no shortcuts, no compromises.
              By introducing Next.js technology and a design-first approach, we gave a local Mauritian entrepreneur the same digital foundation that powers global tech leaders.
              Mauritius Travel & Tour now stands as a living example of what’s possible when craftsmanship meets innovation — a local story told through a global platform.
            </p>
          </article>
        </div>
      </main>

      {/* ================== Footer (unchanged) ================== */}
      <Footer />
    </div>
  );
}
