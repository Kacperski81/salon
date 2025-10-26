"use client"

import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import HeroSection3 from "@/components/heroSection";
import Services5 from "@/components/services";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {

  return (
    <div className="text-center flex flex-col gap-8 bg-(--main-400) relative">
      <HeroSection3 />
      <AboutUs />
      <Services5 />
      <Testimonials />
      <Footer />
    </div>
  );
}
