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

const stats = [
  {
    value: "5000+",
    label: "Happy Customers",
  },
  {
    value: "12000+",
    label: "Batteries Installed",
  },
  {
    value: "4.9★",
    label: "Customer Rating",
  },
  {
    value: "30 Min",
    label: "Avg. Response",
  },
];

// Replace this with your actual Google Business Profile review URL.
const googleReviewsUrl = "https://share.google/BGkd70pCKdd5phZu5";

export default function Reviews() {
  return (
    <section className="bg-black px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="text-center">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs sm:tracking-[5px]">
            CUSTOMER REVIEWS
          </p>

          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Trusted by Car Owners
            <br className="sm:hidden" /> Across Pune
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-5 text-gray-400 sm:text-base sm:leading-7">
            Real customer experiences that make VoltShine a trusted choice
            for battery replacement, windshield replacement and car detailing.
          </p>

        </div>

        {/* ================= STATS ================= */}

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-yellow-500/20 bg-[#161616] px-3 py-5 text-center sm:rounded-3xl sm:p-7"
            >
              <h3 className="text-2xl font-extrabold text-yellow-400 sm:text-4xl md:text-5xl">
                {stat.value}
              </h3>

              <p className="mt-1.5 text-[11px] leading-4 text-gray-400 sm:mt-2 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

        {/* ================= REVIEWS ================= */}

        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3 sm:gap-6">

          {reviews.map((item) => (
            <div
              key={`${item.name}-${item.location}`}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 sm:rounded-3xl sm:p-7"
            >

              {/* STARS */}

              <div
                className="text-base tracking-[2px] text-yellow-400 sm:text-lg"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              {/* REVIEW */}

              <p className="mt-4 text-sm leading-6 text-gray-300 sm:mt-5 sm:text-base sm:leading-7">
                "{item.review}"
              </p>

              {/* CUSTOMER */}

              <div className="mt-auto pt-6">

                <div className="h-px bg-white/10" />

                <h4 className="mt-4 text-sm font-extrabold text-white sm:text-base">
                  {item.name}
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  {item.location}, Pune
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* ================= GOOGLE CTA ================= */}

        <div className="mt-8 text-center sm:mt-12">

          <p className="mb-4 text-sm text-gray-400">
            See more customer experiences on Google
          </p>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3 text-sm font-extrabold text-black transition active:scale-[0.98] hover:bg-yellow-300 sm:px-9"
          >
            View Google Reviews →
          </a>

        </div>

      </div>
    </section>
  );
}