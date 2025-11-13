"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import header from "../../Assests/HEADER.png";
import logoBg from "../../Assests/srv.svg";
import logo2 from "../../Assests/newlogo.png";
import Footer from "../Components/Footer";
import { X } from "lucide-react";
import Navbar from "../Components/Navbar";
export default function WebsiteStrategy() {

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden flex flex-col"
      style={{
        backgroundImage: `url(${logoBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

     <Navbar/>
      {/* =============== MAIN CONTENT (Replaced) =============== */}
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-white">
          Coming Soon
        </h1>
      </main>

      {/* =============== FOOTER =============== */}
      <Footer />
    </div>
  );
}
