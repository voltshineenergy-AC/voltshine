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
    button: "Get Quote",
    href: "/solar",
  },
  {
    title: "UPS & Inverter",
    icon: Cpu,
    price: "Home & Office Backup",
    desc: "Sales, Installation & AMC",
    button: "Get Quote",
    href: "/ups",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-black px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="text-center">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Complete Energy &
            <br className="sm:hidden" /> Auto Care Solutions
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-5 text-gray-400 sm:mt-4 sm:text-base sm:leading-7">
            From car batteries and emergency assistance to detailing,
            windshield replacement, solar systems and reliable power backup
            solutions.
          </p>

        </div>

        {/* ================= SERVICE CARDS ================= */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  flex
                  min-h-[330px]
                  flex-col
                  rounded-2xl
                  border
                  border-yellow-500/20
                  bg-[#181818]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400/60
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.12)]
                  sm:rounded-3xl
                  sm:p-7
                "
              >

                {/* ICON */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10">
                  <Icon className="h-6 w-6 text-yellow-400 sm:h-7 sm:w-7" />
                </div>

                {/* TITLE */}

                <h3 className="mt-5 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {service.title}
                </h3>

                {/* PRICE */}

                <p className="mt-3 text-sm font-bold text-yellow-400 sm:text-base">
                  {service.price}
                </p>

                {/* DESCRIPTION */}

                <p className="mt-3 text-sm leading-5 text-gray-400 sm:text-base sm:leading-6">
                  {service.desc}
                </p>

                {/* CTA */}

                <div className="mt-auto pt-6">
                  <Link
                    href={service.href}
                    className="
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      bg-yellow-400
                      px-5
                      py-3
                      text-sm
                      font-extrabold
                      text-black
                      transition
                      active:scale-[0.98]
                      hover:bg-yellow-300
                      sm:w-auto
                      sm:px-7
                    "
                  >
                    {service.button} →
                  </Link>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}