import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "UPS & Inverter Solutions in Pune & PCMC | VoltShine",
  description:
    "UPS and inverter solutions in Pune & PCMC for homes, offices and businesses. Get product selection, installation, battery replacement and AMC support from VoltShine.",
  alternates: {
    canonical: "https://voltshine.in/ups",
  },
  openGraph: {
    title: "UPS & Inverter Solutions in Pune & PCMC | VoltShine",
    description:
      "Reliable UPS and inverter solutions for homes, offices and businesses across Pune & PCMC with installation, battery replacement and AMC support.",
    url: "https://voltshine.in/ups",
    type: "website",
  },
};

const whatsappNumber = "919270300889";

const faqs = [
  {
    question: "What UPS and inverter solutions does VoltShine provide?",
    answer:
      "VoltShine provides UPS and inverter solutions for homes, offices and businesses, including product selection, installation, battery replacement and maintenance support.",
  },
  {
    question: "How much does a UPS or inverter cost in Pune?",
    answer:
      "The price depends on the required capacity, application, battery configuration and product selected. Contact VoltShine with your power requirement to get suitable options and pricing.",
  },
  {
    question: "Does VoltShine provide UPS and inverter installation?",
    answer:
      "Yes. VoltShine provides installation and setup support for applicable UPS and inverter systems across selected locations in Pune and PCMC.",
  },
  {
    question: "Can VoltShine replace UPS or inverter batteries?",
    answer:
      "Yes. Battery replacement support is available for applicable UPS and inverter systems. Contact our team with your existing system details for assistance.",
  },
  {
    question: "Does VoltShine provide AMC and maintenance support?",
    answer:
      "Yes. VoltShine provides maintenance and AMC support for applicable UPS and inverter requirements. Availability depends on the system and service location.",
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

export default function UPSPage() {
  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I am interested in UPS / Inverter solutions.

Requirement:
Home / Office / Business

Please share suitable options and pricing for my requirement.

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
            name: "UPS & Inverter",
            url: "https://voltshine.in/ups",
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

          <div className="mt-6 max-w-4xl">

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              POWER BACKUP SOLUTIONS
            </p>

            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              UPS & Inverter
              <br />
              <span className="text-yellow-400">
                Solutions in Pune
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-lg sm:leading-7">
              Reliable power backup solutions for homes, offices and
              businesses. Get help with product selection, installation,
              battery replacement and AMC support across Pune & PCMC.
            </p>

            <div className="mt-7 grid max-w-lg grid-cols-1 gap-3 sm:flex sm:max-w-none sm:flex-wrap">

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
              >
                💬 Get UPS Quote
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
              >
                📞 Call VoltShine
              </a>

            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-gray-300 sm:text-sm">
              <span>✓ Home Solutions</span>
              <span>✓ Office Solutions</span>
              <span>✓ Installation Support</span>
              <span>✓ Pune & PCMC</span>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              OUR SOLUTIONS
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-4xl">
              Complete Power Backup Services
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Choose the right backup solution based on your power
              requirement and application.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "🔋",
                "UPS Systems",
                "Power backup solutions for home and office requirements.",
              ],
              [
                "⚡",
                "Inverter Systems",
                "Reliable inverter solutions based on your power requirement.",
              ],
              [
                "🔧",
                "Installation",
                "Professional installation and setup of your backup system.",
              ],
              [
                "🛠",
                "AMC & Support",
                "Maintenance and battery replacement support.",
              ],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#171717] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
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

      {/* WHO IS IT FOR */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              POWER FOR EVERY NEED
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Power Backup For
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Backup solutions for everyday residential, professional and
              business requirements.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <div className="text-4xl">🏠</div>

              <h3 className="mt-4 font-extrabold">
                Homes
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Keep essential appliances and devices running during
                power interruptions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-4 font-extrabold">
                Offices
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Reliable backup for computers, networking equipment and
                office systems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <div className="text-4xl">🏭</div>

              <h3 className="mt-4 font-extrabold">
                Businesses
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Power backup solutions based on business requirements
                and applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Get The Right Power Backup
            </h2>
          </div>

          <div className="mt-8 space-y-4">

            {[
              [
                "01",
                "Share Your Requirement",
                "Tell us whether the requirement is for home, office or business and share your power backup needs.",
              ],
              [
                "02",
                "Get Suitable Options",
                "Our team will understand your requirement and suggest suitable UPS or inverter options.",
              ],
              [
                "03",
                "Installation",
                "The selected system is installed and configured according to the requirement.",
              ],
              [
                "04",
                "Support",
                "Get applicable battery replacement, maintenance and AMC support.",
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

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-black px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#151515] p-6 sm:p-10">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
            UPS & INVERTER SERVICE AREAS
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">
            UPS & Inverter Solutions Across Pune & PCMC
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            VoltShine provides UPS and inverter solutions across selected
            locations in Pune and PCMC. Contact us with your power
            requirement and service location to check availability.
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

      {/* FAQ */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              FAQ
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              UPS & Inverter FAQs
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Common questions about UPS systems, inverters,
              installation, batteries and maintenance.
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

      {/* CTA */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400 to-yellow-500 p-7 text-center sm:p-12">

          <p className="text-[10px] font-extrabold uppercase tracking-[3px] text-black/70 sm:text-xs sm:tracking-[4px]">
            NEED POWER BACKUP?
          </p>

          <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-black sm:text-4xl">
            Get The Right UPS
            <br className="sm:hidden" /> & Inverter Solution
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/75 sm:text-base sm:leading-7">
            Tell us your power requirement and our team will help you
            choose a suitable solution.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:justify-center sm:gap-4">

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-xl bg-black px-7 py-3.5 text-sm font-extrabold text-white transition active:scale-[0.98] hover:bg-black/80 sm:text-base"
            >
              💬 WhatsApp for Quote
            </a>

            <a
              href={`tel:+${whatsappNumber}`}
              className="flex min-h-12 items-center justify-center rounded-xl border-2 border-black px-7 py-3.5 text-sm font-extrabold text-black transition hover:bg-black hover:text-white sm:text-base"
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