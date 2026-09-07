import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">

        {/* MAIN FOOTER */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/voltshine-logo.png"
                alt="VoltShine Energy & Auto Care"
                width={240}
                height={75}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              India&apos;s Smart Energy & Auto Care Platform.
              Doorstep Battery Replacement, Windshield Replacement,
              Car Detailing, Solar & UPS Solutions across Pune & PCMC.
            </p>

            {/* TRUST BADGES */}
            <div className="mt-5 flex flex-wrap gap-2">

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                ✓ Genuine Products
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                ✓ Doorstep Service
              </span>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-6">

              <p className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Follow VoltShine
              </p>

              <div className="mt-3 flex gap-3">

                <a
                  href="https://www.instagram.com/voltshine.pune/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VoltShine Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-extrabold text-gray-300 transition hover:border-yellow-400/50 hover:text-yellow-400"
                >
                  IG
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61574519214007"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VoltShine Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-extrabold text-gray-300 transition hover:border-yellow-400/50 hover:text-yellow-400"
                >
                  f
                </a>

              </div>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-extrabold text-white sm:text-xl">
              Auto Care Services
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400 sm:text-base">

              <li>
                <Link
                  href="/battery"
                  className="transition hover:text-yellow-400"
                >
                  Car Battery Replacement
                </Link>
              </li>

              <li>
                <Link
                  href="/windshield"
                  className="transition hover:text-yellow-400"
                >
                  Windshield Replacement
                </Link>
              </li>

              <li>
                <Link
                  href="/detailing"
                  className="transition hover:text-yellow-400"
                >
                  Car Detailing
                </Link>
              </li>

              <li>
                <Link
                  href="/ups"
                  className="transition hover:text-yellow-400"
                >
                  UPS & Inverter Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/solar"
                  className="transition hover:text-yellow-400"
                >
                  Solar Solutions
                </Link>
              </li>

              <li>
                <a
                  href="tel:+919270300889"
                  className="transition hover:text-yellow-400"
                >
                  Emergency Jumpstart
                </a>
              </li>

            </ul>

          </div>

          {/* SERVICE AREAS */}
          <div>

            <h3 className="text-lg font-extrabold text-white sm:text-xl">
              Service Areas
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400 sm:text-base">

              <li>
                <Link
                  href="/pune"
                  className="font-semibold text-gray-300 transition hover:text-yellow-400"
                >
                  Car Services in Pune
                </Link>
              </li>

              <li>Wakad</li>
              <li>Baner</li>
              <li>Hinjewadi</li>
              <li>Kharadi</li>
              <li>Hadapsar</li>
              <li>Pimpri-Chinchwad</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-extrabold text-white sm:text-xl">
              Contact Us
            </h3>

            <div className="mt-4 space-y-4 text-sm text-gray-400 sm:text-base">

              {/* PHONE */}
              <a
                href="tel:+919270300889"
                className="flex items-start gap-3 transition hover:text-yellow-400"
              >
                <span>📞</span>
                <span>+91 92703 00889</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:voltshineenergy@gmail.com"
                className="flex items-start gap-3 break-all transition hover:text-yellow-400"
              >
                <span>✉</span>
                <span>voltshineenergy@gmail.com</span>
              </a>

              {/* LOCATION */}
              <p className="flex items-start gap-3">
                <span>📍</span>
                <span>Pune, Maharashtra</span>
              </p>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919270300889"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-sm font-extrabold text-white transition active:scale-[0.98] hover:bg-green-400"
              >
                💬 WhatsApp Us
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-10 border-t border-gray-800 pt-7 sm:mt-12 sm:pt-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* COPYRIGHT */}
            <p className="text-center text-xs text-gray-500 sm:text-left sm:text-sm">
              © 2026 VoltShine Energy & Auto Care. All Rights Reserved.
            </p>

            {/* LEGAL LINKS */}
            <div className="flex justify-center gap-5 text-xs text-gray-400 sm:gap-6 sm:text-sm">

              <Link
                href="/privacy-policy"
                className="transition hover:text-yellow-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-yellow-400"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}