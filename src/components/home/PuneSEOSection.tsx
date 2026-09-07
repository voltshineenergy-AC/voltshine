import Link from "next/link";

export default function PuneSEOSection() {
  return (
    <section className="bg-[#090909] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-yellow-400/20 bg-[#151515] p-6 sm:p-10 md:p-12">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            VOLTSHINE IN PUNE
          </p>

          <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-white sm:text-4xl">
            Car Battery & Auto Care Services in Pune
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            VoltShine provides reliable car battery replacement, emergency
            jumpstart, windshield replacement, premium car detailing, UPS,
            inverter and solar solutions across Pune and PCMC.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            Whether you need a doorstep car battery replacement, professional
            windshield installation or premium detailing for your vehicle,
            VoltShine helps you find the right service for your requirements.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-400">
              Pune
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-400">
              PCMC
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-400">
              Doorstep Service
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-400">
              Auto Care
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/pune"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
            >
              Explore Car Services in Pune →
            </Link>

            <Link
              href="/battery"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-extrabold text-white transition active:scale-[0.98] hover:border-yellow-400 hover:text-yellow-400"
            >
              Find Car Battery →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}