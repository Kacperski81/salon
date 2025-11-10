"use client"

import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import HeroSection3 from "@/components/heroSection";
import Services5 from "@/components/services";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {

  return (
    <div className="text-center flex flex-col relative bg-[url(../../public/solidBg.jpg)] bg-(--main-400) bg-blend-multiply">
      <HeroSection3 />
      <AboutUs />
      <Services5 />
      <Testimonials />
      <Footer />
    </div>
  );
}
