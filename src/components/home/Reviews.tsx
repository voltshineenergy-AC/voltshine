export default function Reviews() {
  const reviews = [
    {
      name: "Amit Patil",
      location: "Wakad",
      review:
        "Battery replaced within 30 minutes. Excellent service and genuine product.",
    },
    {
      name: "Sneha Kulkarni",
      location: "Baner",
      review:
        "Car detailing quality exceeded my expectations. Highly recommended.",
    },
    {
      name: "Rahul Jadhav",
      location: "Kharadi",
      review:
        "Windshield replacement was quick and professional. Great experience.",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-2 text-center text-yellow-400 tracking-[6px] uppercase">
          Customer Reviews
        </p>

        <h2 className="text-center text-5xl font-bold text-white">
          Trusted by Car Owners Across Pune
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400">
          Real customer experiences that make VoltShine one of Pune's trusted
          names for Battery Replacement, Windshield and Car Detailing.
        </p>

        {/* Stats */}

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-yellow-500/20 bg-[#161616] p-8 text-center">
            <h3 className="text-5xl font-bold text-yellow-400">5000+</h3>
            <p className="mt-2 text-gray-400">
              Happy Customers
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-[#161616] p-8 text-center">
            <h3 className="text-5xl font-bold text-yellow-400">12000+</h3>
            <p className="mt-2 text-gray-400">
              Batteries Installed
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-[#161616] p-8 text-center">
            <h3 className="text-5xl font-bold text-yellow-400">4.9★</h3>
            <p className="mt-2 text-gray-400">
              Customer Rating
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-[#161616] p-8 text-center">
            <h3 className="text-5xl font-bold text-yellow-400">30 Min</h3>
            <p className="mt-2 text-gray-400">
              Avg. Response
            </p>
          </div>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-yellow-500/20 bg-[#1a1a1a] p-8"
            >

              <div className="text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 text-gray-300 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-white">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.location}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <a
            href="https://g.page/r/xxxxxxxx"
            target="_blank"
            className="rounded-xl bg-yellow-400 px-10 py-4 font-bold text-black"
          >
            View Google Reviews
          </a>

        </div>

      </div>
    </section>
  );
}