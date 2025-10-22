"use client"

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";

export type CarouselItem = {
    id: string;
    imageUrl: string;
    alt: string;
}

type Props = {
    items: CarouselItem[];
    item: CarouselItem;
}

export default function LightBoxCarousel({ items, item }: Props) {
    const initialIndex = items.findIndex(i => i.id === item.id);
    const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);
    const [containerDimensions, setContainerDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const imageRef = useRef<HTMLImageElement>(null);

    // navigation
    const navigate = (number: 1 | -1) => {
        if (selectedIndex <= 0 && number === -1) return;
        if (selectedIndex >= items.length - 1 && number === 1) return;
        setSelectedIndex(prevIndex => prevIndex + number);
    }

    const getImageSize = useCallback(() => {
        if (imageRef.current) {
            const width = imageRef.current.offsetWidth;
            const height = imageRef.current.offsetHeight;
            setContainerDimensions({ width, height });
            return { width, height }
        }
        return { width: 0, height: 0 }
    }, []);

    const getCarouselStyle = () => {

        return {
            transform: `translateX(-${containerDimensions.width * selectedIndex}px)`,
            transition: `${isSliderEnd ? 'none' : 'transform 500ms ease-in-out'}`
        }
    }

    const toggleTransition = () => {
        setIsSliderEnd(true)

        setTimeout(() => {
            setIsSliderEnd(false)
        }, 50)
    }

    const handleTransitionEnd = () => {
        console.log('transition end')
        if (selectedIndex === 0) {
            toggleTransition();
            setSelectedIndex(items.length - 2)
        }
        if (selectedIndex === items.length - 1) {
            toggleTransition();
            setSelectedIndex(1);
        }
        console.log(selectedIndex)
    }

    useEffect(() => {
        const initialDims = getImageSize();
        toggleTransition();
        console.log(initialDims)
    }, []);


    return (
        <section className="">

            {/* Carousel container */}
            <div className="w-[550px] h-auto mx-auto overflow-clip relative shadow-xl">

                {/* Carousel slide */}
                <div className="w-full h-full flex" style={getCarouselStyle()} onTransitionEnd={handleTransitionEnd}>
                    {items.map((item) => {
                        return (
                            <img key={item.id} ref={imageRef} src={item.imageUrl} alt={item.alt} />
                                
                        )
                    })}
                </div>
                {/* Buttons */}
                <div className="">
                    <button className="block absolute top-0 bottom-0 cursor-pointer left-0 hover:bg-black/20 focus-visible:bg-black/20 transition-colors duration-500 ease-in-out" onClick={() => navigate(-1)}>
                        <ArrowBigLeft className="hover:animate-[squish_300ms_ease-in-out] focus-visible:animate-[squish_300ms_ease-in-out]" stroke="white" fill="black" width="2rem" height="2rem" />
                    </button>
                    <button className="block absolute top-0 bottom-0 cursor-pointer right-0 hover:bg-black/20 focus-visible:bg-black/20 transition-colors duration-500 ease-in-out" onClick={() => navigate(1)}>
                        <ArrowBigRight className="hover:animate-[squish_300ms_ease-in-out] focus-visible:animate-[squish_300ms_ease-in-out]" stroke="white" fill="black" width="2rem" height="2rem" />
                    </button>
                </div>
            </div>

        </section>
    )
}