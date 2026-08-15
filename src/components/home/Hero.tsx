import Image from "next/image";
import ServiceCard from "@/components/home/ServiceCard";

import FeaturedServices from "@/components/home/FeaturedServices";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";

export default function Hero() {
  const whatsappNumber = "919270300889";

  const bookingMessage = encodeURIComponent(
    `Hello VoltShine 👋

I want to book an auto care service.

Please contact me with the best available option and price.

Thank You.`
  );

  const jumpstartMessage = encodeURIComponent(
    `Hello VoltShine 👋

🚗 My car won't start.

I need emergency Jumpstart assistance.

Please contact me as soon as possible.

Thank You.`
  );

  return (
    <section className="relative overflow-hidden bg-[#090909]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="VoltShine Car Care Service in Pune"
          fill
          priority
          className="pointer-events-none object-cover object-right"
        />
      </div>

      {/* Dark Overlay */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">

          {/* Brand Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[8px] text-yellow-400">
            VOLTSHINE
          </p>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
            India's Smart
            <br />

            <span className="text-yellow-400">
              Energy & Auto Care
            </span>

            <br />

            Platform
          </h1>

          {/* Service Cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">

            <ServiceCard
              icon="🔋"
              title="Battery"
              subtitle="Replacement"
            />

            <ServiceCard
              icon="⚡"
              title="Jumpstart"
              subtitle="30 Minutes"
            />

            <ServiceCard
              icon="🛡"
              title="Windshield"
              subtitle="Replacement"
            />

            <ServiceCard
              icon="✨"
              title="Car Detailing"
              subtitle="Ceramic • PPF"
            />

          </div>

{/* ACTION BUTTONS */}
<div className="relative z-[9999] mt-6 flex flex-col gap-3 sm:flex-row pointer-events-auto">

  {/* BOOK SERVICE */}
  <a
    href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-[9999] block w-full cursor-pointer rounded-xl bg-yellow-400 px-8 py-4 text-center font-bold text-black pointer-events-auto hover:bg-yellow-300 sm:w-auto"
  >
    Book Service
  </a>

  {/* WHATSAPP */}
  <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-[9999] block w-full cursor-pointer rounded-xl border border-green-500 px-8 py-4 text-center font-bold text-green-400 pointer-events-auto hover:bg-green-500/10 sm:w-auto"
  >
    WhatsApp
  </a>

  {/* CAR WON'T START */}
  <a
    href={`https://wa.me/${whatsappNumber}?text=${jumpstartMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-[9999] block w-full cursor-pointer rounded-xl bg-red-600 px-8 py-4 text-center font-bold text-white pointer-events-auto hover:bg-red-500 sm:w-auto"
  >
    🚗 Car Won't Start?
  </a>

</div>

        </div>

      </div>

    </section>
  );
}