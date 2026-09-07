"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  make: string;
  model: string;
};

export default function VehicleFAQ({ make, model }: Props) {
  const faqs = [
    {
      question: `Which battery is suitable for ${make} ${model}?`,
      answer: `The correct battery for ${make} ${model} depends on the vehicle year and fuel type. Select your vehicle details above to find compatible battery options.`,
    },
    {
      question: `What is the ${make} ${model} battery price in Pune?`,
      answer: `Battery prices for ${make} ${model} depend on the battery brand, capacity and warranty. Select your year and fuel type above to view available battery options and pricing.`,
    },
    {
      question: `Does VoltShine provide doorstep battery replacement for ${make} ${model}?`,
      answer: `Yes. VoltShine provides doorstep battery replacement across Pune and PCMC, subject to service availability in your location.`,
    },
    {
      question: `Can I exchange my old ${make} ${model} battery?`,
      answer: `Yes. Old battery exchange is available with applicable battery replacement orders. Contact VoltShine to know the current exchange value.`,
    },
    {
      question: `What battery warranty is available for ${make} ${model}?`,
      answer: `Warranty depends on the selected battery brand and product. The applicable warranty is shown with each battery option before booking.`,
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[4px]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-white sm:text-4xl">
            {make} {model} Battery FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Common questions about battery replacement, pricing,
            doorstep installation and warranty.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border bg-[#151515] transition ${
                  isOpen
                    ? "border-yellow-400/40"
                    : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex min-h-[68px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold leading-5 text-white sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      isOpen
                        ? "bg-yellow-400 text-black"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-4">
                    <p className="text-sm leading-6 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
