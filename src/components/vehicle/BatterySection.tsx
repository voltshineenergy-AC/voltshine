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

      {/* ================= TITLE ================= */}

      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
          BATTERY OPTIONS
        </p>

        <h3 className="mt-2 text-[28px] font-extrabold leading-tight text-white sm:text-3xl">
          Compatible Batteries
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Genuine batteries with doorstep installation.
        </p>
      </div>

      {/* ================= BATTERY GRID ================= */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {sortedBatteries.map((battery, index) => (
          <div
            key={`${battery.battery_brand}-${battery.ah}-${battery.dp}-${index}`}
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

            {/* ================= HEADER ================= */}

            <div className="flex items-start justify-between gap-3">

              <div className="min-w-0">

                <div className="flex flex-wrap items-center gap-2">

                  <h4 className="text-xl font-extrabold text-yellow-400">
                    {battery.battery_brand}
                  </h4>

                  {battery.battery_brand?.toLowerCase() === "exide" && (
                    <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green-400">
                      Recommended
                    </span>
                  )}

                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Genuine Battery
                </p>

              </div>

              {/* AH */}

              <div className="shrink-0 rounded-full bg-yellow-400 px-3.5 py-1.5">
                <span className="text-sm font-extrabold text-black">
                  {battery.ah} AH
                </span>
              </div>

            </div>

            {/* ================= FEATURES ================= */}

            <div className="mt-5 space-y-2.5 text-sm text-gray-300">

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Compatible with selected vehicle
              </p>

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Manufacturer Warranty: {battery.warranty}
              </p>

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Free Doorstep Installation
              </p>

              <p className="flex gap-2">
                <span className="text-green-400">✓</span>
                Old Battery Exchange Available
              </p>

            </div>

            {/* ================= PRICING ================= */}

            <div className="mt-6 border-t border-gray-700 pt-5">

              {battery.mrp > battery.dp && (
                <div className="flex flex-wrap items-center gap-2">

                  <p className="text-sm text-gray-500 line-through">
                    MRP ₹{battery.mrp.toLocaleString("en-IN")}
                  </p>

                  <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green-400">
                    Save ₹
                    {(battery.mrp - battery.dp).toLocaleString("en-IN")}
                  </span>

                </div>
              )}

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                VoltShine Price
              </p>

              <p className="mt-0.5 text-4xl font-extrabold text-green-400">
                ₹{battery.dp.toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-xs font-semibold text-green-400">
                ✓ Inclusive of doorstep installation
              </p>

              <div className="mt-3 inline-flex rounded-lg bg-blue-500/10 px-3 py-1.5">
                <p className="text-xs font-semibold text-blue-400">
                  🛡 {battery.warranty}
                </p>
              </div>

            </div>

            {/* ================= BUTTONS ================= */}

            <div className="mt-6 grid grid-cols-2 gap-3">

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
                className="
                  min-h-12
                  rounded-xl
                  bg-yellow-400
                  px-3
                  py-3
                  text-xs
                  font-extrabold
                  leading-4
                  text-black
                  transition
                  active:scale-[0.98]
                  hover:bg-yellow-300
                "
              >
                Check
                <br />
                Availability
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
                className="
                  min-h-12
                  rounded-xl
                  border
                  border-green-500
                  px-3
                  py-3
                  text-xs
                  font-extrabold
                  leading-4
                  text-green-400
                  transition
                  active:scale-[0.98]
                  hover:bg-green-500
                  hover:text-white
                "
              >
                💬
                <br />
                WhatsApp
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* ================= OTHER BATTERY CTA ================= */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-yellow-400/50
          bg-[#1c1c1c]
          p-6
          text-center
          sm:p-8
        "
      >

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 text-xl">
          ⭐
        </div>

        <h3 className="mt-4 text-xl font-extrabold text-white sm:text-2xl">
          Looking for Another Battery?
        </h3>

        <p className="mt-2 text-sm text-gray-400">
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
          className="
            mt-5
            w-full
            rounded-xl
            bg-yellow-400
            px-6
            py-3.5
            text-sm
            font-extrabold
            text-black
            transition
            active:scale-[0.98]
            hover:bg-yellow-300
            sm:w-auto
            sm:px-8
          "
        >
          Request Best Price →
        </button>

      </div>

    </div>
  );
}