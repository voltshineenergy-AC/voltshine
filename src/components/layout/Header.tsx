"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Battery", href: "/battery" },
  { name: "Windshield", href: "/windshield" },
  { name: "Detailing", href: "/detailing" },
  { name: "UPS", href: "/ups" },
  { name: "Solar", href: "/solar" },
  { name: "Pune", href: "/pune" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "919270300889";

  const whatsappMessage = encodeURIComponent(
    `Hello VoltShine 👋

I want to book an auto care service.

Please contact me with the best available option and price.

Thank You.`
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      {/* HEADER BAR */}
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center"
        >
          <Image
            src="/logo/voltshine-logo.png"
            alt="VoltShine Energy & Auto Care"
            width={240}
            height={75}
            priority
            className="h-12 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-300 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-yellow-400"
            >
              {item.name}
            </Link>
          ))}

          {/* DESKTOP WHATSAPP */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-yellow-400 px-5 py-2.5 font-extrabold text-black transition hover:bg-yellow-300"
          >
            WhatsApp
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition active:scale-95 lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#111111] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-sm font-semibold text-gray-200 transition hover:text-yellow-400"
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300"
            >
              💬 WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}