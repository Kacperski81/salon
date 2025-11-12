"use client"

import PageHeading from "../PageHeading";
import Section from "../Section";
import background from "../../../public/solidBg.jpg";
import type { CarouselItem } from "@/app/types";
import { useState } from "react";
// import Carousel3 from "../carousel/Carousel3";
// import { Ligature } from "lucide-react";
// import LightBoxCarousel from "../carousel/LightBoxCarousel";
import LightBox from "../LightBox2";

export default function MobileGallery({ pictures }: { pictures: CarouselItem[] }) {
    // pictures are for the lightbox functionality
    // images are for gallery display only
    const images = pictures.slice(1, pictures.length - 1);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

    const handleImageClick = (picture: CarouselItem) => {
        
        // const index = pictures.findIndex((img) => img.id === picture.id);
        setSelectedItem(picture);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    return (
        <Section background={background} bgRepeat={false}>
            <div className="px-3 py-2">

                <PageHeading title="GALLERY" />

                <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    {images.map((picture) => {
                        return (
                            <img key={picture.id} alt={picture.alt} src={picture.imageUrl}
                            className="w-full h-auto" 
                            onClick={() => handleImageClick(picture)} 
                            />
                        )
                    })}
                </div>

                {showModal && (
                    <div className="">
                        {/* All you need to do is to find the clicked item from the images in the pictures it has 2 more items so maybe - 2 */}
                        <LightBox key={selectedItem?.id} open={showModal} onClose={handleCloseModal} item={selectedItem} items={pictures} handleOverlayClick={handleOverlayClick} />
                    </div>
                )}
            </div>
        </Section>
    );
}