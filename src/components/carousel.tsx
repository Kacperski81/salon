"use client"

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

type CarouselData = {
    id: number;
    imageSrc: string;
    altText: string;
}

const carouselData: CarouselData[] = [
    {
        id: 1,
        imageSrc: "/bg1.jpg",
        altText: "Image1"
    },
    {
        id: 2,
        imageSrc: "/bg2.jpg",
        altText: "Image2"
    },
    {
        id: 3,
        imageSrc: "/bg3.jpg",
        altText: "Image3"
    },
]

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function showNextImage() {
        setCurrentIndex(index => {
            if (index === carouselData.length - 1) return 0;
            return index + 1;
        })
    }
    function showPrevImage() {
        setCurrentIndex(index => {
            if (index === 0) return carouselData.length - 1;
            return index - 1;
        })
    }


    return (
        <section className="
            snap-start
            min-h-dvh 
            xl:min-h-screen
            grow-1 
            flex 
            bg-(--main-400)
            items-start
            justify-center
            ">
            <div className="flex flex-col mt-16 gap-4">
                <h2 className="
                        text-center
                        font-(family-name:--font-aboreto) 
                        self-center 
                        pb-2 
                        px-10 
                        text-2xl 
                        text-(--main-100)
                        uppercase
                        tracking-widest
                        ">
                    GALLERY
                </h2>
                <div className="grow max-w-[1200px] w-full h-[500px] md:h-[70dvh]">

                    <div className="w-full h-full bg-red-500 relative">
                        <div className="w-full h-full flex overflow-hidden">
                            {carouselData.map((item) => {
                                return (
                                    // <></>
                                    <img key={item.id} src={item.imageSrc} alt="image slide picture" className="object-cover w-full h-full shrink-0 grow-0 block object-top transition-translate ease-in-out duration-900" style={{ translate: `${-100 * currentIndex}%` }} />

                                )
                            })}
                        </div>

                        <button onClick={showPrevImage} className="block absolute top-0 bottom-0 left-0 p-1 cursor-pointer hover:bg-(--main-700)/10 transition-color duration-400 ease-in-out">
                            <ArrowLeft width={30} height={30} stroke="var(--main-50)" />
                        </button>

                        <button onClick={showNextImage} className="block absolute top-0 bottom-0 right-0 p-1 cursor-pointer hover:bg-(--main-700)/10 transition-color duration-400 ease-in-out">
                            <ArrowRight width={30} height={30} stroke="var(--main-50)" />
                        </button>
                        <div className="absolute bottom-[.5rem] left-1/2 -translate-x-1/2 flex gap-1">
                            {carouselData.map((_, index) => (
                                <button key={index} className="" onClick={() => setCurrentIndex(index)}>{index}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}