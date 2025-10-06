"use client"

import { useState } from "react";
import { Border2 } from "@/components/border";

type nailsServiceData = {
    id: number;
    name: string;
    items: {
        service: string;
        price: string
    }[];
}

const nailsServiceData: nailsServiceData[] = [
    {
        "id": 0,
        "name": "Manicure",
        "items": [
            {
                "service": "Hard Gel Extensions",
                "price": "£46"
            },
            {
                "service": "Infill (Gel or Protein Base)",
                "price": "£38"
            },
            {
                "service": "Nail Art (per finger)",
                "price": "£2"
            },
            {
                "service": "Broken Nail Repair (Extensions - Hands or Feet)",
                "price": "£5"
            },
            {
                "service": "Full Manicure (Protein Base, Shellac Color, Cuticle & Skin Treatment)",
                "price": "£46"
            },
            {
                "service": "Full Manicure (Shellac Color, Cuticle & Skin Treatment)",
                "price": "£40"
            },
            {
                "service": "Full Manicure (Normal Varnish, Cuticle & Skin Treatment)",
                "price": "£28"
            },
            {
                "service": "Manicure Tidy Up (Protein Base & Shellac Color)",
                "price": "£38"
            },
            {
                "service": "Manicure Tidy Up (Shellac Color Only)",
                "price": "£30"
            },
            {
                "service": "Manicure Tidy Up (Normal Varnish Color Only)",
                "price": "£15"
            }
        ]
    },
    {
        "id": 1,
        "name": "Pedicure",
        "items": [
            {
                "service": "Full Pedicure (Shellac Color, Hard Skin Removal, Treatment)",
                "price": "£46"
            },
            {
                "service": "Full Pedicure (Normal Varnish Color, Hard Skin Removal Treatment)",
                "price": "£32"
            },
            {
                "service": "Pedicure Tidy Up (Shellac Color)",
                "price": "£32"
            },
            {
                "service": "Pedicure Tidy Up (Normal Varnish)",
                "price": "£15"
            }
        ]
    },
    {
        "id": 2,
        "name": "Additional Services",
        "items": [
            {
                "service": "Shellac Removal",
                "price": "£10"
            },
            {
                "service": "Paraffin Treatment",
                "price": "£5"
            }
        ]
    }
];

export default function Nails() {
    const [expandedPanel, setExpandedPanel] = useState<number>(0);

    const togglePanel = (panelId: number) => {
        setExpandedPanel(panelId);
    }

    return (
        <section className="
            text-center 
            grow-1
            flex 
            bg-(--main-300)
            bg-[url(../../public/nailsBgFlowers.jpg)]
            bg-blend-multiply
            bg-center-top
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
                        tracking-widest">NAIL SERVICES</h2>

                    {/* wrapper */}
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
                            {nailsServiceData.map((service) => {
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
                                                    xl:px-6 
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
                                                                    <p className="text-(--main-200)">{item.service}</p>
                                                                    <p className="self-center text-(--main-100)">{item.price}</p>
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