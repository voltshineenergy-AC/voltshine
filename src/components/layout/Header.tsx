"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-3xl font-bold text-yellow-400">
          Volt<span className="text-blue-400">Shine</span>
        </h1>

        <nav className="hidden gap-8 text-sm text-white lg:flex">
          <a href="#">Home</a>
          <a href="#">Battery</a>
          <a href="#">Windshield</a>
          <a href="#">Detailing</a>
          <a href="#">UPS</a>
          <a href="#">Solar</a>
        </nav>

       <div className="lg:hidden">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? (
      <X className="h-7 w-7 text-white" />
    ) : (
      <Menu className="h-7 w-7 text-white" />
    )}
  </button>
</div>
      </div>
      {menuOpen && (
  <div className="border-t border-white/10 bg-[#111] lg:hidden">
    <nav className="flex flex-col p-6 text-white">

      <a href="#" className="py-3">Home</a>

      <a href="#" className="py-3">Battery</a>

      <a href="#" className="py-3">Windshield</a>

      <a href="#" className="py-3">Detailing</a>

      <a href="#" className="py-3">UPS</a>

      <a href="#" className="py-3">Solar</a>

     <button className="hidden rounded-xl bg-yellow-400 px-5 py-2 font-semibold text-black lg:block">
  WhatsApp
</button>

    </nav>
  </div>
)}
    </header>
  );
}