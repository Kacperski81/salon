import { Border2 } from "@/components/border";
import Carousel3, { CarouselItem } from "@/components/carousel/Carousel3";
import Footer from "@/components/footer";
import Services from "@/components/nail/services";
import Gallery from "@/components/nail/gallery";


const nailImages: CarouselItem[] = [
    { id: "1", imageUrl: './nails-gallery/zd21.jpg', alt: 'Nail Image 21' },
    { id: "2", imageUrl: './nails-gallery/zd1.jpg', alt: 'Nail Image 1' },
    { id: "3", imageUrl: './nails-gallery/zd2.jpg', alt: 'Nail Image 2' },
    { id: "4", imageUrl: './nails-gallery/zd3.jpg', alt: 'Nail Image 3' },
    { id: "5", imageUrl: './nails-gallery/zd4.jpg', alt: 'Nail Image 4' },
    { id: "6", imageUrl: './nails-gallery/zd5.jpg', alt: 'Nail Image 5' },
    { id: "7", imageUrl: './nails-gallery/zd6.jpg', alt: 'Nail Image 6' },
    { id: "8", imageUrl: './nails-gallery/zd7.jpg', alt: 'Nail Image 7' },
    { id: "9", imageUrl: './nails-gallery/zd8.jpg', alt: 'Nail Image 8' },
    { id: "10", imageUrl: './nails-gallery/zd9.jpg', alt: 'Nail Image 9' },
    { id: "11", imageUrl: './nails-gallery/zd10.jpg', alt: 'Nail Image 10' },
    { id: "12", imageUrl: './nails-gallery/zd11.jpg', alt: 'Nail Image 11' },
    { id: "13", imageUrl: './nails-gallery/zd12.jpg', alt: 'Nail Image 12' },
    { id: "14", imageUrl: './nails-gallery/zd13.jpg', alt: 'Nail Image 13' },
    { id: "15", imageUrl: './nails-gallery/zd14.jpg', alt: 'Nail Image 14' },
    { id: "16", imageUrl: './nails-gallery/zd15.jpg', alt: 'Nail Image 15' },
    { id: "17", imageUrl: './nails-gallery/zd16.jpg', alt: 'Nail Image 16' },
    { id: "18", imageUrl: './nails-gallery/zd17.jpg', alt: 'Nail Image 17' },
    { id: "19", imageUrl: './nails-gallery/zd18.jpg', alt: 'Nail Image 18' },
    { id: "20", imageUrl: './nails-gallery/zd19.jpg', alt: 'Nail Image 19' },
    { id: "21", imageUrl: './nails-gallery/zd20.jpg', alt: 'Nail Image 20' },
    { id: "22", imageUrl: './nails-gallery/zd21.jpg', alt: 'Nail Image 21' },
    { id: "23", imageUrl: './nails-gallery/zd1.jpg', alt: 'Nail Image 1' },
];

export default function Nails() {

    return (
        <div className="grow flex flex-col snap-y snap-start snap-always snap-proximity bg-(--main-400)">
            <Border2 />


            <Services />
            {/* <Carousel5 items={nailImages} /> */}
            <div className="hidden sm:block mx-auto w-[90vw] max-w-[1600px]">
                <Gallery items={nailImages} />

            </div>

            <div className="sm:hidden pb-4">
                <Carousel3 items={nailImages} />
            </div>

            <Footer />
        </div>
    )
}