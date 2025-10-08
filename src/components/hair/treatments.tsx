"use client"

import { useState } from "react";

type TreatmentsData = {
    name: string;
    description: string;
    price: string;
}

const treatmentsData: TreatmentsData[] = [
    {
        name: "Davines",
        description: "Whether you crave a deeply nourishing treatment, scalp revitalisation, or a personalised hair care plan, our Davines NaturalTech Tailored Treatments promise to leave you feeling refreshed, rejuvenated, and ready to flaunt your radiant, beautiful hair. Experience this transformative journey at our salon today and unlock the true potential of your hair.",
        price: "£40"
    },
    {
        name: "Kerastase",
        description: "The ultimate quick-fix problem solver for all hair types, Fusio-Dose is the innovative in-salon treatment that nurses your hair back to health, no matter the starting point. Focused not only on helping your hair look better, the system is designed to actually boost the health of your hair, utilizing the kind of active ingredients you’d expect to read on the labels of your hi-tech skincare.",
        price: "£40"
    },
    {
        name: "Metal Detox Loreal",
        description: "Metal Detox is a haircare innovation powered by Glicoamine. The patented technology helps to neutralize (de-activate) these excess copper metals in the hair, helping to prevent them from interfering with the colouring process. This pre-color treatment creates the perfect clean canvas for optimal color results, by neutralizing metal inside the hair before any colour service. Colour results are true to tone, bright, and there is up to 87% less breakage.",
        price: "£40"
    },
    {
        name: "Rebirth",
        description: "Sortick Rebirth No1 Hair Protective Care Liquid For Bleaching And Coloring - Nourishes And Protects Hair. We are using Sortick Rebirth No1 protective care liquid during color service. Specifically designed to work in harmony with hair bleach and dye, minimizing damage and ensuring your hair remains healthy and strong.",
        price: "£40"
    }
]

export default function Treatments() {
    const [expandedPanel, setExpandedPanel] = useState<string>("Davines");

    const togglePanel = (panelId: string) => {
        setExpandedPanel(panelId);
    }

    return (
        <section className="
            snap-start
            snap-always
            min-h-[100dvh] 
            xl:min-h-screen
            text-center 
            grow-1 
            flex 
            bg-(--main-200) 
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