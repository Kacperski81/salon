import { Border1 } from "./border";
import { Logo1 } from "./logo"
import RightBorder from "./rightBorder";

export default function HeroSection() {
    return (
        // <section id="hero" className="snap-center sticky top-0 h-screen flex flex-col z-10">
        <section id="hero" className="snap-start min-h-screen flex flex-col">
        {/* rgb(242, 231, 203) */ }
        < div className = "flex flex-col-reverse xl:grid xl:grid-cols-2 grow" >
                <div className="relative flex grow-1">
                    <Border1 />
                    <Logo1 />
                    <h1 className="leading-[1.3] grow-1 font-(family-name:--font-aboreto) text-3xl lg:text-6xl flex flex-col pt-10 xl:justify-center items-center px-4 xl:px-16">
                        <span className="font-bold text-dark-gradient">FEEL GOOD, </span>
                        <span className="font-bold text-dark-gradient">LOOK AMAZING.</span>
                        <span className="mt-4 text-lg text-(--main-500) font-bold">{`Step into a world of beauty and relaxation. We're here to make you shine.`}</span>
                    </h1>
                </div>
                <div className="
                    grow-2
                    bg-(--main-100)
                    bg-[url(../../public/main_hero_light.jpg)]
                    bg-cover
                    bg-center
                    bg-blend-multiply
                    bg-no-repeat">
                    <RightBorder />
                    {/* <Image
                        src={ImageSrc}
                        alt="Salon hero image"
                        fill
                        sizes="100vw"
                        priority
                        placeholder="blur"
                        className="object-cover"
                    /> */}
                </div>
            </div >
        </section >
    )
}