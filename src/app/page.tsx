"use client"

import AboutUs from "@/components/aboutUs";
import HeroSection from "@/components/heroSection";
// import Services from "@/components/services";
import Services2 from "@/components/services2";
// import Services3 from "@/components/services3";
// import Services4 from "@/components/services4"

export default function Home() {
  return (
    <div className="text-center flex flex-col gap-8 bg-[var(--bg-color)] min-h-screen">
      <HeroSection />
      <AboutUs />
      {/* <Services /> */}
      <Services2 />
      {/* <Services3 /> */}
      {/* <Services4 /> */}
    </div>
  );
}
