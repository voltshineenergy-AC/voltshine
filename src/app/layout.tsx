import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
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
  title: "VoltShine | Battery, Windshield, Detailing, UPS & Solar",
  description:
    "VoltShine - Premium Doorstep Battery Replacement, Jumpstart, Windshield Replacement, Car Detailing, UPS & Inverter and Solar Solutions.",
  keywords: [
    "Battery Replacement",
    "Battery Jumpstart",
    "Windshield Replacement",
    "Car Detailing",
    "UPS",
    "Inverter",
    "Solar",
    "VoltShine",
    "Pune",
  ],
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
      <body>{children}</body>
    </html>
  );
}