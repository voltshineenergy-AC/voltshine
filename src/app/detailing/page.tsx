import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Car Detailing Services in Pune & PCMC | VoltShine",
  description:
    "Premium car detailing services in Pune & PCMC including Ceramic Coating, Graphene Coating, Teflon and PPF. Get professional car detailing with VoltShine.",
  alternates: {
    canonical: "https://voltshine.in/detailing",
  },
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

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="bg-[#090909] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            PREMIUM CAR CARE
          </p>

          <h1 className="mt-4 max-w-4xl text-[32px] font-extrabold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
            Premium Car Detailing
            <br className="hidden sm:block" />
            <span className="text-yellow-400"> in Pune & PCMC</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
            Protect, restore and enhance your car with professional detailing
            packages from VoltShine. Choose from Ceramic Coating, Graphene
            Coating, Teflon and Paint Protection Film.
          </p>

          <div className="mt-7 grid max-w-lg grid-cols-1 gap-3 sm:flex sm:max-w-none sm:flex-wrap">

            <a
              href="https://wa.me/919270300889?text=Hello%20VoltShine%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20car%20detailing%20services.%0A%0APlease%20share%20the%20best%20package%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
            >
              💬 Get Detailing Quote
            </a>

            <a
              href="tel:+919270300889"
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
                    href={`https://wa.me/919270300889?text=${encodeURIComponent(
                      `Hello VoltShine 👋

I am interested in a Car Detailing Package.

Package : ${service.service_name}
Starting Price : ₹${formatPrice(Number(service.price))}
${service.warranty_year ? `Warranty : ${service.warranty_year} Year` : ""}

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
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-3xl">✨</div>
              <h3 className="mt-4 text-lg font-extrabold">
                Better Appearance
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Restore your car&apos;s shine and improve its overall
                appearance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-3xl">🛡️</div>
              <h3 className="mt-4 text-lg font-extrabold">
                Paint Protection
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Protect your paint from environmental contaminants and
                everyday exposure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-3xl">🚗</div>
              <h3 className="mt-4 text-lg font-extrabold">
                Deep Cleaning
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Professional cleaning for your car&apos;s interior and
                exterior surfaces.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <div className="text-3xl">💎</div>
              <h3 className="mt-4 text-lg font-extrabold">
                Premium Finish
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-400">
                Give your vehicle a cleaner, glossier and more premium
                finish.
              </p>
            </div>

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
                href="https://wa.me/919270300889?text=Hello%20VoltShine%20%F0%9F%91%8B%0A%0AI%20want%20a%20car%20detailing%20quote.%0A%0APlease%20recommend%20the%20best%20package%20for%20my%20car."
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