import Image from "next/image";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/home/ServiceCard";

import FeaturedServices from "@/components/home/FeaturedServices";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090909]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="VoltShine Hero"
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        {/* LEFT */}
        <div className="w-full lg:w-1/2">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[8px] text-yellow-400">
            VOLTSHINE
          </p>

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

          {/* Buttons */}
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">

        <Button className="w-full sm:w-auto">
  Book Service
</Button>

           <Button
  variant="secondary"
  className="w-full sm:w-auto"
>
  WhatsApp
</Button>
         <button
  className="w-full rounded-xl bg-red-600 py-4 font-bold text-white transition hover:bg-red-700 sm:w-auto sm:px-8"
>
  🚗 Car Won't Start?
</button>
          </div>

        </div>

      </div>

    </section>
  );
}