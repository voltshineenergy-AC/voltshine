import Image from "next/image";

export default function Hero() {
  const whatsappNumber = "919270300889";

  const bookingMessage = encodeURIComponent(
    `Hello VoltShine 👋

I want to book an auto care service.

Please contact me with the best available option and price.

Thank You.`
  );

  return (
       <section className="relative min-h-[350px] overflow-hidden bg-[#090909] sm:min-h-[calc(100svh-86px)]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="VoltShine Energy & Auto Care Services in Pune"
          fill
          priority
          className="pointer-events-none object-cover object-[68%_center] sm:object-right"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/95 sm:bg-gradient-to-r sm:from-black sm:via-black/80 sm:to-black/20" />

      {/* CONTENT */}
       <div className="relative z-10 mx-auto flex min-h-[350px] max-w-7xl items-start px-5 pb-20 pt-24 sm:min-h-[calc(100svh-86px)] sm:items-center sm:px-6 sm:py-24 lg:px-8">

        <div className="w-full max-w-xl">

          {/* BRAND */}
          <p className="text-xs font-semibold uppercase tracking-[5px] text-yellow-400 sm:text-sm sm:tracking-[8px]">
            VOLTSHINE
          </p>

          {/* HEADING */}
          <h1 className="mt-4 text-[34px] font-extrabold leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            India's Smart
            <br />

            <span className="text-yellow-400">
              Energy & Auto Care
            </span>

            <br />

            Platform
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-lg text-[15px] leading-6 text-gray-300 sm:text-lg sm:leading-7">
            Doorstep Car Battery Replacement, Emergency Jumpstart,
            Windshield Replacement, Premium Detailing, UPS & Inverter
            and Solar Solutions across Pune & PCMC.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">

            {/* BOOK SERVICE */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-400 px-4 py-3.5 text-center text-sm font-bold text-black transition hover:bg-yellow-300 sm:px-7 sm:text-base"
            >
              Book Service
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-green-500 px-4 py-3.5 text-center text-sm font-bold text-green-400 transition hover:bg-green-500/10 sm:px-7 sm:text-base"
            >
              WhatsApp
            </a>

            {/* CAR WON'T START */}
            <a
              href={`tel:+${whatsappNumber}`}
              className="col-span-2 rounded-xl bg-red-600 px-4 py-3.5 text-center text-sm font-bold text-white transition hover:bg-red-500 sm:col-span-1 sm:px-7 sm:text-base"
            >
              🚗 Car Won't Start?
            </a>

          </div>

          {/* TRUST POINTS */}
           <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 pb-8 text-xs font-medium text-gray-300 sm:text-sm">
            <span>✓ Doorstep Service</span>
            <span>✓ Genuine Products</span>
            <span>✓ Pune & PCMC</span>
          </div>

        </div>
      </div>
    </section>
  );
}