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
    <section className="mt-8 px-0">

      {/* HEADER */}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
          VOLTSHINE SERVICES
        </p>

        <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
          Services Available
          <br />
          <span className="text-yellow-400">
            For Your Vehicle
          </span>
        </h3>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 gap-4">

        {/* BATTERY */}
        <div className="rounded-2xl border border-yellow-400/20 bg-[#1c1c1c] p-5">

          <div className="flex items-start justify-between">

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-3xl">
                🔋
              </div>

              <h4 className="mt-4 text-xl font-bold text-white">
                Battery Replacement
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                {batteryCount} Compatible Batteries Available
              </p>
            </div>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              Available
            </span>

          </div>

          <button
            onClick={onBatteryClick}
            className="mt-5 w-full rounded-xl bg-yellow-400 py-3.5 text-sm font-bold text-black transition active:scale-[0.98]"
          >
            Explore Batteries →
          </button>

        </div>

        {/* DETAILING */}
        <div className="rounded-2xl border border-yellow-400/20 bg-[#1c1c1c] p-5">

          <div className="flex items-start justify-between">

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-3xl">
                ✨
              </div>

              <h4 className="mt-4 text-xl font-bold text-white">
                Car Detailing
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                Premium detailing packages
              </p>
            </div>

            <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
              Premium
            </span>

          </div>

          <button
            onClick={onDetailingClick}
            className="mt-5 w-full rounded-xl bg-yellow-400 py-3.5 text-sm font-bold text-black transition active:scale-[0.98]"
          >
            Explore Packages →
          </button>

        </div>

        {/* WINDSHIELD */}
        <div className="rounded-2xl border border-yellow-400/20 bg-[#1c1c1c] p-5">

          <div className="flex items-start justify-between">

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-3xl">
                🪟
              </div>

              <h4 className="mt-4 text-xl font-bold text-white">
                Windshield Replacement
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                {windshieldCount} Glass Options Available
              </p>
            </div>

            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              Get Quote
            </span>

          </div>

          <button
            onClick={onWindshieldClick}
            className="mt-5 w-full rounded-xl bg-yellow-400 py-3.5 text-sm font-bold text-black transition active:scale-[0.98]"
          >
            Get Windshield Quote →
          </button>

        </div>

      </div>
    </section>
  );
}