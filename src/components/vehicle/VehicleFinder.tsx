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
import { getDetailingServices } from "@/lib/detailing";
import { getWindshield } from "@/lib/windshield";
import WindshieldSection from "./WindshieldSection";

export default function VehicleFinder() {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");

  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [showBattery, setShowBattery] = useState(false);
  const [detailingServices, setDetailingServices] = useState<any[]>([]);
const [showDetailing, setShowDetailing] = useState(false);
const [windshields, setWindshields] = useState<any[]>([]);
const [showWindshield, setShowWindshield] = useState(false);
const resultRef = useRef<HTMLDivElement>(null);

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

    if (!make) return;

    const data = await getModels(make);
    setModels(data);
  }
    async function handleModel(model: string) {
    setSelectedModel(model);

    setSelectedYear("");
    setSelectedFuel("");

    setYears([]);
    setFuels([]);

    if (!model) return;

    const data = await getYears(selectedMake, model);
    setYears(data);
  }

  async function handleYear(year: string) {
    setSelectedYear(year);

    setSelectedFuel("");

    setFuels([]);

    if (!year) return;

    const data = await getFuels(
      selectedMake,
      selectedModel,
      Number(year)
    );

    setFuels(data);
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
    const battery = await getBattery(
      selectedMake,
      selectedModel,
      Number(selectedYear),
      
      selectedFuel
    );
  setResult(battery);
setShowBattery(false);
setShowDetailing(false);

const glass = await getWindshield(
  selectedMake,
  selectedModel,
  Number(selectedYear)
);

setWindshields(glass);
setShowWindshield(false);
setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 300);

// Get Body Type
const bodyType = await getBodyType(
  selectedMake,
  selectedModel,
  Number(selectedYear),
  selectedFuel
);

if (bodyType) {
  const services = await getDetailingServices(bodyType);
  console.log("Services =", services);
  setDetailingServices(services);
} else {
  setDetailingServices([]);
}

console.log("Battery =", battery);
console.log("Body Type =", bodyType);

  } catch (error) {
    alert("Battery not found.");
    console.error(error);
  }
}

  return (
        <section className="relative -mt-40 z-20 pb-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-yellow-400">
            VEHICLE FINDER
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Find Your Perfect Solution
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Select your vehicle and instantly check Battery,
            Windshield and Detailing services.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,0.65)] p-10">

          <div className="grid gap-4 lg:grid-cols-5">

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

            <button
              onClick={handleSearch}
              className="h-14 rounded-2xl bg-yellow-400 font-bold text-black hover:bg-yellow-300"
            >
              Find My Solution
            </button>

          </div>
<div ref={resultRef}></div>
{(result.length > 0 || detailingServices.length > 0) && (
 <ServiceDashboard
  batteryCount={result.length}
  windshieldCount={windshields.length}
  onBatteryClick={() => setShowBattery(!showBattery)}
  onDetailingClick={() => {
    console.log("Detailing Button Clicked");
    setShowDetailing(true);
  }}
  onWindshieldClick={() => {
    console.log("Windshield Button Clicked");
    setShowWindshield(true);
  }}
/>
)}
{showBattery && (
<BatterySection
  batteries={result}
  make={selectedMake}
  model={selectedModel}
  year={selectedYear}
  fuel={selectedFuel}
/>
)}
{showDetailing && (
  <DetailingSection services={detailingServices} />
)}
{showWindshield && (
  <WindshieldSection windshields={windshields} />
)}
        </div>
      </div>
    </section>
  );
}