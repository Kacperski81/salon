// import { LeftBorder } from "./border";
import Image from "next/image";
import { Border2 } from "./border";
import HeroImage from "../../public/hero.jpg";
// import { Logo1 } from "./logo";
// import RightBorder from "./rightBorder";

export default function heroSection3() {
    return (
        <>
            <section className="xl:snap-start xl:snap-always min-h-screen lg:grid lg:grid-cols-2">
                {/* <div className="relative min-h-screen flex bg-(--main-200) bg-[url(../../public/bg-no-picture.png)] bg-blend-multiply bg-cover bg-center bg-no-repeat"> */}
                <div className="
                    snap-start
                    snap-always
                    min-h-[100dvh]
                    lg:min-h-full
                    lg:min-h-screen
                    bg-no-repeat
                                  
                    flex
                    flex-col
                    ">
                    <Border2 />
                    <div className="relative">
                        <Image 
                            src={HeroImage} 
                            alt="hero image" 
                            width={200} 
                            height={300}
                            placeholder="blur"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h1 className="leading-[1.3] font-(family-name:--font-aboreto) text-4xl lg:text-5xl xl:text-6xl flex flex-col py-4 xl:pt-10 justify-end lg:justify-center xl:pb-15 items-center px-4 xl:px-16">
                        <span className="font-bold text-dark-gradient">FEEL GOOD, </span>
                        <span className="font-bold text-dark-gradient">LOOK AMAZING.</span>
                        <span className="mt-4 text-lg text-(--main-200) font-bold">{`Step into a world of beauty and relaxation. We're here to make you shine.`}</span>
                    </h1>
                </div>
                <div className="
                    lg:bg-[url(../../public/hero.jpg)]
                    lg:bg-(--main-200) 
                    lg:bg-blend-multiply 
                    lg:bg-cover
                    lg:bg-no-repeat
                    lg:bg-center
                    ">

                </div>
            </section>
        </>
    )
}