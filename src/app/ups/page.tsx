import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UPS & Inverter Solutions in Pune | VoltShine",
  description:
    "UPS and inverter solutions for homes, offices and businesses in Pune & PCMC. Sales, installation, battery replacement and AMC support from VoltShine.",
  alternates: {
    canonical: "https://voltshine.in/ups",
  },
};

const whatsappNumber = "919270300889";

export default function UPSPage() {
  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I am interested in UPS / Inverter solutions.

Please share suitable options and pricing for my requirement.

Thank You.`
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="bg-[#090909] px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
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
              battery replacement and AMC support.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
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

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Complete Power Backup Services
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["🔋", "UPS Systems", "Power backup solutions for home and office requirements."],
              ["⚡", "Inverter Systems", "Reliable inverter solutions based on your power requirement."],
              ["🔧", "Installation", "Professional installation and setup of your backup system."],
              ["🛠", "AMC & Support", "Maintenance and battery replacement support."],
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

      {/* WHO IS IT FOR */}
      <section className="bg-black px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              POWER FOR EVERY NEED
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold sm:text-4xl">
              Solutions For
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <div className="text-4xl">🏠</div>
              <h3 className="mt-4 font-extrabold">Homes</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Keep essential appliances running during power cuts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <div className="text-4xl">🏢</div>
              <h3 className="mt-4 font-extrabold">Offices</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Reliable backup for computers, networking and office equipment.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 text-center">
              <div className="text-4xl">🏭</div>
              <h3 className="mt-4 font-extrabold">Businesses</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Power backup solutions designed around business requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-[#171717] p-7 text-center sm:p-10">

          <h2 className="text-2xl font-extrabold sm:text-4xl">
            Need Reliable Power Backup?
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
            Tell us your power requirement and our team will suggest a suitable solution.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:w-auto"
          >
            💬 Get UPS & Inverter Quote →
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