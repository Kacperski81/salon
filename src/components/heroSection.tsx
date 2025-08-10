import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="h-screen flex flex-col">
            {/* rgb(242, 231, 203) */}
            <div className="grid grid-cols-2 bg-[#F2E7CB] grow">

                <h1 className="flex justify-center items-center">
                    <span>FEEL GOOD, </span>
                    <span>LOOK AMAZING.</span>
                </h1>
                <div className="bg-[#000] relative">
                    <Image
                        src="/main_hero.webp"
                        alt="Salon hero image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    )
}