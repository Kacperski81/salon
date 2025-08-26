import Image from "next/image";
import ImageSrc from "../../public/main_hero_light.jpg";

export default function HeroSection() {
    return (
        <div id="hero" className="sticky top-0 h-screen flex flex-col z-10">
            {/* rgb(242, 231, 203) */}
            <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 grow">
                
                <h1 className="leading-[1.3] grow-1 font-(family-name:--font-aboreto) text-3xl lg:text-6xl flex flex-col pt-10 xl:justify-center items-center px-4 xl:px-16">
                    <span>FEEL GOOD, </span>
                    <span>LOOK AMAZING.</span>
                    <span className="mt-4 font-normal text-lg">{`Step into a world of beauty and relaxation. We're here to make you shine.`}</span>
                </h1>
                <div className="bg-[#000] relative grow-3 shadow-xl">
                    <Image
                        src={ImageSrc}
                        alt="Salon hero image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    )
}