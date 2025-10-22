"use client"

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import LeftArrow from "../svgs/LeftArrow";
import RightArrow from "../svgs/RightArrow";

export type CarouselItem = {
    id: string;
    imageUrl: string;
    alt: string;
}

type Props = {
    items: CarouselItem[];
}

export default function Carousel3({ items }: Props) {
    const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const [containerDimensions, setContainerDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // navigation
    const navigate = (number: 1 | -1) => {
        if (selectedIndex <= 0 && number === -1) return;
        if (selectedIndex >= items.length - 1 && number === 1) return;
        setSelectedIndex(prevIndex => prevIndex + number);
    }

    const getImageSize = useCallback(() => {
        const el = containerRef.current
        if (el) {
            const width = el.offsetWidth;
            const height = el.offsetHeight;
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
    useEffect(() => {
        const imgs = containerRef.current?.querySelectorAll('img') ?? [];
        const onLoad = () => getImageSize();
        imgs.forEach(img => img.addEventListener('load', onLoad));
        return () => imgs.forEach(img => img.removeEventListener('load', onLoad));
    }, [items, getImageSize]);



    return (
        <section className="
            xl:snap-start
            min-h-dvh 
            xl:min-h-screen 
            grow-1
            flex
            flex-col
            gap-8 
            bg-(--main-400)
            px-4
            mt-10
            items-center
            justify-center
        ">

            {/* Heading */}
            <h2 className="
                mx-auto           
                font-(family-name:--font-aboreto) 
                self-center
                justify-self-start  
                px-10
                pb-1 
                text-2xl 
                text-(--main-100) 
                uppercase
                tracking-widest">GALLERY
            </h2>

            {/* Carousel container */}
            <div ref={containerRef} className="min-w-[300px] h-auto mx-auto overflow-clip relative shadow-xl flex ">

                {/* Carousel slide */}
                <div className="w-full h-full flex" style={getCarouselStyle()} onTransitionEnd={handleTransitionEnd}>
                    {items.map((item) => {
                        return (
                            <img key={item.id} src={item.imageUrl} alt={item.alt} />

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
            </div>

        </section>
    )
}