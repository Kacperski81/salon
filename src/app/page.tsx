"use client"

import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import HeroSection3 from "@/components/heroSection";
import Services5 from "@/components/services";

export default function Home() {

  return (
    <div className="text-center flex flex-col gap-8 bg-(--main-400) relative">
      <HeroSection3 />
      <AboutUs />
      <Services5 />
      <Footer />
    </div>
  );
}
