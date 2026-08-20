"use client";

import { openWhatsApp } from "@/lib/whatsapp";

type Windshield = {
  glass_brand: string;
  glass_type: string;
  price: number;
  mrp: number;
  warranty: string;
  installation_time: string;
};

type Props = {
  windshields: Windshield[];
  make?: string;
  model?: string;
  year?: string;
};

export default function WindshieldSection({
  windshields,
  make,
  model,
  year,
}: Props) {
  return (
    <div className="mt-10 scroll-mt-24">

      {/* HEADER */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
          WINDSHIELD SERVICE
        </p>

        <h2 className="mt-2 text-4xl font-bold text-yellow-400">
          Windshield Replacement
        </h2>

        <p className="mt-2 text-gray-400">
          Genuine quality glass with professional installation.
        </p>
      </div>

      {/* GLASS OPTIONS */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {windshields.map((glass, index) => {

          const saving = glass.mrp - glass.price;

          return (
            <div
              key={index}
              className="flex flex-col rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >

              {/* SAVING */}
              {saving > 0 && (
                <div className="mb-4 inline-block w-fit rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  SAVE ₹{saving.toLocaleString("en-IN")}
                </div>
              )}

              {/* ICON */}
              <div className="text-5xl">
                🪟
              </div>

              {/* BRAND */}
              <h3 className="mt-4 text-2xl font-bold text-yellow-400">
                {glass.glass_brand}
              </h3>

              <p className="mt-1 text-gray-400">
                {glass.glass_type}
              </p>

              {/* FEATURES */}
              <div className="mt-5 space-y-2 text-sm text-gray-300">
                <p>✓ Quality Windshield Glass</p>
                <p>✓ Professional Fitment</p>
                <p>✓ Leak-Checked Installation</p>
                <p>✓ Doorstep Installation Available</p>

                <p className="text-blue-400">
                  🛡 {glass.warranty}
                </p>

                <p className="text-gray-300">
                  ⏱ Installation: {glass.installation_time}
                </p>
              </div>

              {/* PRICE */}
              <div className="mt-6 border-t border-gray-700 pt-5">

                {glass.mrp > glass.price && (
                  <p className="text-sm text-gray-500 line-through">
                    MRP ₹{glass.mrp.toLocaleString("en-IN")}
                  </p>
                )}

                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  VoltShine Price
                </p>

                <p className="text-4xl font-extrabold text-green-400">
                  ₹{glass.price.toLocaleString("en-IN")}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello VoltShine 👋

I want to enquire about windshield replacement.

━━━━━━━━━━━━━━━━━━
🚗 VEHICLE DETAILS

Make : ${make || "Not selected"}
Model : ${model || "Not selected"}
Year : ${year || "Not selected"}

━━━━━━━━━━━━━━━━━━
🪟 WINDSHIELD DETAILS

Brand : ${glass.glass_brand}
Glass Type : ${glass.glass_type}
Price : ₹${glass.price.toLocaleString("en-IN")}
Warranty : ${glass.warranty}
Installation Time : ${glass.installation_time}

━━━━━━━━━━━━━━━━━━

Please confirm:

✅ Glass availability
✅ Final price
✅ Installation slot
✅ Doorstep installation

Thank You.`
                  )
                }
                className="mt-6 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
              >
                Get Best Quote →
              </button>

            </div>
          );
        })}

      </div>
    </div>
  );
}