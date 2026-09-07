import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Car Detailing Services in Pune & PCMC | VoltShine",
  description:
    "Premium car detailing services in Pune & PCMC including Ceramic Coating, Graphene Coating, Teflon and Paint Protection Film. Get professional car detailing from VoltShine.",
  alternates: {
    canonical: "https://voltshine.in/detailing",
  },
  openGraph: {
    title: "Car Detailing Services in Pune & PCMC | VoltShine",
    description:
      "Premium Ceramic Coating, Graphene Coating, Teflon and PPF car detailing services across Pune & PCMC.",
    url: "https://voltshine.in/detailing",
    type: "website",
  },
};

const whatsappNumber = "919270300889";

const faqs = [
  {
    question: "What car detailing services does VoltShine provide?",
    answer:
      "VoltShine provides premium car detailing services including Ceramic Coating, Graphene Coating, Teflon and Paint Protection Film (PPF), depending on vehicle requirements and package availability.",
  },
  {
    question: "How much does car detailing cost in Pune?",
    answer:
      "Car detailing prices depend on the selected package, vehicle type and service requirements. VoltShine displays starting prices for available detailing packages and can provide a vehicle-specific quote.",
  },
  {
    question: "What is the difference between Ceramic and Graphene Coating?",
    answer:
      "Ceramic and Graphene Coatings are paint protection solutions with different product formulations and performance characteristics. The right option depends on your vehicle, usage and desired level of protection.",
  },
  {
    question: "Does VoltShine provide PPF installation?",
    answer:
      "Yes. VoltShine offers Paint Protection Film packages. Package availability and pricing depend on the vehicle and selected PPF package.",
  },
  {
    question: "How can I book car detailing with VoltShine?",
    answer:
      "You can contact VoltShine through WhatsApp or phone. Share your car make, model and year, and our team will recommend a suitable detailing package and provide the applicable price.",
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

function formatPrice(price: number) {
  return Number(price).toLocaleString("en-IN");
}

export default async function DetailingPage() {
  const { data: services, error } = await supabase
    .from("detailing_master")
    .select("*")
    .eq("status", true)
    .order("price", { ascending: true });

  if (error) {
    console.error("Detailing master error:", error);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I am interested in your car detailing services.

Please share the best detailing package for my car.

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
            name: "Car Detailing",
            url: "https://voltshine.in/detailing",
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
      <section className="bg-[#090909] px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/"
            className="inline-flex text-xs font-semibold text-gray-500 transition hover:text-yellow-400"
          >
            ← VoltShine Home
          </Link>

          <div className="mt-6 max-w-4xl">

            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              PREMIUM CAR CARE
            </p>

            <h1 className="mt-4 text-[32px] font-extrabold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
              Premium Car Detailing
              <br className="hidden sm:block" />
              <span className="text-yellow-400">
                {" "}in Pune & PCMC
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
              Protect, restore and enhance your car with professional
              detailing packages from VoltShine. Choose from Ceramic
              Coating, Graphene Coating, Teflon and Paint Protection Film.
            </p>

            <div className="mt-7 grid max-w-lg grid-cols-1 gap-3 sm:flex sm:max-w-none sm:flex-wrap">

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
              >
                💬 Get Detailing Quote
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
              >
                📞 Call VoltShine
              </a>

            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-gray-300 sm:text-sm">
              <span>✓ Premium Products</span>
              <span>✓ Professional Application</span>
              <span>✓ Vehicle-Specific Packages</span>
              <span>✓ Pune & PCMC</span>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              OUR PACKAGES
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-4xl">
              Choose Your
              <br className="sm:hidden" /> Detailing Package
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Professional car care packages designed to improve your
              vehicle&apos;s appearance and protection.
            </p>
          </div>

          {services && services.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => (
                <div
                  key={service.id ?? index}
                  className="flex flex-col rounded-2xl border border-yellow-400/20 bg-[#151515] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 sm:p-6"
                >

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                        DETAILING PACKAGE
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold leading-tight text-white">
                        {service.service_name}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-xl">
                      ✨
                    </div>

                  </div>

                  <div className="mt-6">

                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                      Starting Price
                    </p>

                    <p className="mt-1 text-4xl font-extrabold text-green-400">
                      ₹{formatPrice(Number(service.price))}
                    </p>

                  </div>

                  {service.warranty_year && (
                    <div className="mt-3 inline-flex w-fit rounded-lg bg-blue-500/10 px-3 py-1.5">
                      <p className="text-xs font-semibold text-blue-400">
                        🛡 {service.warranty_year} Year Warranty
                      </p>
                    </div>
                  )}

                  <div className="mt-5 space-y-2.5 text-sm text-gray-300">

                    <p className="flex gap-2">
                      <span className="text-green-400">✓</span>
                      Professional Car Detailing
                    </p>

                    <p className="flex gap-2">
                      <span className="text-green-400">✓</span>
                      Premium Products
                    </p>

                    <p className="flex gap-2">
                      <span className="text-green-400">✓</span>
                      Expert Application
                    </p>

                    <p className="flex gap-2">
                      <span className="text-green-400">✓</span>
                      Vehicle-Specific Package
                    </p>

                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello VoltShine 👋

I am interested in a Car Detailing Package.

Package : ${service.service_name}
Starting Price : ₹${formatPrice(Number(service.price))}
${
  service.warranty_year
    ? `Warranty : ${service.warranty_year} Year`
    : ""
}

Please share:
✅ Complete package details
✅ Vehicle-specific price
✅ Availability
✅ Booking slot

Thank You.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-4 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
                  >
                    Get Detailing Quote →
                  </a>

                </div>
              ))}

            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <p className="text-sm text-gray-400">
                Detailing packages are currently unavailable.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* WHY DETAILING */}
      <section className="bg-[#090909] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              WHY DETAIL YOUR CAR?
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-4xl">
              More Than Just
              <br className="sm:hidden" /> a Car Wash
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Professional detailing helps maintain your vehicle&apos;s
              appearance while providing care for interior and exterior
              surfaces.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
  [
    "✨",
    "Better Appearance",
    "Restore your car's shine and improve its overall appearance.",
  ],
  [
    "🛡️",
    "Paint Protection",
    "Protect your paint from environmental contaminants and everyday exposure.",
  ],
  [
    "🚗",
    "Deep Cleaning",
    "Professional cleaning for your car's interior and exterior surfaces.",
  ],
  [
    "💎",
    "Premium Finish",
    "Give your vehicle a cleaner, glossier and more premium finish.",
  ],
]
            .map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {description.replace("car&apos;s", "car's")}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#151515] p-6 sm:p-10">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
            DETAILING SERVICE AREAS
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">
            Car Detailing Across Pune & PCMC
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            VoltShine provides premium car detailing services across
            selected locations in Pune and PCMC. Contact us with your
            vehicle details to check package availability and pricing.
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
      <section className="bg-[#090909] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
              FAQ
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Car Detailing FAQs
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Common questions about car detailing packages,
              pricing and services.
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
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400 to-yellow-500 px-5 py-10 text-center sm:px-8 sm:py-14">

            <p className="text-[10px] font-extrabold uppercase tracking-[3px] text-black/70 sm:text-xs sm:tracking-[4px]">
              READY FOR A BETTER FINISH?
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-black sm:text-4xl">
              Give Your Car
              <br className="sm:hidden" /> the VoltShine Treatment
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/75 sm:text-base sm:leading-7">
              Share your vehicle details with our team and we&apos;ll help
              you choose the right detailing package.
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

              <Link
                href="/"
                className="flex min-h-12 items-center justify-center rounded-xl border-2 border-black px-7 py-3.5 text-sm font-extrabold text-black transition hover:bg-black hover:text-white sm:text-base"
              >
                ← Back to Home
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}