"use client"

import { useState } from "react";
import { Border2 } from "@/components/border";

// Define the type for a treatment item
type hairServiceItem = {
    service: string;
    price?: string;
    short_hair_price?: string;
    medium_hair_price?: string;
    long_hair_price?: string | null;
};

// Define the type for a main section category
type HairServiceCategory = {
    id: string;
    name: string;
    items: hairServiceItem[];
};

// Define the type for the entire price list object
type HairServicesData = HairServiceCategory[];

// This static data is now defined outside the component, which is a common best practice.
const hairServicesData: HairServicesData = [
    {
        "id": "cut-and-style",
        "name": "Cut & Style",
        "items": [
            { "service": "Ladies' Haircut", "price": "£70" },
            { "service": "Ladies' Restyle", "price": "£75" },
            { "service": "Gents Haircut", "price": "£46" },
            { "service": "Under 10 Years Old Girls", "price": "From £15" },
            { "service": "11 to 16 Years Old Girls", "price": "£35" },
            { "service": "11 to 16 Years Old Boys", "price": "£28" },
            { "service": "Blow Dry Short Hair", "price": "£35" },
            { "service": "Blow Dry Medium Hair", "price": "£38" },
            { "service": "Blow Dry Long Hair", "price": "From £42" },
            { "service": "Hair Up / Wedding Hair", "price": "From £75" }
        ]
    },
    {
        "id": "colouring",
        "name": "Colouring",
        "items": [
            { "service": "Full Head Of Highlights or Balayage", "price": "£130" },
            { "service": "3/4 Head Of Highlights or Balayage", "price": "£120" },
            { "service": "1/2 Head Of Highlights or Balayage", "price": "£100" },
            { "service": "Single Foils (t-sections)", "price": "From £50" },
            { "service": "Full Head Tint", "price": "£70" },
            { "service": "Re-growth Tint", "price": "£55" },
            { "service": "Glossing (Semi Permanent)", "price": "£55" },
            { "service": "Full Head Bleach (Toner included)", "price": "£110" },
            { "service": "Re-growth Bleach (Toner included)", "price": "£90" },
            { "service": "Men's Grey Blending", "price": "£25" },
            { "service": "Toner", "price": "From £25" }
        ]
    },
    {
        "id": "texturing-and-straightening",
        "name": "Texturing & Straightening",
        "items": [
            {
                "service": "Perm",
                "short_hair_price": "£80",
                "medium_hair_price": "£90",
                "long_hair_price": null
            },
            {
                "service": "Brazilian Blow Dry/Keratin treatment",
                "short_hair_price": "£120",
                "medium_hair_price": "£160",
                "long_hair_price": "£190"
            }
        ]
    }
];

export default function Services() {
    const [expandedPanel, setExpandedPanel] = useState<string>("cut-and-style");

    const togglePanel = (panelId: string) => {
        setExpandedPanel(panelId);
    }

    return (
        <section className="
            snap-start 
            snap-always 
            min-h-screen
            text-center 
            grow-1 
            flex 
            bg-(--main-200) 
            bg-[url(../../public/hairServicesBg.jpg)]
            bg-blend-multiply 
            bg-left-top 
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
                        tracking-widest">
                            HAIR SERVICES
                    </h2>

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
                            {hairServicesData.map((service) => {
                                return (
                                    // Accordion panel
                                    <div
                                        key={service.id}
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
                                        <h3 id={`${service.name}-heading`}
                                            className="sticky inset-0 z-100 m-0">
                                            {/* Accordion trigger */}
                                            <button
                                                aria-controls={`${service.name}-content`}
                                                aria-expanded={service.id === expandedPanel}
                                                className={`
                                                    ${expandedPanel === service.id ? "py-(--panel-padding)" : "py-2 xl:py-1 cursor-pointer"}`}>
                                                {/* Panel title */}
                                                <span
                                                    className="
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
                                                    {service.items.map((item) => {
                                                        return (
                                                            <li
                                                                key={item.service}
                                                                className="
                                                                    group 
                                                                    border-b 
                                                                    border-b-(--main-300) 
                                                                    last:border-b-0 
                                                                    p-2  
                                                                    text-sm 
                                                                    md:text-base 
                                                                    xl:text-lg  
                                                                    xl:px-4">
                                                                <div className="flex justify-between">
                                                                    <p className="self-end text-(--main-50) lg:text-(--main-200)">{item.service}</p>
                                                                    <div className="text-white lg:text-(--main-200) flex gap-3 lg:gap-8">
                                                                        {
                                                                            item.price && (
                                                                                <p className=""><span className="text-white lg:text-(--main-100)">{item.price}</span></p>
                                                                            )
                                                                        }
                                                                        {
                                                                            item.short_hair_price && (
                                                                                <p>Short <span className="flex flex-col text-white lg:text-(--main-100) text-right">{item.short_hair_price}</span></p>
                                                                            )
                                                                        }
                                                                        {
                                                                            item.medium_hair_price && (
                                                                                <p>Medium <span className="flex flex-col text-white lg:text-(--main-100) text-right">{item.medium_hair_price}</span></p>
                                                                            )
                                                                        }
                                                                        {
                                                                            item.long_hair_price && (
                                                                                <p>Long <span className="flex flex-col text-white lg:text-(--main-100) text-right">{item.long_hair_price}</span></p>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}