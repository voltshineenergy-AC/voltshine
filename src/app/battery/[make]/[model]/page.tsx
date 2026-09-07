import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import BatterySection from "@/components/vehicle/BatterySection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import VehicleFAQSchema from "@/components/seo/VehicleFAQSchema";
import VehicleFAQ from "@/components/vehicle/VehicleFAQ";

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

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    make: string;
    model: string;
  }>;
}): Promise<Metadata> {
  const { make, model } = await params;

  const formattedMake = decodeURIComponent(make)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const formattedModel = decodeURIComponent(model)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const vehicleName = `${formattedMake} ${formattedModel}`;

  const canonicalUrl = `https://voltshine.in/battery/${make}/${model}`;

  return {
    title: `${vehicleName} Battery Price & Replacement in Pune`,

    description:
      `Find compatible ${vehicleName} car batteries in Pune. Check battery options, pricing, warranty and doorstep battery replacement from VoltShine.`,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: `${vehicleName} Battery Price & Replacement in Pune | VoltShine`,
      description:
        `Get compatible ${vehicleName} battery options with pricing, warranty and doorstep battery replacement across Pune & PCMC.`,
      url: canonicalUrl,
      type: "website",
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
    .ilike("make", formattedMake)
    .ilike("model", formattedModel);

  if (selectedYear) {
    query = query
      .lte("from_year", selectedYear)
      .gte("to_year", selectedYear);
  }

  if (selectedFuel) {
    query = query.ilike("fuel", selectedFuel);
  }

  const { data: batteries, error } = await query.order("dp", {
    ascending: true,
  });

  if (error) {
    console.error("Supabase error:", error);
  }

  const vehiclePath = `/battery/${slugify(
    formattedMake
  )}/${slugify(formattedModel)}`;

  const canonicalUrl = `https://voltshine.in${vehiclePath}`;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* BREADCRUMB SCHEMA */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://voltshine.in",
          },
          {
            name: "Car Batteries",
            url: "https://voltshine.in/battery",
          },
          {
            name: `${formattedMake} ${formattedModel}`,
            url: canonicalUrl,
          },
        ]}
      />

      <VehicleFAQSchema
       make={formattedMake}
       model={formattedModel}
       />

      {/* HERO */}
      <section className="bg-[#090909] px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/battery"
            className="inline-flex items-center text-xs font-semibold text-gray-500 transition hover:text-yellow-400"
          >
            ← All Car Batteries
          </Link>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            VOLTSHINE BATTERY SERVICE
          </p>

          <h1 className="mt-3 max-w-4xl text-[31px] font-extrabold leading-[1.08] sm:text-4xl md:text-5xl">
            {formattedMake} {formattedModel}
            <br className="hidden sm:block" />
            <span className="text-yellow-400">
              {" "}Battery Replacement in Pune
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
            Find compatible batteries for your {formattedMake}{" "}
            {formattedModel}. Get genuine battery replacement with
            doorstep installation, applicable warranty and old battery
            exchange across Pune & PCMC.
          </p>

          <div className="mt-7 grid max-w-lg grid-cols-1 gap-3 sm:flex sm:max-w-none sm:flex-wrap">
            <a
              href="https://wa.me/919270300889?text=Hello%20VoltShine%20%F0%9F%91%8B%0A%0AI%20need%20a%20battery%20for%20my%20car.%0A%0APlease%20help%20me%20find%20the%20right%20battery."
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

          {selectedYear && selectedFuel && (
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-2 text-xs font-semibold text-gray-300">
                🚗 {formattedMake} {formattedModel}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300">
                📅 {selectedYear}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300">
                ⛽ {selectedFuel}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* VEHICLE FILTER */}
      <section className="bg-black px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-yellow-400/20 bg-[#151515] p-5 sm:p-7">

            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
                FIND YOUR BATTERY
              </p>

              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Select Year & Fuel
              </h2>

              <p className="mt-2 text-sm leading-5 text-gray-400">
                Choose your vehicle details to see compatible battery
                options and pricing.
              </p>
            </div>

            <form
              method="GET"
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              <div>
                <label
                  htmlFor="year"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400"
                >
                  Vehicle Year
                </label>

                <select
                  id="year"
                  name="year"
                  defaultValue={year || ""}
                  required
                  className="min-h-12 w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-yellow-400"
                >
                  <option value="">Select Year</option>

                  {Array.from(
                    { length: 2026 - 2000 + 1 },
                    (_, index) => 2000 + index
                  ).map((vehicleYear) => (
                    <option key={vehicleYear} value={vehicleYear}>
                      {vehicleYear}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="fuel"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400"
                >
                  Fuel Type
                </label>

                <select
                  id="fuel"
                  name="fuel"
                  defaultValue={fuel || ""}
                  required
                  className="min-h-12 w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-yellow-400"
                >
                  <option value="">Select Fuel</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="min-h-12 w-full rounded-xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
                >
                  Find Compatible Batteries →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[#090909] px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">

          {batteries && batteries.length > 0 ? (
            <BatterySection
              batteries={batteries}
              make={formattedMake}
              model={formattedModel}
              year={selectedYear ? String(selectedYear) : ""}
              fuel={selectedFuel || ""}
            />
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#151515] p-6 text-center sm:p-10">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10 text-2xl">
                🔋
              </div>

              <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
                Select Your Vehicle Details
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                Select the vehicle year and fuel type above to find
                compatible battery options for your{" "}
                {formattedMake} {formattedModel}.
              </p>

              <a
                href={`https://wa.me/919270300889?text=${encodeURIComponent(
                  `Hello VoltShine 👋

I need a battery for my vehicle.

Make : ${formattedMake}
Model : ${formattedModel}
${selectedYear ? `Year : ${selectedYear}` : ""}
${selectedFuel ? `Fuel : ${selectedFuel}` : ""}

Please help me find the right battery and best price.

Thank You.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
              >
                💬 Ask VoltShine
              </a>
            </div>
          )}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-black px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-2xl">🔋</div>
              <h3 className="mt-3 text-lg font-extrabold">
                Genuine Batteries
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Genuine batteries from trusted automotive brands.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-2xl">🚗</div>
              <h3 className="mt-3 text-lg font-extrabold">
                Doorstep Installation
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Professional battery installation at your location.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-2xl">🛡️</div>
              <h3 className="mt-3 text-lg font-extrabold">
                Warranty Support
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Applicable manufacturer warranty with your battery.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-2xl">♻️</div>
              <h3 className="mt-3 text-lg font-extrabold">
                Old Battery Exchange
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Exchange your old battery and save more.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="bg-[#090909] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400 to-yellow-500 px-5 py-9 text-center sm:px-8 sm:py-12">

            <p className="text-[10px] font-extrabold uppercase tracking-[3px] text-black/70 sm:text-xs sm:tracking-[4px]">
              CAR WON&apos;T START?
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-black sm:text-4xl">
              Don&apos;t Get Stranded
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/75 sm:text-base sm:leading-7">
              Need urgent battery assistance or a jumpstart? Contact
              VoltShine for quick car assistance across Pune & PCMC.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:justify-center sm:gap-4">

              <a
                href="tel:+919270300889"
                className="flex min-h-12 items-center justify-center rounded-xl bg-black px-7 py-3.5 text-sm font-extrabold text-white transition active:scale-[0.98] hover:bg-black/80 sm:text-base"
              >
                🚗 Call for Assistance
              </a>

              <a
                href="https://wa.me/919270300889?text=Hello%20VoltShine%20%F0%9F%91%8B%0A%0A%F0%9F%9A%A8%20My%20car%20is%20not%20starting.%20I%20need%20battery%20assistance.%0A%0APlease%20contact%20me%20as%20soon%20as%20possible."
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl border-2 border-black px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-black hover:text-white sm:text-base"
              >
                💬 WhatsApp Now
              </a>

            </div>
          </div>
        </div>
      </section>

         {/* VEHICLE FAQ */}
<VehicleFAQ
  make={formattedMake}
  model={formattedModel}
/>

{/* VEHICLE SEO CONTENT */}
<section className="mt-10 rounded-3xl border border-yellow-400/20 bg-[#151515] p-6 sm:p-8">
  <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
    VOLTSHINE VEHICLE BATTERY SERVICE
  </p>

  <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
    {formattedMake} {formattedModel} Battery Replacement in Pune
  </h2>

  <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
    Looking for a reliable battery for your {formattedMake}{" "}
    {formattedModel}? VoltShine helps you find compatible car battery
    options based on your vehicle details and provides professional
    battery replacement service across Pune and PCMC.
  </p>

  <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
    You can check available battery brands, capacity, pricing, warranty
    and doorstep installation options for your {formattedMake}{" "}
    {formattedModel}. Our team can also help confirm battery availability
    and installation timing.
  </p>

  <div className="mt-6 grid gap-3 sm:grid-cols-3">
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm font-bold text-white">
        Compatible Battery
      </p>
      <p className="mt-1 text-xs leading-5 text-gray-500">
        Vehicle-specific battery options
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm font-bold text-white">
        Doorstep Installation
      </p>
      <p className="mt-1 text-xs leading-5 text-gray-500">
        Convenient installation options
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm font-bold text-white">
        Warranty Support
      </p>
      <p className="mt-1 text-xs leading-5 text-gray-500">
        Applicable manufacturer warranty
      </p>
    </div>
  </div>

  <div className="mt-7 flex flex-col gap-3 sm:flex-row">

    <Link
      href="/battery"
      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
    >
      Explore All Car Batteries →
    </Link>

    <Link
      href="/pune"
      className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-extrabold text-white transition active:scale-[0.98] hover:border-yellow-400 hover:text-yellow-400"
    >
      Car Battery Services in Pune →
    </Link>

  </div>
</section>

{/* SERVICE AREA */}
<section className="bg-black px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-white/10 bg-[#151515] p-6 sm:p-9">

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[4px]">
              DOORSTEP BATTERY SERVICE
            </p>

            <h2 className="mt-3 text-[27px] font-extrabold leading-tight sm:text-4xl">
              {formattedMake} {formattedModel} Battery Service in Pune
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              VoltShine provides doorstep battery replacement for cars
              across Pune and PCMC. Find compatible batteries for your{" "}
              {formattedMake} {formattedModel}, check pricing and contact
              our team for installation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Wakad",
                "Baner",
                "Hinjewadi",
                "Kharadi",
                "Hadapsar",
                "Viman Nagar",
                "Chinchwad",
                "Pimpri",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-400"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href={`https://wa.me/919270300889?text=${encodeURIComponent(
                  `Hello VoltShine 👋

I need a battery replacement for my ${formattedMake} ${formattedModel}.

Please share the best available battery and price.

Thank You.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
              >
                💬 WhatsApp VoltShine
              </a>

              <Link
                href="/battery"
                className="flex min-h-12 items-center justify-center rounded-xl border border-white/10 px-7 py-3.5 text-sm font-extrabold text-gray-300 transition hover:border-yellow-400/50 hover:text-yellow-400"
              >
                ← Browse All Vehicles
              </Link>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}