import { openWhatsApp } from "@/lib/whatsapp";

type Battery = {
  battery_brand: string;
  ah: number;
  mrp: number;
  dp: number;
  warranty: string;
};

type Props = {
  batteries: Battery[];
  make: string;
  model: string;
  year: string;
  fuel: string;
};

export default function BatterySection({
  batteries,
  make,
  model,
  year,
  fuel,
}: Props) {
  return (
    <div className="mt-10">

      <h3 className="mb-6 text-3xl font-bold text-yellow-400">
        Compatible Batteries
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {batteries.map((battery, index) => (
          <div
            key={index}
            className="rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-yellow-400">
                {battery.battery_brand}
              </h4>

              <div className="rounded-full bg-yellow-400 px-4 py-2">
                <span className="font-bold text-black">
                  {battery.ah} AH
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-gray-300">
              <p>✓ Doorstep Service</p>
              <p>✓ Free Installation</p>
              <p>✓ Old Battery Exchange</p>
            </div>

            <div className="mt-6 border-t border-gray-700 pt-4">
              <p className="text-gray-500 line-through">
                ₹{battery.mrp}
              </p>

              <p className="text-3xl font-bold text-green-400">
                ₹{battery.dp}
              </p>

              <p className="mt-2 text-blue-400">
                🛡 {battery.warranty}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-xl bg-yellow-400 py-3 font-bold text-black">
                Book Now
              </button>

              <button
  onClick={() =>
  openWhatsApp(
`Hello VoltShine 👋

I would like to book a Battery Replacement.

━━━━━━━━━━━━━━━━━━
🚗 VEHICLE DETAILS

Make : ${make}
Model : ${model}
Year : ${year}
Fuel : ${fuel}

━━━━━━━━━━━━━━━━━━
🔋 BATTERY DETAILS

Brand : ${battery.battery_brand}
Capacity : ${battery.ah} AH
Warranty : ${battery.warranty}

Offer Price : ₹${battery.dp}

━━━━━━━━━━━━━━━━━━

Please contact me to confirm my booking.

Thank You.`
  )
}
  className="flex-1 rounded-xl border border-green-500 py-3 font-bold text-green-400 hover:bg-green-500 hover:text-white transition"
>
  WhatsApp
</button>
            </div>
          </div>
        ))}

      </div>

      {/* Other Battery CTA */}

      <div className="mt-8 rounded-3xl border border-yellow-400 bg-[#1c1c1c] p-8 text-center">

        <h3 className="text-2xl font-bold text-white">
          ⭐ Looking for Another Battery?
        </h3>

        <p className="mt-3 text-gray-400">
          Can't find the battery you're looking for?
        </p>

        <button className="mt-6 rounded-xl bg-yellow-400 px-8 py-3 font-bold text-black">
          Request Best Price
        </button>

      </div>

    </div>
  );
}