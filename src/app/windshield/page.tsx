import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Car Windshield Replacement in Pune & PCMC | VoltShine",
  description:
    "Professional car windshield replacement in Pune & PCMC with quality glass, expert fitment, leak-tested installation and doorstep service. Get a quote from VoltShine.",
  alternates: {
    canonical: "https://voltshine.in/windshield",
  },
  openGraph: {
    title: "Car Windshield Replacement in Pune & PCMC | VoltShine",
    description:
      "Quality car windshield replacement with professional fitment, leak-tested installation and doorstep service across Pune & PCMC.",
    url: "https://voltshine.in/windshield",
    type: "website",
  },
};

const whatsappNumber = "919270300889";

const faqs = [
  {
    question: "How much does car windshield replacement cost in Pune?",
    answer:
      "The cost depends on your car make, model, year, glass type and brand. Contact VoltShine with your vehicle details to get the best available quote.",
  },
  {
    question: "Does VoltShine provide doorstep windshield replacement?",
    answer:
      "Yes. Doorstep windshield installation is available across selected locations in Pune and PCMC, subject to service availability.",
  },
  {
    question: "How long does windshield replacement take?",
    answer:
      "Installation time depends on the vehicle and glass type. Our team will confirm the expected installation time when you book the service.",
  },
  {
    question: "Is the windshield installation leak tested?",
    answer:
      "Yes. The windshield installation is checked for proper sealing and potential leakage before the service is completed.",
  },
  {
    question: "How can I book windshield replacement with VoltShine?",
    answer:
      "Send your car make, model and year to VoltShine through WhatsApp or call our team. We will check glass availability and share the best available quote.",
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

export default function WindshieldPage() {
  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I need a car windshield replacement.

Please share the best available price and installation options.

Thank You.`
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {/* BREADCRUMB SCHEMA */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://voltshine.in",
          },
          {
            name: "Windshield Replacement",
            url: "https://voltshine.in/windshield",
          },
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

          <Link
            href="/"
            className="inline-flex text-xs font-semibold text-gray-500 transition hover:text-yellow-400"
          >
            ← VoltShine Home
          </Link>

          <div className="mt-6 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              WINDSHIELD REPLACEMENT
            </p>

            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              Car Windshield
              <br />
              <span className="text-yellow-400">
                Replacement in Pune
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-lg sm:leading-7">
              Quality windshield glass with professional fitment,
              leak-tested installation and doorstep service across
              Pune & PCMC.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
              >
                💬 Get Best Quote
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
              >
                📞 Call VoltShine
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              WHY VOLTSHINE
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Professional Windshield Service
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Reliable windshield replacement with professional
              installation and quality checks.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "🪟",
                "Quality Glass",
                "Reliable windshield glass options for your vehicle.",
              ],
              [
                "🔧",
                "Professional Fitment",
                "Experienced technicians for proper installation.",
              ],
              [
                "💧",
                "Leak Tested",
                "Installation checked for proper sealing and leakage.",
              ],
              [
                "🚗",
                "Doorstep Service",
                "Doorstep installation available across Pune & PCMC.",
              ],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#171717] p-5"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Get Your Windshield Replaced
            </h2>
          </div>

          <div className="mt-8 space-y-4">

            {[
              [
                "01",
                "Share Your Vehicle Details",
                "Send us your car make, model and year.",
              ],
              [
                "02",
                "Get Your Quote",
                "Our team will check availability and share the best price.",
              ],
              [
                "03",
                "Professional Installation",
                "Our technician completes the windshield replacement.",
              ],
              [
                "04",
                "Quality Check",
                "The installation is checked before completing the service.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-4 rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-sm font-extrabold text-black">
                  {number}
                </div>

                <div>
                  <h3 className="font-extrabold text-white">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              FAQ
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Windshield Replacement FAQs
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Common questions about windshield replacement,
              installation and service availability.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-[#151515]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-sm font-bold text-white sm:text-base">
                  <span>{faq.question}</span>

                  <span className="shrink-0 text-yellow-400 transition group-open:rotate-180">
                    ↓
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

      {/* SERVICE AREA */}
      <section className="bg-black px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#151515] p-6 sm:p-10">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
            WINDSHIELD SERVICE IN PUNE
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">
            Windshield Replacement Across Pune & PCMC
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            VoltShine provides car windshield replacement and
            professional installation across selected locations in
            Pune and PCMC. Contact us with your vehicle details to
            check glass availability and service options.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Wakad",
              "Baner",
              "Hinjewadi",
              "Kharadi",
              "Hadapsar",
              "Viman Nagar",
              "Chinchwad",
              "Pimpri",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-400"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-[#171717] p-7 text-center sm:p-10">

          <h2 className="text-2xl font-extrabold sm:text-4xl">
            Need a Windshield Replacement?
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
            Send us your vehicle details and get the best available quote.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:justify-center sm:gap-4">

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
            >
              💬 Get Windshield Quote →
            </a>

            <a
              href={`tel:+${whatsappNumber}`}
              className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
            >
              📞 Call VoltShine
            </a>

          </div>
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