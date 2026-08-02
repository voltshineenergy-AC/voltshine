import {
  Battery,
  Sparkles,
  Shield,
  Car,
  Sun,
  Zap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Battery,
    title: "Battery Replacement",
    price: "Starting ₹3,499",
    desc: "Exide, Amaron, Livguard & More",
  },
  {
    icon: Sparkles,
    title: "Car Detailing",
    price: "Starting ₹4,499",
    desc: "Ceramic • Graphene • PPF",
  },
  {
    icon: Shield,
    title: "Windshield Replacement",
    price: "Starting ₹3,699",
    desc: "OEM Glass Installation",
  },
  {
    icon: Car,
    title: "Jump Start",
    price: "Starting ₹399",
    desc: "Emergency Roadside Assistance",
  },
  {
    icon: Sun,
    title: "Solar Solutions",
    price: "Residential & Commercial",
    desc: "Complete Solar Installation",
  },
  {
    icon: Zap,
    title: "UPS & Inverter",
    price: "Starting ₹13,999",
    desc: "Home & Office Backup Solutions",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[5px] text-yellow-400">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything Your Vehicle Needs
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-400">
            Premium automotive solutions with professional installation,
            genuine products and transparent pricing.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-[#171717] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
              >
                <Icon
                  size={44}
                  className="text-yellow-400"
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-yellow-400 font-semibold">
                  {service.price}
                </p>

                <p className="mt-4 text-gray-400">
                  {service.desc}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-yellow-400 transition group-hover:gap-4">
                  Explore
                  <ArrowRight size={18} />
                </button>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}