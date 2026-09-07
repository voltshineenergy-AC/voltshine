type Props = {
  make: string;
  model: string;
};

export default function VehicleFAQSchema({ make, model }: Props) {
  const faqs = [
    {
      question: `Which battery is suitable for ${make} ${model}?`,
      answer: `The correct battery for ${make} ${model} depends on the vehicle year and fuel type. VoltShine helps you find compatible battery options based on your selected vehicle details.`,
    },
    {
      question: `What is the ${make} ${model} battery price in Pune?`,
      answer: `Battery prices for ${make} ${model} vary by battery brand, capacity and warranty. Select your vehicle year and fuel type on VoltShine to see available options and pricing.`,
    },
    {
      question: `Does VoltShine provide doorstep battery replacement for ${make} ${model}?`,
      answer: `Yes. VoltShine provides doorstep battery replacement services across Pune and PCMC, subject to service availability in your location.`,
    },
    {
      question: `Can I exchange my old ${make} ${model} battery?`,
      answer: `Yes. Old battery exchange is available with applicable battery replacement orders. Contact VoltShine for the current exchange value.`,
    },
    {
      question: `What battery warranty is available for ${make} ${model}?`,
      answer: `Battery warranty depends on the selected battery brand and product. The applicable warranty is displayed with the battery option before booking.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}