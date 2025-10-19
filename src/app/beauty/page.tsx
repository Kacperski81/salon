"use client"

import { useState } from "react";
import { Border2 } from "@/components/border";
import Footer from "@/components/footer";

// Define the type for a single price list item
type PriceItem = {
    name: string;
    price: string;
};

// Define the type for a treatment entry
type Treatment = {
    treatment: string;
    price?: string;
    infill?: string;
    availability?: string;
    items?: PriceItem[];
};

// Define the type for a main section category
type Category = {
    id: number;
    name: string;
    treatments: Treatment[];
};

// Define the type for the entire price list object
type PriceList = Category[];

const priceList: PriceList = [
    {
        id: 0,
        name: "Facial Treatments",
        treatments: [
            {
                "treatment": "AQUAMETIQ Hydra Prime (Jadeite hydrogen acid cleansing)",
                "items": [
                    { "name": "Hydrogen cleansing basic", "price": "£65" },
                    { "name": "Hydrogen cleansing for teenagers", "price": "£65" },
                    { "name": "Hydrogen cleansing for sensitive skin", "price": "£85" },
                    { "name": "Hydrogen cleansing full treatment", "price": "£95" },
                    { "name": "Anti-aging cleansing", "price": "£95" }
                ]
            },
            {
                "treatment": "Microcurrent therapy for skin rejuvenation and Lymphatic drainage procedures",
                "items": [
                    { "name": "Face", "price": "£70" },
                    { "name": "Face & neck", "price": "£80" },
                    { "name": "Face & neck & clearage", "price": "£100" }
                ]
            },
            {
                "treatment": "Kobido massage",
                "price": "£70"
            },
            { "treatment": "Lifting thermal massage: face & neck & clearage", "price": "£70" },
            { "treatment": "Ultra hydration treatment", "price": "£60" },
            {
                "treatment": "Infinite RF - fractional microneedle system machine for face and body (recommended consultation)",
                "price": "From £150"
            },
            { "treatment": "Acid therapy", "price": "£45" }
        ]
    },
    {
        id: 1,
        name: "Eyelashes",
        treatments: [
            { "treatment": "Lift lash & tinting", "price": "£50" },
            { "treatment": "Classic eyelash extensions", "price": "£75", "infill": "£50" },
            { "treatment": "Volume eyelash extension", "price": "£85", "infill": "£55" }
        ]
    },
    {
        id: 2,
        name: "Eyebrows",
        treatments: [
            { "treatment": "Permanent ombre brows", "price": "From £250" },
            { "treatment": "Eyebrow lamination", "price": "£49" },
            { "treatment": "Eyebrow shaping & tinting", "price": "From £15" },
            { "treatment": "Eyebrow shaping & tinting & eyelashes tinting", "price": "£30" }
        ]
    },
    {
        id: 3,
        name: "Aesthetic Medicine Treatments",
        treatments: [
            { "treatment": "Skin boosters", "availability": "Available in the salon" },
            { "treatment": "Filters", "availability": "Available in the salon" }
        ]
    }
];

export default function Beauty() {
    const [expandedPanel, setExpandedPanel] = useState<number>(0);

    const togglePanel = (panelId: number) => {
        setExpandedPanel(panelId);
    }

    return (
        <>
            <section className="
            snap-start
            min-h-[100dvh]
            xl:min-h-screen
            text-center 
            grow-1 
            flex 
            bg-(--main-200)
            bg-[url(../../public/beautyServicesBg.jpg)]
            bg-blend-multiply 
            bg-bottom-left
            bg-cover
            bg-no-repeat">

                <Border2 />

                <div className="grow flex lg:pb-7">

                    <div className="grow flex flex-col lg:items-end">
                        {/* Heading */}
                        <h2 className="
                        mt-10 
                        font-(family-name:--font-aboreto) 
                        self-center 
                        pt-4 
                        pb-2 
                        px-10 
                        text-2xl 
                        text-(--main-100)
                        uppercase
                        tracking-widest">BEAUTY SERVICES</h2>

                        {/* Wrapper */}
                        <div className="
                        panelV2 
                        grow 
                        flex 
                        justify-center 
                        lg:flex-col 
                        p-4 
                        xl:pb-10 
                        2xl:grid 
                        2xl:grid-cols-5">

                            {/* Accordion */}
                            <div className="
                            grow 
                            flex 
                            flex-col 
                            gap-4 
                            px-2 
                            lg:px-10 
                            md:min-w-[700px] 
                            max-w-[500px] 
                            md:max-w-[700px] 
                            xl:w-[800px] 
                            xl:max-w-[1000px] 
                            2xl:col-span-4">
                                {priceList.map((service) => {
                                    return (
                                        // Accordion panel
                                        <div key={service.id}
                                            onClick={() => togglePanel(service.id)}
                                            className={`
                                            border-gradient 
                                            isolate 
                                            overflow-hidden 
                                            relative 
                                            rounded-sm 
                                            ${expandedPanel === service.id ? "shadow-xl opened-panel" : "shadow-xl closed-panel cursor-pointer"}`}
                                        >

                                            {/* Accordion heading */}
                                            <h3 id={`${service.name}-heading`} className="sticky inset-0 z-100 m-0">
                                                {/* Accordion trigger */}
                                                <button aria-controls={`${service.name}-content`} aria-expanded={service.id === expandedPanel} className={` ${expandedPanel === service.id ? "py-(--panel-padding)" : "py-2 xl:py-1 cursor-pointer"}`}>
                                                    {/* Panel title */}
                                                    <span className="
                                                    text-6 
                                                    text-base 
                                                    xl:text-lg 
                                                    font-bold 
                                                    font-(family-name:--font-aboreto)
                                                    uppercase
                                                    tracking-wide">{service.name}</span>
                                                </button>
                                            </h3>

                                            {/* Accordion content */}
                                            <div
                                                id={`${service.name}-content}`}
                                                aria-labelledby={`${service.name}-heading`}
                                                role="region"
                                                aria-hidden={service.id !== expandedPanel}
                                                className={`
                                                flex 
                                                justify-center 
                                                z-10 
                                                text-xl 
                                                ${expandedPanel === service.id ? "" : ""}`}>

                                                <div className={`
                                                    grow 
                                                    p-1 
                                                    lg:px-6 
                                                    text-left 
                                                    relative
                                                    opacity-0 
                                                    ${expandedPanel === service.id ? " opacity-100 transition-opacity duration-500 delay-500" : "opacity-0 transition-opacity duration-200 delay-100"}`}>

                                                    <ul>
                                                        {service.treatments.map((treatment) => {
                                                            return (
                                                                <li
                                                                    key={treatment.treatment}
                                                                    className="
                                                                    group
                                                                    border-b 
                                                                    border-b-(--main-300) 
                                                                    last:border-b-0 
                                                                    p-2 
                                                                    group 
                                                                    text-sm 
                                                                    md:text-base 
                                                                    xl:text-lg
                                                                    xl:px-4">
                                                                    <div className="flex justify-between">

                                                                        {treatment.items ? (
                                                                            <div className="grow">
                                                                                <p className="text-(--main-50) lg:text-(--main-200) font-bold mb-2">{treatment.treatment}</p>
                                                                                {treatment.items.map((item) => {
                                                                                    return (
                                                                                        <div key={item.name} className="
                                                                                        border-b 
                                                                                        border-b-(--main-300)
                                                                                        last:border-b-0
                                                                                        flex 
                                                                                        justify-between 
                                                                                        py-2
                                                                                        text-white
                                                                                        lg:text-(--main-100)">
                                                                                            <p className="max-w-[40ch]">{item.name}</p>
                                                                                            <p className="text-white lg:text-(--main-50) whitespace-nowrap">{item.price}</p>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                            </div>
                                                                        ) : (
                                                                            <div className="
                                                                            border-b 
                                                                            border-b-(--main-200)
                                                                            last:border-b-0 
                                                                            grow 
                                                                            flex 
                                                                            justify-between 
                                                                            items-center">
                                                                                <p className="
                                                                                text-(--main-50) lg:text-(--main-100) 
                                                                                max-w-[50ch]">{treatment.treatment}</p>

                                                                                <div className="flex flex-col items-end whitespace-nowrap">
                                                                                    {treatment.price && (
                                                                                        <p className="text-(--main-50)">{treatment.price}</p>
                                                                                    )}
                                                                                    {treatment.infill && (
                                                                                        <p className="text-(--main-50) text-xs md:text-sm mt-1">Infill: {treatment.infill}</p>
                                                                                    )}
                                                                                    {treatment.availability && (
                                                                                        <p className="text-(--main-50) text-xs md:text-sm">{treatment.availability}</p>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                    </div>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
