"use client"

import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import HeroSection3 from "@/components/heroSection3";
import Services5 from "@/components/services5";
// import { useState, useEffect } from "react";

export default function Home() {
  // const [activeSection, setActiveSection] = useState("hero");

  // useEffect(() => {

  //   const handleScroll = () => {
  //     const sections = ["hero", "about", "services", "footer"];
  //     const scrollPosition = window.scrollY + 100;

  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const offsetTop = element.offsetTop;
  //         const offsetBottom = offsetTop + element.offsetHeight;
  //         if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
  //           setActiveSection(section);
  //           break;
  //         }
  //       }
  //     }
  //   };


  //   // 6. Cleanup: remove both listeners when the component unmounts.
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [])

  return (
    <div className="snap-y snap-mandatory text-center flex flex-col gap-8 bg-(--main-400) relative">
      <HeroSection3 />
      <AboutUs />
      <Services5 />
      <Footer />
    </div>
  );
}
