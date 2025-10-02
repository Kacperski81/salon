"use client"

import { StaticImageData } from "next/image"
import { useState, useRef } from "react"
import CutAndStyle from "../../../public/cutAndStyle.jpg"
import Colouring from "../../../public/colouring.jpg"
import Texturing from "../../../public/zd1.jpg"
import Treatments from "../../../public/zd2.jpg"
import { Border2 } from "@/components/border"
// import RightBorder from "@/components/rightBorder"
// import { Logo1 } from "@/components/logo"

type hairServiceData = {
    id: number;
    image: StaticImageData;
    name: string;
    items: {
        service: string;
        price?: string;
        short_hair_price?: string;
        medium_hair_price?: string;
        long_hair_price?: string | null;
    }[];
}


const hairServicesData: hairServiceData[] = [
    {
        "id": 0,
        "name": "Cut & Style",
        "image": CutAndStyle,
        "items": [
            {
                "service": "Ladies' Haircut",
                "price": "£70"
            },
            {
                "service": "Ladies' Restyle",
                "price": "£75"
            },
            {
                "service": "Gents Haircut",
                "price": "£46"
            },
            {
                "service": "Under 10 Years Old Girls",
                "price": "From £15"
            },
            {
                "service": "11 to 16 Years Old Girls",
                "price": "£35"
            },
            {
                "service": "11 to 16 Years Old Boys",
                "price": "£28"
            },
            {
                "service": "Blow Dry Short Hair",
                "price": "£35"
            },
            {
                "service": "Blow Dry Medium Hair",
                "price": "£38"
            },
            {
                "service": "Blow Dry Long Hair",
                "price": "From £42"
            },
            {
                "service": "Hair Up / Wedding Hair",
                "price": "From £75"
            }
        ]
    },
    {
        "id": 1,
        "name": "Colouring",
        "image": Colouring,
        "items": [
            {
                "service": "Full Head Of Highlights or Balayage",
                "price": "£130"
            },
            {
                "service": "3/4 Head Of Highlights or Balayage",
                "price": "£120"
            },
            {
                "service": "1/2 Head Of Highlights or Balayage",
                "price": "£100"
            },
            {
                "service": "Single Foils (t-sections)",
                "price": "From £50"
            },
            {
                "service": "Full Head Tint",
                "price": "£70"
            },
            {
                "service": "Re-growth Tint",
                "price": "£55"
            },
            {
                "service": "Glossing (Semi Permanent)",
                "price": "£55"
            },
            {
                "service": "Full Head Bleach (Toner included)",
                "price": "£110"
            },
            {
                "service": "Re-growth Bleach (Toner included)",
                "price": "£90"
            },
            {
                "service": "Men's Grey Blending",
                "price": "£25"
            },
            {
                "service": "Toner",
                "price": "From £25"
            }
        ]
    },
    {
        "id": 2,
        "name": "Texturing & Straightening",
        "image": Texturing,
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
    },
    {
        "id": 3,
        "name": "Treatments",
        "image": Treatments,
        "items": [
            {
                "service": "Fusio Dose (Kerastase)",
                "price": "£20"
            },
            {
                "service": "Power-Mix (L'Oreal)",
                "price": "£15"
            },
            {
                "service": "Olaplex",
                "price": "£40"
            }
        ]
    }]

export default function Hair() {
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
            bg-[url(../../public/expanded-bg-mobile.jpg)] 
            lg:bg-[url(../../public/hairServicesBg.jpg)]
            bg-blend-multiply 
            bg-right-top bg-cover bg-no-repeat">
            <Border2 />
            {/* <Logo1 /> */}
            <div className="grow flex lg:grid lg:grid-cols-2 xl:px-20">
                <div className="relative grow flex flex-col lg:col-start-2">
                    <h3 className="mt-10 font-(family-name:--font-aboreto) self-center pt-3 pb-2 px-10 text-2xl text-(--main-100)">SERVICES</h3>

                    {/* wrapper */}
                    <div className="panelV2 grow flex justify-center lg:flex-col px-1 pb-2 xl:pb-10">

                        {/* Accordion */}
                        <div className="grow flex flex-col gap-4 px-2 lg:px-10">
                            {hairServicesData.map((service) => {
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

                                                <table className="w-full border-separate border-spacing-0 border-collapse px-2 lg:px-3 lg:py-2">
                                                    <thead className="">
                                                        <tr className="text-(--main-300)">
                                                            <th className="border-b border-(--main-400) p-1 xl:px-10">Service</th>
                                                            <th className="text-center border-b border-(--main-400)">Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="">
                                                        {service.items.map((item) => {
                                                            return (
                                                                <tr key={item.service} className="group text-xs md:text-large lg:text-base xl:text-base block-inline">
                                                                    <td className="border-b border-(--main-300) group-[:last-child]:border-b-0 p-1 xl:px-10 text-(--main-100)">{item.service}</td>
                                                                    <td className="text-center p-1 border-b border-b-(--main-300) group-[:last-child]:border-b-0 text-(--main-100)">{item.price}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

                {/* <div className="relative">
                    <RightBorder />
                    <div>
                        <Image
                            alt="image"
                            src={hairServicesData[expandedPanel].image}
                            fill
                            sizes="100vw"
                            className="object-cover object-top"
                        />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

