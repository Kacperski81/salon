import AboutUs from "@/components/aboutUs";
import HeroSection from "@/components/heroSection";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="text-center flex flex-col gap-4 bg-[var(--bg-color)] min-h-screen">
      <HeroSection />
      <AboutUs />
      <Services />
    </div>
  );
}
