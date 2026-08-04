import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold text-black">
          Need Immediate Assistance?
        </h2>

        <p className="mt-6 text-lg text-black/80">
          From battery replacement to emergency jumpstart,
          our experts are just one click away.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <a
            href="tel:+919270300889"
            className="rounded-xl bg-black px-8 py-4 font-bold text-white"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919270300889"
            target="_blank"
            className="rounded-xl border-2 border-black px-8 py-4 font-bold text-black"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}