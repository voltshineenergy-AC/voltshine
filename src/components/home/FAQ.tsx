"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How quickly can you replace my car battery?",
    answer:
      "In most areas across Pune & PCMC, battery replacement is completed within 60–90 minutes.",
  },
  {
    question: "Are the batteries genuine?",
    answer:
      "Yes. We supply genuine batteries from trusted brands like Exide, Amaron, Livguard and more.",
  },
  {
    question: "Do you provide doorstep installation?",
    answer:
      "Yes. We provide doorstep battery replacement, emergency jumpstart and selected doorstep auto care services across Pune & PCMC.",
  },
  {
    question: "Do you offer warranty?",
    answer:
      "Yes. Batteries and applicable services are covered by the respective manufacturer or service warranty.",
  },
  {
    question: "What other services does VoltShine provide?",
    answer:
      "VoltShine provides car battery replacement, emergency jumpstart, windshield replacement, premium car detailing, UPS & inverter solutions and solar solutions.",
  },
  {
    question: "How can I book a service?",
    answer:
      "Simply click Book Service or WhatsApp on our website. Our team will contact you and help you choose the right service.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0A0A0A] px-4 py-14 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            FAQ
          </p>

          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Frequently Asked
            <br className="sm:hidden" /> Questions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-gray-400 sm:text-base sm:leading-6">
            Find quick answers to common questions about VoltShine services,
            battery replacement and doorstep auto care.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
          {faqItems.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border bg-[#171717] transition duration-300 ${
                  isOpen
                    ? "border-yellow-400/40"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[68px] w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-[15px] font-bold leading-5 text-white sm:text-lg sm:leading-6">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                      isOpen
                        ? "bg-yellow-400 text-black"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-[#151515] px-5 py-6 text-center sm:mt-10 sm:px-8">
          <h3 className="text-lg font-extrabold text-white sm:text-xl">
            Still have questions?
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Our team is happy to help you choose the right service.
          </p>

          <a
            href="https://wa.me/919270300889"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:w-auto"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}