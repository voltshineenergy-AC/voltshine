type Props = {
  services: any[];
};

export default function DetailingSection({ services }: Props) {
    console.log("DetailingSection Rendered", services);
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-3xl font-bold text-yellow-400">
        Detailing Packages
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6"
          >
            <h3 className="text-2xl font-bold text-white">
              {service.service_name}
            </h3>

            <p className="mt-3 text-yellow-400 text-xl font-semibold">
              ₹{service.price}
            </p>

            {service.warranty_year && (
              <p className="mt-2 text-gray-400">
                Warranty: {service.warranty_year} Year
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}