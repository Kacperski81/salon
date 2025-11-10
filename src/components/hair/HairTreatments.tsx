"use client"

import { useState } from "react";
import type { TreatmentsData } from "@/app/types";
import { getHairTreatments } from "@/app/lib/hairTreatments"; 

export default function Treatments() {

    const treatmentsData: TreatmentsData[] = getHairTreatments();
    const [expandedPanel, setExpandedPanel] = useState<string>("Davines");

    const togglePanel = (panelId: string) => {
        setExpandedPanel(panelId);
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
            bg-(--main-100) 
            bg-[url(../../public/treatmentsBg.jpg)]
            bg-blend-multiply 
            bg-right-top 
            bg-cover 
            bg-no-repeat">
                
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
                        HAIR TREATMENTS
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
                        2xl:grid-cols-8
                        ">

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

                            {treatmentsData.map((treatment) => {
                                return (
                                    // Accordion panel
                                    <div
                                        key={treatment.name}
                                        onClick={() => togglePanel(treatment.name)}
                                        className={`
                                            border-gradient 
                                            isolate 
                                            overflow-hidden 
                                            relative
                                            rounded-sm
                                            ${expandedPanel === treatment.name ? "shadow-xl opened-panel" : "shadow-xl closed-panel cursor-pointer"}`}
                                    >

                                        {/* Accordion heading */}
                                        <h3 id={`${treatment.name}-heading`}
                                            className="sticky inset-0 z-100 m-0">
                                            {/* Accordion trigger */}
                                            <button
                                                aria-controls={`${treatment.name}-content`}
                                                aria-expanded={treatment.name === expandedPanel}
                                                className={`
                                                    ${expandedPanel === treatment.name ? "py-(--panel-padding)" : "py-2 xl:py-1 cursor-pointer"}`}>
                                                {/* Panel title */}
                                                <span
                                                    className="
                                                        text-6 
                                                        text-base 
                                                        xl:text-lg 
                                                        font-bold 
                                                        font-(family-name:--font-aboreto)
                                                        uppercase
                                                        tracking-wide">{treatment.name}</span>
                                            </button>
                                        </h3>

                                        {/* Accordion content */}
                                        <div
                                            id={`${treatment.name}-content}`}
                                            aria-labelledby={`${treatment.name}-heading`}
                                            role="region"
                                            aria-hidden={treatment.name !== expandedPanel}
                                            className={`
                                                p-4
                                                pt-0
                                                transition-all
                                                duration-300
                                                text-left
                                                ${expandedPanel === treatment.name ? "opacity-100" : "opacity-0"}`}>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-baseline border-b border-white/10 pb-2 text-sm md:text-base xl:text-lg">
                                                    <h4 className="text-(--main-100)">{treatment.name}</h4>
                                                    <p className="font-semibold text-white">{treatment.price}</p>
                                                </div>
                                                <p className="mx-auto text-sm md:text-base text-(--main-50) md:text-(--main-100) leading-relaxed max-w-[70ch]">{treatment.description}</p>
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