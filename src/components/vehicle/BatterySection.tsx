"use client";

import { openWhatsApp } from "@/lib/whatsapp";

type Battery = {
  id?: string | number;
  battery_brand: string;
  ah: number;
  mrp: number;
  dp: number;
  warranty: string;
  fuel?: string;
  from_year?: number;
  to_year?: number;
};

type Props = {
  batteries: Battery[];
  make: string;
  model: string;
  year: string;
  fuel: string;
};

export default function BatterySection({
  batteries,
  make,
  model,
  year,
  fuel,
}: Props) {
  // REMOVE DUPLICATE BATTERIES
  const uniqueBatteries = Array.from(
    new Map(
      batteries.map((battery) => [
        `${battery.battery_brand}-${battery.ah}-${battery.dp}-${battery.warranty}`,
        battery,
      ])
    ).values()
  );

  // EXIDE FIRST
  const sortedBatteries = [...uniqueBatteries].sort((a, b) => {
    if (a.battery_brand?.toLowerCase() === "exide") return -1;
    if (b.battery_brand?.toLowerCase() === "exide") return 1;
    return 0;
  });

  return (
    <div id="all-batteries">

      {/* SECTION TITLE */}
      <h3 className="mb-6 text-3xl font-bold text-yellow-400">
        Compatible Batteries
      </h3>

      {/* BATTERY GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {sortedBatteries.map((battery, index) => (

          <div
            key={`${battery.battery_brand}-${battery.ah}-${battery.dp}-${index}`}
            className="flex flex-col rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50"
          >

            {/* ================= HEADER ================= */}

            <div className="flex items-start justify-between gap-3">

              <div>

                <div className="flex items-center gap-2">

                  <h4 className="text-2xl font-bold text-yellow-400">
                    {battery.battery_brand}
                  </h4>

                  {battery.battery_brand?.toLowerCase() === "exide" && (
                    <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white">
                      Recommended
                    </span>
                  )}

                </div>

              </div>

              {/* AH */}
              <div className="rounded-full bg-yellow-400 px-4 py-2">
                <span className="font-bold text-black">
                  {battery.ah} AH
                </span>
              </div>

            </div>

            {/* ================= FEATURES ================= */}

            <div className="mt-5 space-y-2 text-sm text-gray-300">

              <p>
                ✓ Compatible with selected vehicle
              </p>

              <p>
                ✓ Manufacturer Warranty: {battery.warranty}
              </p>

              <p>
                ✓ Free Doorstep Installation
              </p>

              <p>
                ✓ Old Battery Exchange Available
              </p>

            </div>

            {/* ================= PRICING ================= */}

            <div className="mt-6 border-t border-gray-700 pt-5">

              {/* MRP + SAVINGS */}
              {battery.mrp > battery.dp && (
                <div className="flex flex-wrap items-center gap-2">

                  <p className="text-sm text-gray-500 line-through">
                    MRP ₹{battery.mrp.toLocaleString("en-IN")}
                  </p>

                  <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-bold text-green-400">
                    SAVE ₹
                    {(battery.mrp - battery.dp).toLocaleString("en-IN")}
                  </span>

                </div>
              )}

              {/* VOLTSHINE PRICE */}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                VoltShine Price
              </p>

              <p className="text-4xl font-extrabold text-green-400">
                ₹{battery.dp.toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-sm font-medium text-green-400">
                ✓ Inclusive of doorstep installation
              </p>

              {/* WARRANTY */}
              <p className="mt-2 text-sm font-medium text-blue-400">
                🛡 {battery.warranty}
              </p>

            </div>

            {/* ================= BUTTONS ================= */}

            <div className="mt-6 flex gap-3">

              {/* CHECK AVAILABILITY */}
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello VoltShine 👋

I want to check battery availability.

━━━━━━━━━━━━━━━━━━
🚗 VEHICLE DETAILS

Make : ${make}
Model : ${model}
Year : ${year}
Fuel : ${fuel}

━━━━━━━━━━━━━━━━━━
🔋 BATTERY DETAILS

Brand : ${battery.battery_brand}
Capacity : ${battery.ah} AH

━━━━━━━━━━━━━━━━━━

Please confirm:

✅ Availability
✅ Final Price
✅ Installation Time

Thank You.`
                  )
                }
                className="flex-1 rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
              >
                Check Availability
              </button>

              {/* WHATSAPP */}
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello VoltShine 👋

I would like to book a Battery Replacement.

━━━━━━━━━━━━━━━━━━
🚗 VEHICLE DETAILS

Make : ${make}
Model : ${model}
Year : ${year}
Fuel : ${fuel}

━━━━━━━━━━━━━━━━━━
🔋 BATTERY DETAILS

Brand : ${battery.battery_brand}
Capacity : ${battery.ah} AH
Warranty : ${battery.warranty}

VoltShine Price : ₹${battery.dp}

━━━━━━━━━━━━━━━━━━

Please contact me to confirm my booking.

Thank You.`
                  )
                }
                className="flex-1 rounded-xl border border-green-500 py-3 font-bold text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                WhatsApp
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* ================= OTHER BATTERY CTA ================= */}

      <div className="mt-8 rounded-3xl border border-yellow-400 bg-[#1c1c1c] p-8 text-center">

        <h3 className="text-2xl font-bold text-white">
          ⭐ Looking for Another Battery?
        </h3>

        <p className="mt-3 text-gray-400">
          Can't find the battery you're looking for?
        </p>

        <button
          onClick={() =>
            openWhatsApp(
              `Hello VoltShine 👋

I am looking for a battery for my vehicle.

Vehicle:
${make} ${model}
Year: ${year}
Fuel: ${fuel}

Please share your best price.`
            )
          }
          className="mt-6 rounded-xl bg-yellow-400 px-8 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Request Best Price
        </button>

      </div>

    </div>
  );
}