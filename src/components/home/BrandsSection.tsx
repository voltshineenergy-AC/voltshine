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
    <section className="overflow-hidden bg-[#090909] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="mb-8 px-5 text-center sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            BRANDS WE TRUST
          </p>

          <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
            Trusted Brands.
            <br className="sm:hidden" /> Genuine Products.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-gray-400 sm:text-base sm:leading-6">
            We work with trusted automotive and energy brands to deliver
            reliable products and quality service.
          </p>
        </div>

        {/* BATTERY BRANDS */}
        <div>
          <div className="mb-5 px-5 sm:px-6">
            <h3 className="text-xl font-extrabold text-white">
              Trusted Battery Brands
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Genuine batteries from trusted brands.
            </p>
          </div>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div className="brand-slider flex w-max">

              {/* FIRST SET */}
              <div className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
                {batteryBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex h-24 w-[150px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#151515] p-5 transition duration-300 hover:border-yellow-400/50"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* DUPLICATE SET */}
              <div className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
                {batteryBrands.map((brand) => (
                  <div
                    key={`duplicate-${brand.name}`}
                    className="flex h-24 w-[150px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#151515] p-5 transition duration-300 hover:border-yellow-400/50"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}