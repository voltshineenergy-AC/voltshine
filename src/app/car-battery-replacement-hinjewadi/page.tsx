import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import VehicleFinder from "@/components/vehicle/VehicleFinder";

export const metadata = {
  title: "Car Battery Replacement in Hinjewadi, Pune | VoltShine",
  description:
    "Need a car battery replacement in Hinjewadi, Pune? Get genuine Amaron, Exide, SF Sonic and Powerzone batteries with doorstep replacement from VoltShine.",
};

export default function HinjewadiBatteryPage() {
  const whatsappNumber = "919270300889";

  const message = encodeURIComponent(
    `Hello VoltShine 👋

I need car battery replacement in Hinjewadi.

Please share the available battery options, price and warranty.

Thank You.`
  );

  return (
    <>
      <Header />

      <main className="bg-[#090909] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-black to-black" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">

            <p className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
              VOLTSHINE • HINJEWADI
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Car Battery Replacement in{" "}
              <span className="text-yellow-400">
                Hinjewadi, Pune
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Get genuine car batteries with professional doorstep
              replacement in Hinjewadi. Choose from trusted brands with
              warranty and proper invoice.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-yellow-400 px-8 py-4 text-center font-bold text-black transition hover:bg-yellow-300"
              >
                Get Battery Price
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="rounded-xl border border-green-500 px-8 py-4 text-center font-bold text-green-400 transition hover:bg-green-500/10"
              >
                Call Now
              </a>

            </div>

            <p className="mt-5 text-sm text-gray-500">
              Doorstep service available across Hinjewadi and nearby areas.
            </p>

          </div>
        </section>
          {/* VEHICLE FINDER */}
<section className="bg-[#090909] py-12">
  <VehicleFinder />
</section>


        {/* TRUST */}
        <section className="border-y border-white/10 bg-[#0d0d0d]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">

            <div>
              <h2 className="font-bold text-white">
                Genuine Batteries
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Trusted battery brands.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-white">
                Doorstep Service
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Replacement at your location.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-white">
                Warranty Support
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Proper invoice and warranty.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-white">
                Fast Assistance
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Contact VoltShine for urgent help.
              </p>
            </div>

          </div>
        </section>

        {/* WHY CUSTOMER NEEDS US */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
            CAR BATTERY SERVICE
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Car Won't Start in Hinjewadi?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            A weak or dead battery can leave your car stranded before work,
            after office hours or while travelling. VoltShine provides
            doorstep battery replacement assistance in Hinjewadi.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">
                Slow Cranking
              </h3>
              <p className="mt-3 text-gray-400">
                If your engine takes longer than usual to start, your battery
                may be getting weak.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">
                Clicking Sound
              </h3>
              <p className="mt-3 text-gray-400">
                Repeated clicking when starting can indicate a battery or
                starting-system issue.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">
                Dead Battery
              </h3>
              <p className="mt-3 text-gray-400">
                If your car does not start, contact VoltShine for assistance.
              </p>
            </div>

          </div>

        </section>

        {/* BRANDS */}
        <section className="bg-[#0d0d0d] px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
              TRUSTED BRANDS
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Genuine Car Battery Brands
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              VoltShine works with trusted battery brands including Amaron,
              Exide, SF Sonic and Powerzone.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">

              {[
                ["Amaron", "/brands/battery/amaron.webp"],
                ["Exide", "/brands/battery/exide.webp"],
                ["SF Sonic", "/brands/battery/sf-sonic.webp"],
                ["Powerzone", "/brands/battery/powerzone.webp"],
              ].map(([name, logo]) => (
                <div
                  key={name}
                  className="flex h-32 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <img
                    src={logo}
                    alt={`${name} car battery`}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* SERVICE AREA */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
            SERVICE AREA
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Battery Service Around Hinjewadi
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-gray-400">
            VoltShine serves customers across Hinjewadi and nearby parts of
            Pune and PCMC. Contact us with your car model to check battery
            availability and service options.
          </p>

        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24">

          <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-400/20 bg-yellow-400 p-8 text-center md:p-12">

            <h2 className="text-3xl font-extrabold text-black md:text-4xl">
              Need a Car Battery in Hinjewadi?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-black/70">
              Send us your car make and model. We'll help you find the right
              battery option.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-xl bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-900"
            >
              WhatsApp VoltShine
            </a>

          </div>

        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}