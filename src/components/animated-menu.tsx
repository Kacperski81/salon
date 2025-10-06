"use client"

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const isLinkActive = (href: string) => {
    return pathname == href
  }

  return (
    <div className="">
      {/* Menu Button - Responsive positioning */}
      <button
        onClick={toggleMenu}
        className={`
          fixed z-50 border border-(--main-200) shadow-lg
          transition-all duration-300 flex items-center justify-center group cursor-pointer
          
          /* Mobile: Square button in top-left corner */
          top-2 right-2 w-12 h-12 rounded-lg
          
          /* Tablet: Full height vertical bar on left side */
          // md:top-2 md:right-2 z-100 md:w-10 md:h-10

          /* Desktop */
          lg:top-1/2 lg:-translate-y-1/2 lg:left-2
        `}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="relative w-6 xl:w-8 h-6 xl:h-8 flex items-center justify-center">
          <div className="space-y-1">
            <div
              className={`w-6 h-0.5 bg-(--main-200) transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5 opacity-80" : "opacity-100"
                }`}
            />
            <div
              className={`w-6 h-0.5 bg-(--main-200) transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <div
              className={`w-6 h-0.5 bg-(--main-200) transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5 opacity-80" : "opacity-100"
                }`}
            />
          </div>
        </div>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu}
      >
        {/* Menu Panel */}
        <div
          className={`fixed left-0 top-0 h-full w-full px-5 bg-(--main-500) border-r-2 border-(--main-200) shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 pt-10 md:pt-20 xl:pl-20">
            <nav className="space-y-6">
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`block text-2xl font-playfair transition-colors duration-300 ${isLinkActive("/") ? "text-(--main-100) font-semibold" : "text-(--main-200) hover:text-(--main-100)"
                  }`}
              >
                Home
              </Link>
              <Link
                href="/hair"
                onClick={handleLinkClick}
                className={`block text-2xl font-playfair transition-colors duration-300 ${isLinkActive("/hair") ? "text-(--main-100) font-semibold" : "text-(--main-200) hover:text-(--main-100)"
                  }`}
              >
                Hair
              </Link>
              <Link
                href="/nail"
                onClick={handleLinkClick}
                className={`block text-2xl font-playfair transition-colors duration-300 ${isLinkActive("/nails") ? "text-(--main-100) font-semibold" : "text-(--main-200) hover:text-(--main-100)"
                  }`}
              >
                Nails
              </Link>
              <Link
                href="/beauty"
                onClick={handleLinkClick}
                className={`block text-2xl font-playfair transition-colors duration-300 ${isLinkActive("/beauty") ? "text-(--main-100) font-semibold" : "text-(--main-200) hover:text-(--main-100)"
                  }`}
              >
                Beauty
              </Link>
            </nav>

            <div className="mt-12 pt-8 border-t border-[#B8860B] border-opacity-30">
              <div className="space-y-4 text-(--main-100)">
                <div className="font-source-sans">
                  <strong>Address:</strong>
                  <br />
                  195A Upper Richmond Road
                  <br />
                  Putney
                  <br />
                  London
                  <br />
                  SW15 6SG
                </div>
                <div className="font-source-sans">
                  <strong>Hours:</strong>

                  <div className="flex w-53 justify-between">
                    <span>Monday</span>
                    <span>9:00 - 19:00</span>
                  </div>
                  <div className="flex w-53 justify-between">
                    <span>Tuesday</span>
                    <span>9:00 - 19:00</span>
                  </div>
                  <div className="flex w-53 justify-between">
                    <span>Wednesday</span>
                    <span>9:00 - 19:00</span>
                  </div>
                  <div className="flex w-53 justify-between">
                    <span>Thursday</span>
                    <span>9:00 - 19:00</span>
                  </div>
                  <div className="flex w-53 justify-between">
                    <span>Friday</span>
                    <span>9:00 - 19:00</span>
                  </div>
                  <div className="flex w-53 justify-between">
                    <span>Saturday</span>
                    <span>10:00 - 17:00</span>
                  </div>
                  <div className="flex w-53 justify-between">
                    <span>Sunday</span>
                    <span>10:00 - 17:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// "use client"

// import { useState } from "react"

// export default function AnimatedMenu() {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <>
//       {/* Menu Button */}
//       <button
//         onClick={toggleMenu}
//         className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-[#F2E7CB] border border-[#B8860B] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group"
//         aria-label={isOpen ? "Close menu" : "Open menu"}
//       >
//         <div className="relative w-6 h-6">
//           {/* Hamburger/Scissors Icon */}
//           <div className={`hamburger-icon ${isOpen ? "open" : ""}`}>
//             {/* Top line */}
//             <div className="line line-top"></div>
//             {/* Middle line */}
//             <div className="line line-middle"></div>
//             {/* Bottom line */}
//             <div className="line line-bottom"></div>
//             {/* Scissors circles */}
//             <div className="scissors-circle scissors-circle-top"></div>
//             <div className="scissors-circle scissors-circle-bottom"></div>
//           </div>
//         </div>
//       </button>

//       {/* Menu Overlay */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
//           isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={toggleMenu}
//       >
//         {/* Menu Panel */}
//         <div
//           className={`px-20 fixed left-0 top-0 h-full w-full bg-[#F2E7CB] border-r-2 border-[#B8860B] shadow-2xl transform transition-transform duration-500 ease-in-out ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-8 pt-20">
//             <nav className="space-y-6">
//               <a
//                 href="#home"
//                 className="block text-2xl font-playfair text-[#333333] hover:text-[#B8860B] transition-colors duration-300"
//               >
//                 Home
//               </a>
//               <a
//                 href="#about"
//                 className="block text-2xl font-playfair text-[#333333] hover:text-[#B8860B] transition-colors duration-300"
//               >
//                 About Us
//               </a>
//               <a
//                 href="#services"
//                 className="block text-2xl font-playfair text-[#333333] hover:text-[#B8860B] transition-colors duration-300"
//               >
//                 Services
//               </a>
//               <a
//                 href="#gallery"
//                 className="block text-2xl font-playfair text-[#333333] hover:text-[#B8860B] transition-colors duration-300"
//               >
//                 Gallery
//               </a>
//               <a
//                 href="#contact"
//                 className="block text-2xl font-playfair text-[#333333] hover:text-[#B8860B] transition-colors duration-300"
//               >
//                 Contact
//               </a>
//             </nav>

//             <div className="mt-12 pt-8 border-t border-[#B8860B] border-opacity-30">
//               <div className="space-y-4 text-[#8B7355]">
//                 <p className="font-source-sans">
//                   <strong>Address:</strong>
//                   <br />
//                   Putney High Street
//                   <br />
//                   London, UK
//                 </p>
//                 <p className="font-source-sans">
//                   <strong>Phone:</strong>
//                   <br />
//                   +44 20 1234 5678
//                 </p>
//                 <p className="font-source-sans">
//                   <strong>Hours:</strong>
//                   <br />
//                   Mon-Sat: 9AM-7PM
//                   <br />
//                   Sun: 10AM-5PM
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hamburger-icon {
//           position: relative;
//           width: 24px;
//           height: 18px;
//         }

//         .line {
//           position: absolute;
//           left: 0;
//           width: 24px;
//           height: 2px;
//           background-color: #B8860B;
//           border-radius: 1px;
//           transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           transform-origin: center;
//         }

//         .line-top {
//           top: 0;
//         }

//         .line-middle {
//           top: 8px;
//         }

//         .line-bottom {
//           top: 16px;
//         }

//         .scissors-circle {
//           position: absolute;
//           width: 5px;
//           height: 5px;
//           background-color: #B8860B;
//           border-radius: 50%;
//           opacity: 0;
//           transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           transition-delay: 0.5s;
//         }

//         .scissors-circle-top {
//           left: -4px;
//           top: 5px;
//         }

//         .scissors-circle-bottom {
//           left: -4px;
//           top: 11px;
//         }

//         .hamburger-icon.open .line-top {
//           top: 8px;
//           transform: rotate(45deg);
//           animation: openTop 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }

//         .hamburger-icon.open .line-middle {
//           opacity: 1;
//           animation: openMiddle 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }

//         .hamburger-icon.open .line-bottom {
//           top: 8px;
//           transform: rotate(-45deg);
//           animation: openBottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }

//         .hamburger-icon.open .scissors-circle {
//           opacity: 1;
//           animation: showCircles 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
//         }

//         .hamburger-icon:not(.open) .line-top {
//           animation: closeTop 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }

//         .hamburger-icon:not(.open) .line-middle {
//           animation: closeMiddle 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }

//         .hamburger-icon:not(.open) .line-bottom {
//           animation: closeBottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }

//         .hamburger-icon:not(.open) .scissors-circle {
//           animation: hideCircles 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }

//         @keyframes openTop {
//           0% { top: 0; transform: rotate(0deg); width: 24px; }
//           20% { top: 8px; transform: rotate(0deg); width: 24px; }
//           40% { top: 8px; transform: rotate(0deg); width: 2px; left: 11px; }
//           60% { top: 8px; transform: rotate(45deg); width: 2px; left: 11px; }
//           100% { top: 8px; transform: rotate(45deg); width: 20px; left: 2px; }
//         }

//         @keyframes openMiddle {
//           0% { opacity: 1; width: 24px; left: 0; }
//           20% { opacity: 1; width: 24px; left: 0; }
//           40% { opacity: 1; width: 2px; left: 11px; }
//           60% { opacity: 0; width: 2px; left: 11px; }
//           100% { opacity: 0; width: 0px; left: 12px; }
//         }

//         @keyframes openBottom {
//           0% { top: 16px; transform: rotate(0deg); width: 24px; }
//           20% { top: 8px; transform: rotate(0deg); width: 24px; }
//           40% { top: 8px; transform: rotate(0deg); width: 2px; left: 11px; }
//           60% { top: 8px; transform: rotate(-45deg); width: 2px; left: 11px; }
//           100% { top: 8px; transform: rotate(-45deg); width: 20px; left: 2px; }
//         }

//         @keyframes showCircles {
//           0% { opacity: 0; transform: scale(0) translateX(0); }
//           50% { opacity: 0.7; transform: scale(0.8) translateX(-2px); }
//           100% { opacity: 1; transform: scale(1) translateX(0); }
//         }

//         @keyframes closeTop {
//           0% { top: 8px; transform: rotate(45deg); width: 20px; left: 2px; }
//           20% { top: 8px; transform: rotate(0deg); width: 20px; left: 2px; }
//           40% { top: 8px; transform: rotate(0deg); width: 2px; left: 11px; }
//           60% { top: 8px; transform: rotate(0deg); width: 24px; left: 0; }
//           80% { top: 4px; transform: rotate(0deg); width: 24px; left: 0; }
//           100% { top: 0; transform: rotate(0deg); width: 24px; left: 0; }
//         }

//         @keyframes closeMiddle {
//           0% { opacity: 0; width: 0px; left: 12px; }
//           20% { opacity: 0; width: 2px; left: 11px; }
//           40% { opacity: 1; width: 2px; left: 11px; }
//           60% { opacity: 1; width: 12px; left: 6px; }
//           80% { opacity: 1; width: 20px; left: 2px; }
//           100% { opacity: 1; width: 24px; left: 0; }
//         }

//         @keyframes closeBottom {
//           0% { top: 8px; transform: rotate(-45deg); width: 20px; left: 2px; }
//           20% { top: 8px; transform: rotate(0deg); width: 20px; left: 2px; }
//           40% { top: 8px; transform: rotate(0deg); width: 2px; left: 11px; }
//           60% { top: 8px; transform: rotate(0deg); width: 24px; left: 0; }
//           80% { top: 12px; transform: rotate(0deg); width: 24px; left: 0; }
//           100% { top: 16px; transform: rotate(0deg); width: 24px; left: 0; }
//         }

//         @keyframes hideCircles {
//           0% { opacity: 1; transform: scale(1); }
//           100% { opacity: 0; transform: scale(0); }
//         }
//       `}</style>
//     </>
//   )
// }
