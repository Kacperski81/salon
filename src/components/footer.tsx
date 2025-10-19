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
        // <footer id="footer" className="snap-center sticky top-0 bg-(--main-800) min-h-screen py-2 sm:py-10 flex items-center z-50">
        <footer id="footer" className="snap-start text-center bg-(--main-800) min-h-dvh xl:min-h-screen py-2 sm:py-10 flex items-center">
            {/* container */}
            <div className="container mx-auto py-2 px-4 md:py-16 w-full xl:max-w-7xl">
                <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
                    {/* Brand and contact */}
                    <div className="space-y-1 sm:col-span-2 xl:px-4 xl:col-span-1">
                        <h3 className="font-(family-name:--font-aboreto) text-xl sm:text-2xl font-light text-(--primary-100)">Infinity MK</h3>
                        <p className="mb-2 text-sm leading-relaxed text-(--main-300)">Your premier destination for beauty, relaxation, and exceptional service.</p>
                        <div className="flex justify-center">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 flex-shrink-0 text-(--main-400)" />
                                <span className="text-sm text-(--primary-100)">195A Upper Richmond Road
                                    <br />
                                    SW15 6SG Putney, London
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-1">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-white">Services</h4>
                        <ul className="space-y-2 text-sm sm:text-lg text-stone-800">
                            <li>
                                <Link href="/hair" className={`transition-colors duration-300 ${isFooterLinkActive("/hair") ? "text-[#B8860B] font-semibold" : "hover:text-[#B8860B]"} ${isFooterLinkActive("/hair") ? "text-(--main-100)" : "text-(--main-300)"}`}>Hair Services</Link>
                            </li>
                            <li>
                                <Link href="/nail" className={`transition-colors duration-300 ${isFooterLinkActive("/nails") ? "text-[#B8860B] font-semibold" : "hover:text-[#B8860B]"} ${isFooterLinkActive("/nails") ? "text-(--main-100)" : "text-(--main-300)"}`}>Nails Services</Link>
                            </li>
                            <li>
                                <Link href="/beauty" className={`transition-colors duration-300 ${isFooterLinkActive("/beauty") ? "text-[#B8860B] font-semibold" : "hover:text-[#B8860B]"} ${isFooterLinkActive("/beauty") ? "text-(--main-100)" : "text-(--main-300)"}`}>Beauty Treatments</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Opening hours */}
                    <div className="space-y-2">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-(--primary-100)">Opening Hours</h4>
                        <div className="space-y-2 text-xs max-w-[200px] mx-auto">
                            <div className="flex justify-between gap-4">
                                <span className="text-(--main-300)">Monday</span>
                                <span className="text-(--primary-100)">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-(--main-300)">Tuesday</span>
                                <span className="text-(--primary-100)">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-(--main-300)">Wednesday</span>
                                <span className="text-(--primary-100)">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-(--main-300)">Thursday</span>
                                <span className="text-(--primary-100)">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-(--main-300)">Friday</span>
                                <span className="text-(--primary-100)">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-(--main-300)">Saturday</span>
                                <span className="text-(--primary-100)">10:00 - 17:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-(--main-300)">Sunday</span>
                                <span className="text-(--primary-100)">10:00 - 17:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-1 sm:col-span-2 xl:col-span-3 2xl:col-span-1">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-(--primary-100)">Stay Connected</h4>
                        <p className="text-sm text-(--main-300)">Follow us for the latest styles and beauty tips.</p>
                        <div className="flex gap-3 p-3 justify-center">
                            <a href="#" className="p-2 rounded-full transition-all duration-300 hover:opacity-80 hover:scale-110 bg-(--main-300)">
                                <Instagram className="h-6 w-6 text-(--primary-100)" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom bar */}
                <div className="mt-2 border-t border-(--main-600) sm:mt-8 sm:pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="mt-2 text-sm text-center text-(--main-300)">
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