import {
  CarFront,
  Zap,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: CarFront,
    title: "Complete Auto Care",
    desc: "Battery replacement, jumpstart, windshield replacement and premium car detailing under one platform.",
  },
  {
    icon: Zap,
    title: "Energy Solutions",
    desc: "Reliable UPS, inverter and solar solutions for homes, offices and businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Warranty",
    desc: "Genuine products, professional installation and applicable warranty support.",
  },
  {
    icon: Users,
    title: "Trusted Service",
    desc: "Professional service and convenient doorstep assistance across Pune & PCMC.",
  },
];

export default function WhyVoltshine() {
  return (
    <section className="bg-[#090909] px-4 py-14 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="text-center">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            WHY VOLTSHINE
          </p>

          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Why Choose
            <br className="sm:hidden" /> VoltShine?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-gray-400 sm:text-lg sm:leading-7">
            Complete Energy & Auto Care solutions with reliable products,
            professional service and convenient support across Pune & PCMC.
          </p>

        </div>

        {/* ================= FEATURES ================= */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#151515]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400/50
                "
              >

                {/* ICON */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10">
                  <Icon className="h-6 w-6 text-yellow-400" />
                </div>

                {/* TITLE */}

                <h3 className="mt-5 text-xl font-extrabold leading-tight text-white">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-2 text-sm leading-5 text-gray-400">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* ================= TRUST STRIP ================= */}

        <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-yellow-400/10 bg-[#111111]">

          <div className="border-r border-white/10 px-2 py-4 text-center">
            <p className="text-lg font-extrabold text-yellow-400 sm:text-2xl">
              6+
            </p>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
              Services
            </p>
          </div>

          <div className="border-r border-white/10 px-2 py-4 text-center">
            <p className="text-lg font-extrabold text-yellow-400 sm:text-2xl">
              Pune
            </p>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
              & PCMC
            </p>
          </div>

          <div className="px-2 py-4 text-center">
            <p className="text-lg font-extrabold text-yellow-400 sm:text-2xl">
              Trusted
            </p>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
              Service
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}