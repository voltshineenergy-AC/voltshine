import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import VehicleFinder from "@/components/vehicle/VehicleFinder";
import WhyVoltshine from "@/components/home/WhyVoltshine";
import FeaturedServices from "@/components/home/FeaturedServices";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/common/ContactSection";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <VehicleFinder />

      <WhyVoltshine />

      <FeaturedServices />

      <Reviews />

      <FAQ />

      <ContactSection />

      <Footer />

      <FloatingButtons />
    </>
  );
}