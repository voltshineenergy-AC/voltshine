import {
  ShieldCheck,
  Clock3,
  BatteryCharging,
  Award,
} from "lucide-react";

const features = [
  {
    icon: BatteryCharging,
    title: "Genuine Batteries",
    desc: "100% genuine Amaron, Exide, Livguard & more.",
  },
  {
    icon: Clock3,
    title: "Fast Doorstep Service",
    desc: "Battery replacement & jumpstart at your location.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    desc: "Manufacturer warranty with proper invoice.",
  },
  {
    icon: Award,
    title: "Trusted Experts",
    desc: "Professional technicians with quality workmanship.",
  },
];

export default function WhyVoltshine() {
  return (
    <section className="bg-[#090909] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-yellow-400">
            WHY VOLTSHINE
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Why Choose VoltShine?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Reliable products, professional installation and fast
            doorstep service across Pune & PCMC.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
              >
                <Icon className="h-10 w-10 text-yellow-400" />

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}