"use client";

import { openWhatsApp } from "@/lib/whatsapp";

type Props = {
  services: any[];
  make?: string;
  model?: string;
  year?: string;
};

export default function DetailingSection({
  services,
  make,
  model,
  year,
}: Props) {
  return (
    <div className="mt-8 scroll-mt-24">

      {/* ================= HEADER ================= */}

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
          PREMIUM CAR CARE
        </p>

        <h2 className="mt-2 text-[28px] font-extrabold leading-tight text-white sm:text-3xl">
          Detailing Packages
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-5 text-gray-400">
          Premium car detailing packages designed for your vehicle.
        </p>
      </div>

      {/* ================= PACKAGE GRID ================= */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service, index) => (
          <div
            key={service.id ?? index}
            className="
              flex
              flex-col
              rounded-2xl
              border
              border-yellow-400/20
              bg-[#1c1c1c]
              p-5
              transition
              hover:-translate-y-1
              hover:border-yellow-400/50
            "
          >

            {/* ================= PACKAGE HEADER ================= */}

            <div className="flex items-start justify-between gap-3">

              <div className="min-w-0">

                <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                  DETAILING PACKAGE
                </p>

                <h3 className="mt-2 text-xl font-extrabold leading-tight text-white">
                  {service.service_name}
                </h3>

              </div>

              <div className="shrink-0 text-2xl">
                ✨
              </div>

            </div>

            {/* ================= PRICE ================= */}

            <div className="mt-5">

              <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                Starting Price
              </p>

              <p className="mt-1 text-4xl font-extrabold text-green-400">
                ₹{Number(service.price).toLocaleString("en-IN")}
              </p>

            </div>

            {/* ================= WARRANTY ================= */}

            {service.warranty_year && (
              <div className="mt-3 inline-flex w-fit rounded-lg bg-blue-500/10 px-3 py-1.5">
                <p className="text-xs font-semibold text-blue-400">
                  🛡 {service.warranty_year} Year Warranty
                </p>
              </div>
            )}

            {/* ================= BENEFITS ================= */}

            <div className="mt-5 space-y-2.5 text-sm text-gray-300">

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Professional Car Detailing
              </p>

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Premium Products
              </p>

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Expert Application
              </p>

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Vehicle-Specific Package
              </p>

            </div>

            {/* ================= CTA ================= */}

            <button
              onClick={() =>
                openWhatsApp(
                  `Hello VoltShine 👋

I am interested in a Car Detailing Package.

━━━━━━━━━━━━━━━━━━
🚗 VEHICLE DETAILS

Make : ${make || "Not selected"}
Model : ${model || "Not selected"}
Year : ${year || "Not selected"}

━━━━━━━━━━━━━━━━━━
✨ PACKAGE DETAILS

Package : ${service.service_name}
Price : ₹${Number(service.price).toLocaleString("en-IN")}
${
  service.warranty_year
    ? `Warranty : ${service.warranty_year} Year`
    : ""
}

━━━━━━━━━━━━━━━━━━

Please share:
✅ Package details
✅ Availability
✅ Final price
✅ Booking slot

Thank You.`
                )
              }
              className="
                mt-6
                h-12
                w-full
                rounded-xl
                bg-yellow-400
                px-4
                text-sm
                font-extrabold
                text-black
                transition
                active:scale-[0.98]
                hover:bg-yellow-300
              "
            >
              Get Detailing Quote →
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}