export function openWhatsApp(message: string) {
  const phone = "919270300889"; // VoltShine WhatsApp Number

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
export function createBookingMessage({
  service,
  make,
  model,
  year,
  fuel,
  details,
}: {
  service: string;
  make: string;
  model: string;
  year: string;
  fuel: string;
  details: string;
}) {
  return `Hello VoltShine 👋

I would like to book ${service}.

━━━━━━━━━━━━━━━━━━

🚗 VEHICLE DETAILS

Make : ${make}
Model : ${model}
Year : ${year}
Fuel : ${fuel}

━━━━━━━━━━━━━━━━━━

${details}

━━━━━━━━━━━━━━━━━━

Please contact me to confirm my booking.

Thank You.`;
}