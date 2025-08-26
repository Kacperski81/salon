"use client"

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ImageHairSrc from "../../public/zd2.jpg";
import ImageNailsSrc from "../../public/card_nails.jpg";

interface ServicesData {
    id: string
    name: string
    description: string
    image: StaticImageData
}

const servicesData: ServicesData[] = [
    {
        id: "hair",
        name: "Hair Services",
        description: "Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.",
        image: ImageHairSrc,
    },
    {
        id: "nail",
        name: "Nail Services",
        description: "Manicures, pedicures, and artistic nail designs for perfectly polished hands and feet.",
        image: ImageNailsSrc,
    },
]

export default function Services() {
    const [expandedPanel, setExpandedPanel] = useState("hair")

    const togglePanel = (panelId : string) => {
        setExpandedPanel("panelId")
    }

    return (
        <section>
            <header className="font-(family-name:--font-lato) text-center mb-12 md:mb-16">
                <h2 className="font-(family-name:--font-aboreto) text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-[var(--text-color)]">Our Services</h2>
                <h3 className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#8B7355" }}>{`From a simple cut to a full makeover, we've got you covered.`}</h3>
            </header>

            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:h-[45rem] gap-4">
                    {servicesData.map((service) => {
                        const isExpanded = expandedPanel === service.id;

                        return (
                            <div 
                                key={service.id}
                                className={`relative isolate overflow-hidden rounded-3xl p-3 transition-all duration-500 ease-in-out ${isExpanded ? "flex-grow md:flex-[1_1_clamp(15rem,40vh,20rem)]" : "md:flex-[0_0_200px] flex-[0_0_calc(3rem+1.5rem)]"}`}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    className={`absolute inset-0 w-full h-full object-cover -z-10 transition-all duration-500 ${isExpanded ? "brightness-50" : "brightness-100"}`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}