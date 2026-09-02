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
    <div className="mt-8 scroll-mt-24">

      {/* ================= HEADER ================= */}

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
          WINDSHIELD SERVICE
        </p>

        <h2 className="mt-2 text-[28px] font-extrabold leading-tight text-white sm:text-3xl">
          Windshield Replacement
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-5 text-gray-400">
          Quality glass with professional fitment and installation warranty.
        </p>
      </div>

      {/* ================= GLASS OPTIONS ================= */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        {windshields.map((glass, index) => {
          const saving = glass.mrp - glass.price;

          return (
            <div
              key={index}
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

              {/* ================= TOP BADGE ================= */}

              {saving > 0 && (
                <div className="mb-4 inline-flex w-fit rounded-full bg-green-500/10 px-3 py-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-green-400">
                    Save ₹{saving.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              {/* ================= ICON + BRAND ================= */}

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-3xl">
                    🪟
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-yellow-400">
                    {glass.glass_brand}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {glass.glass_type}
                  </p>

                </div>

                <span className="shrink-0 rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-400">
                  Quality
                </span>

              </div>

              {/* ================= FEATURES ================= */}

              <div className="mt-5 space-y-2.5 text-sm text-gray-300">

                <p className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Quality Windshield Glass
                </p>

                <p className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Professional Fitment
                </p>

                <p className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Leak-Checked Installation
                </p>

                <p className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Doorstep Installation Available
                </p>

              </div>

              {/* ================= WARRANTY + TIME ================= */}

              <div className="mt-4 space-y-2">

                <div className="inline-flex rounded-lg bg-blue-500/10 px-3 py-1.5">
                  <p className="text-xs font-semibold text-blue-400">
                    🛡 {glass.warranty}
                  </p>
                </div>

                <p className="text-xs font-medium text-gray-400">
                  ⏱ Installation: {glass.installation_time}
                </p>

              </div>

              {/* ================= PRICE ================= */}

              <div className="mt-5 border-t border-gray-700 pt-5">

                {glass.mrp > glass.price && (
                  <p className="text-sm text-gray-500 line-through">
                    MRP ₹{glass.mrp.toLocaleString("en-IN")}
                  </p>
                )}

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                  VoltShine Price
                </p>

                <p className="mt-0.5 text-4xl font-extrabold text-green-400">
                  ₹{glass.price.toLocaleString("en-IN")}
                </p>

                <p className="mt-1 text-xs font-semibold text-green-400">
                  ✓ Professional installation included
                </p>

              </div>

              {/* ================= CTA ================= */}

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
                Get Best Quote →
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}