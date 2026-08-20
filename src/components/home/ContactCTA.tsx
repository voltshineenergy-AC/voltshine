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
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* LABEL */}
        <p className="text-sm font-bold uppercase tracking-[4px] text-black/70">
          NEED HELP RIGHT NOW?
        </p>

        {/* HEADING */}
        <h2 className="mt-3 text-4xl font-extrabold text-black md:text-5xl">
          Car Won't Start?
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-black/80">
          Don't get stranded. Get quick assistance for Battery Replacement,
          Jumpstart and other emergency car care services across Pune & PCMC.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">

          {/* CALL */}
          <a
            href="tel:+919270300889"
            className="rounded-xl bg-black px-8 py-4 font-bold text-white transition hover:bg-black/80"
          >
            🚗 Call for Assistance
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${emergencyMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-black px-8 py-4 font-bold text-black transition hover:bg-black hover:text-white"
          >
            💬 WhatsApp Now
          </a>

        </div>

        {/* SERVICE POINTS */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-black/70">
          <span>✓ Battery Assistance</span>
          <span>✓ Jumpstart</span>
          <span>✓ Doorstep Service</span>
          <span>✓ Pune & PCMC</span>
        </div>

      </div>
    </section>
  );
}