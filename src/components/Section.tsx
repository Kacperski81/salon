import { StaticImageData } from "next/image";

export default function Section({children, background, bgRepeat=false}: {children: React.ReactNode, background: StaticImageData, bgRepeat?: boolean}) {
    return (
        <section 
        style={{ 
            backgroundImage: `url(${background.src})`,
            backgroundRepeat: bgRepeat ? 'repeat' : 'no-repeat'}}
        className="
            xl:snap-start
            xl:snap-always
            min-h-dvh 
            xl:min-h-screen
            text-center 
            grow-1
            flex 
            bg-(--main-300)
            bg-blend-multiply
            bg-center-top
            bg-cover"
        >
            {children}
        </section>
    );
}