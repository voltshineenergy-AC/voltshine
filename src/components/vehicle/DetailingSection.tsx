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
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
          PREMIUM CAR CARE
        </p>

        <h2 className="mt-2 text-3xl font-bold text-yellow-400">
          Detailing Packages
        </h2>

        <p className="mt-2 text-gray-400">
          Premium car detailing packages designed for your vehicle.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.id ?? index}
            className="flex flex-col rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6 transition hover:-translate-y-1 hover:border-yellow-400/50"
          >
            {/* PACKAGE */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
                DETAILING PACKAGE
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {service.service_name}
              </h3>
            </div>

            {/* PRICE */}
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Starting Price
              </p>

              <p className="mt-1 text-4xl font-extrabold text-green-400">
                ₹{Number(service.price).toLocaleString("en-IN")}
              </p>
            </div>

            {/* WARRANTY */}
            {service.warranty_year && (
              <p className="mt-3 text-sm font-medium text-blue-400">
                🛡 {service.warranty_year} Year Warranty
              </p>
            )}

            {/* BENEFITS */}
            <div className="mt-5 space-y-2 text-sm text-gray-300">
              <p>✓ Professional Car Detailing</p>
              <p>✓ Premium Products</p>
              <p>✓ Expert Application</p>
              <p>✓ Vehicle-Specific Package</p>
            </div>

            {/* CTA */}
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
              className="mt-6 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Get Detailing Quote →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}