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
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle size={30} />
      </a>

      {/* Call */}

      <a
        href="tel:+919270300889"
        className="fixed bottom-28 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl transition hover:scale-110"
      >
        <Phone size={28} />
      </a>
    </>
  );
}