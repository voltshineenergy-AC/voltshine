type Props = {
  batteryCount: number;
  windshieldCount: number;
  onBatteryClick: () => void;
  onDetailingClick: () => void;
  onWindshieldClick: () => void;
};

export default function ServiceDashboard({
  batteryCount,
  windshieldCount,
  onBatteryClick,
  onDetailingClick,
  onWindshieldClick,
}: Props) {
  return (
    <div className="mt-10">

      <h3 className="mb-8 text-3xl font-bold text-yellow-400">
        Services Available For Your Vehicle
      </h3>

      <div className="grid gap-6 md:grid-cols-3">

        {/* Battery */}
        <div className="rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6">
          <div className="text-5xl">🔋</div>

          <h4 className="mt-4 text-2xl font-bold text-white">
            Battery Replacement
          </h4>

          <p className="mt-2 text-gray-400">
            {batteryCount} Compatible Batteries Available
          </p>

         <button
  onClick={onBatteryClick}
  className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
>
  Explore Batteries
</button>
        </div>

     {/* Detailing */}
<div className="rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6">
  <div className="text-5xl">✨</div>

  <h4 className="mt-4 text-2xl font-bold text-white">
    Car Detailing
  </h4>

  <p className="mt-2 text-gray-400">
    4 Premium Packages Available
  </p>

  <button
    onClick={onDetailingClick}
    className="mt-6 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black"
  >
    Explore Packages
  </button>
</div>

        {/* Windshield */}
<div className="rounded-3xl border border-yellow-400/20 bg-[#1c1c1c] p-6">
  <div className="text-5xl">🪟</div>

  <h4 className="mt-4 text-2xl font-bold text-white">
    Windshield Replacement
  </h4>

 <p className="mt-2 text-gray-400">
  {windshieldCount} Glass Options Available
</p>

<button
  onClick={onWindshieldClick}
  className="mt-6 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black"
>
  Get Quote
</button>
</div>

      </div>
    </div>
  );
}