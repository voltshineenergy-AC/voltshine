import Image from "next/image";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/home/ServiceCard";

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

          <h1 className="text-6xl font-extrabold leading-tight text-white">
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
          <div className="mt-6 flex gap-4">

            <Button>
              Book Service
            </Button>

            <Button variant="secondary">
              WhatsApp
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}