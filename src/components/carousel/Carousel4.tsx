"use client"

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export type CarouselItem = {
    id: string;
    imageUrl: string;
    alt?: string;
}

type Props = {
    items: CarouselItem[];
    initialIndex?: number; // logical index in original items (0-based)
    width?: string; // css size for container (eg "80dvw")
    height?: string; // css size for container (eg "80dvh")
}

export default function Carousel({ items, initialIndex = 0, width = "80dvw", height = "80dvh" }: Props) {
    if (!items || items.length === 0) return null;

    // clone first and last for seamless loop
    const slides = [items[items.length - 1], ...items, items[0]];
    const [index, setIndex] = useState(initialIndex + 1); // start at cloned offset
    const [disableTransition, setDisableTransition] = useState(false);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const [vw, setVw] = useState(0);

    const updateWidth = useCallback(() => {
        if (viewportRef.current) {
            setVw(viewportRef.current.clientWidth);
        }
    }, []);

    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [updateWidth]);

    useEffect(() => {
        // when items change, reset to initial position
        setIndex(initialIndex + 1);
        setTimeout(updateWidth, 0);
    }, [items, initialIndex, updateWidth]);

    const style = {
        transform: `translateX(-${vw * index}px)`,
        transition: disableTransition ? "none" : "transform 500ms ease-in-out",
        width: `${slides.length * 100}%`,
        display: "flex",
    } as React.CSSProperties;

    const onNext = () => setIndex(i => i + 1);
    const onPrev = () => setIndex(i => i - 1);

    const handleTransitionEnd = () => {
        // if we're on the cloned first (index 0) go to real last
        if (index === 0) {
            setDisableTransition(true);
            setIndex(slides.length - 2);
            // re-enable next frame
            requestAnimationFrame(() => requestAnimationFrame(() => setDisableTransition(false)));
            return;
        }
        // if we're on the cloned last go to real first
        if (index === slides.length - 1) {
            setDisableTransition(true);
            setIndex(1);
            requestAnimationFrame(() => requestAnimationFrame(() => setDisableTransition(false)));
        }
    }

    return (
        <div className="mx-auto relative" style={{ maxWidth: width, maxHeight: height }}>
            <div ref={viewportRef} className="overflow-hidden w-full h-full">
                <div style={style} onTransitionEnd={handleTransitionEnd}>
                    {slides.map((s) => (
                        <div key={s.id} style={{ flex: "0 0 100%", width: "100%" }}>
                            <img src={s.imageUrl} alt={s.alt ?? s.id} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>

            <button
                aria-label="Previous"
                onClick={onPrev}
                className="absolute top-0 bottom-0 left-0 px-2 hover:bg-black/20"
                style={{ display: "flex", alignItems: "center" }}>
                <ArrowBigLeft stroke="white" fill="black" width="2rem" height="2rem" />
            </button>

            <button
                aria-label="Next"
                onClick={onNext}
                className="absolute top-0 bottom-0 right-0 px-2 hover:bg-black/20"
                style={{ display: "flex", alignItems: "center" }}>
                <ArrowBigRight stroke="white" fill="black" width="2rem" height="2rem" />
            </button>
        </div>
    )
}