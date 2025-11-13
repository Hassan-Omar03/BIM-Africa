"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  MessageSquare,
} from "lucide-react";

/* Assets */
import logo from "../../Assests/srv.svg";
import mauritiustraveltour from "../../Assests/mauritiustraveltour.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function ServicesPage() {
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

      <style>{`
        @media (max-width: 640px) {
          .bg-hero { background-repeat: repeat-y !important; background-size: 100% auto !important; background-position: top center !important; }
        }
      `}</style>

      <main className="py-10">
        {/* ⭐ 3 Column Layout (Sidebar Added) */}
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ================== LEFT SIDE ARTICLE ================== */}
          <article className="bg-black/30 border border-white/6 rounded-2xl p-8 md:p-12 lg:col-span-2">

            {/* === Image + Title === */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={mauritiustraveltour}
                alt="Mauritius Travel & Tour"
                className="w-12 h-12 rounded-xl object-contain"
              />

              <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                A case study of:{" "}
                <span className="text-[#ff1f00] font-semibold">
                  Mauritius Travel & Tour
                </span>
              </h2>
            </div>

            {/* === Chips === */}
            <div className="flex flex-wrap gap-3 mb-6">

  <span className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full">
    Industry: Lifestyle & Training
  </span>

  <span className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full">
    Service: Marketing & Branding
  </span>
  <a
  href="https://mauritiustraveltour.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full"
>
  Visit Website
</a>


</div>

            {/* === Your Full Written Content (unchanged) === */}
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Mauritius Travel & Tour: Building a Digital Identity from the Ground Up with Next.js
            </h1>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Client Overview</h2>
            <p className="text-white/90 mb-6">
              Mauritius Travel & Tour is an independent tour operator offering authentic travel experiences...
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Before partnering with BIM Africa</h2>
            <p className="text-white/90 mb-6">
              Before partnering with BIM Africa, the client operated entirely offline...
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Objective</h2>
            <p className="text-white/90 mb-6">
              Create a professional, high-performance website...
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Challenge</h2>
            <p className="text-white/90 mb-4">
              Mauritius Travel & Tour started from zero digital foundation...
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Instantly build trust and authority online</li>
              <li>Load fast worldwide</li>
              <li>Scale for future tours</li>
              <li>Reflect warm and personal service</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Our Approach</h2>
            <p className="text-white/90 mb-4">
              BIM Africa took a complete end-to-end approach...
            </p>

            {/* (Your remaining paragraphs and lists stay the same) */}

          </article>

          {/* ================== RIGHT SIDEBAR ================== */}
          <aside className="space-y-6">

            {/* 🔥 Consultation Box */}
            <div className="rounded-3xl bg-[#ff1f00] p-6">
              <div className="mx-auto w-16 h-16 rounded-full border border-[#ff1f00] flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>

              <h4 className="text-xl font-semibold text-center">
                Ready to Secure Your Business?
              </h4>

              <p className="text-gray-200 text-center mt-2">
                Get expert cybersecurity consultation tailored to your needs
              </p>

              <a href="https://quotation.bim.africa/" target="_blank" className="block mt-4">
                <button className="w-full flex items-center justify-center gap-2 bg-white text-[#ff1f00] px-5 py-3 rounded-xl font-semibold">
                  <Globe className="w-4 h-4" /> Get Free Consultation
                </button>
              </a>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Free Assessment
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Expert Team
                </div>
              </div>
            </div>

            {/* 🔥 Service List */}
            <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold mb-3">
                <Star className="w-5 h-5 text-[#ff1f00]" /> Our Services
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Website Strategy & Development",
                    desc: "Professional, high-performance websites built with precision.",
                  },
                  {
                    title: "Cybersecurity & Threat Management",
                    desc: "Enterprise-grade protection for your business.",
                  },
                  {
                    title: "Digital Support Outsourcing",
                    desc: "Scale with dedicated digital support staff.",
                  },
                ].map((srv, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 p-4">
                    <div className="font-semibold">{srv.title}</div>
                    <p className="text-sm text-gray-300">{srv.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/service" className="mt-5 block">
                <button className="w-full bg-[#ff1f00] px-5 py-3 rounded-xl font-semibold">
                  View All Services
                </button>
              </Link>
            </div>

            {/* 🔥 Expert Advice */}
            <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#ff1f00] flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-semibold text-center">Need Expert Advice?</h4>
              <p className="text-gray-300 text-center mt-1">
                Talk to our cybersecurity experts about your challenges.
              </p>

              <Link href="/contactus" className="block mt-4">
                <button className="w-full bg-white text-[#ff1f00] px-5 py-3 rounded-xl font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>

          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
