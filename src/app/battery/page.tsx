import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Car Battery Replacement in Pune & PCMC | VoltShine",
  description:
    "Find the right car battery in Pune & PCMC. VoltShine provides doorstep battery replacement, free installation, warranty and old battery exchange for all major car brands.",
  alternates: {
    canonical: "https://voltshine.in/battery",
  },
};

function formatText(value: string) {
  return value
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ");
}

export default async function BatteryLandingPage() {
  const { data: vehicles, error } = await supabase
    .from("battery_master")
    .select("make, model")
    .order("make", { ascending: true })
    .order("model", { ascending: true });

  if (error) {
    console.error("Battery master error:", error);
  }

  // Create unique Make + Model combinations
  const uniqueVehicles = Array.from(
    new Map(
      (vehicles || []).map((vehicle) => [
        `${vehicle.make}-${vehicle.model}`,
        vehicle,
      ])
    ).values()
  );

  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <p className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
          VOLTSHINE BATTERY SERVICE
        </p>

        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
          Car Battery Replacement in Pune & PCMC
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Find the right battery for your car with VoltShine. Get genuine
          batteries, doorstep installation, manufacturer warranty and old
          battery exchange across Pune & PCMC.
        </p>

        {/* BENEFITS */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-yellow-400/20 bg-[#181818] p-5">
            <div className="text-3xl">🔋</div>
            <h2 className="mt-3 font-bold text-white">
              Genuine Batteries
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Trusted battery brands for your vehicle.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-[#181818] p-5">
            <div className="text-3xl">🚗</div>
            <h2 className="mt-3 font-bold text-white">
              Doorstep Installation
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Battery replacement at your location.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-[#181818] p-5">
            <div className="text-3xl">🛡️</div>
            <h2 className="mt-3 font-bold text-white">
              Manufacturer Warranty
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Applicable warranty with your battery.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-[#181818] p-5">
            <div className="text-3xl">♻️</div>
            <h2 className="mt-3 font-bold text-white">
              Old Battery Exchange
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Exchange your old battery and save more.
            </p>
          </div>

        </div>

        {/* VEHICLE DATABASE */}

        <section className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
            FIND YOUR BATTERY
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Select Your Car
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Select your car make and model to find compatible batteries,
            specifications, warranty and VoltShine pricing.
          </p>

          {uniqueVehicles.length > 0 ? (

            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {uniqueVehicles.map((vehicle) => {

                const make = String(vehicle.make);
                const model = String(vehicle.model);

                const makeSlug = make
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, "-");

                const modelSlug = model
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, "-");

                return (
                  <Link
                    key={`${make}-${model}`}
                    href={`/battery/${makeSlug}/${modelSlug}`}
                    className="group rounded-2xl border border-white/10 bg-[#181818] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-[#202020]"
                  >

                    <p className="text-sm font-semibold text-yellow-400">
                      {formatText(make)}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white group-hover:text-yellow-400">
                      {formatText(model)}
                    </h3>

                    <p className="mt-4 text-sm text-gray-500">
                      View compatible batteries →
                    </p>

                  </Link>
                );
              })}

            </div>

          ) : (

            <div className="mt-10 rounded-2xl border border-white/10 bg-[#181818] p-6 text-gray-400">
              Battery vehicle data is currently unavailable.
            </div>

          )}

        </section>

        {/* SERVICE AREA */}

        <section className="mt-20 rounded-3xl border border-yellow-400/20 bg-[#181818] p-8 md:p-10">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
            VOLTSHINE BATTERY SERVICE
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Doorstep Car Battery Replacement in Pune
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            VoltShine provides convenient car battery replacement and
            doorstep installation across Pune and PCMC. Choose your
            vehicle above to check compatible batteries and available
            options.
          </p>

          <a
            href="https://wa.me/919270300889?text=Hello%20VoltShine%2C%20I%20need%20help%20finding%20a%20car%20battery."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-yellow-400 px-7 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            Need Help? WhatsApp VoltShine
          </a>

        </section>

      </div>
    </main>
  );
}