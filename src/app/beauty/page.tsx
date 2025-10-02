"use client"

import { useState, useRef } from "react";
import { Border2 } from "@/components/border";

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
    const panelRef = useRef<HTMLDivElement>(null);


    const togglePanel = (panelId: number) => {
        setExpandedPanel(panelId);
    }

    return (
        <section className="
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
            <div className="grow flex lg:grid lg:grid-cols-2 xl:px-20">
                <div className="relative grow flex flex-col lg:col-start-2">
                    <h3 className="mt-10 font-(family-name:--font-aboreto) self-center pt-3 pb-2 px-10 text-2xl text-(--main-100)">SERVICES</h3>

                    {/* wrapper */}
                    <div className="panelV2 grow flex justify-center lg:flex-col px-1 pb-2 xl:pb-10">

                        {/* Accordion */}
                        <div className="grow flex flex-col gap-4 px-2 lg:px-10">
                            {priceList.map((service) => {
                                return (
                                    // Accordion panel
                                    <div key={service.id}
                                        onClick={() => togglePanel(service.id)}
                                        className={`border-gradient isolate overflow-hidden relative ${expandedPanel === service.id ? "shadow-xl opened-panel" : "shadow-xl closed-panel cursor-pointer"}`}
                                        ref={panelRef}
                                    >

                                        {/* Accordion heading */}
                                        <h4 id={`${service.name}-heading`} className="sticky inset-0 z-100 m-0">
                                            {/* Accordion trigger */}
                                            <button aria-controls={`${service.name}-content`} aria-expanded={service.id === expandedPanel} className={` ${expandedPanel === service.id ? "py-(--panel-padding)" : "py-2 xl:py-1 cursor-pointer"}`}>
                                                {/* Panel title */}
                                                <span className="text-6 text-sm xl:text-lg font-bold font-(family-name:--font-aboreto)">{service.name}</span>
                                            </button>
                                        </h4>

                                        {/* Accordion content */}
                                        <div id={`${service.name}-content}`} aria-labelledby={`${service.name}-heading`} role="region" aria-hidden={service.id !== expandedPanel} className={`flex justify-center z-10 text-xl ${expandedPanel === service.id ? "" : ""}`}>
                                            <div className={`xl:px-10 grow p-1 text-left relative text-(--main-900) opacity-0 ${expandedPanel === service.id ? " opacity-100 transition-opacity duration-500 delay-500" : "opacity-0 transition-opacity duration-200 delay-100"}`}>
                                                <ul>
                                                    {service.treatments.map((treatment) => {
                                                        return (
                                                            <li key={treatment.treatment} className="group p-1 group text-xs md:text-large lg:text-base xl:text-lg block-inline xl:px-10">
                                                                <div>

                                                                    {treatment.items ? (
                                                                        <div>
                                                                            <h3 className="text-(--main-100)">{treatment.treatment}</h3>
                                                                            {treatment.items.map((item) => {
                                                                                return (
                                                                                    <div key={item.name} className="flex justify-between text-(--main-100)">
                                                                                        <p>{item.name}</p>
                                                                                        <p>{item.price}</p>
                                                                                    </div>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    ) : (
                                                                        <div className="p-1 text-(--main-100) flex justify-between">
                                                                            <p className="text-(--main-100)">{treatment.treatment}</p>
                                                                            <p>{treatment.price}</p>
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
    )
}