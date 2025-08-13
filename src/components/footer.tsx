import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-color)]">
            {/* container */}
            <div className="mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand and contact */}
                    <div className="space-y-4>">
                        <h3 className="font-(family-name:--font-aboreto) text-2xl font-light text-[var(--text-color)]">Infinity MK</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">Your premier destination for beauty, relaxation, and exceptional service.</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <p>MapPin icon</p>
                                <span className="text-sm">Address</span>
                            </div>
                        </div>
                    </div>
                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-stone-400">
                            <li>
                                <Link href="/hair" className="hover:text-white transition-colors">Hair Services</Link>
                            </li>
                            <li>
                                <Link href="/nails" className="hover:text-white transition-colors">Nails Services</Link>
                            </li>
                            <li>
                                <Link href="/beauty" className="hover:text-white transition-colors">Beauty Treatments</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Opening hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Opening Hours</h4>
                        <div className="space-y-2 text-sm text-stone-400">
                            <div className="flex justify-between">
                                <span>Monday</span>
                                <span>Closed</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Thursday-Friday</span>
                                <span>9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Stay Connected</h4>
                        <p className="text-sm text-stone-400">Follow us for the latest styles and beauty tips.</p>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 bg-stone-700 rounded-full hover:bg-stone-600 transition-colors">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom bar */}
                <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-stone-400">
                        &copy; 2025 Infinity MK. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-stone-400">
                        <a href="#" className="hover:text-white transition-colors">Booking Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}