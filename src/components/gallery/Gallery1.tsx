"use client";

import type { CarouselItem } from "@/app/types";
import PageHeading from "../PageHeading";
import { useState } from "react";

export default function Gallery1({ pictures }: { pictures: CarouselItem[] }) {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(pictures.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const picturesSlice = pictures.slice(startIndex, endIndex);
    console.log(picturesSlice);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    }


    return (
        <section className="snap-start
            min-h-dvh 
            xl:min-h-screen 
            grow-1
            bg-(--main-300)
            bg-[url(../../public/nailBg.png)]
            bg-cover
            bg-no-repeat
            bg-blend-multiply 
            flex justify-center items-center
            gap-4">

            <div className="flex flex-col justify-center items-center">

                <PageHeading title="GALLERY" />

                {/* Gallery */}
                <div className="gallery gap-(--gap)">
                    {picturesSlice.map((picture) => {
                        return (
                            <img src={picture.imageUrl} alt={picture.alt} key={picture.id} 
                                className="shadow-lg rounded-lg"
                            />
                        )
                    })}
                </div>

                {/* <GalleryControls /> */}
                <div>
                    <button
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>

        </section>
    )
}