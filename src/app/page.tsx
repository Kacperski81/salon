import AboutUs from "@/components/aboutUs";
import HeroSection from "@/components/heroSection";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="text-center grow-1">
      <HeroSection />
      <AboutUs />
      <Services />
    </div>
  );
}
