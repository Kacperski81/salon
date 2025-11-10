// import { LeftBorder } from "./border";
import Image from "next/image";
import { Border2 } from "./border";
import HeroImage from "../../public/hero.jpg";
import Section from "./Section";
// import { Logo1 } from "./logo";
// import RightBorder from "./rightBorder";

export default function heroSection3() {
    return (
        <Section>
            <main className="md:grow bg-(--main-400) bg-blend-multiply max-h-dvh">

                <Border2 />
                <div className="flex flex-col-reverse
                md:flex-row 
                md:items-center">

                    <div className="flex py-4 md:basis-1/2">

                        <h1 className="
                        leading-[1.3] font-(family-name:--font-aboreto) 
                        sm:grow-1 
                        text-4xl 
                        lg:text-5xl 
                        xl:text-6xl 
                        px-4 xl:px-16 
                        flex flex-col"
                        >

                            <span className="font-bold text-dark-gradient">FEEL GOOD, </span>
                            <span className="font-bold text-dark-gradient ">LOOK AMAZING.</span>
                            <span className="mt-4 text-lg text-(--main-200) font-bold">{`Step into a world of beauty and relaxation. We're here to make you shine.`}</span>
                        </h1>
                    </div>

                    <div className="relative
                    grow
                    basis-[65vh]
                    md:basis-1/2
                    md:h-screen">
                        <Image
                            src={HeroImage}
                            alt="hero image"
                            fill
                            quality={100}
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </main>
        </Section>

    )
}