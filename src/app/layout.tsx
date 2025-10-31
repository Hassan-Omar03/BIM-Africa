import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✅ Improves Core Web Vitals
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO & favicon metadata
export const metadata: Metadata = {
  title: "BIM | Website Development, IT Outsourcing & Cybersecurity — Mauritius, Europe & Luxembourg",
  description: "BIM helps ambitious businesses build world-class websites, scale operations with digital outsourcing, and stay secure through advanced cybersecurity solutions. Based in Mauritius, serving clients across Europe and Luxembourg.",
  keywords: [
    "website design Mauritius",
    "website design Luxembourg",
    "website design Europe",
    "Next.js web development",
    "digital outsourcing Africa",
    "IT outsourcing Mauritius",
    "IT outsourcing Europe",
    "cybersecurity Mauritius",
    "cybersecurity Luxembourg",
    "website strategy Africa",
    "BIM Africa",
    "Brand Image Marketer",
  ],
  openGraph: {
    title:
      "BIM | Website Development, IT Outsourcing & Cybersecurity — Mauritius, Europe & Luxembourg",
    description:
      "BIM empowers ambitious brands with professional websites, digital outsourcing, and cybersecurity solutions. Trusted in Mauritius, Europe, and Luxembourg.",
    url: "https://bim.africa",
    siteName: "BIM Africa",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BIM Africa – Website Development, IT Outsourcing & Cybersecurity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png", // The standard favicon // Chrome + Safari
    apple: "/apple-touch-icon.png", // ✅ iOS
  },
  alternates: {
    canonical: "https://bim.africa",
  },
  metadataBase: new URL("https://bim.africa"),
  robots: {
    index: true,
    follow: true,
  },
};

// ✅ Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon + meta essentials */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="BIM Africa" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
