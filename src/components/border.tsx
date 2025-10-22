import type React from "react"

// export default function Border() {
//   return (
//     <div className="m-3 hidden lg:block fixed top-0 left-0 bottom-0 right-[50%] pointer-events-none">
      
//       {/* Top border */}
//       <div className="absolute top-0 left-0 right-0 bottom-0 h-8">
//         {/* straight line */}
//         <svg className="w-full h-full" viewBox="0 0 1200 32" preserveAspectRatio="none">
//           <path d="M5,16 L1200,16" stroke="var(--main-900)" strokeWidth="var(--top-frame-width)" fill="none" opacity="1" />
//           <path d="M5,20 L1200,20" stroke="var(--main-800)" strokeWidth="var(--bottom-frame-width)" fill="none" opacity="1" />
//         </svg>
//       </div>

//       {/* Bottom border */}
//       <div className="absolute bottom-0 left-0 right-0 h-8">
//         {/* straight line */}
//         <svg className="w-full h-full" viewBox="0 0 1200 32" preserveAspectRatio="none">
//           <path d="M5,16 L1200,16" stroke="var(--main-900)" strokeWidth="var(--top-frame-width)" fill="none" opacity="1" />
//           <path d="M5,12 L1200,12" stroke="var(--main-800)" strokeWidth="var(--bottom-frame-width)" fill="none" opacity="1" />
//         </svg>
//       </div>

//       {/* Left-top border */}
//       <div className="absolute left-0 top-0 bottom-0 right-0 w-8">

//         {/* straight line */}
//         <svg className="w-full h-[45%]" viewBox="0 0 32 800" preserveAspectRatio="none">
//           <path d="M20,0 L20,800" stroke="var(--main-900)" strokeWidth="var(--top-frame-width)" fill="none" opacity="1" />
//           <path d="M25,0 L25,800" stroke="var(--main-800)" strokeWidth="var(--bottom-frame-width)" fill="none" opacity="1" />
//         </svg>
//       </div>

//       {/* Left-bottom border */}
//       <div className="absolute left-0 top-[55%] bottom-0 right-0 w-8">

//         {/* straight line */}
//         <svg className="w-full h-full" viewBox="0 0 32 800" preserveAspectRatio="none">
//           <path d="M20,0 L20,800" stroke="var(--main-900)" strokeWidth="var(--top-frame-width)" fill="none" opacity="1" />
//           <path d="M25,0 L25,800" stroke="var(--main-800)" strokeWidth="var(--bottom-frame-width)" fill="none" opacity="1" />
//         </svg>

//       </div>

//       {/* Right border */}
//       <div className="absolute right-0 top-0 bottom-0 w-8">

//         {/* straight line */}
//         <svg className="w-full h-full" viewBox="0 0 32 800" preserveAspectRatio="none">
//           <path d="M20,0 L20,800" stroke="var(--main-900)" strokeWidth="var(--top-frame-width)" fill="none" opacity="1" />
//           <path d="M15,0 L15,800" stroke="var(--main-800)" strokeWidth="var(--bottom-frame-width)" fill="none" opacity="1" />
//         </svg>
//       </div>
//     </div>
//   )
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
//       <body className="font-sans">
//         <FloralBorder />
//         {children}
//       </body>
//     </html>
//   )
// }

export function LeftBorder() {
  // This component draws a seamless, double-line border around the
  // left half of the screen on large desktops (xl breakpoint).
  return (
    <div className="m-4 hidden xl:block fixed inset-0 right-[50%] pointer-events-none">
      {/* The single SVG element now contains two paths to create the
        double-line effect with connected corners.
      */}
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {/* Outer border path */}
        <path
          d="M5,450 L5,795 L1195,795 L1195,5 L700,5 M500,5 L5,5 L5,355"
          stroke="var(--main-100)"
          strokeWidth="var(--top-frame-width)"
          fill="none"
          opacity="1"
        />
        {/* Inner border path */}
        <path
          d="M15,455 L15,785 L1185,785 L1185,15 L710,15 M490,15 L15,15 L15,350"
          stroke="var(--main-200)"
          strokeWidth="var(--bottom-frame-width)"
          fill="none"
          opacity="1"
        />
      </svg>
    </div>
  );
}

export function Border1() {
  // This component draws a seamless, double-line border around the
  // left half of the screen on large desktops (xl breakpoint).
  return (
    <div className="m-4 hidden absolute inset-0 lg:block pointer-events-none">
      {/* The single SVG element now contains two paths to create the
        double-line effect with connected corners.
      */}
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {/* Outer border path */}
        <path
          d="M5,450 L5,795 L1195,795 L1195,5 L750,5 M450,5 L5,5 L5,355"
          stroke="var(--main-900)"
          strokeWidth="var(--top-frame-width)"
          fill="none"
          opacity="1"
        />
        {/* Inner border path */}
        <path
          d="M15,455 L15,785 L1185,785 L1185,15 L760,15 M440,15 L15,15 L15,350"
          stroke="var(--main-800)"
          strokeWidth="var(--bottom-frame-width)"
          fill="none"
          opacity="1"
        />
      </svg>
    </div>
  );
}

export function Border2() {
  // This component draws a seamless, double-line border around the
  // left half of the screen on large desktops (xl breakpoint).
  return (
    <div className="z-2 m-4 hidden lg:block fixed inset-0 pointer-events-none">
      {/* The single SVG element now contains two paths to create the
        double-line effect with connected corners.
      */}
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {/* Outer border path */}
        <path
          d="M5,450 L5,795 L1195,795 L1195,5 L700,5 M500,5 L5,5 L5,355"
          stroke="var(--main-100)"
          strokeWidth="var(--top-frame-width)"
          fill="none"
          opacity="1"
        />
        {/* Inner border path */}
        <path
          d="M15,455 L15,785 L1185,785 L1185,15 L710,15 M490,15 L15,15 L15,350"
          stroke="var(--main-200)"
          strokeWidth="var(--bottom-frame-width)"
          fill="none"
          opacity="1"
        />
      </svg>
    </div>
  );
}

