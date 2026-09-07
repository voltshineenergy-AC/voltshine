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
    title: "Auto Care & Energy Solutions in Pune | VoltShine",
    description:
      "Car battery replacement, jumpstart, windshield replacement, detailing, UPS, inverter and solar solutions across Pune.",
    url: "https://voltshine.in/pune",
    type: "website",
  },
};

const services = [
  {
    title: "Car Battery Replacement",
    description:
      "Genuine car batteries with professional doorstep replacement across Pune.",
    href: "/battery",
    icon: "🔋",
  },
  {
    title: "Emergency Jumpstart",
    description:
      "Quick roadside jumpstart assistance when your car battery is discharged.",
    href: "tel:+919270300889",
    icon: "⚡",
  },
  {
    title: "Windshield Replacement",
    description:
      "Quality windshield glass with professional fitment and installation support.",
    href: "/windshield",
    icon: "🪟",
  },
  {
    title: "Car Detailing",
    description:
      "Premium detailing packages including ceramic coating, graphene and PPF.",
    href: "/detailing",
    icon: "✨",
  },
  {
    title: "UPS & Inverter",
    description:
      "UPS and inverter solutions for homes, offices and businesses.",
    href: "/ups",
    icon: "🔌",
  },
  {
    title: "Solar Solutions",
    description:
      "On-grid and off-grid solar solutions for residential and commercial requirements.",
    href: "/solar",
    icon: "☀️",
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
];

const faqs = [
  {
    question: "Does VoltShine provide car battery replacement in Pune?",
    answer:
      "Yes. VoltShine provides car battery replacement with doorstep installation across selected locations in Pune and PCMC.",
  },
  {
    question: "Does VoltShine provide emergency jumpstart service in Pune?",
    answer:
      "Yes. VoltShine provides emergency jumpstart assistance for customers whose vehicles are unable to start because of battery-related issues.",
  },
  {
    question: "Where does VoltShine provide auto care services in Pune?",
    answer:
      "VoltShine serves selected locations across Pune including Wakad, Baner, Hinjewadi, Aundh, Kothrud, Kharadi, Viman Nagar, Hadapsar and other nearby areas.",
  },
  {
    question: "What other services does VoltShine provide?",
    answer:
      "VoltShine provides car battery replacement, jumpstart, windshield replacement, premium car detailing, UPS and inverter solutions and solar solutions.",
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

export default function PunePage() {
  const whatsappNumber = "919270300889";

  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I am looking for an auto care service in Pune.

Please help me with the suitable service and best price.

Thank You.`
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* BREADCRUMB */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://voltshine.in" },
          { name: "Pune", url: "https://voltshine.in/pune" },
        ]}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="bg-[#090909] px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              VOLTSHINE PUNE
            </p>

            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              Auto Care & Energy
              <br />
              <span className="text-yellow-400">
                Services in Pune
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-lg sm:leading-7">
              Reliable car battery replacement, emergency jumpstart,
              windshield replacement, premium car detailing, UPS, inverter
              and solar solutions across Pune.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
              >
                💬 WhatsApp VoltShine
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
              >
                📞 Call Now
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-gray-400 sm:text-sm">
              <span>✓ Genuine Products</span>
              <span>✓ Doorstep Service</span>
              <span>✓ Pune & PCMC</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              OUR SERVICES
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Auto Care Services in Pune
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Choose the service you need and explore available options.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-[#171717] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50"
              >
                <div className="text-3xl">{service.icon}</div>

                <h3 className="mt-4 text-xl font-extrabold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  {service.href.startsWith("tel:") ? (
                    <a
                      href={service.href}
                      className="flex min-h-11 w-full items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
                    >
                      Call Now →
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="flex min-h-11 w-full items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
                    >
                      Explore Service →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VOLTSHINE */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              WHY VOLTSHINE
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              A Convenient Auto Care Experience
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🔋", "Genuine Products", "Trusted automotive and energy products."],
              ["🚗", "Doorstep Service", "Convenient service at selected locations."],
              ["🛡", "Warranty Support", "Applicable products and services include warranty support."],
              ["⚡", "Quick Response", "Fast assistance for urgent car battery requirements."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 font-extrabold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              SERVICE AREAS
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Areas We Serve in Pune
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              VoltShine provides services across selected areas of Pune.
              Availability can vary by service and location.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-[#171717] px-4 py-2 text-xs font-semibold text-gray-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              FAQ
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-sm font-bold text-white sm:text-base">
                  <span>{faq.question}</span>

                  <span className="shrink-0 text-xl text-yellow-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-5 pb-5 pt-4">
                  <p className="text-sm leading-6 text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400 to-yellow-500 p-7 text-center sm:p-10">
          <h2 className="text-2xl font-extrabold text-black sm:text-4xl">
            Need Auto Care in Pune?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
            Contact VoltShine for battery replacement, jumpstart,
            windshield replacement, detailing and other energy solutions.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-black px-7 py-3.5 text-sm font-extrabold text-white transition active:scale-[0.98] hover:bg-black/85 sm:w-auto"
          >
            💬 WhatsApp VoltShine →
          </a>
        </div>
      </section>

      {/* BACK HOME */}
      <div className="bg-black px-5 pb-14 text-center">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-400 transition hover:text-yellow-400"
        >
          ← Back to VoltShine Home
        </Link>
      </div>
    </main>
  );
}