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
      className="bg-[#090909] px-4 py-14 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* MAIN CTA */}
        <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#1c1c1c] to-[#101010] p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.5)] sm:p-10 md:rounded-[32px] md:p-14">
          
          {/* LABEL */}
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            NEED AUTO CARE?
          </p>

          {/* HEADING */}
          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Your Car.
            <br className="sm:hidden" /> Our Care.
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
            Get reliable Battery Replacement, Jumpstart, Windshield
            Replacement and Premium Car Detailing services across Pune & PCMC.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-row sm:justify-center sm:gap-4">

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:text-base"
            >
              💬 WhatsApp Us
            </a>

            {/* CALL */}
            <a
              href={`tel:+${whatsappNumber}`}
              className="flex min-h-12 items-center justify-center rounded-xl border border-green-500 px-7 py-3.5 text-sm font-extrabold text-green-400 transition active:scale-[0.98] hover:bg-green-500 hover:text-white sm:text-base"
            >
              📞 Call VoltShine
            </a>

          </div>

          {/* TRUST POINTS */}
          <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 sm:mt-10 sm:grid-cols-3 sm:pt-8">

            {/* QUICK RESPONSE */}
            <div className="rounded-xl bg-white/[0.02] px-4 py-4">
              <p className="text-2xl">⚡</p>

              <p className="mt-2 text-sm font-bold text-white sm:text-base">
                Quick Response
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                Fast assistance for your car
              </p>
            </div>

            {/* DOORSTEP */}
            <div className="rounded-xl bg-white/[0.02] px-4 py-4">
              <p className="text-2xl">🚗</p>

              <p className="mt-2 text-sm font-bold text-white sm:text-base">
                Doorstep Service
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                Convenient service at your location
              </p>
            </div>

            {/* TRUSTED */}
            <div className="rounded-xl bg-white/[0.02] px-4 py-4">
              <p className="text-2xl">🛡</p>

              <p className="mt-2 text-sm font-bold text-white sm:text-base">
                Trusted Service
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                Quality products & professional fitment
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}