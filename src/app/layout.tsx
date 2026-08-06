import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
    default: "VoltShine | Doorstep Car Battery Replacement & Auto Care in Pune",
    template: "%s | VoltShine",
  },

  description:
    "Doorstep battery replacement, jumpstart, windshield replacement, ceramic coating, PPF, car detailing, UPS, inverter and solar solutions across Pune & PCMC.",

  keywords: [
    "Car Battery Replacement Pune",
    "Battery Replacement Near Me",
    "Doorstep Battery Service",
    "Amaron Battery",
    "Exide Battery",
    "Livguard Battery",
    "Jump Start Service",
    "Windshield Replacement Pune",
    "Ceramic Coating Pune",
    "PPF Pune",
    "Car Detailing Pune",
    "UPS",
    "Inverter",
    "Solar",
    "VoltShine",
  ],

  authors: [{ name: "VoltShine" }],

  creator: "VoltShine",

  publisher: "VoltShine",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "VoltShine",
    description:
      "Premium Doorstep Battery Replacement & Auto Care Services in Pune.",
    url: "https://voltshine.in",
    siteName: "VoltShine",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VoltShine",
    description:
      "Battery Replacement, Windshield, Detailing & Solar Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body>
  {children}

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-EW70L5C17N"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-EW70L5C17N');
    `}
  </Script>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        name: "VoltShine",
        url: "https://voltshine.in",
        telephone: "+91-9270300889",
        areaServed: [
          "Pune",
          "Pimpri Chinchwad",
          "Wakad",
          "Baner",
          "Hinjewadi",
          "Kharadi",
          "Hadapsar"
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN"
        },
        sameAs: [],
        serviceType: [
          "Car Battery Replacement",
          "Jump Start Service",
          "Windshield Replacement",
          "Car Detailing",
          "Solar Solutions",
          "UPS & Inverter"
        ]
      }),
    }}
    />
      </body>
    </html>
  );
}