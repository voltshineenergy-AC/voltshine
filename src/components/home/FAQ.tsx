"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you replace my car battery?",
    answer:
      "In most areas across Pune & PCMC, battery replacement is completed within 60–90 minutes.",
  },
  {
    question: "Are the batteries genuine?",
    answer:
      "Yes. We supply only genuine batteries from trusted brands like Exide, Amaron, Livguard and more.",
  },
  {
    question: "Do you provide doorstep installation?",
    answer:
      "Yes. Our trained technicians provide doorstep battery replacement, windshield replacement and selected detailing services.",
  },
  {
    question: "Do you offer warranty?",
    answer:
      "Yes. All batteries and services are covered by the applicable manufacturer or service warranty.",
  },
  {
    question: "How can I book a service?",
    answer:
      "Simply select your vehicle, choose the service and click WhatsApp. Our team will contact you immediately.",
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

          <h2 className="mt-4 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#171717]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6"
              >
                <span className="text-left text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-400">
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