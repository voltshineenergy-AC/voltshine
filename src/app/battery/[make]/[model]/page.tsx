import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import BatterySection from "@/components/vehicle/BatterySection";

type Props = {
  params: Promise<{
    make: string;
    model: string;
  }>;
  searchParams: Promise<{
    year?: string;
    fuel?: string;
  }>;
};

function formatText(value: string) {
  return decodeURIComponent(value)
    .replace(/-/g, " ")
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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { make, model } = await params;

  const formattedMake = formatText(make);
  const formattedModel = formatText(model);

  return {
    title: `${formattedMake} ${formattedModel} Battery Replacement in Pune | VoltShine`,

    description: `Find compatible batteries for ${formattedMake} ${formattedModel}. Doorstep battery replacement, free installation and warranty in Pune & PCMC.`,

    alternates: {
      canonical: `https://voltshine.in/battery/${make}/${model}`,
    },
  };
}

export default async function BatteryPage({
  params,
  searchParams,
}: Props) {
  const { make, model } = await params;
  const { year, fuel } = await searchParams;

  const formattedMake = formatText(make);
  const formattedModel = formatText(model);

  const selectedYear = year ? Number(year) : null;
  const selectedFuel = fuel ? formatText(fuel) : null;

  // SUPABASE QUERY
  let query = supabase
    .from("battery_master")
    .select(
      `
      id,
      make,
      model,
      from_year,
      to_year,
      fuel,
      battery_brand,
      ah,
      warranty,
      dp,
      mrp,
      battery_model,
      part_number,
      din_jis,
      series
      `
    )
    .ilike("make", `%${formattedMake}%`)
    .ilike("model", `%${formattedModel}%`);

  // YEAR FILTER
  if (selectedYear) {
    query = query
      .lte("from_year", selectedYear)
      .gte("to_year", selectedYear);
  }

  // FUEL FILTER
  if (selectedFuel) {
    query = query.ilike("fuel", selectedFuel);
  }

  const { data: batteries, error } = await query.order("dp", {
    ascending: true,
  });

  if (error) {
    console.error("Supabase error:", error);
  }

  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <p className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
          VOLTSHINE BATTERY SERVICE
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          {formattedMake} {formattedModel} Battery Replacement in Pune
        </h1>

        {/* ================= SELECTED VEHICLE ================= */}

        {selectedYear && selectedFuel && (
          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300">
              🚗 {formattedMake} {formattedModel}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300">
              📅 Year: {selectedYear}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300">
              ⛽ Fuel: {selectedFuel}
            </span>

          </div>
        )}

        {/* ================= DESCRIPTION ================= */}

        <p className="mt-5 max-w-3xl text-lg text-gray-400">
          Find compatible batteries for your{" "}
          {formattedMake} {formattedModel}. Get doorstep battery
          replacement with installation and warranty across Pune &
          PCMC.
        </p>

        {/* ================= VEHICLE FILTER ================= */}

        <div className="mt-8 rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6">

          <form
            method="GET"
            className="grid gap-4 md:grid-cols-3"
          >

            {/* YEAR */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Select Year
              </label>

              <select
                name="year"
                defaultValue={year || ""}
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
                required
              >
                <option value="">
                  Select Year
                </option>

                {Array.from(
                  { length: 2026 - 2000 + 1 },
                  (_, index) => 2000 + index
                ).map((vehicleYear) => (
                  <option
                    key={vehicleYear}
                    value={vehicleYear}
                  >
                    {vehicleYear}
                  </option>
                ))}
              </select>
            </div>

            {/* FUEL */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Select Fuel
              </label>

              <select
                name="fuel"
                defaultValue={fuel || ""}
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
                required
              >
                <option value="">
                  Select Fuel
                </option>

                <option value="Petrol">
                  Petrol
                </option>

                <option value="Diesel">
                  Diesel
                </option>

                <option value="CNG">
                  CNG
                </option>
              </select>
            </div>

            {/* BUTTON */}

            <div className="flex items-end">

              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
              >
                Find Compatible Batteries
              </button>

            </div>

          </form>

        </div>

        {/* ================= BATTERY RESULTS ================= */}

        {batteries && batteries.length > 0 ? (

          <div className="mt-12">

            <BatterySection
              batteries={batteries}
              make={formattedMake}
              model={formattedModel}
              year={selectedYear ? String(selectedYear) : ""}
              fuel={selectedFuel || ""}
            />

          </div>

        ) : (

          /* ================= NO BATTERY ================= */

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#1c1c1c] p-8">

            <h2 className="text-2xl font-bold text-white">
              Battery information unavailable
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              We couldn't find a compatible battery for this
              vehicle in our current database.
            </p>

            <a
              href="https://wa.me/919270300889?text=Hello%20VoltShine%2C%20I%20need%20help%20finding%20a%20battery."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Ask VoltShine
            </a>

          </div>

        )}

      </div>
    </main>
  );
}