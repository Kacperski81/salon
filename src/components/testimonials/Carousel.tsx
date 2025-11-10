"use client"

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import LeftArrow from "../svgs/LeftArrow";
import RightArrow from "../svgs/RightArrow";
import Testimonial from "./testimonial";
import StarIconSVG from "../svgs/StarIconSVG";
import { Star } from "lucide-react";

export type Testimonial = {
    id: number;
    reviewer: string;
    content: string;
    backgroundImage: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        reviewer: "Olga Tielly",
        content: "Magda’s been looking after my hair for few years now! I love how attentive she is, always listens to what I want, and takes time to achieve my vision! She is very professional,  friendly and treats my hair with lots of care!",
        backgroundImage: "/hair-gallery/testimonial3.webp",
        rating: 5,
    },
    {
        id: 2,
        reviewer: "Rebecca Latham",
        content: "I couldn’t be happier with the service! The haircut is always perfect, and the colour is exactly the shade I want every single time – truly the best hairdresser in London. Magda is warm, friendly, and pays great attention to detail. I always leave feeling confident and well taken care of. Highly recommend!",
        backgroundImage: "/hair-gallery/testimonial1.webp",
        rating: 5,
    },
    {
        id: 3,
        reviewer: "Elaine Robinson",
        content: "I highly recommend this wonderful hair salon, a warm and friendly welcome and I’m always delighted with my highlights and haircut. Magda is highly experienced and professional, she always allows plenty of time for advice and discussion and uses quality products. My hair has never been in better condition.",
        backgroundImage: "/hair-gallery/testimonial2.webp",
        rating: 5,
    },
    {
        id: 4,
        reviewer: "Olga Tielly",
        content: "Magda’s been looking after my hair for few years now! I love how attentive she is, always listens to what I want, and takes time to achieve my vision! She is very professional,  friendly and treats my hair with lots of care!",
        backgroundImage: "/hair-gallery/testimonial3.webp",
        rating: 5,
    },
    {
        id: 5,
        reviewer: "Rebecca Latham",
        content: "I couldn’t be happier with the service! The haircut is always perfect, and the colour is exactly the shade I want every single time – truly the best hairdresser in London. Magda is warm, friendly, and pays great attention to detail. I always leave feeling confident and well taken care of. Highly recommend!",
        backgroundImage: "/hair-gallery/testimonial1.webp",
        rating: 5,
    },
]

export default function Carousel() {
    const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const [containerDimensions, setContainerDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // navigation
    const navigate = (number: 1 | -1) => {
        if (selectedIndex <= 0 && number === -1) return;
        if (selectedIndex >= testimonials.length - 1 && number === 1) return;
        setSelectedIndex(prevIndex => prevIndex + number);
    }

    const getImageSize = useCallback(() => {
        const el = containerRef.current
        if (el) {
            const width = el.offsetWidth;
            const height = el.offsetHeight;
            setContainerDimensions({ width, height });
            console.log({ width, height })
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
            setSelectedIndex(testimonials.length - 2)
        }
        if (selectedIndex === testimonials.length - 1) {
            toggleTransition();
            setSelectedIndex(1);
        }
        console.log(selectedIndex)
    }

    useLayoutEffect(() => {

        getImageSize();

        const roTarget = containerRef.current;
        if (!roTarget) return;

        const ro = new ResizeObserver(() => {
            getImageSize();
        });
        ro.observe(roTarget);

        const onOrientation = () => getImageSize();
        window.addEventListener('orientationchange', onOrientation);

        return () => {
            ro.disconnect();
            window.removeEventListener('orientationchange', onOrientation);
        }
    }, [getImageSize]);

    // ensure we re-measure when images load (handles slow network / first paint)
    // useEffect(() => {
    //     const divs = containerRef.current?.querySelectorAll('.testimonial-slide') ?? [];
    //     const onLoad = () => getImageSize();
    //     divs.forEach(div => div.addEventListener('load', onLoad));
    //     return () => divs.forEach(div => div.removeEventListener('load', onLoad));
    // }, [testimonials, getImageSize]);


    return (

        // Carousel Container
        <div ref={containerRef} className="grow flex relative overflow-hidden max-h-[75dvh]">

            {/* Carousel Slide */}
            <div className="w-full h-full flex" style={getCarouselStyle()} onTransitionEnd={handleTransitionEnd}>


                {testimonials.map((testimonial) => {
                    return (
                        <div key={testimonial.id}
                            style={{
                                backgroundImage: `url(${testimonial.backgroundImage})`,
                                backgroundPosition: `${testimonial.id === 1 || 4 ? 'top' : 'bottom'}`
                            }}
                            className="
                            min-w-full
                            max-w-[700px]
                            relative
                            bg-cover
                            bg-no-repeat
                            flex
                            p-2
                            justify-center
                            items-center
                            rounded-2xl
                            overflow-hidden">
                            <div className="
                                rounded-md
                                px-4
                                py-2
                                isolate
                                z-1
                                testimonial
                                backdrop-blur-[2px]
                                text-(--main-50)
                                bg-(--main-400)/40
                                hover:bg-(--main-400)/80
                                transition-all
                                duration-500
                                ease-in-out
                                w-3/4
                                ">
                                <div className="flex gap-1 mb-2 justify-center">
                                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                                        <StarIconSVG key={index} />
                                    ))}
                                </div>
                                <blockquote className="mb-4">
                                    <p className="text-[var(--main-50)] text-sm lg:text-base leading-relaxed font-light">&ldquo;{testimonial.content}&rdquo;</p>
                                </blockquote>

                                {/* Reviewer Name with Accent Line */}
                                <div className="flex items-center gap-3 justify-end">
                                    <div className="hidden h-px md:w-8 bg-[var(--yellow-300)]" />
                                    <cite className="not-italic text-[var(--main-100)] font-medium text-sm lg:text-base">{testimonial.reviewer}</cite>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* Buttons */}
            <div className="">
                <button className="block absolute top-0 bottom-0 cursor-pointer left-0 hover:bg-black/20 focus-visible:bg-black/20 transition-colors duration-500 ease-in-out" onClick={() => navigate(-1)}>
                    <LeftArrow />
                </button>
                <button className="block absolute top-0 bottom-0 cursor-pointer right-0 hover:bg-black/20 focus-visible:bg-black/20 transition-colors duration-500 ease-in-out" onClick={() => navigate(1)}>
                    <RightArrow />
                </button>
            </div>
        </div >
    )
}