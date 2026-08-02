type Windshield = {
  glass_brand: string;
  glass_type: string;
  price: number;
  mrp: number;
  warranty: string;
  installation_time: string;
};

type Props = {
  windshields: Windshield[];
};

export default function WindshieldSection({
  windshields,
}: Props) {
  return (
    <div className="mt-10">

      <h2 className="mb-2 text-4xl font-bold text-yellow-400">
        Windshield Replacement
      </h2>

      <p className="mb-8 text-gray-400">
        Genuine OEM Glass with Professional Installation.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {windshields.map((glass, index) => {

          const saving = glass.mrp - glass.price;

          return (

            <div
              key={index}
              className="rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6 hover:border-yellow-400 transition"
            >

              {saving > 0 && (
                <div className="mb-4 inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  SAVE ₹{saving}
                </div>
              )}

              <div className="text-5xl">
                🪟
              </div>

              <h3 className="mt-4 text-2xl font-bold text-yellow-400">
                {glass.glass_brand}
              </h3>

              <p className="text-gray-400">
                {glass.glass_type}
              </p>

              <div className="mt-5 space-y-2 text-gray-300">

                <p>✅ OEM Quality Glass</p>

                <p>✅ Leak Proof Installation</p>

                <p>✅ Doorstep Fitment</p>

                <p>🛡 {glass.warranty}</p>

                <p>⏱ {glass.installation_time}</p>

              </div>

              <div className="mt-6 border-t border-gray-700 pt-4">

                <p className="text-gray-500 line-through">
                  ₹{glass.mrp}
                </p>

                <p className="text-4xl font-bold text-green-400">
                  ₹{glass.price}
                </p>

              </div>

              <button className="mt-6 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black">
                Get Quote
              </button>

            </div>

          );

        })}

      </div>

    </div>
  );
}