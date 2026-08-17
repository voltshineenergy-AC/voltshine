"use client";

import { useEffect, useState, useRef } from "react";
import {
  getMakes,
  getModels,
  getYears,
  getFuels,
  getBattery,
  getBodyType,
} from "@/lib/vehicle";

import ServiceDashboard from "./ServiceDashboard";
import BatterySection from "./BatterySection";
import DetailingSection from "./DetailingSection";
import WindshieldSection from "./WindshieldSection";

import { getDetailingServices } from "@/lib/detailing";
import { getWindshield } from "@/lib/windshield";

export default function VehicleFinder() {
   const resultRef = useRef<HTMLDivElement>(null);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");

  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);

  const [result, setResult] = useState<any[]>([]);
  const [windshields, setWindshields] = useState<any[]>([]);
  const [detailingServices, setDetailingServices] = useState<any[]>([]);

  const [showBattery, setShowBattery] = useState(false);
  const [showDetailing, setShowDetailing] = useState(false);
  const [showWindshield, setShowWindshield] = useState(false);

  const dashboardRef = useRef<HTMLDivElement>(null);
  const batteryRef = useRef<HTMLDivElement>(null);
  const detailingRef = useRef<HTMLDivElement>(null);
  const windshieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMakes();
  }, []);

  async function loadMakes() {
    try {
      const data = await getMakes();
      setMakes(data);
    } catch (error) {
      console.error("Error loading makes:", error);
    }
  }

  async function handleMake(make: string) {
    setSelectedMake(make);

    setSelectedModel("");
    setSelectedYear("");
    setSelectedFuel("");

    setModels([]);
    setYears([]);
    setFuels([]);

    setResult([]);
    setWindshields([]);
    setDetailingServices([]);

    setShowBattery(false);
    setShowDetailing(false);
    setShowWindshield(false);

    if (!make) return;

    try {
      const data = await getModels(make);
      setModels(data);
    } catch (error) {
      console.error("Error loading models:", error);
    }
  }

   async function handleModel(model: string) {
  setSelectedModel(model);

  setSelectedYear("");
  setSelectedFuel("");

  setYears([]);
  setFuels([]);

  setResult([]);
  setWindshields([]);
  setDetailingServices([]);

  setShowBattery(false);
  setShowDetailing(false);
  setShowWindshield(false);

  if (!model) return;

  try {
    const data = await getYears(selectedMake, model);
    setYears(data);
  } catch (error) {
    console.error("Error loading years:", error);
  }
}


async function handleYear(year: string) {
  setSelectedYear(year);

  setSelectedFuel("");
  setFuels([]);

  if (!year) return;

  try {
    const data = await getFuels(
      selectedMake,
      selectedModel,
      Number(year)
    );

    setFuels(data);
  } catch (error) {
    console.error("Error loading fuels:", error);
  }
}


async function handleSearch() {
  if (
    !selectedMake ||
    !selectedModel ||
    !selectedYear ||
    !selectedFuel
  ) {
    alert("Please select all vehicle details.");
    return;
  }

  try {
    // 1. Battery
    const battery = await getBattery(
      selectedMake,
      selectedModel,
      Number(selectedYear),
      selectedFuel
    );

    setResult(battery);
    setShowBattery(false);

    // 2. Windshield
    const glass = await getWindshield(
      selectedMake,
      selectedModel,
      Number(selectedYear)
    );

    setWindshields(glass);
    setShowWindshield(false);

    // 3. Vehicle Body Type
    const bodyType = await getBodyType(
      selectedMake,
      selectedModel,
      Number(selectedYear),
      selectedFuel
    );

    console.log("BODY TYPE:", bodyType);

    // 4. Detailing Packages
    if (bodyType) {
      const detailing = await getDetailingServices(bodyType);

      console.log("DETAILING DATA:", detailing);

      setDetailingServices(detailing);
    } else {
      setDetailingServices([]);
    }

    setShowDetailing(false);
    setTimeout(() => {
  dashboardRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 500);

  } catch (error) {
    console.error("Search failed:", error);
  }
}
  

  return (
    <section
  id="vehicle-finder"
  className="relative z-20 -mt-40 pb-24"
>
  <div className="mx-auto max-w-6xl px-6 -translate-x-2">
  </div>


      <div className="mx-auto max-w-6xl px-6">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-yellow-400">
            VEHICLE FINDER
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Find Your Perfect Solution
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Select your vehicle and instantly check Battery,
            Windshield and Detailing services.
          </p>
        </div>

        {/* FINDER BOX */}
        <div className="rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.65)] backdrop-blur-3xl md:p-10">

          <div className="grid gap-4 lg:grid-cols-5">

            {/* MAKE */}
            <select
              value={selectedMake}
              onChange={(e) => handleMake(e.target.value)}
              className="h-14 rounded-2xl border border-white/10 bg-[#141414]/80 px-5 text-white"
            >
              <option value="">Select Make</option>

              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>

            {/* MODEL */}
            <select
              value={selectedModel}
              onChange={(e) => handleModel(e.target.value)}
              disabled={!selectedMake}
              className="h-14 rounded-2xl border border-white/10 bg-[#141414]/80 px-5 text-white disabled:opacity-50"
            >
              <option value="">Select Model</option>

              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>

            {/* YEAR */}
            <select
              value={selectedYear}
              onChange={(e) => handleYear(e.target.value)}
              disabled={!selectedModel}
              className="h-14 rounded-2xl border border-white/10 bg-[#141414]/80 px-5 text-white disabled:opacity-50"
            >
              <option value="">Select Year</option>

              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* FUEL */}
            <select
              value={selectedFuel}
              onChange={(e) => setSelectedFuel(e.target.value)}
              disabled={!selectedYear}
              className="h-14 rounded-2xl border border-white/10 bg-[#141414]/80 px-5 text-white disabled:opacity-50"
            >
              <option value="">Select Fuel</option>

              {fuels.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>

            {/* SEARCH */}
            <button
              onClick={handleSearch}
              className="h-14 rounded-2xl bg-yellow-400 font-bold text-black transition hover:bg-yellow-300"
            >
              Find My Solution
            </button>

          </div>

          {/* SELECTED VEHICLE */}
          {selectedMake && selectedModel && (
            <div className="mt-8 overflow-hidden rounded-3xl border border-yellow-400/20 bg-[#151515]">
              <div className="grid items-center gap-6 p-6 md:grid-cols-2">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
                    SELECTED VEHICLE
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {selectedMake} {selectedModel}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {selectedYear && selectedFuel
                      ? `${selectedYear} • ${selectedFuel}`
                      : "Your selected vehicle"}
                  </p>
                </div>

                <div className="flex h-56 items-center justify-center">
                  <img
                    src="/vehicles/maruti-suzuki-swift.webp.png"
                    alt={`${selectedMake} ${selectedModel}`}
                    className="h-full w-full object-contain"
                  />
                </div>

              </div>
            </div>
          )}

           {/* SERVICE DASHBOARD */}
{(result.length > 0 ||
  windshields.length > 0 ||
  detailingServices.length > 0) && (

  <div
    ref={dashboardRef}
    className="scroll-mt-24"
  >
    <ServiceDashboard
      batteryCount={result.length}
      windshieldCount={windshields.length}

      onBatteryClick={() => {
        setShowBattery(true);
        setShowDetailing(false);
        setShowWindshield(false);

        setTimeout(() => {
          batteryRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }}

      onDetailingClick={() => {
  console.log("DETAILING CLICKED");
  console.log("DETAILING DATA:", detailingServices);
        setShowBattery(false);
        setShowDetailing(true);
        setShowWindshield(false);

        setTimeout(() => {
          detailingRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }}

      onWindshieldClick={() => {
        setShowBattery(false);
        setShowDetailing(false);
        setShowWindshield(true);

        setTimeout(() => {
          windshieldRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }}
    />
  </div>
)}
          {/* BATTERY */}
          {showBattery && result.length > 0 && (
             <div
  id="all-batteries"
  className="mt-8 scroll-mt-24"
>
              <BatterySection
                batteries={result}
                make={selectedMake}
                model={selectedModel}
                year={selectedYear}
                fuel={selectedFuel}
              />
            </div>
          )}

          {/* DETAILING */}
          {showDetailing && detailingServices.length > 0 && (
            <div
  ref={detailingRef}
  className="mt-8 scroll-mt-24"
>
              <DetailingSection
                services={detailingServices}
              />
            </div>
          )}

          {/* WINDSHIELD */}
          {showWindshield && windshields.length > 0 && (
            <div
  ref={windshieldRef}
  className="mt-8 scroll-mt-24"
>
              <WindshieldSection
                windshields={windshields}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}