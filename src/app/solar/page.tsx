import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Solar Solutions in Pune & PCMC | On-Grid & Off-Grid Solar | VoltShine",
  description:
    "Solar solutions in Pune & PCMC for homes, offices and businesses. Get on-grid and off-grid solar consultation, system sizing, installation and support from VoltShine.",
  alternates: {
    canonical: "https://voltshine.in/solar",
  },
  openGraph: {
    title: "Solar Solutions in Pune & PCMC | VoltShine",
    description:
      "On-grid and off-grid solar solutions for homes, offices and businesses across Pune & PCMC with consultation, installation and support.",
    url: "https://voltshine.in/solar",
    type: "website",
  },
};

const whatsappNumber = "919270300889";

const faqs = [
  {
    question: "What solar solutions does VoltShine provide?",
    answer:
      "VoltShine provides solar solutions for homes, offices and businesses, including on-grid and off-grid systems, system sizing consultation, installation and support.",
  },
  {
    question: "Does VoltShine provide solar installation in Pune?",
    answer:
      "Yes. VoltShine provides solar consultation and installation support across selected locations in Pune and PCMC.",
  },
  {
    question: "What is the difference between on-grid and off-grid solar?",
    answer:
      "On-grid solar works with the electricity grid and is generally designed to reduce electricity costs. Off-grid solar uses battery storage and can provide an independent power solution for suitable applications.",
  },
  {
    question: "How much does a solar system cost in Pune?",
    answer:
      "Solar system pricing depends on electricity consumption, required capacity, system type, equipment and installation requirements. Contact VoltShine with your electricity usage to get a suitable quotation.",
  },
  {
    question: "Can VoltShine help select the right solar system?",
    answer:
      "Yes. VoltShine can help evaluate your electricity requirements and recommend a suitable solar system based on your application and energy usage.",
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

export default function SolarPage() {
  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I am interested in a Solar System.

Please help me with a suitable solar solution and quotation.

My requirement:
Home / Office / Business

Thank You.`
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* BREADCRUMB SCHEMA */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://voltshine.in" },
          {
            name: "Solar Solutions",
            url: "https://voltshine.in/solar",
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
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              SOLAR ENERGY SOLUTIONS
            </p>

            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              Solar Solutions
              <br />
              <span className="text-yellow-400">in Pune & PCMC</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-lg sm:leading-7">
              Smart solar energy solutions for homes, offices and businesses.
              Get the right solar system based on your electricity usage,
              energy requirements and application.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
              >
                💬 Get Solar Quote
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
              >
                📞 Call VoltShine
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-gray-400 sm:text-sm">
              <span>✓ Pune & PCMC</span>
              <span>✓ Home & Commercial</span>
              <span>✓ Installation Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOLAR TYPES */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              SOLAR SYSTEMS
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-4xl">
              Choose The Right Solar Solution
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Solar solutions designed around your electricity consumption
              and application.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* ON-GRID */}
            <div className="rounded-2xl border border-yellow-400/20 bg-[#171717] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50">
              <div className="text-4xl">☀️</div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                On-Grid Solar
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Solar systems designed to work with the electricity grid and
                help reduce dependence on conventional electricity.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                <li>✓ Residential applications</li>
                <li>✓ Commercial applications</li>
                <li>✓ Reduced electricity costs</li>
                <li>✓ System sizing consultation</li>
              </ul>
            </div>

            {/* OFF-GRID */}
            <div className="rounded-2xl border border-yellow-400/20 bg-[#171717] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50">
              <div className="text-4xl">🔋</div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                Off-Grid Solar
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Solar power systems with battery storage for applications
                requiring an independent power solution.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                <li>✓ Battery backup</li>
                <li>✓ Independent power solution</li>
                <li>✓ Suitable for selected locations</li>
                <li>✓ Installation support</li>
              </ul>
            </div>

            {/* COMMERCIAL */}
            <div className="rounded-2xl border border-yellow-400/20 bg-[#171717] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                Commercial Solar
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Solar solutions for offices, shops and businesses based on
                their energy consumption and operational requirements.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                <li>✓ Business energy requirements</li>
                <li>✓ System sizing consultation</li>
                <li>✓ Installation support</li>
                <li>✓ Long-term energy solution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              SOLAR FOR EVERY REQUIREMENT
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Solar Solutions for Homes & Businesses
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Whether you are looking to reduce household electricity costs
              or manage commercial energy requirements, VoltShine can help
              you explore a suitable solar solution.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "🏠",
                "Homes",
                "Solar solutions designed around residential electricity usage.",
              ],
              [
                "🏢",
                "Offices",
                "Energy solutions for offices and professional workspaces.",
              ],
              [
                "🏪",
                "Shops",
                "Solar systems for shops and commercial establishments.",
              ],
              [
                "🏭",
                "Businesses",
                "Solutions for businesses with higher energy requirements.",
              ],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#151515] p-5"
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

      {/* BENEFITS */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              WHY SOLAR
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Benefits of Solar Energy
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "💰",
                "Lower Energy Costs",
                "Reduce dependence on conventional electricity.",
              ],
              [
                "🌱",
                "Cleaner Energy",
                "Generate renewable energy from sunlight.",
              ],
              [
                "⚡",
                "Energy Independence",
                "Generate your own electricity for suitable applications.",
              ],
              [
                "📈",
                "Long-Term Value",
                "A properly selected solar system can provide value over many years.",
              ],
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

      {/* HOW IT WORKS */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              How VoltShine Solar Works
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Share Requirement", "Tell us about your electricity usage and application."],
              ["02", "System Assessment", "We help identify a suitable system type and capacity."],
              ["03", "Quotation", "Get suitable solar options and pricing based on your requirement."],
              ["04", "Installation", "Proceed with installation and support for the selected system."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <div className="text-sm font-extrabold text-yellow-400">
                  {number}
                </div>

                <h3 className="mt-4 font-extrabold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              SERVICE AREA
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Solar Solutions Across Pune & PCMC
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              VoltShine provides solar consultation and support across
              selected areas of Pune and Pimpri-Chinchwad.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Wakad",
              "Baner",
              "Hinjewadi",
              "Kharadi",
              "Viman Nagar",
              "Hadapsar",
              "Magarpatta",
              "Aundh",
              "Kothrud",
              "Pimpri",
              "Chinchwad",
              "Bhosari",
              "Ravet",
              "Moshi",
              "Pune",
              "PCMC",
            ].map((area) => (
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

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Quick answers about solar systems, installation and pricing.
            </p>
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
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#1d1d1d] to-[#111111] p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:p-10 md:p-12">
          <div className="text-4xl">☀️</div>

          <h2 className="mt-4 text-2xl font-extrabold sm:text-4xl">
            Ready to Explore Solar?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Share your electricity requirement with VoltShine and get help
            choosing a suitable solar solution for your home, office or
            business.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:w-auto"
          >
            ☀️ Get Solar Quote →
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