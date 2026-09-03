export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://voltshine.in/#business",

    name: "VoltShine Energy & Auto Care",
    url: "https://voltshine.in",
    telephone: "+91-9270300889",

    logo: "https://voltshine.in/logo/voltshine-logo.png",
    image: "https://voltshine.in/images/hero-car.png",

    description:
      "VoltShine Energy & Auto Care provides car battery replacement, emergency jumpstart, windshield replacement, premium car detailing, UPS, inverter and solar solutions across Pune and PCMC.",

    priceRange: "₹₹",

    areaServed: [
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "City",
        name: "Pimpri-Chinchwad",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pune District",
      },
    ],

    serviceType: [
      "Car Battery Replacement",
      "Emergency Jumpstart",
      "Windshield Replacement",
      "Car Detailing",
      "Ceramic Coating",
      "Graphene Coating",
      "Paint Protection Film",
      "UPS & Inverter Solutions",
      "Solar Solutions",
    ],

      sameAs: [
  "https://www.facebook.com/profile.php?id=61574519214007",
  "https://www.instagram.com/voltshine.pune/?hl=en",
],
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