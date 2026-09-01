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
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[5px] text-yellow-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-5">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#171717]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-6"
              >
                <span className="text-left text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 leading-7 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}