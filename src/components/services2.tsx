"use client"

import { useState } from "react"
import { Scissors, Sparkles } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import ImageHairSrc from "../../public/zd2.jpg";
import ImageNailSrc from "../../public/card_nails.jpg";

export default function Services2() {
    const [activeTab, setActiveTab] = useState("hair")

    const services = {
        hair: {
            title: "Hair Services",
            heading: "Hair services",
            description: "Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.",
            image: ImageHairSrc,
            icon: <Scissors className="h-6 w-6" />,
            link: "/hair",
        },
        nails: {
            title: "Nail Services",
            heading: "Nail services",
            description: "Manicures, pedicures, and artistic nail designs for perfectly polished hands and feet.",
            image: ImageNailSrc,
            icon: <Sparkles className="h-6 w-6" />,
            link: "/nails"
        },
    }

    return (
        <section id="services" className="sticky top-0 py-12 md:py-20 min-h-screen z-30 bg-[var(--bg-color)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="font-(family-name:--font-lato) text-center mb-12 md:mb-16">
                    <h2 className="font-(family-name:--font-aboreto) text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-[var(--text-color)]">
                        Our Services
                    </h2>
                    <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#8B7355" }}>
                        {`From a simple cut to a full makeover, we've got you covered.`}
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="flex rounded-lg p-1 shadow-sm" style={{ backgroundColor: "#F2E7CB" }}>
                        {Object.entries(services).map(([key, service]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === key ? "text-white shadow-md transform scale-105" : "hover:opacity-80"
                                    }`}
                                style={{
                                    backgroundColor: activeTab === key ? "#B8860B" : "transparent",
                                    color: activeTab === key ? "white" : "#333333",
                                }}
                            >
                                {service.icon}
                                <span className="hidden sm:inline">{service.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="relative overflow-hidden">
                    {Object.entries(services).map(([key, service]) => (
                        <div
                            key={key}
                            className={`transition-all duration-500 ease-in-out ${activeTab === key ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute inset-0"
                                }`}
                        >
                            <div className="font-(family-name:--font-lato) flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                {/* Left side - Text content */}
                                <div className="flex-1 text-center lg:text-left">
                                    <h2 className="font-(family-name:--font-aboreto) text-2xl sm:text-3xl lg:text-4xl mb-6" style={{ color: "#333333" }}>
                                        {service.heading}
                                    </h2>
                                    <p className="text-base sm:text-lg leading-relaxed mb-8 text-[var(--text-color)]">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={service.link}
                                        className="inline-block px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                                        style={{ backgroundColor: "#B8860B" }}
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Right side - Image */}
                                <div className="relative flex-1 w-full h-64 sm:h-80 lg:h-120">
                                    <Image
                                        src={service.image}
                                        alt={service.heading}
                                        fill
                                        className="object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}




// import Image from "next/image";
// import Link from "next/link";

// export default function Services2() {
//     return (
//         <section>
//             {/* Hair */}
//             <div className="grid xl:grid-cols-2 xl:gap-16 xl:min-h-screen">

//                 <div className="font-(family-name:--font-lato) xl:justify-self-end xl:self-center">
//                     <h2 className="font-(family-name:--font-aboreto) text-3xl xl:text-4xl xl:font-bold xl:mb-8">Hair Styling</h2>
//                     <p className="xl:text-left leading-[1.6]">Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.</p>
//                     <p className="xl:text-right">
//                         <Link href="/hair" className="flex gap-3 justify-end">
//                             View more
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                             </svg>
//                         </Link>
//                     </p>
//                 </div>
//                 {/* <div className="relative w-1/2 aspect-[2/3] xl:justify-self-end xl:self-center shadow-2xl"> */}
//                 <div className="relative w-1/2 aspect-[2/3] xl:self-center xl:justify-self-start text-xl shadow-2xl">
//                     <Image
//                         src={ImageHairSrc}
//                         alt="about image"
//                         fill
//                         sizes="50vw"
//                         style={{ objectFit: "cover" }}
//                     />
//                 </div>
//             </div>

//             {/* nail */}
//             <div className="grid xl:grid-cols-2 xl:gap-16 xl:min-h-screen">
//                 <div className="relative w-1/2 aspect-[2/3] xl:justify-self-end xl:self-center shadow-2xl">
//                     <Image
//                         src={ImageNailSrc}
//                         alt="about image"
//                         fill
//                         sizes="50vw"
//                         style={{ objectFit: "cover" }}
//                     />
//                 </div>
//                 <div className="font-(family-name:--font-lato) xl:self-center xl:justify-self-start xl:w-2/3 text-xl">
//                     <h2 className="font-(family-name:--font-aboreto) text-3xl xl:text-4xl xl:font-bold xl:mb-8">Nails Service</h2>
//                     <p className="xl:text-left leading-[1.6]">Manicures, pedicures, and artistic nail designs for perfectly polished hands nad feet.</p>
//                     <p className="xl:text-right">
//                         <Link href="/nails" >
//                             View more
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                             </svg>
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }