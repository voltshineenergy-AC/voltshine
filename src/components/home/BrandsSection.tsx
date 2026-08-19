"use client";

const batteryBrands = [
  {
    name: "Amaron",
    logo: "/brands/battery/amaron.webp",
  },
  {
    name: "Exide",
    logo: "/brands/battery/exide.webp",
  },
  {
    name: "SF Sonic",
    logo: "/brands/battery/sf-sonic.webp",
  },
  {
    name: "Powerzone",
    logo: "/brands/battery/powerzone.webp",
  },
];

export default function BrandsSection() {
  return (
    <section className="overflow-hidden bg-[#090909] py-16">

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-yellow-400">
            BRANDS WE TRUST
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Trusted Brands. Genuine Products.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            We work with trusted automotive and energy brands to deliver
            reliable products and quality service.
          </p>
        </div>

        {/* BATTERY BRANDS */}
        <div>

          <h3 className="mb-4 text-xl font-bold text-white">
            Trusted Battery Brands
          </h3>

          <p className="mb-6 text-sm text-gray-400">
            Genuine batteries from trusted brands.
          </p>

          {/* SLIDER WINDOW */}
          <div className="overflow-hidden">

            {/* SLIDER TRACK */}
            <div className="brand-slider flex w-max">

              {/* FIRST SET */}
              <div className="flex shrink-0 gap-5 pr-5">

                {batteryBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex h-28 min-w-[170px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}

              </div>

              {/* DUPLICATE SET */}
              <div className="flex shrink-0 gap-5 pr-5">

                {batteryBrands.map((brand) => (
                  <div
                    key={`duplicate-${brand.name}`}
                    className="flex h-28 min-w-[170px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SLIDER ANIMATION */}
     

    </section>
  );
}