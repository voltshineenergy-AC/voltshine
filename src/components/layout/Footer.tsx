import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-yellow-500/20">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-extrabold">
              <span className="text-yellow-400">Volt</span>
              <span className="text-blue-500">Shine</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              India's Smart Energy & Auto Care Platform.
              Doorstep Battery Replacement, Windshield,
              Car Detailing, Solar & UPS Solutions across
              Pune & PCMC.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-gray-400">

              <li><Link href="/battery">Battery Replacement</Link></li>

              <li><Link href="/windshield">Windshield</Link></li>

              <li><Link href="/detailing">Car Detailing</Link></li>

              <li><Link href="/ups">UPS & Inverter</Link></li>

              <li><Link href="/solar">Solar Solutions</Link></li>

            </ul>

          </div>

          {/* Service Areas */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Service Areas
            </h3>

            <ul className="mt-5 space-y-3 text-gray-400">

              <li>Wakad</li>

              <li>Baner</li>

              <li>Hinjewadi</li>

              <li>Kharadi</li>

              <li>Hadapsar</li>

              <li>Pimpri Chinchwad</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-gray-400">

              <p>📞 +91 92703 00889</p>

              <p>✉ voltshineenergy@gmail.com</p>

              <p>📍 Pune, Maharashtra</p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-gray-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-gray-500">
              © 2026 VoltShine. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}