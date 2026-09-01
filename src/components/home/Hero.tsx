import Image from "next/image";
import ServiceCard from "@/components/home/ServiceCard";

export default function Hero() {
  const whatsappNumber = "919270300889";

  const bookingMessage = encodeURIComponent(
    `Hello VoltShine 👋

I want to book an auto care service.

Please contact me with the best available option and price.

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
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center pl-25 pr-2 sm:px-6">

        {/* LEFT CONTENT */}
        <div className="relative left-3 top-[-50px] w-full lg:left-0 lg:top-0 lg:w-1/2">

          {/* Brand Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[8px] text-yellow-400">
            VOLTSHINE
          </p>

          {/* Heading */}
          <h1 className="text-[29px] font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Complete
            <br />

            <span className="text-yellow-400">
              Energy & Auto Care
            </span>

            <br />

            Solutions in Pune
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Doorstep car battery replacement, emergency jumpstart,
            windshield replacement, premium detailing, UPS & inverter
            and solar solutions across Pune & PCMC.
          </p>

          {/* Service Cards */}
          <div className="mt-12 grid grid-cols-2 gap-4 gap-x-6">

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
          <div
            className="relative z-[9999] flex flex-col gap-3 pointer-events-auto sm:flex-row"
            style={{ marginTop: "32px" }}
          >

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
              href={`tel:+${whatsappNumber}`}
              className="relative z-[9999] block w-full cursor-pointer rounded-xl bg-red-600 px-8 py-4 text-center font-bold text-white pointer-events-auto hover:bg-red-500 sm:w-auto"
            >
              🚗 Car Won&apos;t Start?
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}