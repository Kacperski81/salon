"use client"

import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
// import HeroSection from "@/components/heroSection";
// import HeroSection2 from "@/components/heroSection2";
import HeroSection3 from "@/components/heroSection3";
import Services5 from "@/components/services5";
// import Services from "@/components/services";
// import Services2 from "@/components/services2";
// import Services3 from "@/components/services3";
// import Services4 from "@/components/services4"
import { useState, useEffect } from "react";

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
    <div className="snap-y snap-mandatory text-center flex flex-col gap-8 bg-(--main-100) min-h-screen relative">
      {/* <HeroSection /> */}
      {/* <HeroSection2 /> */}
      <HeroSection3 />
      <AboutUs />
      {/* <Services /> */}
      {/* <Services2 /> */}
      {/* <Services3 /> */}
      {/* <Services4 /> */}
      <Services5 />
      <Footer />
    </div>
  );
}
