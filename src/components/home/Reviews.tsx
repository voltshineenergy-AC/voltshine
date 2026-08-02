import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amit Patil",
    service: "Battery Replacement",
    review:
      "Quick doorstep battery replacement. Genuine battery and professional technician. Highly recommended.",
  },
  {
    name: "Sneha Kulkarni",
    service: "Ceramic Coating",
    review:
      "Excellent detailing service. My car looks like new again. Great finishing and timely delivery.",
  },
  {
    name: "Rahul Shinde",
    service: "Windshield Replacement",
    review:
      "OEM windshield installed perfectly. Professional work and transparent pricing.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[5px] text-yellow-400">
            Customer Reviews
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Trusted By Car Owners
          </h2>

          <p className="mt-5 text-gray-400">
            Real customer experiences from Pune & PCMC.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-white/10 bg-[#171717] p-8"
            >
              <div className="mb-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="#FACC15"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-300">
                "{review.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-white">
                {review.name}
              </h3>

              <p className="text-yellow-400">
                {review.service}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}