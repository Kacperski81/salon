import { StaticImageData } from "next/image";

export default function Section({children, background, bgRepeat=false}: {children: React.ReactNode, background?: StaticImageData, bgRepeat?: boolean}) {
    return (
        <section 
        style={{ 
            backgroundImage: `url(${background?.src})`,
            backgroundRepeat: bgRepeat ? 'repeat' : 'no-repeat'}}
        className="
            xl:snap-start
            xl:snap-always 
            xl:min-h-screen
            text-center 
            grow-1
            bg-(--main-300)
            bg-blend-multiply
            flex"                    
        >       
            {children}
        </section>
    );
}