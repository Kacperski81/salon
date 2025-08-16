"use client"

import { useState } from "react"
import { Scissors, Sparkles } from "lucide-react"

export default function Services2() {
    const [activeTab, setActiveTab] = useState("hair")

    const services = {
        hair: {
            title: "Hair Services",
            heading: "Hair services",
            description: "Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.",
            image: "/modern-hair-salon.png",
            icon: <Scissors className="h-6 w-6" />,
        },
        nails: {
            title: "Nail Services",
            heading: "Nail services",
            description: "Manicures, pedicures, and artistic nail designs for perfectly polished hands and feet.",
            image: "/elegant-nail-station.png",
            icon: <Sparkles className="h-6 w-6" />,
        },
    }

    return (
        <section className="py-12 md:py-20" style={{ backgroundColor: "#F5F1E8" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4" style={{ color: "#333333" }}>
                        Our Services
                    </h2>
                    <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#8B7355" }}>
                        {`From a simple cut to a full makeover, we've got you covered.`}
                    </p>
                </div>

                <div className="flex justify-center mb-16">
                    <div
                        className="flex rounded-xl p-2 shadow-lg backdrop-blur-sm border"
                        style={{
                            backgroundColor: "#F2E7CB",
                            borderColor: "rgba(184, 134, 11, 0.1)",
                        }}
                    >
                        {Object.entries(services).map(([key, service]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 text-base lg:text-lg ${activeTab === key
                                        ? "text-white shadow-lg transform scale-105 font-semibold"
                                        : "hover:scale-102 hover:shadow-md font-medium"
                                    }`}
                                style={{
                                    backgroundColor: activeTab === key ? "#B8860B" : "transparent",
                                    color: activeTab === key ? "white" : "#333333",
                                    boxShadow:
                                        activeTab === key
                                            ? "0 8px 25px rgba(184, 134, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                                            : "none",
                                    focusRingColor: "#B8860B",
                                }}
                                onMouseEnter={(e) => {
                                    if (activeTab !== key) {
                                        e.currentTarget.style.backgroundColor = "rgba(139, 115, 85, 0.1)"
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeTab !== key) {
                                        e.currentTarget.style.backgroundColor = "transparent"
                                    }
                                }}
                            >
                                <span className="transition-transform duration-300">{service.icon}</span>
                                <span className="hidden sm:inline transition-all duration-300">{service.title}</span>
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
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                {/* Left side - Text content */}
                                <div className="flex-1 text-center lg:text-left">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6" style={{ color: "#333333" }}>
                                        {service.heading}
                                    </h2>
                                    <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#8B7355" }}>
                                        {service.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                                        style={{ backgroundColor: "#B8860B" }}
                                    >
                                        Learn More
                                    </a>
                                </div>

                                {/* Right side - Image */}
                                <div className="flex-1 w-full">
                                    <img
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.heading}
                                        className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md"
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
