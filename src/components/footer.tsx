"use client"

import { Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    const isFooterLinkActive = (href: string) => {
        return pathname == href
    }


    return (
        <footer className="bg-[#333333] h-screen flex items-center">
            {/* container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-16 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand and contact */}
                    <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                        <h3 className="font-(family-name:--font-aboreto) text-xl sm:text-2xl font-light text-white">Infinity MK</h3>
                        <p className="text-sm leading-relaxed text-[#8B7355]">Your premier destination for beauty, relaxation, and exceptional service.</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 flex-shrink-0 text-[#8B7355]" />
                                <span className="text-sm text-[#F5F1E8]">195A Upper Richmond Road
                                    <br />
                                    SW15 6SG Putney, London
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-white">Services</h4>
                        <ul className="space-y-2 text-sm sm:text-lg text-stone-800">
                            <li>
                                <Link href="/hair" className={`transition-colors duration-300 ${isFooterLinkActive("/hair") ? "text-[#B8860B] font-semibold" : "hover:text-[#B8860B]"} ${isFooterLinkActive("/hair") ? "text-[#B8860B]" : "text-[#8B7355]"}`}>Hair Services</Link>
                            </li>
                            <li>
                                <Link href="/nails" className={`transition-colors duration-300 ${isFooterLinkActive("/nails") ? "text-[#B8860B] font-semibold" : "hover:text-[#B8860B]"} ${isFooterLinkActive("/nails") ? "text-[#B8860B]" : "text-[#8B7355]"}`}>Nails Services</Link>
                            </li>
                            <li>
                                <Link href="/beauty" className={`transition-colors duration-300 ${isFooterLinkActive("/beauty") ? "text-[#B8860B] font-semibold" : "hover:text-[#B8860B]"} ${isFooterLinkActive("/beauty") ? "text-[#B8860B]" : "text-[#8B7355]"}`}>Beauty Treatments</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Opening hours */}
                    <div className="space-y-4">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-white">Opening Hours</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between gap-4">
                                <span className="text-[#8B7355]">Monday</span>
                                <span className="text-[#F5F1E8]">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-[#8B7355]">Tuesday</span>
                                <span className="text-[#F5F1E8]">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-[#8B7355]">Wednesday</span>
                                <span className="text-[#F5F1E8]">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-[#8B7355]">Thursday</span>
                                <span className="text-[#F5F1E8]">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-[#8B7355]">Friday</span>
                                <span className="text-[#F5F1E8]">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-[#8B7355]">Saturday</span>
                                <span className="text-[#F5F1E8]">10:00 - 17:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-[#8B7355]">Sunday</span>
                                <span className="text-[#F5F1E8]">10:00 - 17:00</span>
                            </div>
                        </div>
                    </div>
                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-white">Stay Connected</h4>
                        <p className="text-sm text-[#8B7355]">Follow us for the latest styles and beauty tips.</p>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 rounded-full transition-all duration-300 hover:opacity-80 hover:scale-110 bg-[#8B7355]">
                                <Instagram className="h-6 w-6 text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom bar */}
                <div className="border-t border-[#8B7355] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-center md:text-left text-[#8B7355]">
                        &copy; 2025 Infinity MK. All rights reserved.
                    </p>
                    {/* <div className="flex gap-6 text-sm text-stone-400">
                        <a href="#" className="text-[var(--text-color)] hover:text-[#B8860B]transition-colors">Booking Policy</a>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}