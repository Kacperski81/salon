"use client"

import { useState, useEffect, useCallback, useRef } from "react";

type CarouselCell = {
    id: string;
    imageUrl: string;
    text: string;
}

const carouselCells: CarouselCell[] = [
    { id: "lastClone", imageUrl: './bg3.jpg', text: '5' },
    { id: "1", imageUrl: './zd1.jpg', text: '1' },
    { id: "2", imageUrl: './zd2.jpg', text: '2' },
    { id: "3", imageUrl: './bg1.jpg', text: '3' },
    { id: "4", imageUrl: './bg2.jpg', text: '4' },
    { id: "5", imageUrl: './bg3.jpg', text: '5' },
    { id: "firstClone", imageUrl: './zd1.jpg', text: '1' }
]

export default function Carousel3() {
    const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const [containerDimensions, setContainerDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const imageRef = useRef<HTMLImageElement>(null);

    // navigation
    const navigate = (number: 1 | -1) => {
        if (selectedIndex <= 0 && number === -1) return;
        if (selectedIndex >= carouselCells.length - 1 && number === 1) return;
        setSelectedIndex(prevIndex => prevIndex + number);
    }

    // carousel slide style


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
            transition: `${isSliderEnd ? 'none' : 'transform 1s ease-in-out'}`
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
            setSelectedIndex(carouselCells.length - 2)
        }
        if (selectedIndex === 6) {
            toggleTransition();
            setSelectedIndex(1);
        }
        console.log(selectedIndex)
    }

    useEffect(() => {
        const initialDims = getImageSize();
        console.log(initialDims)
    }, []);


    return (
        <section className="
            snap-start
            min-h-dvh 
            xl:min-h-screen 
            grow-1
            flex
            flex-col 
            bg-(--main-400)
            pt-20
            items-center">

            {/* Carousel container */}
            <div className="max-w-[400px] max-h-[500px] mx-auto overflow-clip">

                {/* Carousel slide */}
                <div className="w-full h-full flex" style={getCarouselStyle()} onTransitionEnd={handleTransitionEnd}>
                    {carouselCells.map((item, index) => {
                        return (
                            <img className="object-contain" ref={imageRef} key={item.id} src={item.imageUrl} alt={item.text} />
                        )
                    })}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-10">
                <button onClick={() => navigate(-1)}>prev</button>
                <button onClick={() => navigate(1)}>next</button>
            </div>
        </section>
    )
}