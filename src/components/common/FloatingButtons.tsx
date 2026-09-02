"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919270300889"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact VoltShine on WhatsApp"
        className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition active:scale-95 hover:scale-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <MessageCircle size={27} />
      </a>

      {/* Call */}
      <a
        href="tel:+919270300889"
        aria-label="Call VoltShine"
        className="fixed bottom-[88px] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl transition active:scale-95 hover:scale-110 sm:bottom-28 sm:right-6 sm:h-16 sm:w-16"
      >
        <Phone size={25} />
      </a>
    </>
  );
}