"use client"

import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
// import Services from "@/components/services";
import Services2 from "@/components/services2";
// import Services3 from "@/components/services3";
// import Services4 from "@/components/services4"
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "footer"];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }


        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="text-center flex flex-col gap-8 bg-[var(--bg-color)] min-h-screen relative">
      <HeroSection />
      <AboutUs />
      {/* <Services /> */}
      <Services2 />
      {/* <Services3 /> */}
      {/* <Services4 /> */}
      <Footer />
    </div>
  );
}
