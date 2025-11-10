"use client";

import type { CarouselItem } from "@/components/carousel/Carousel3";
import PageHeading from "../PageHeading";
import { useState, useCallback, useLayoutEffect, useRef } from "react";
import LeftArrow from "../svgs/LeftArrow";
import RightArrow from "../svgs/RightArrow";

export default function Gallery2({ pictures2 }: { pictures2: CarouselItem[] }) {
    const pictures = pictures2.slice(1, pictures2.length - 1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false);
    const [containerDimensions, setContainerDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    
    const itemsPerPage = 4;
    
    // Create pages array
    const createPages = () => {
        const pages = [];
        for (let i = 0; i < pictures.length; i += itemsPerPage) {
            pages.push(pictures.slice(i, i + itemsPerPage));
        }
        return pages;
    };
    const pages = createPages();
    const totalPages = pages.length;

    // Check if we're on actual first or last page
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    // Navigation
    const navigate = (direction: 1 | -1) => {
        if (currentPage <= 0 && direction === -1) return;
        if (currentPage >= pages.length - 1 && direction === 1) return;
        setCurrentPage(prev => prev + direction);
    };

    const getContainerSize = useCallback(() => {
        const el = containerRef.current;
        if (el) {
            const width = el.offsetWidth;
            const height = el.offsetHeight;
            setContainerDimensions({ width, height });
            return { width, height };
        }
        return { width: 0, height: 0 };
    }, []);

    const getCarouselStyle = () => {
        return {
            transform: `translateX(-${containerDimensions.width * currentPage}px)`,
            transition: `${isSliderEnd ? 'none' : 'transform 500ms ease-in-out'}`
        };
    };

    const toggleTransition = () => {
        setIsSliderEnd(true);
        setTimeout(() => {
            setIsSliderEnd(false);
        }, 50);
    };

    const handleTransitionEnd = () => {
        if (currentPage === 0) {
            toggleTransition();
            setCurrentPage(pages.length - 2);
        }
        if (currentPage === pages.length - 1) {
            toggleTransition();
            setCurrentPage(1);
        }
    };

    useLayoutEffect(() => {
        getContainerSize();

        const roTarget = containerRef.current;
        if (!roTarget) return;

        const ro = new ResizeObserver(() => {
            getContainerSize();
        });
        ro.observe(roTarget);

        const onOrientation = () => getContainerSize();
        window.addEventListener('orientationchange', onOrientation);

        return () => {
            ro.disconnect();
            window.removeEventListener('orientationchange', onOrientation);
        };
    }, [getContainerSize]);

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

            <div className="flex flex-col justify-center items-center w-full px-4">

                <PageHeading title="GALLERY" />

                {/* Gallery Carousel Container */}
                <div ref={containerRef} className="w-full max-w-6xl relative overflow-hidden">
                    
                    {/* Gallery Slides */}
                    <div 
                        className="flex" 
                        style={getCarouselStyle()} 
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {pages.map((page, pageIndex) => (
                            <div 
                                key={pageIndex} 
                                className="min-w-full flex-shrink-0"
                            >
                                <div className="gallery border border-3 border-(--main-100) gap-(--gap)">
                                    {page.map((picture) => (
                                        <img 
                                            src={picture.imageUrl} 
                                            alt={picture.alt} 
                                            key={picture.id} 
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons - Conditionally Rendered */}
                    {!isFirstPage && (
                        <button 
                            className="block absolute top-0 bottom-0 cursor-pointer left-0 hover:bg-black/20 focus-visible:bg-black/20 transition-colors duration-500 ease-in-out px-4" 
                            onClick={() => navigate(-1)}
                        >
                            <LeftArrow />
                        </button>
                    )}
                    {!isLastPage && (
                        <button 
                            className="block absolute top-0 bottom-0 cursor-pointer right-0 hover:bg-black/20 focus-visible:bg-black/20 transition-colors duration-500 ease-in-out px-4" 
                            onClick={() => navigate(1)}
                        >
                            <RightArrow />
                        </button>
                    )}
                </div>

                {/* Page Indicator */}
                <div className="mt-4 text-(--main-50) font-medium">
                    Page {currentPage === 0 ? totalPages : currentPage === pages.length - 1 ? 1 : currentPage} / {totalPages}
                </div>
            </div>

        </section>
    )
}