import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voltshine.in"),

  title: {
    default: "VoltShine | Energy & Auto Care Services in Pune & PCMC",
    template: "%s | VoltShine",
  },

  description:
    "VoltShine Energy & Auto Care provides car battery replacement, emergency jumpstart, windshield replacement, premium car detailing, UPS, inverter and solar solutions across Pune & PCMC.",

  keywords: [
    "car battery replacement Pune",
    "car battery replacement PCMC",
    "car battery shop Pune",
    "car battery doorstep service Pune",
    "car jumpstart Pune",
    "windshield replacement Pune",
    "car detailing Pune",
    "ceramic coating Pune",
    "graphene coating Pune",
    "PPF Pune",
    "UPS inverter Pune",
    "solar solutions Pune",
    "VoltShine",
    "VoltShine Energy & Auto Care",
  ],

  authors: [{ name: "VoltShine Energy & Auto Care" }],
  creator: "VoltShine Energy & Auto Care",
  publisher: "VoltShine Energy & Auto Care",

  alternates: {
    canonical: "https://voltshine.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://voltshine.in",
    siteName: "VoltShine Energy & Auto Care",
    title: "VoltShine | Energy & Auto Care Services in Pune & PCMC",
    description:
      "Car battery replacement, jumpstart, windshield replacement, premium detailing, UPS, inverter and solar solutions across Pune & PCMC.",
    images: [
      {
        url: "/images/hero-car.png",
        width: 1200,
        height: 630,
        alt: "VoltShine Energy & Auto Care Services in Pune & PCMC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VoltShine | Energy & Auto Care Services in Pune & PCMC",
    description:
      "Doorstep car battery replacement, jumpstart, windshield replacement, premium detailing, UPS, inverter and solar solutions.",
    images: ["/images/hero-car.png"],
  },

  icons: {
    icon: "/logo/voltshine-icon.webp",
    apple: "/logo/voltshine-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}