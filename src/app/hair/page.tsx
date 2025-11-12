"use client"

import { Border2 } from "@/components/border";
import Services from "@/components/hair/HairServices";
import Treatments from "@/components/hair/HairTreatments"
// import Carousel3 from "@/components/carousel/Carousel3";
import type { CarouselItem } from "@/app/types";
import { getHairCarouselImages } from "@/app/lib/hairCarouselImages";
import Footer from "@/components/footer";
// import Gallery from "@/components/nail/gallery";
import Gallery4 from "@/components/gallery/Gallery4";
import background from "../../../public/solidBg.jpg";
import bg from "../../../public/solidBg.jpg"
import MobileGallery from "../../components/gallery/MobileGallery";
import LogoScroller from "@/components/hair/LogoScroller";
import Offers from "@/components/hair/Offers";
import Section from "@/components/Section";

export default function Hair() {
    const hairImages: CarouselItem[] = getHairCarouselImages();

    return (
        <div
            className="grow flex flex-col text-center"
        >

            <Border2 />
            <Services />
            <Treatments />

            {/* Mobile gallery */}
            <div className="xl:hidden">
                <MobileGallery pictures={hairImages} />
            </div>

            {/* Desktop gallery */}
            <div className="hidden xl:block">
                <Gallery4 pictures4={hairImages} background={background} />
            </div>

            <section
                className="xl:min-h-screen bg-[url('/mainBg.jpg')] bg-cover bg-(--main-200) bg-blend-multiply flex flex-col gap-4">
                    <LogoScroller />
                    <Offers />

            </section>

            <Footer />
        </div>
    )
}