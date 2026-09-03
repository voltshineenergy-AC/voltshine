export default function ContactCTA() {
  const whatsappNumber = "919270300889";

  const emergencyMessage = encodeURIComponent(
    `Hello VoltShine 👋

🚨 I need immediate car assistance.

My car is not starting / I need urgent auto care service.

Please contact me as soon as possible.

Thank You.`
  );

  return (
    <section className="bg-[#090909] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">

        {/* MAIN CTA CARD */}
        <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-500 px-5 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-8 sm:py-14 md:px-12 md:py-16">

          {/* LABEL */}
          <div className="mx-auto inline-flex items-center rounded-full bg-black/10 px-4 py-2">
            <p className="text-[10px] font-extrabold uppercase tracking-[3px] text-black/75 sm:text-xs sm:tracking-[4px]">
              NEED HELP RIGHT NOW?
            </p>
          </div>

          {/* HEADING */}
          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-4xl md:text-5xl">
            Car Won&apos;t Start?
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/75 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            Don&apos;t get stranded. Get quick assistance for Battery
            Replacement, Jumpstart and other emergency car care services
            across Pune &amp; PCMC.
          </p>

          {/* BUTTONS */}
          <div className="mx-auto mt-7 grid max-w-lg grid-cols-1 gap-3 sm:mt-8 sm:flex sm:max-w-none sm:justify-center sm:gap-4">

            {/* CALL */}
            <a
              href="tel:+919270300889"
              className="flex min-h-12 items-center justify-center rounded-xl bg-black px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition duration-200 active:scale-[0.98] hover:bg-black/85 sm:px-8 sm:text-base"
            >
              🚗 Call for Assistance
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${emergencyMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-xl border-2 border-black bg-transparent px-7 py-3.5 text-sm font-extrabold text-black transition duration-200 active:scale-[0.98] hover:bg-black hover:text-white sm:px-8 sm:text-base"
            >
              💬 WhatsApp Now
            </a>

          </div>

          {/* SERVICE POINTS */}
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-6 text-xs font-bold text-black/70 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:border-t-0 sm:pt-0 sm:text-sm">
            <span>✓ Battery Assistance</span>
            <span>✓ Jumpstart</span>
            <span>✓ Doorstep Service</span>
            <span>✓ Pune &amp; PCMC</span>
          </div>

        </div>
      </div>
    </section>
  );
}