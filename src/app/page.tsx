import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import VehicleFinder from "@/components/vehicle/VehicleFinder";
import WhyVoltshine from "@/components/home/WhyVoltshine";
import BrandsSection from "@/components/home/BrandsSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VehicleFinder />
      <WhyVoltshine />
      <BrandsSection />
      <FeaturedServices />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </>
  );
}