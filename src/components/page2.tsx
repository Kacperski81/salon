import Image from "next/image"
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2E7CB" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight"
                style={{ color: "#333333" }}
              >
                FEEL GOOD,
                <br />
                LOOK AMAZING.
              </h1>
              <p className="text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed" style={{ color: "#8B7355" }}>
                Step into a world of beauty and relaxation. We're here to make you shine.
              </p>
              <button
                className="inline-block px-8 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                style={{ backgroundColor: "#B8860B" }}
              >
                Book Appointment
              </button>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infinity-agYFisX8ERA7SDYUVgRbaKcDbeXinF.png"
                alt="Luxury salon interior with stone walls and professional styling stations"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F5F1E8" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 order-2 lg:order-1">
              <Image
                src="/modern-salon-bw.png"
                alt="Modern salon interior in black and white"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ color: "#333333" }}>
                ABOUT US
              </h2>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#8B7355" }}>
                Nestled just off Putney High Street, a short stroll from the station, Infinity MK is your go-to salon
                for hair, nail, and beauty needs. We're dedicated to understanding your unique style and providing
                exceptional service to help you feel good and look amazing.
              </p>
              <button
                className="inline-flex items-center transition-colors duration-300 hover:opacity-80"
                style={{ color: "#B8860B" }}
              >
                See on the map
                <MapPin className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Styling Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F2E7CB" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ color: "#333333" }}>
                HAIR STYLING
              </h2>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#8B7355" }}>
                Precision cuts, vibrant colors and hair styling treatments to bring out the best in your hair.
              </p>
              <button
                className="inline-flex items-center transition-colors duration-300 hover:opacity-80"
                style={{ color: "#B8860B" }}
              >
                View more
                <span className="ml-2">→</span>
              </button>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/hair-styling-hands.png"
                alt="Professional hair styling session"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333333" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Contact */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-light text-white">Infinity MK</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8B7355" }}>
                Your premier destination for beauty, relaxation, and exceptional service.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "#8B7355" }} />
                  <span className="text-sm" style={{ color: "#F5F1E8" }}>
                    Putney High Street, London
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#8B7355" }} />
                  <span className="text-sm" style={{ color: "#F5F1E8" }}>
                    020 8788 1234
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-medium text-white">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                    Hair Cutting & Styling
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                    Hair Coloring
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                    Nail Services
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                    Beauty Treatments
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                    Bridal Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-medium text-white">Opening Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <span style={{ color: "#8B7355" }}>Monday - Friday</span>
                  <span style={{ color: "#F5F1E8" }}>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span style={{ color: "#8B7355" }}>Saturday</span>
                  <span style={{ color: "#F5F1E8" }}>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span style={{ color: "#8B7355" }}>Sunday</span>
                  <span style={{ color: "#F5F1E8" }}>10:00 - 16:00</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "#8B7355" }}>
                <Clock className="h-3 w-3 flex-shrink-0" />
                <span>Book appointments in advance</span>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-medium text-white">Stay Connected</h4>
              <p className="text-sm" style={{ color: "#8B7355" }}>
                Follow us for the latest styles and beauty tips.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-full transition-all duration-300 hover:opacity-80 hover:scale-110"
                  style={{ backgroundColor: "#8B7355" }}
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full transition-all duration-300 hover:opacity-80 hover:scale-110"
                  style={{ backgroundColor: "#8B7355" }}
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full transition-all duration-300 hover:opacity-80 hover:scale-110"
                  style={{ backgroundColor: "#8B7355" }}
                >
                  <Twitter className="h-4 w-4 text-white" />
                </a>
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border rounded text-sm placeholder-opacity-70 focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{
                    backgroundColor: "#8B7355",
                    borderColor: "#8B7355",
                    color: "#F5F1E8",
                    "--tw-ring-color": "#B8860B",
                  }}
                />
                <button
                  className="w-full px-3 py-2 rounded text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "#B8860B", color: "white" }}
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="border-t mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: "#8B7355" }}
          >
            <p className="text-sm text-center md:text-left" style={{ color: "#8B7355" }}>
              © 2024 Infinity MK. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                Privacy Policy
              </a>
              <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                Terms of Service
              </a>
              <a href="#" className="transition-colors duration-300 hover:opacity-80" style={{ color: "#8B7355" }}>
                Booking Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
