"use client";

export default function ContactSection() {
  const whatsappNumber = "919270300889";

  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I want to enquire about your car care services.

Please contact me with the best available option and price.

Thank You.`
  );

  return (
    <section
      id="contact"
      className="bg-[#090909] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* MAIN CTA */}
        <div className="overflow-hidden rounded-[32px] border border-yellow-400/20 bg-gradient-to-br from-[#1c1c1c] to-[#101010] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.5)] md:p-14">

          <p className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
            NEED AUTO CARE?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Your Car. Our Care.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-400">
            Get reliable Battery Replacement, Jumpstart, Windshield
            Replacement and Premium Car Detailing services across Pune &
            PCMC.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
            >
              💬 WhatsApp Us
            </a>

            {/* CALL */}
            <a
              href="tel:+919270300889"
              className="rounded-xl border border-green-500 px-8 py-4 font-bold text-green-400 transition hover:bg-green-500 hover:text-white"
            >
              📞 Call VoltShine
            </a>

          </div>

          {/* TRUST POINTS */}
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">

            <div>
              <p className="text-2xl">⚡</p>
              <p className="mt-2 font-semibold text-white">
                Quick Response
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Fast assistance for your car
              </p>
            </div>

            <div>
              <p className="text-2xl">🚗</p>
              <p className="mt-2 font-semibold text-white">
                Doorstep Service
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Convenient service at your location
              </p>
            </div>

            <div>
              <p className="text-2xl">🛡</p>
              <p className="mt-2 font-semibold text-white">
                Trusted Service
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Quality products & professional fitment
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}