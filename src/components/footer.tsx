import { Instagram, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-color)]">
            {/* container */}
            <div className="container mx-auto px-4 sm:-px-6 lg:px-8 md:py-16 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand and contact */}
                    <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                        <h3 className="font-(family-name:--font-aboreto) text-xl sm:text-2xl font-light text-[var(--text-color)]">Infinity MK</h3>
                        <p className="text-stone-800 text-sm leading-relaxed text-[#8B7355]">Your premier destination for beauty, relaxation, and exceptional service.</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 flex-shrink-0 text-[#8B7355]" />
                                <span className="text-sm">195A Upper Richmond Road
                                    <br />
                                    SW15 6SG Putney, London
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="font-(family-name:--font-aboreto) text-lg font-medium text-black-500]">Services</h4>
                        <ul className="space-y-2 text-sm sm:text-lg text-stone-800">
                            <li>
                                <Link href="/hair" className="hover:text-[#B8860B] transition-colors">Hair Services</Link>
                            </li>
                            <li>
                                <Link href="/nails" className="hover:text-[#B8860B] transition-colors">Nails Services</Link>
                            </li>
                            <li>
                                <Link href="/beauty" className="hover:text-[#B8860B] transition-colors">Beauty Treatments</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Opening hours */}
                    <div className="space-y-4">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-[var(--text-color)]">Opening Hours</h4>
                        <div className="space-y-2 text-sm text-[var(--text-color)]">
                            <div className="flex justify-between gap-4">
                                <span>Monday</span>
                                <span>Closed</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>Thursday-Friday</span>
                                <span>9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>Saturday</span>
                                <span>10:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="font-(family-name:--font-aboreto) text-base sm:text-lg font-medium text-[var(--text-color)]">Stay Connected</h4>
                        <p className="text-sm text-[var(--text-color)]">Follow us for the latest styles and beauty tips.</p>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 rounded-full hover:bg-stone-600 transition-colors">
                                <Instagram className="h-6 w-6 text-[var(--text-color)]" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom bar */}
                <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[var(--text-color)]">
                        &copy; 2025 Infinity MK. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-stone-400">
                        <a href="#" className="text-[var(--text-color)] hover:text-[#B8860B]transition-colors">Booking Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}