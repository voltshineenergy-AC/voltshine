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

  const [loading, setLoading] = useState(false);

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

    setResult([]);
    setWindshields([]);
    setDetailingServices([]);

    setShowBattery(false);
    setShowDetailing(false);
    setShowWindshield(false);

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

    setLoading(true);

    setResult([]);
    setWindshields([]);
    setDetailingServices([]);

    setShowBattery(false);
    setShowDetailing(false);
    setShowWindshield(false);

    try {
      /* ================= BATTERY ================= */

      const battery = await getBattery(
        selectedMake,
        selectedModel,
        Number(selectedYear),
        selectedFuel
      );

      setResult(battery);

      /* ================= WINDSHIELD ================= */

      const glass = await getWindshield(
        selectedMake,
        selectedModel,
        Number(selectedYear)
      );

      setWindshields(glass);

      /* ================= BODY TYPE ================= */

      const bodyType = await getBodyType(
        selectedMake,
        selectedModel,
        Number(selectedYear),
        selectedFuel
      );

      console.log("BODY TYPE:", bodyType);

      /* ================= DETAILING ================= */

      if (bodyType) {
        const detailing = await getDetailingServices(bodyType);

        console.log("DETAILING DATA:", detailing);

        setDetailingServices(detailing);
      } else {
        setDetailingServices([]);
      }

      /* ================= SHOW DASHBOARD ================= */

      setTimeout(() => {
        dashboardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    } catch (error) {
      console.error("Search failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const isVehicleSelected =
    selectedMake &&
    selectedModel &&
    selectedYear &&
    selectedFuel;

  return (
    <section
      id="vehicle-finder"
      className="relative z-20 bg-[#090909] px-4 pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-16"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="text-center">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400 sm:text-sm sm:tracking-[5px]">
            VOLTSHINE VEHICLE FINDER
          </p>

          <h2 className="mt-3 text-[30px] font-extrabold leading-[1.1] text-white sm:text-4xl md:text-5xl">
            Find The Right
            <br />
            <span className="text-yellow-400">
              Solution For Your Car
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-5 text-gray-400 sm:text-lg sm:leading-7">
            Select your vehicle to find compatible battery,
            windshield and detailing services.
          </p>

        </div>

        {/* ================= FINDER BOX ================= */}

        <div className="mt-7 rounded-3xl border border-yellow-400/10 bg-[#151515] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:mt-10 sm:p-6 md:p-8">

          {/* ================= STEP HEADER ================= */}

          <div className="mb-5 flex items-center justify-between gap-3">

            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-yellow-400">
                Find Your Vehicle
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Make → Model → Year → Fuel
              </p>
            </div>

            <div className="hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-gray-400 sm:block">
              4 EASY STEPS
            </div>

          </div>

          {/* ================= SELECTORS ================= */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* MAKE */}

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                01 · Make
              </label>

              <select
                value={selectedMake}
                onChange={(e) => handleMake(e.target.value)}
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 text-[15px] font-semibold text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30"
              >
                <option value="">Select Make</option>

                {makes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {/* MODEL */}

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                02 · Model
              </label>

              <select
                value={selectedModel}
                onChange={(e) => handleModel(e.target.value)}
                disabled={!selectedMake}
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 text-[15px] font-semibold text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <option value="">
                  {selectedMake
                    ? "Select Model"
                    : "Select Make First"}
                </option>

                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* YEAR */}

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                03 · Year
              </label>

              <select
                value={selectedYear}
                onChange={(e) => handleYear(e.target.value)}
                disabled={!selectedModel}
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 text-[15px] font-semibold text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <option value="">
                  {selectedModel
                    ? "Select Year"
                    : "Select Model First"}
                </option>

                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* FUEL */}

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                04 · Fuel
              </label>

              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                disabled={!selectedYear}
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 text-[15px] font-semibold text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <option value="">
                  {selectedYear
                    ? "Select Fuel"
                    : "Select Year First"}
                </option>

                {fuels.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* ================= SEARCH BUTTON ================= */}

          <button
            onClick={handleSearch}
            disabled={!isVehicleSelected || loading}
            className="mt-5 h-14 w-full rounded-2xl bg-yellow-400 text-[15px] font-extrabold text-black shadow-[0_8px_30px_rgba(250,204,21,0.15)] transition active:scale-[0.98] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-yellow-400"
          >
            {loading ? "Finding Your Services..." : "Find My Solution →"}
          </button>

          {/* ================= SELECTED VEHICLE ================= */}

          {selectedMake && selectedModel && (
            <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-[#0d0d0d] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-xl">
                  🚗
                </div>

                <div className="min-w-0">

                  <p className="text-[9px] font-bold uppercase tracking-[2px] text-yellow-400">
                    SELECTED VEHICLE
                  </p>

                  <h3 className="mt-0.5 truncate text-base font-bold text-white sm:text-lg">
                    {selectedMake} {selectedModel}
                  </h3>

                  {selectedYear && selectedFuel && (
                    <p className="mt-0.5 text-xs text-gray-400">
                      {selectedYear} • {selectedFuel}
                    </p>
                  )}

                </div>

              </div>

            </div>
          )}

          {/* ================= SERVICE DASHBOARD ================= */}

          {(result.length > 0 ||
            windshields.length > 0 ||
            detailingServices.length > 0) && (
            <div
              ref={dashboardRef}
              className="mt-8 scroll-mt-6"
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

          {/* ================= BATTERY ================= */}

          {showBattery && result.length > 0 && (
            <div
              ref={batteryRef}
              className="mt-8 scroll-mt-6"
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

          {/* ================= DETAILING ================= */}

          {showDetailing &&
            detailingServices.length > 0 && (
              <div
                ref={detailingRef}
                className="mt-8 scroll-mt-6"
              >
                <DetailingSection
                  services={detailingServices}
                  make={selectedMake}
                  model={selectedModel}
                  year={selectedYear}
                />
              </div>
            )}

          {/* ================= WINDSHIELD ================= */}

          {showWindshield &&
            windshields.length > 0 && (
              <div
                ref={windshieldRef}
                className="mt-8 scroll-mt-6"
              >
                <WindshieldSection
                  windshields={windshields}
                  make={selectedMake}
                  model={selectedModel}
                  year={selectedYear}
                />
              </div>
            )}

        </div>
      </div>
    </section>
  );
}