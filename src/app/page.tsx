import AboutUs from "@/components/aboutUs";
import HeroSection from "@/components/heroSection";
// import Services from "@/components/services";
import Services2 from "@/components/services2";

export default function Home() {
  return (
    <div className="text-center flex flex-col gap-8 bg-[var(--bg-color)] min-h-screen">
      <HeroSection />
      <AboutUs />
      {/* <Services /> */}
      <Services2 />
    </div>
  );
}
