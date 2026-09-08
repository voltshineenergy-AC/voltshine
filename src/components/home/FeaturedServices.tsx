"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  BatteryCharging,
  Sparkles,
  Shield,
  Zap,
  Sun,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Battery Replacement",
    icon: BatteryCharging,
    price: "Starting ₹3,499",
    desc: "Genuine Amaron, Exide & Livguard Batteries",
    button: "Explore Batteries",
    href: "/battery",
    images: [
      "/images/services/battery-1.jpg",
      "/images/services/battery-2.jpg",
      "/images/services/battery-3.jpg",
    ],
  },
  {
    title: "Car Detailing",
    icon: Sparkles,
    price: "Starting ₹7,999",
    desc: "Ceramic, Graphene & PPF Packages",
    button: "Explore Packages",
    href: "/detailing",
    images: [
      "/images/services/detailing-1.jpg",
      "/images/services/detailing-2.jpg",
      "/images/services/detailing-3.jpg",
    ],
  },
  {
    title: "Windshield",
    icon: Shield,
    price: "OEM Quality Glass",
    desc: "Leak Proof Installation Warranty",
    button: "Get Quote",
    href: "/windshield",
    images: [
      "/images/services/windshield-1.jpg",
      "/images/services/windshield-2.jpg",
      "/images/services/windshield-3.jpg",
    ],
  },
  {
    title: "Jump Start",
    icon: Zap,
    price: "Starting ₹399",
    desc: "Emergency Roadside Assistance",
    button: "Call Now",
    href: "tel:+919270300889",
    images: [
      "/images/services/jumpstart-1.jpg",
      "/images/services/jumpstart-2.jpg",
      "/images/services/jumpstart-3.jpg",
    ],
  },
  {
    title: "Solar Solutions",
    icon: Sun,
    price: "Residential & Commercial",
    desc: "On Grid & Off Grid Solar Systems",
    button: "Get Quote",
    href: "/solar",
    images: [
      "/images/services/solar-1.jpg",
      "/images/services/solar-2.jpg",
      "/images/services/solar-3.jpg",
    ],
  },
  {
    title: "UPS & Inverter",
    icon: Cpu,
    price: "Home & Office Backup",
    desc: "Sales, Installation & AMC",
    button: "Get Quote",
    href: "/ups",
    images: [
      "/images/services/ups-1.jpg",
      "/images/services/ups-2.jpg",
      "/images/services/ups-3.jpg",
    ],
  },
];

function ServiceImageSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  /* ================= NEXT ================= */

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  /* ================= PREVIOUS ================= */

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black">
      {/* IMAGE */}

      <div className="relative h-[190px] w-full sm:h-[210px]">
        <Image
          src={images[current]}
          alt={`${title} service by VoltShine`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500"
        />

        {/* DARK OVERLAY */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
      </div>

      {/* LEFT BUTTON */}

      <button
        type="button"
        onClick={previousImage}
        aria-label={`Previous ${title} photo`}
        className="
          absolute
          left-3
          top-1/2
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-black/70
          text-white
          backdrop-blur-sm
          transition
          active:scale-90
          hover:bg-black
        "
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* RIGHT BUTTON */}

      <button
        type="button"
        onClick={nextImage}
        aria-label={`Next ${title} photo`}
        className="
          absolute
          right-3
          top-1/2
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-black/70
          text-white
          backdrop-blur-sm
          transition
          active:scale-90
          hover:bg-black
        "
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* DOTS */}

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/60 px-2.5 py-1.5 backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show photo ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              current === index
                ? "w-5 bg-yellow-400"
                : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
                  min-h-[520px]
                  flex-col
                  rounded-2xl
                  border
                  border-yellow-500/20
                  bg-[#181818]
                  p-2
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400/60
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.12)]
                  sm:rounded-3xl
                  sm:p-3
                "
              >

                {/* CONTENT */}

                <div className="p-3 sm:p-4">

                  {/* ICON */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10">
                    <Icon className="h-6 w-6 text-yellow-400 sm:h-7 sm:w-7" />
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  {/* PRICE */}

                  <p className="mt-2 text-sm font-bold text-yellow-400 sm:text-base">
                    {service.price}
                  </p>

                  {/* DESCRIPTION */}

                  <p className="mt-2 text-sm leading-5 text-gray-400 sm:text-base sm:leading-6">
                    {service.desc}
                  </p>

                </div>

                {/* ================= IMAGE SLIDER ================= */}

                <ServiceImageSlider
                  images={service.images}
                  title={service.title}
                />

                {/* ================= CTA ================= */}

                <div className="mt-auto p-3 pt-4 sm:p-4">

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
                      sm:text-base
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