import {
  ShieldCheck,
  Clock3,
  Wallet,
  BadgeCheck,
  MapPin,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "100% Original Batteries, OEM Glass & Premium Detailing Materials",
  },
  {
    icon: Clock3,
    title: "Fast Doorstep Service",
    desc: "Quick Response Across Pune & PCMC",
  },
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    desc: "Transparent Pricing with No Hidden Charges",
  },
  {
    icon: BadgeCheck,
    title: "Warranty Support",
    desc: "Manufacturer Warranty & GST Invoice",
  },
  {
    icon: MapPin,
    title: "Pune Coverage",
    desc: "Serving Pune & PCMC with Trusted Partners",
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Support",
    desc: "Quick Quotes & Easy Booking",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[5px] text-yellow-400">
            Why Choose VoltShine
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Trusted Car Care Partner
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Premium Products, Professional Service &
            Transparent Pricing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#171717] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
              >
                <Icon
                  size={42}
                  className="text-yellow-400"
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
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