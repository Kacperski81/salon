import Image from "next/image";
import ImageSrc from "../../public/main_hero.webp";


export default function HeroSection() {
    return (
        <div className="h-screen flex flex-col">
            {/* rgb(242, 231, 203) */}
            <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 grow">

                <h1 className="grow-1 font-(family-name:--font-aboreto) text-6xl flex flex-col pt-10 xl:justify-center items-center px-4 xl:px-16">
                    <span>FEEL GOOD, </span>
                    <span>LOOK AMAZING.</span>
                    <span className="mt-4 font-normal text-lg">{`Step into a world of beauty and relaxation. We're here to make you shine`}</span>
                </h1>
                <div className="bg-[#000] relative grow-3">
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