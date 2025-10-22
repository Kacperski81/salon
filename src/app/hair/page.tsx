"use client"

import { Border2 } from "@/components/border";
import Services from "@/components/hair/services";
import Treatments from "@/components/hair/treatments";
import Carousel3, { CarouselItem } from "@/components/carousel/Carousel3";
import Footer from "@/components/footer";
import Gallery from "@/components/nail/gallery";

const hairImages: CarouselItem[] = [
    { id: "1", imageUrl: './hair-gallery/zd8.jpg', alt: 'Hair Image 8' },
    { id: "2", imageUrl: './hair-gallery/zd1.jpg', alt: 'Hair Image 1' },
    { id: "3", imageUrl: './hair-gallery/zd2.jpg', alt: 'Hair Image 2' },
    { id: "4", imageUrl: './hair-gallery/zd3.jpg', alt: 'Hair Image 3' },
    { id: "5", imageUrl: './hair-gallery/zd4.jpg', alt: 'Hair Image 4' },
    { id: "6", imageUrl: './hair-gallery/zd5.jpg', alt: 'Hair Image 5' },
    { id: "7", imageUrl: './hair-gallery/zd6.jpg', alt: 'Hair Image 6' },
    { id: "8", imageUrl: './hair-gallery/zd7.jpg', alt: 'Hair Image 7' },
    { id: "9", imageUrl: './hair-gallery/zd8.jpg', alt: 'Hair Image 8' },
    { id: "10", imageUrl: './hair-gallery/zd1.jpg', alt: 'Hair Image 1' },
];

export default function Hair() {


    return (
        <div className="grow flex flex-col bg-(--main-400)">

            <Border2 />
            <Services />
            <Treatments />

            <div className="hidden sm:block mx-auto w-[90vw] max-w-[1600px]">
                <Gallery items={hairImages} images={9} />
            </div>

            <div className="sm:hidden pb-4">
                <Carousel3 items={hairImages} />
            </div>
            <Footer />
        </div>
    )
}