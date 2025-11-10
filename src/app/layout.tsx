import type { Metadata } from "next";
import { Aboreto, Lato, Red_Hat_Text, Cormorant_Garamond } from "next/font/google";
import { Logo3 } from "@/components/logo";
import "./globals.css";
import AnimatedMenu from "@/components/animated-menu";
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

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ['latin'],
  weight: '400',
})

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: "InfinityMK Hair, Nails & Beauty Salon | Putney & Wandsworth, London",
  description: "InfinityMK is your premier hair, nail, and beauty salon in Putney and Wandsworth. We offer a full range of services, including expert haircuts, colouring, manicures, pedicures, and professional beauty treatments. Book your appointment today near Putney High Street.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth xl:snap-y xl:snap-proximity">
      <body className={`${aboreto.variable} ${lato.variable} ${redHatText.variable} ${cormorantGaramond.variable} font-sans antialiased`}>
        <AnimatedMenu />
        <Logo3 />
        <div className="flex flex-col min-h-screen max-w-screen mx-auto bg-white text-sm">
          {children}
        </div>
      </body>
    </html>
  );
}
