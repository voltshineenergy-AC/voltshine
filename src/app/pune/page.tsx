import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Car Battery, Detailing & Auto Care Services in Pune | VoltShine",
  description:
    "VoltShine provides car battery replacement, doorstep jumpstart, windshield replacement, premium car detailing, UPS, inverter and solar solutions across Pune.",
  alternates: {
    canonical: "https://voltshine.in/pune",
  },
  openGraph: {
    title: "Car Battery, Detailing & Auto Care Services in Pune | VoltShine",
    description:
      "Car battery replacement, jumpstart, windshield replacement, detailing, UPS, inverter and solar solutions across Pune & PCMC.",
    url: "https://voltshine.in/pune",
    type: "website",
  },
};

const faqs = [
  {
    question: "Does VoltShine provide car battery replacement in Pune?",
    answer:
      "Yes. VoltShine provides car battery replacement and doorstep installation across Pune and PCMC for compatible vehicles and battery requirements.",
  },
  {
    question: "Does VoltShine provide doorstep battery replacement?",
    answer:
      "Yes. Doorstep battery replacement is available across selected areas of Pune and PCMC. Contact VoltShine to confirm availability for your location.",
  },
  {
    question: "Which car care services are available in Pune?",
    answer:
      "VoltShine provides car battery replacement, emergency jumpstart, windshield replacement, premium car detailing, UPS and inverter solutions and solar solutions across Pune.",
  },
  {
    question: "Does VoltShine provide car detailing in Pune?",
    answer:
      "Yes. VoltShine offers premium car detailing packages including ceramic coating, graphene coating, Teflon and paint protection film options.",
  },
  {
    question: "How can I book VoltShine services in Pune?",
    answer:
      "You can contact VoltShine through WhatsApp or phone to check service availability, pricing and the next available booking slot.",
  },
];

const services = [
  {
    title: "Car Battery Replacement",
    description:
      "Genuine car batteries with professional fitment and doorstep installation.",
    href: "/battery",
    button: "Find Your Battery",
  },
  {
    title: "Windshield Replacement",
    description:
      "Quality windshield glass with professional fitment and leak-checked installation.",
    href: "/windshield",
    button: "Get Windshield Quote",
  },
  {
    title: "Premium Car Detailing",
    description:
      "Professional detailing packages including ceramic, graphene, Teflon and PPF.",
    href: "/detailing",
    button: "Explore Detailing",
  },
  {
    title: "UPS & Inverter Solutions",
    description:
      "Power backup solutions for homes, offices and businesses across Pune.",
    href: "/ups",
    button: "Explore UPS Solutions",
  },
  {
    title: "Solar Solutions",
    description:
      "On-grid and off-grid solar solutions for residential and commercial requirements.",
    href: "/solar",
    button: "Explore Solar Solutions",
  },
];

const areas = [
  "Wakad",
  "Baner",
  "Hinjewadi",
  "Aundh",
  "Kothrud",
  "Kharadi",
  "Viman Nagar",
  "Hadapsar",
  "Magarpatta",
  "Koregaon Park",
  "Kalyani Nagar",
  "Mundhwa",
  "Kondhwa",
  "Undri",
  "Bavdhan",
  "Pashan",
  "Pimpri-Chinchwad",
];

export default function PunePage() {
  const breadcrumbItems = [
    {
      name: "Home",
      url: "https://voltshine.in",
    },
    {
      name: "Pune",
      url: "https://voltshine.in/pune",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* STRUCTURED DATA */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="border-b border-white/10 bg-[#090909] px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-6xl">

          <Link
            href="/"
            className="text-xs font-semibold text-gray-500 transition hover:text-yellow-400"
          >
            ← Back to VoltShine
          </Link>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            VOLTSHINE PUNE
          </p>

          <h1 className="mt-3 max-w-4xl text-[34px] font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
            Car Battery & Auto Care
            <br />
            <span className="text-yellow-400">
              Services in Pune
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
            VoltShine provides car battery replacement, emergency jumpstart,
            windshield replacement, premium car detailing, UPS, inverter and
            solar solutions across Pune and PCMC.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <a
              href="https://wa.me/919270300889"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
            >
              💬 WhatsApp VoltShine
            </a>

            <a
              href="tel:+919270300889"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
            >
              📞 Call VoltShine
            </a>

          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-400">
              Pune & PCMC
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-400">
              Doorstep Service
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-400">
              Genuine Products
            </span>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              OUR SERVICES
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-4xl">
              Auto Care Services
              <br className="sm:hidden" />
              <span className="text-yellow-400"> Across Pune</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Choose the service you need and explore VoltShine solutions.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-[#151515] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 sm:p-6"
              >
                <h3 className="text-xl font-extrabold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">

                  <Link
                    href={service.href}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
                  >
                    {service.button} →
                  </Link>

                </div>
              </div>
            ))}

            {/* EMERGENCY JUMPSTART */}
            <div className="flex flex-col rounded-2xl border border-red-500/20 bg-[#151515] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 sm:p-6">

              <h3 className="text-xl font-extrabold text-white">
                Emergency Jumpstart
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Quick assistance when your car won&apos;t start. Contact
                VoltShine for emergency car assistance in Pune and PCMC.
              </p>

              <div className="mt-auto pt-6">

                <a
                  href="tel:+919270300889"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-extrabold text-white transition active:scale-[0.98] hover:bg-red-500"
                >
                  🚗 Call for Jumpstart
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* WHY VOLTSHINE */}
      <section className="bg-[#090909] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              WHY VOLTSHINE
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-4xl">
              Reliable Auto Care
              <br />
              <span className="text-yellow-400">
                Across Pune
              </span>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Genuine Products",
                text: "Reliable products from trusted automotive and energy brands.",
              },
              {
                title: "Doorstep Service",
                text: "Convenient doorstep assistance for selected auto care services.",
              },
              {
                title: "Professional Fitment",
                text: "Experienced technicians focused on quality installation.",
              },
              {
                title: "Warranty Support",
                text: "Applicable products and services are covered by warranty.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-xl">
                  ✓
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-black px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              SERVICE LOCATIONS
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-4xl">
              Areas We Serve in
              <br className="sm:hidden" />
              <span className="text-yellow-400"> Pune & PCMC</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              VoltShine serves customers across major residential,
              commercial and IT areas of Pune and PCMC.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">

            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-[#151515] px-4 py-2.5 text-xs font-semibold text-gray-400 transition hover:border-yellow-400/40 hover:text-yellow-400 sm:text-sm"
              >
                {area}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#090909] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              PUNE FAQ
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-4xl">
              Frequently Asked
              <br className="sm:hidden" />
              <span className="text-yellow-400"> Questions</span>
            </h2>
          </div>

          <div className="mt-8 space-y-3">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <summary className="cursor-pointer list-none pr-6 text-sm font-bold leading-6 text-white sm:text-base">
                  {faq.question}
                </summary>

                <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-6 text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090909] px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400 to-yellow-500 px-5 py-10 text-center sm:px-8 sm:py-14">

            <p className="text-[10px] font-extrabold uppercase tracking-[3px] text-black/70">
              VOLTSHINE PUNE
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-black sm:text-4xl">
              Need Auto Care in Pune?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/75 sm:text-base">
              Contact VoltShine to check availability, pricing and booking
              options for your required service.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">

              <a
                href="https://wa.me/919270300889"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-7 py-3 text-sm font-extrabold text-white transition hover:bg-black/85 sm:text-base"
              >
                💬 WhatsApp Now
              </a>

              <a
                href="tel:+919270300889"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-black px-7 py-3 text-sm font-extrabold text-black transition hover:bg-black hover:text-white sm:text-base"
              >
                📞 Call VoltShine
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* BACK TO HOME */}
      <div className="bg-black px-4 pb-12 text-center">
        <Link
          href="/"
          className="text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to VoltShine Home
        </Link>
      </div>

    </main>
  );
}