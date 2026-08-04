import Link from "next/link";
import {
  BatteryCharging,
  Sparkles,
  Shield,
  Zap,
  Sun,
  Cpu,
} from "lucide-react";

const services = [
  {
    title: "Battery Replacement",
    icon: BatteryCharging,
    price: "Starting ₹3,499",
    desc: "Genuine Amaron, Exide & Livguard Batteries",
    button: "Explore Batteries",
    href: "/battery",
  },
  {
    title: "Car Detailing",
    icon: Sparkles,
    price: "Starting ₹7,999",
    desc: "Ceramic, Graphene & PPF Packages",
    button: "Explore Packages",
    href: "/detailing",
  },
  {
    title: "Windshield",
    icon: Shield,
    price: "OEM Quality Glass",
    desc: "Leak Proof Installation Warranty",
    button: "Get Quote",
    href: "/windshield",
  },
  {
    title: "Jump Start",
    icon: Zap,
    price: "Starting ₹399",
    desc: "Emergency Roadside Assistance",
    button: "Call Now",
    href: "tel:+919270300889",
  },
  {
    title: "Solar Solutions",
    icon: Sun,
    price: "Residential & Commercial",
    desc: "On Grid & Off Grid Solar Systems",
    button: "Coming Soon",
    href: "#",
  },
  {
    title: "UPS & Inverter",
    icon: Cpu,
    price: "Home & Office Backup",
    desc: "Sales, Installation & AMC",
    button: "Coming Soon",
    href: "#",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center uppercase tracking-[6px] text-yellow-400">
          Our Services
        </p>

        <h2 className="mt-2 text-center text-5xl font-bold text-white">
          Complete Automotive Solutions
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400">
          Everything your vehicle needs — from batteries and detailing to
          windshield replacement, emergency support, solar and power backup.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="group rounded-3xl border border-yellow-500/20 bg-[#181818] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]"
              >

                <Icon
                  size={46}
                  className="text-yellow-400"
                />

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 font-semibold text-yellow-400">
                  {service.price}
                </p>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.desc}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-3 font-bold text-black transition hover:scale-105"
                >
                  {service.button}
                </Link>

              </div>

            );
          })}
        </div>
      </div>
    </section>
  );
}