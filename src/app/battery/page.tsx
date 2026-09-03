import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Car Battery Replacement in Pune & PCMC | VoltShine",
  description:
    "Car battery replacement in Pune & PCMC with doorstep installation. Find compatible Exide, Amaron and other genuine batteries with warranty and old battery exchange from VoltShine.",
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

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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

  const uniqueVehicles = Array.from(
    new Map(
      (vehicles || [])
        .filter((vehicle) => vehicle.make && vehicle.model)
        .map((vehicle) => [
          `${String(vehicle.make).trim()}-${String(vehicle.model).trim()}`,
          vehicle,
        ])
    ).values()
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="bg-[#090909] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            VOLTSHINE BATTERY SERVICE
          </p>

          <h1 className="mt-4 max-w-4xl text-[32px] font-extrabold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
            Car Battery Replacement
            <br className="hidden sm:block" />
            <span className="text-yellow-400"> in Pune & PCMC</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
            Find the right battery for your car and get genuine battery
            replacement with doorstep installation, manufacturer warranty
            and old battery exchange across Pune & PCMC.
          </p>

          {/* HERO ACTIONS */}
          <div className="mt-7 grid max-w-lg grid-cols-1 gap-3 sm:flex sm:max-w-none sm:flex-wrap">

            <a
              href="https://wa.me/919270300889?text=Hello%20VoltShine%20%F0%9F%91%8B%0A%0AI%20need%20a%20car%20battery%20replacement.%0A%0APlease%20share%20the%20best%20battery%20option%20and%20price.%0A%0AThank%20You."
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
            >
              💬 Get Battery Quote
            </a>

            <a
              href="tel:+919270300889"
              className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
            >
              📞 Call VoltShine
            </a>

          </div>

          {/* TRUST POINTS */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-gray-300 sm:text-sm">
            <span>✓ Genuine Batteries</span>
            <span>✓ Doorstep Installation</span>
            <span>✓ Warranty</span>
            <span>✓ Pune & PCMC</span>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              WHY VOLTSHINE
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-4xl">
              Battery Replacement
              <br className="sm:hidden" /> Made Simple
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Get the right battery for your vehicle without visiting multiple
              shops or worrying about compatibility.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-yellow-400/20 bg-[#151515] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-2xl">
                🔋
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-white">
                Genuine Batteries
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Genuine batteries from trusted automotive brands.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/20 bg-[#151515] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-2xl">
                🚗
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-white">
                Doorstep Service
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Get your car battery replaced at your location.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/20 bg-[#151515] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-2xl">
                🛡️
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-white">
                Manufacturer Warranty
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Applicable manufacturer warranty with your battery.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/20 bg-[#151515] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-2xl">
                ♻️
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-white">
                Old Battery Exchange
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Exchange your old battery and reduce your replacement cost.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VEHICLE DATABASE */}
      <section className="bg-[#090909] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              FIND YOUR BATTERY
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-4xl">
              Select Your Car
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Select your car make and model to find compatible batteries,
              warranty and VoltShine pricing.
            </p>
          </div>

          {uniqueVehicles.length > 0 ? (

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">

              {uniqueVehicles.map((vehicle) => {

                const make = String(vehicle.make);
                const model = String(vehicle.model);

                const makeSlug = slugify(make);
                const modelSlug = slugify(model);

                return (
                  <Link
                    key={`${make}-${model}`}
                    href={`/battery/${makeSlug}/${modelSlug}`}
                    className="group flex min-h-[125px] flex-col justify-between rounded-2xl border border-white/10 bg-[#151515] p-4 transition duration-300 active:scale-[0.98] hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-[#1c1c1c] sm:min-h-[140px] sm:p-5"
                  >

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[2px] text-yellow-400 sm:text-xs">
                        {formatText(make)}
                      </p>

                      <h3 className="mt-2 text-base font-extrabold leading-tight text-white group-hover:text-yellow-400 sm:text-xl">
                        {formatText(model)}
                      </h3>
                    </div>

                    <p className="mt-4 text-[11px] font-semibold text-gray-500 group-hover:text-gray-300 sm:text-xs">
                      View compatible batteries →
                    </p>

                  </Link>
                );
              })}

            </div>

          ) : (

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <p className="text-sm text-gray-400">
                Battery vehicle data is currently unavailable.
              </p>

              <a
                href="https://wa.me/919270300889?text=Hello%20VoltShine%2C%20I%20need%20help%20finding%20a%20car%20battery."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black"
              >
                Ask VoltShine →
              </a>
            </div>

          )}

        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#1c1c1c] to-[#101010] px-5 py-9 text-center sm:px-8 sm:py-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-2xl">
              🚨
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[4px]">
              EMERGENCY CAR ASSISTANCE
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-white sm:text-4xl">
              Car Won&apos;t Start?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Don&apos;t get stranded. Get quick assistance for battery
              replacement and emergency jumpstart across Pune & PCMC.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:justify-center sm:gap-4">

              <a
                href="tel:+919270300889"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
              >
                🚗 Call for Assistance
              </a>

              <a
                href="https://wa.me/919270300889?text=Hello%20VoltShine%20%F0%9F%91%8B%0A%0A%F0%9F%9A%A8%20My%20car%20is%20not%20starting.%20I%20need%20immediate%20battery%20assistance.%0A%0APlease%20contact%20me%20as%20soon%20as%20possible."
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
              >
                💬 WhatsApp Now
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-[#090909] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-yellow-400/20 bg-[#151515] p-6 sm:p-9">

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[4px]">
              DOORSTEP BATTERY SERVICE
            </p>

            <h2 className="mt-3 text-[27px] font-extrabold leading-tight sm:text-4xl">
              Car Battery Replacement Across Pune & PCMC
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              VoltShine provides doorstep car battery replacement in Pune
              and PCMC with genuine batteries, professional installation,
              applicable manufacturer warranty and old battery exchange.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold text-gray-300 sm:grid-cols-3 lg:grid-cols-4">
              <span>✓ Wakad</span>
              <span>✓ Baner</span>
              <span>✓ Hinjewadi</span>
              <span>✓ Kharadi</span>
              <span>✓ Hadapsar</span>
              <span>✓ Viman Nagar</span>
              <span>✓ Chinchwad</span>
              <span>✓ Pimpri</span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">

              <a
                href="https://wa.me/919270300889?text=Hello%20VoltShine%20%F0%9F%91%8B%0A%0AI%20need%20a%20car%20battery%20replacement.%0A%0APlease%20share%20the%20best%20available%20option%20and%20price."
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:w-auto"
              >
                💬 WhatsApp VoltShine
              </a>

              <Link
                href="/"
                className="flex min-h-12 items-center justify-center rounded-xl border border-white/10 px-7 py-3.5 text-sm font-extrabold text-gray-300 transition hover:border-yellow-400/50 hover:text-yellow-400 sm:w-auto"
              >
                ← Back to Home
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}