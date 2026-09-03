import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Solutions in Pune & PCMC | VoltShine",
  description:
    "Solar solutions for homes, offices and businesses in Pune & PCMC. Get on-grid and off-grid solar system consultation, installation and support from VoltShine.",
  alternates: {
    canonical: "https://voltshine.in/solar",
  },
};

const whatsappNumber = "919270300889";

export default function SolarPage() {
  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I am interested in a Solar System.

Please help me with a suitable solar solution and quotation.

Thank You.`
  );

  return (
    <main className="min-h-screen bg-black text-white">

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
              <span className="text-yellow-400">
                in Pune & PCMC
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-lg sm:leading-7">
              Smart solar energy solutions for homes, offices and
              businesses. Get the right system based on your electricity
              usage and energy requirements.
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
          </div>

        </div>
      </section>

      {/* SOLAR TYPES */}
      <section className="bg-[#0d0d0d] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              SOLAR SYSTEMS
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Choose The Right Solar Solution
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6">
              <div className="text-4xl">☀️</div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                On-Grid Solar
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Solar systems designed to work with the electricity grid
                and help reduce your electricity costs.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                <li>✓ Residential applications</li>
                <li>✓ Commercial applications</li>
                <li>✓ Reduced electricity bills</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6">
              <div className="text-4xl">🔋</div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                Off-Grid Solar
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Solar power systems with battery storage for areas requiring
                independent power backup.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                <li>✓ Battery backup</li>
                <li>✓ Independent power solution</li>
                <li>✓ Suitable for selected locations</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                Commercial Solar
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Solar solutions for offices, shops and businesses based on
                their energy consumption.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                <li>✓ Business energy requirements</li>
                <li>✓ System sizing consultation</li>
                <li>✓ Installation support</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              WHY SOLAR
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Benefits of Solar Energy
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["💰", "Lower Energy Costs", "Reduce dependence on conventional electricity."],
              ["🌱", "Cleaner Energy", "Generate renewable energy from sunlight."],
              ["⚡", "Energy Independence", "Generate your own electricity."],
              ["📈", "Long-Term Value", "A solar system can provide value over many years."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 font-extrabold text-white">
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

      {/* CTA */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-[#171717] p-7 text-center sm:p-10">

          <h2 className="text-2xl font-extrabold sm:text-4xl">
            Ready to Explore Solar?
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
            Share your electricity requirement with VoltShine and get a
            suitable solar solution.
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