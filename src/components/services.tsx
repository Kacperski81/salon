"use client"

import { JSX, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import hairBg from "../../public/zd2.jpg";
import nailsBg from "../../public/mainServicesNails.jpg";
import beautyBg from "../../public/beautyBg2.jpg";
import productsBg from "../../public/davines-background.jpg";
import { ScissorsSVG, BeautySVG, NailSVG, ProductsSVG } from "./svgs";

type ServiceData = {
    id: string
    name: string
    image: StaticImageData;
    services: Array<{
        name: string
        description: string
        icon: JSX.Element
    }>
}


const serviceData: ServiceData[] = [
    {
        id: "hair",
        name: "Hair",
        image: hairBg,
        services: [
            {
                name: "Hair Services",
                description: "Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.",
                icon: <ScissorsSVG className="text-(--main-50)" />,
            }
        ]
    },
    {
        id: "nail",
        name: "Nail",
        image: nailsBg,
        services: [
            {
                name: "Nail Care",
                description: "Manicures, pedicures, and artistic nail designs for perfectly polished hands and feet.",
                icon: <NailSVG className="text-(--main-50)" />,
            }
        ]
    },
    {
        id: "beauty",
        name: "Beauty",
        image: beautyBg,
        services: [
            {
                name: "Beauty Treatments",
                description: "Rejuvenating facials, waxing, and makeup services to enhance your natural beauty.",
                icon: <BeautySVG className="text-(--main-50)" />,
            }
        ]
    },
    {
        id: "products",
        name: "Products",
        image: productsBg,
        services: [
            {
                name: "Products",
                description: "Discover the full range of Davines products, featuring sustainable haircare, crafted with natural ingredients for exceptional results and environmental responsibility.",
                icon: <ProductsSVG className="text-(--main-50)" />,
            }
        ]
    },
]

export default function Services5() {
    const [expandedPanel, setExpandedPanel] = useState<string>("hair");

    const togglePanel = (panelId: string) => {
        setExpandedPanel(panelId);
    }

    return (
        // <section id="services" className="snap-center bg-(--main-100) min-h-screen px-2 py-2 sticky top-0 flex flex-col lg:py-12 lg:px-20 z-30">
        <section id="services" className="snap-start snap-always bg-(--main-400) min-h-dvh xl:min-h-screen px-2 py-2 flex flex-col lg:py-12 lg:px-20">
            <div className="grow flex flex-col lg:justify-center gap-3">
                <h2 className="font-(family-name:--font-aboreto) text-(--main-100) text-2xl sm:text-3xl lg:text-4xl mt-8 xl:mt-5 font-light">Our Services</h2>
                <p className="leading-relaxed text-base sm:text-lg md:text-xl text-(--main-200)">
                    {`From a simple cut to a full makeover, we've got you covered.`}
                </p>
                {/* Wrapper */}
                <div className="grow p-2 flex justify-center">

                    {/* Accordion */}
                    <div className="grow flex flex-col lg:justify-center lg:flex-row gap-(--panels-gap) lg:max-w-6xl">

                        {serviceData.map((service) => {
                            return (
                                // Accordion panel
                                <div key={service.id} onClick={() => togglePanel(service.id)}
                                    className={`relative isolate p-(--service-panel-padding) overflow-hidden panel-radius flex flex-col ${expandedPanel === service.id ? "service-panel-opened" : "service-panel-closed"}`}>
                                    {/* Accordion heading */}
                                    <h3 id={`${service.id}-heading`} className="">

                                        {/* Accordion trigger */}
                                        <button aria-controls={`${service.id}-content`} aria-expanded={service.id === expandedPanel}
                                            className="bg-transparent border-0 flex items-center flex-row-reverse gap-(--service-panel-gap)">

                                            {/* Panel title */}
                                            <span className="text-white text-lg lg:text-xl xl:text-2xl font-(family-name:--font-aboreto) relative isolate grid items-center service-button-bg">{service.name}</span>
                                            {/* Accordion icon */}
                                            {/* <div className="bg-(--accordion-button) w-(--button-small) lg:w-(--button-size) p-1 rounded-full aspect-square">{service.services[0].icon}</div> */}
                                            <div className="bg-(--service-accordion-button) w-(--service-button-small) h-(--service-button-small) p-(--service-button-padding) rounded-full aspect-square flex justify-center z-10">{service.services[0].icon}</div>
                                        </button>
                                    </h3>

                                    {/* Accordion content * Panel 1 content */}
                                    <div id={`${service.id}-content`} aria-labelledby={`${service.id}-heading}`} role="region" aria-hidden={service.id !== expandedPanel} className="relative z-10">
                                        <p className={`service-panel-paragraph text-left relative text-white text-sm lg:text-lg opacity-0 max-w-[70ch]  ${expandedPanel === service.id ? "opacity-100 transition-opacity duration-500 delay-500 translate-y-0 transition-transform duration-100" : "opacity-0 transition-opacity duration-500 delay-500 transition-transform  duration-500"}`}>
                                            {service.services[0].description}
                                            {/* <span className="block text-right w-full">see more</span> */}
                                            {service.id === "products" ? "" : <span className="block text-right mt-2">
                                                <Link
                                                    href={`/${service.id}`} // The internal route
                                                    aria-label={`View all ${service.name} services`}
                                                    className={`w-fit border border-white text-white px-5 py-2 rounded-full uppercase text-xs font-medium tracking-widest transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/50
                                                ${expandedPanel === service.id
                                                            ? "opacity-100 translate-y-0 transition-all duration-500 delay-700"
                                                            : "opacity-0 translate-y-2 transition-all duration-300"
                                                        }`}
                                                >
                                                    See More
                                                </Link>
                                            </span>}
                                        </p>
                                    </div>
                                    <Image
                                        src={service.image}
                                        alt={`${service.name} service image`}
                                        fill
                                        sizes="100vw"
                                        className={`
                                            -z-1 
                                            object-cover 
                                            ${expandedPanel === service.id ?
                                                "image-brightness"
                                                : "image-brightness-light"}`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}