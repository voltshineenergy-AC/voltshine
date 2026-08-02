import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import VehicleFinder from "@/components/vehicle/VehicleFinder";
import WhyVoltshine from "@/components/home/WhyVoltshine";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VehicleFinder />
      <WhyVoltshine />
    </>
  );
}