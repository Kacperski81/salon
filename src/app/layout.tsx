import type { Metadata } from "next";
import { Aboreto, Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
// import Hamburger from "@/components/hamburger";
import AnimatedMenu from "@/components/animated-menu";
import FloralBorder from "@/components/border";
const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ['latin'],
  weight: '400'
})

const lato = Lato({
  variable: "--font-lato",
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: "InfinityMK Hair, Nails & Beauty Salon | Putney & Wandsworth, London",
  description: "InfinityMK is your premier hair, nail, and beauty salon in Putney and Wandsworth. We offer a full range of services, including expert haircuts, colouring, manicures, pedicures, and professional beauty treatments. Book your appointment today near Putney High Street.",
};

// function FloralBorder() {
//   return (
//     <div className="fixed inset-0 pointer-events-none z-50">
//       {/* Top border with stem */}
//       <div className="absolute top-0 left-0 right-0 h-8">
//         <svg className="w-full h-full" viewBox="0 0 1200 32" preserveAspectRatio="none">
//           <path d="M0,16 Q300,8 600,16 T1200,16" stroke="#8B7355" strokeWidth="1.5" fill="none" opacity="0.7" />
//           <path d="M0,20 Q300,12 600,20 T1200,20" stroke="#B8860B" strokeWidth="1" fill="none" opacity="0.5" />
//         </svg>
//       </div>

//       {/* Bottom border with stem */}
//       <div className="absolute bottom-0 left-0 right-0 h-8">
//         <svg className="w-full h-full" viewBox="0 0 1200 32" preserveAspectRatio="none">
//           <path d="M0,16 Q300,24 600,16 T1200,16" stroke="#8B7355" strokeWidth="1.5" fill="none" opacity="0.7" />
//           <path d="M0,12 Q300,20 600,12 T1200,12" stroke="#B8860B" strokeWidth="1" fill="none" opacity="0.5" />
//         </svg>
//       </div>

//       {/* Left border with stem */}
//       <div className="absolute left-0 top-0 bottom-0 w-8">
//         <svg className="w-full h-full" viewBox="0 0 32 800" preserveAspectRatio="none">
//           <path d="M16,0 Q8,200 16,400 T16,800" stroke="#8B7355" strokeWidth="1.5" fill="none" opacity="0.7" />
//           <path d="M20,0 Q12,200 20,400 T20,800" stroke="#B8860B" strokeWidth="1" fill="none" opacity="0.5" />
//         </svg>
//       </div>

//       {/* Right border with stem */}
//       <div className="absolute right-0 top-0 bottom-0 w-8">
//         <svg className="w-full h-full" viewBox="0 0 32 800" preserveAspectRatio="none">
//           <path d="M16,0 Q24,200 16,400 T16,800" stroke="#8B7355" strokeWidth="1.5" fill="none" opacity="0.7" />
//           <path d="M12,0 Q20,200 12,400 T12,800" stroke="#B8860B" strokeWidth="1" fill="none" opacity="0.5" />
//         </svg>
//       </div>

//       {/* Top-left corner with leaves */}
//       <div className="absolute top-2 left-2 w-16 h-16">
//         <svg className="w-full h-full" viewBox="0 0 64 64">
//           <path d="M8,8 Q16,4 24,8 Q20,16 8,24 Q4,16 8,8" fill="#B8860B" opacity="0.6" />
//           <path d="M12,12 Q18,8 24,12 Q20,18 12,24 Q8,18 12,12" fill="#8B7355" opacity="0.4" />
//           <path d="M16,16 Q20,14 24,16 Q22,20 16,24 Q14,20 16,16" fill="#B8860B" opacity="0.3" />
//         </svg>
//       </div>

//       {/* Top-right corner with leaves */}
//       <div className="absolute top-2 right-2 w-16 h-16">
//         <svg className="w-full h-full" viewBox="0 0 64 64">
//           <path d="M56,8 Q48,4 40,8 Q44,16 56,24 Q60,16 56,8" fill="#B8860B" opacity="0.6" />
//           <path d="M52,12 Q46,8 40,12 Q44,18 52,24 Q56,18 52,12" fill="#8B7355" opacity="0.4" />
//           <path d="M48,16 Q44,14 40,16 Q42,20 48,24 Q50,20 48,16" fill="#B8860B" opacity="0.3" />
//         </svg>
//       </div>

//       {/* Bottom-left corner with leaves */}
//       <div className="absolute bottom-2 left-2 w-16 h-16">
//         <svg className="w-full h-full" viewBox="0 0 64 64">
//           <path d="M8,56 Q16,60 24,56 Q20,48 8,40 Q4,48 8,56" fill="#B8860B" opacity="0.6" />
//           <path d="M12,52 Q18,56 24,52 Q20,46 12,40 Q8,46 12,52" fill="#8B7355" opacity="0.4" />
//           <path d="M16,48 Q20,50 24,48 Q22,44 16,40 Q14,44 16,48" fill="#B8860B" opacity="0.3" />
//         </svg>
//       </div>

//       {/* Bottom-right corner with leaves */}
//       <div className="absolute bottom-2 right-2 w-16 h-16">
//         <svg className="w-full h-full" viewBox="0 0 64 64">
//           <path d="M56,56 Q48,60 40,56 Q44,48 56,40 Q60,48 56,56" fill="#B8860B" opacity="0.6" />
//           <path d="M52,52 Q46,56 40,52 Q44,46 52,40 Q56,46 52,52" fill="#8B7355" opacity="0.4" />
//           <path d="M48,48 Q44,50 40,48 Q42,44 48,40 Q50,44 48,48" fill="#B8860B" opacity="0.3" />
//         </svg>
//       </div>

//       {/* Small decorative leaves scattered along borders */}
//       <div className="absolute top-1/4 left-1 w-6 h-6">
//         <svg className="w-full h-full" viewBox="0 0 24 24">
//           <path d="M4,12 Q8,8 12,12 Q8,16 4,12" fill="#B8860B" opacity="0.4" />
//         </svg>
//       </div>

//       <div className="absolute top-3/4 right-1 w-6 h-6">
//         <svg className="w-full h-full" viewBox="0 0 24 24">
//           <path d="M20,12 Q16,8 12,12 Q16,16 20,12" fill="#8B7355" opacity="0.4" />
//         </svg>
//       </div>

//       <div className="absolute top-1 left-1/3 w-6 h-6">
//         <svg className="w-full h-full" viewBox="0 0 24 24">
//           <path d="M12,4 Q8,8 12,12 Q16,8 12,4" fill="#B8860B" opacity="0.4" />
//         </svg>
//       </div>

//       <div className="absolute bottom-1 right-1/3 w-6 h-6">
//         <svg className="w-full h-full" viewBox="0 0 24 24">
//           <path d="M12,20 Q16,16 12,12 Q8,16 12,20" fill="#8B7355" opacity="0.4" />
//         </svg>
//       </div>
//     </div>
//   )
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aboreto.variable} ${lato.variable} antialiased`}
      >
        {/* <div className="m-7 pointer-events-none fixed inset-0 z-50 xl:border-4 xl:border-[#333333]">
          <Hamburger />
        </div> */}
        <AnimatedMenu />
        <FloralBorder />
        <div className="flex flex-col min-h-screen max-w-screen mx-auto bg-white text-sm">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
