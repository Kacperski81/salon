"use client"

import { Border2 } from "@/components/border";
import Services from "@/components/hair/services";
import Treatments from "@/components/hair/treatments";
import Carousel3, { CarouselItem } from "@/components/carousel/Carousel3";
import Footer from "@/components/footer";
import Gallery from "@/components/nail/gallery";

const hairImages: CarouselItem[] = [
    { id: "1", imageUrl: './hair-gallery/zd35.jpg', alt: 'Hair Image 35' },
    { id: "2", imageUrl: './hair-gallery/zd1.jpg', alt: 'Hair Image 1' },
    { id: "3", imageUrl: './hair-gallery/zd2.jpg', alt: 'Hair Image 2' },
    { id: "4", imageUrl: './hair-gallery/zd3.jpg', alt: 'Hair Image 3' },
    { id: "5", imageUrl: './hair-gallery/zd4.jpg', alt: 'Hair Image 4' },
    { id: "6", imageUrl: './hair-gallery/zd5.jpg', alt: 'Hair Image 5' },
    { id: "7", imageUrl: './hair-gallery/zd6.jpg', alt: 'Hair Image 6' },
    { id: "8", imageUrl: './hair-gallery/zd7.jpg', alt: 'Hair Image 7' },
    { id: "9", imageUrl: './hair-gallery/zd8.jpg', alt: 'Hair Image 8' },
    { id: "10", imageUrl: './hair-gallery/zd9.jpg', alt: 'Hair Image 9' },
    { id: "11", imageUrl: './hair-gallery/zd10.jpg', alt: 'Hair Image 10' },
    { id: "12", imageUrl: './hair-gallery/zd11.jpg', alt: 'Hair Image 11' },
    { id: "13", imageUrl: './hair-gallery/zd12.jpg', alt: 'Hair Image 12' },
    { id: "14", imageUrl: './hair-gallery/zd13.jpg', alt: 'Hair Image 13' },
    { id: "15", imageUrl: './hair-gallery/zd14.jpg', alt: 'Hair Image 14' },
    { id: "16", imageUrl: './hair-gallery/zd15.jpg', alt: 'Hair Image 15' },
    { id: "17", imageUrl: './hair-gallery/zd16.jpg', alt: 'Hair Image 16' },
    { id: "18", imageUrl: './hair-gallery/zd17.jpg', alt: 'Hair Image 17' },
    { id: "19", imageUrl: './hair-gallery/zd18.jpg', alt: 'Hair Image 18' },
    { id: "20", imageUrl: './hair-gallery/zd19.jpg', alt: 'Hair Image 19' },
    { id: "21", imageUrl: './hair-gallery/zd20.jpg', alt: 'Hair Image 20' },
    { id: "22", imageUrl: './hair-gallery/zd21.jpg', alt: 'Hair Image 21' },
    { id: "23", imageUrl: './hair-gallery/zd22.jpg', alt: 'Hair Image 22' },
    { id: "24", imageUrl: './hair-gallery/zd23.jpg', alt: 'Hair Image 23' },
    { id: "25", imageUrl: './hair-gallery/zd24.jpg', alt: 'Hair Image 24' },
    { id: "26", imageUrl: './hair-gallery/zd25.jpg', alt: 'Hair Image 25' },
    { id: "27", imageUrl: './hair-gallery/zd26.jpg', alt: 'Hair Image 26' },
    { id: "28", imageUrl: './hair-gallery/zd27.jpg', alt: 'Hair Image 27' },
    { id: "29", imageUrl: './hair-gallery/zd28.jpg', alt: 'Hair Image 28' },
    { id: "30", imageUrl: './hair-gallery/zd29.jpg', alt: 'Hair Image 29' },
    { id: "31", imageUrl: './hair-gallery/zd30.jpg', alt: 'Hair Image 30' },
    { id: "32", imageUrl: './hair-gallery/zd31.jpg', alt: 'Hair Image 31' },
    { id: "33", imageUrl: './hair-gallery/zd32.jpg', alt: 'Hair Image 32' },
    { id: "34", imageUrl: './hair-gallery/zd33.jpg', alt: 'Hair Image 33' },
    { id: "35", imageUrl: './hair-gallery/zd34.jpg', alt: 'Hair Image 34' },
    { id: "36", imageUrl: './hair-gallery/zd35.jpg', alt: 'Hair Image 35' },
    { id: "36", imageUrl: './hair-gallery/zd1.jpg', alt: 'Hair Image 1' },
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