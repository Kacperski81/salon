"use client";

import { useState } from "react";
import { CarouselItem } from "../../components/carousel/Carousel3";
import LightBox from "../LightBox";

export default function Gallery({ items, images }: { items: CarouselItem[], images: number }) {
    const [lightBoxOpen, setLightBoxOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

    const imagesToDisplay = items.slice(1, images);

    const openLightBox = (item: CarouselItem) => {
        setSelectedItem(item);
        setLightBoxOpen(true);
    };

    const closeLightBox = () => {
        setLightBoxOpen(false);
        setSelectedItem(null);
    };

    return (
        <section className="snap-start
            min-h-dvh 
            xl:min-h-screen 
            grow-1
            flex
            flex-col
            xl:grid
            xl:grid-rows-[auto_1fr]
            bg-(--main-400)
            gap-4"
        >
            

            {/* Gallery grid */}
            <div className="w-full max-h-dvh px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-4">
                {imagesToDisplay.map((item) => {
                return (
                    <img key={item.id} src={item.imageUrl} alt={item.alt} className="rounded-xl" onClick={() => openLightBox(item)} />
                )
                })}
            </div>

            {/* Pagination controls */}
            {/* <div className="flex items-baseline justify-center gap-4 mb-2">
                <button className="mt-6 px-4 py-2 bg-(--main-700) text-white rounded disabled:opacity-40">Previous</button>
                <span className="text-(--main-100)">1 / {Math.ceil(items.length / images)}</span>
                <button className="mt-6 px-4 py-2 bg-(--main-700) text-white rounded disabled:opacity-40">Next</button>
            </div> */}
            </div>

            <LightBox open={lightBoxOpen} item={selectedItem} items={items} onClose={closeLightBox} />

        </section>
    )
}