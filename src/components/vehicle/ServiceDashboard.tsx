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
    <section className="mt-8">

      {/* HEADER */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-xs">
          VOLTSHINE SERVICES
        </p>

        <h3 className="mt-2 text-[28px] font-extrabold leading-[1.1] text-white sm:text-3xl md:text-4xl">
          Services Available
          <br />
          <span className="text-yellow-400">
            For Your Vehicle
          </span>
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-5 text-gray-400">
          Choose a service below to view compatible options and pricing.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* ================= BATTERY ================= */}

        <div
          className="
            rounded-2xl
            border
            border-yellow-400/20
            bg-[#1c1c1c]
            p-5
            transition
            hover:-translate-y-1
            hover:border-yellow-400/40
          "
        >
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-3xl">
                🔋
              </div>

              <h4 className="mt-4 text-xl font-bold leading-tight text-white">
                Battery Replacement
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                <span className="font-bold text-yellow-400">
                  {batteryCount}
                </span>{" "}
                compatible batteries available
              </p>

            </div>

            <span className="shrink-0 rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-green-400">
              Available
            </span>

          </div>

          <button
            onClick={onBatteryClick}
            className="
              mt-5
              h-12
              w-full
              rounded-xl
              bg-yellow-400
              text-sm
              font-extrabold
              text-black
              transition
              active:scale-[0.98]
              hover:bg-yellow-300
            "
          >
            Explore Batteries →
          </button>

        </div>

        {/* ================= DETAILING ================= */}

        <div
          className="
            rounded-2xl
            border
            border-yellow-400/20
            bg-[#1c1c1c]
            p-5
            transition
            hover:-translate-y-1
            hover:border-yellow-400/40
          "
        >
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-3xl">
                ✨
              </div>

              <h4 className="mt-4 text-xl font-bold leading-tight text-white">
                Car Detailing
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Premium detailing packages
              </p>

            </div>

            <span className="shrink-0 rounded-full bg-yellow-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-yellow-400">
              Premium
            </span>

          </div>

          <button
            onClick={onDetailingClick}
            className="
              mt-5
              h-12
              w-full
              rounded-xl
              bg-yellow-400
              text-sm
              font-extrabold
              text-black
              transition
              active:scale-[0.98]
              hover:bg-yellow-300
            "
          >
            Explore Packages →
          </button>

        </div>

        {/* ================= WINDSHIELD ================= */}

        <div
          className="
            rounded-2xl
            border
            border-yellow-400/20
            bg-[#1c1c1c]
            p-5
            transition
            hover:-translate-y-1
            hover:border-yellow-400/40
          "
        >
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-3xl">
                🪟
              </div>

              <h4 className="mt-4 text-xl font-bold leading-tight text-white">
                Windshield Replacement
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                <span className="font-bold text-blue-400">
                  {windshieldCount}
                </span>{" "}
                glass options available
              </p>

            </div>

            <span className="shrink-0 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-400">
              Get Quote
            </span>

          </div>

          <button
            onClick={onWindshieldClick}
            className="
              mt-5
              h-12
              w-full
              rounded-xl
              bg-yellow-400
              text-sm
              font-extrabold
              text-black
              transition
              active:scale-[0.98]
              hover:bg-yellow-300
            "
          >
            Get Windshield Quote →
          </button>

        </div>

      </div>
    </section>
  );
}