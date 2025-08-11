import Image from "next/image";
import ImageSrc from "../../public/about.jpg";

export default function AboutUs() {
    return (
        <div className="grow border-10 grid grid-cols-2">
            <div className="relative">
                <Image
                    src={ImageSrc}
                    alt="Salon hero image"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div>
                <h2>About us</h2>
                <p>Nestled just off Putney High Street, a short stroll from the station, Infinity MK is your go-to salon for hair, nail, and beauty needs. We&#39;re dedicated to understanding your unique style and providing exceptional service to help you look great and feel amazing.</p>
            </div>
        </div>
    )
}