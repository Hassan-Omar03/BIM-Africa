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
       
      `}</style>

      {/* ================== MAIN: TEXT-ONLY FULL PAGE CASE STUDY ================== */}
      <main className="py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <article className="bg-black/30 border border-white/6 rounded-2xl p-8 md:p-12">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">NouMarmite: The First Ever Creole Website in Mauritius</h1>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Client Overview</h2>
            <p className="text-white/90 mb-6">
              NouMarmite is a small, family-run restaurant in Mauritius, known for its authentic Creole dishes prepared with love and simplicity. The brand embodies the Mauritian spirit — humble, flavorful, and deeply rooted in tradition. While Nou Marmite operates on a small scale, its story represents a significant step in how local culture meets the digital world.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Challenge</h2>
            <p className="text-white/90 mb-4">
              Back in 2019, when websites were still uncommon among small businesses in Mauritius, Nou Marmite wanted to do something truly different. The goal was not just to “go online,” but to create a digital space that felt real, local, and authentic — a true reflection of Mauritian culture.
            </p>
            <p className="text-white/90 mb-6">
              The vision was clear: a website entirely in Mauritian Creole.
              At the time, no business in Mauritius had ever launched a full Creole website — not in the food industry, not anywhere. It was a bold, first-of-its-kind idea that required both creativity and cultural sensitivity.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Solution</h2>
            <p className="text-white/90 mb-4">
              BIM Africa took on the challenge to bring this vision to life. The project became an opportunity to break linguistic boundaries and show that digital design can speak the people’s language — literally.
              We crafted the first ever Mauritian Creole website, proudly setting a milestone for local digital innovation.
            </p>

            <p className="text-white/90 mb-4">
              Our approach focused on three main pillars:
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li><strong>Language & Culture:</strong> Every line of text was written directly in Creole, not translated. This allowed the website to sound genuinely Mauritian — warm, natural, and relatable.</li>
              <li><strong>Design & Emotion:</strong> The visuals captured the essence of home-cooked meals, using earthy colors and textures that resonated with local culture.</li>
              <li><strong>Accessibility:</strong> We optimized for mobile users, ensuring even those with limited data could easily browse and connect.</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Outcome</h2>
            <p className="text-white/90 mb-6">
              When NouMarmite.com went live in 2019, it quietly made history — the first ever Creole-language website in Mauritius.
              The site quickly attracted attention from the local community for its uniqueness. Customers loved how it “spoke their language,” both literally and emotionally. It became a proud digital symbol of Mauritian culture — proving that small businesses can innovate meaningfully without losing their roots.
            </p>

            <p className="text-white/90 mb-6">
              Even today, Nou Marmite’s online presence remains a cultural reference point. It wasn’t built to scale big; it was built to stay real — and that authenticity continues to connect with its audience.
            </p>

            <h3 className="text-[#ff1f00] font-semibold mb-3">Key Results</h3>
            <ul className="text-white/90 list-none space-y-2 mb-6">
              <li>●✅ First ever website fully in Mauritian Creole (2019)</li>
              <li>●✅ Set a national precedent in digital language use</li>
              <li>●✅ Strengthened cultural identity through design</li>
              <li>●✅ Recognized locally for originality and authenticity</li>
              <li>●✅ Increased brand trust and visibility despite being a small business</li>
            </ul>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Reflection</h3>
            <p className="text-white/90">
              For BIM Africa, Nou Marmite represents more than just a project — it’s a symbol of creative courage. It reminded us that innovation isn’t always about size or technology; sometimes, it’s about daring to do something authentically yours.
            </p>
          </article>
        </div>
      </main>

    <Footer/>
    </div>
  );
}
    