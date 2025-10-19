"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import CarouselCell from "./CarouselCell";

type CarouselCell = {
    id: number;
    imageUrl: string;
    text: string;
}

const carouselCells: CarouselCell[] = [
    { id: 1, imageUrl: './zd1.jpg', text: '1' },
    { id: 2, imageUrl: './zd2.jpg', text: '2' },
    { id: 3, imageUrl: './bg1.jpg', text: '3' },
    { id: 4, imageUrl: './bg2.jpg', text: '4' },
    { id: 5, imageUrl: './bg3.jpg', text: '5' },
    { id: 6, imageUrl: './colouring.jpg', text: '6' },
    { id: 7, imageUrl: './cutAndStyle.jpg', text: '7' },
    { id: 8, imageUrl: './zd1.jpg', text: '8' },
    { id: 9, imageUrl: './zd2.jpg', text: '9' },
    { id: 10, imageUrl: './bg1.jpg', text: '10' },
    { id: 11, imageUrl: './bg2.jpg', text: '11' },
    { id: 12, imageUrl: './bg3.jpg', text: '12' },
    { id: 13, imageUrl: 'zd1.jpg', text: '13' },
    { id: 14, imageUrl: './bg2.jpg', text: '14' },
    { id: 15, imageUrl: './colouring.jpg', text: '15' },
]

export default function Carousel2() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [radius, setRadius] = useState<number>(0);
    const [theta, setTheta] = useState<number>(0);
    const [containerDimensions, setContainerDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });

    const getContainerDimensions = useCallback(() => {
        if (sceneRef.current) {
            const width = (sceneRef.current).offsetWidth;
            const height = (sceneRef.current).offsetHeight;
            setContainerDimensions({ width, height });
            return { width, height }
        }
        return { width: 0, height: 0 }
    }, [])

    const calculateRadius = useCallback((width: number) => {
        const currentTheta = 360 / carouselCells.length;
        const cellSize = width;

        // const newRadius = Math.round((cellSize / 2) / Math.tan(Math.PI / 15));
        const newRadius = ((cellSize / 2) / Math.tan(Math.PI / 15))
        setRadius(newRadius);
        setTheta(currentTheta);
        console.log(`Radius: ${newRadius}, Theta: ${currentTheta}`)

    }, [])

    useEffect(() => {

        const initialDims = getContainerDimensions();
        calculateRadius(initialDims.width);


    }, [getContainerDimensions, calculateRadius]);

    const getCarouselStyle = () => {
        const angle = theta * selectedIndex * -1;
        const rotateFn = 'rotateY';

        return {
            transform: `translateZ(-${radius}px) ${rotateFn}(${angle}deg)`,
            top: 10,
            left: 10,
            transition: 'transform 1s'

        }
    }

    const getCellStyle = (index: number, imageUrl: string) => {
        const rotateFn = 'rotateY';
        const cellAngle = theta * index;

        return {
            transform: `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`,
            opacity: 1,
            transition: 'transform 1s, opacity 1s',
            // The cell must be sized correctly relative to the scene container
            width: containerDimensions.width > 0 ? `${containerDimensions.width - 20}px` : '100%',
            height: containerDimensions.height > 0 ? `${containerDimensions.height - 20}px` : '100%',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
        }
    }

    // navigation
    const navigate = (number: 1 | -1) => {
        setSelectedIndex(prevIndex => prevIndex + number)
    }

    return (
        <section className="
            snap-start
            snap-always
            min-h-dvh 
            xl:min-h-screen
            text-center 
            grow-1
            flex
            bg-(--main-200)
            bg-center-top
            bg-cover
            bg-no-repeat">
            <div className="grow flex flex-col gap-4">
            <h2 className="
                        mt-12 
                        font-(family-name:--font-aboreto) 
                        self-center 
                        pt-4 
                        pb-2 
                        px-10 
                        text-2xl 
                        text-(--main-100)
                        uppercase
                        tracking-widest
                        ">
                GALLERY
            </h2>
                {/* scene */}
                <div ref={sceneRef} className="relative mx-auto w-[80dvw] h-[75dvh] md:w-[30dvw] md:h-[70dvh] perspective-[1000px]">
                    {/* carousel */}
                    <div className="w-full h-full absolute transform-3d" style={getCarouselStyle()}>

                        {/* carousel cell */}
                        {carouselCells.map((cell, index) => {
                            return (
                                <CarouselCell key={cell.id} style={getCellStyle(index, cell.imageUrl)} />
                            )
                        })}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 justify-center mt-2">
                    <button onClick={() => navigate(-1)}>prev</button>
                    <button onClick={() => navigate(1)}>next</button>
                </div>
            </div>

        </section>
    )
}