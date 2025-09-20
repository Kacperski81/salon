// import Image from "next/image";
// import ImageSrc from "../../public/main_hero_light.jpg";
import { Border2 } from "./border";
import { Logo2 } from "./logo";

export default function HeroSection2() {
    return (
        <div id="hero" className="
        bg-(--main-500) 
        bg-[url(../../public/main_hero_light.jpg)] 
        xl:bg-[url(../../public/main_hero_light_16_9.jpg)] 
        bg-cover 
        bg-center 
        xl:bg-bottom 
        bg-no-repeat 
        bg-blend-overlay 
        sticky 
        top-0 
        h-screen 
        flex 
        flex-col 
        justify-center 
        items-center 
        z-20">
            <Border2 />
            <Logo2 />
            <div className="">
                <h1 className="leading-[1.3] grow-1 font-(family-name:--font-aboreto) text-3xl lg:text-6xl xl:text-7xl flex flex-col pt-10 xl:justify-center items-center px-4 xl:px-16">
                    <span className="font-bold text-dark-gradient">FEEL GOOD, </span>
                    <span className="font-bold text-6">LOOK AMAZING.</span>
                    <span className="mt-4 text-sm lg:text-xl text-(--main-300) font-bold">{`Step into a world of beauty and relaxation. We're here to make you shine.`}</span>
                </h1>
            </div>

            {/* rgb(242, 231, 203) */}
            {/* <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 grow">
                <div className="relative flex">
                    <Border />
                    <Logo />
                    <h1 className="leading-[1.3] grow-1 font-(family-name:--font-aboreto) text-4xl lg:text-6xl flex flex-col pt-10 xl:justify-center items-center px-4 xl:px-16">
                        <span className="font-bold text-4">FEEL GOOD, </span>
                        <span className="font-bold text-4">LOOK AMAZING.</span>
                        <span className="mt-4 text-lg text-4 font-bold">{`Step into a world of beauty and relaxation. We're here to make you shine.`}</span>
                    </h1>
                </div>
                <div className="relative grow-3 shadow-xl">
                    <Image
                        src={ImageSrc}
                        alt="Salon hero image"
                        fill
                        sizes="100vw"
                        priority
                        placeholder="blur"
                        className="object-cover"
                    />
                </div>
            </div> */}
        </div>
    )
}