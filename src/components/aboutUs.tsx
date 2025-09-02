import Image from "next/image";
import ImageSrc from "../../public/about2.jpg";
import { MapPin } from "lucide-react";


export default function AboutUs() {
    return (
        <section id="about" className="sticky py-10 top-0 bg-(--main-200) grid justify-items-center content-center gap-12 xl:grid-cols-2 xl:gap-16 min-h-screen z-20">
            <div className="relative w-[70%] aspect-[5/4] md:aspect-[5/4] xl:justify-self-end xl:self-center shadow-2xl">
                <Image
                    src={ImageSrc}
                    alt="about image"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="font-(family-name:--font-lato) px-4 flex flex-col gap-4 xl:gap-6 xl:self-center xl:justify-self-start w-4/5 xl:w-2/3 text-xl">
                <h2 className="font-(family-name:--font-aboreto) text-3xl sm:text-4xl lg:text-5xl xl:text-left font-light">About Us</h2>
                <p className="leading-relaxed text-base sm:text-lg md:text-xl xl:text-left">{`Nestled just off Putney High Street, a short stroll from the station, Infinity MK is your go-to salon for hair, nail, and beauty needs. We're dedicated to understanding your unique style and providing exceptional service to help you fell good and look amazing.`}</p>
                <p className="xl:text-left text-[#B8860B] font-bold">
                    <a href="https://www.google.com/maps/place/Infinity+MK+Hair+Salon/@51.4611462,-0.2216526,17z/data=!4m14!1m7!3m6!1s0x48760f11c7b6009d:0x8bee35c1c856d711!2sInfinity+MK+Hair+Salon!8m2!3d51.4611462!4d-0.2190723!16s%2Fg%2F1hc51mwdl!3m5!1s0x48760f11c7b6009d:0x8bee35c1c856d711!8m2!3d51.4611462!4d-0.2190723!16s%2Fg%2F1hc51mwdl?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" >
                        See on the map
                        <MapPin className="ml-2 w-6 h-6 inline-block" />
                    </a>
                </p>
            </div>
        </section>
    )
}

// export default function AboutUs() {
//     return (
//         <section className="grid gird-cols-1 about-layout items-center xl:grid-cols-2 xl:gap-16 xl:min-h-screen">
//             <div className="about relative w-4/5 aspect-[4/3] justify-self-center xl:justify-self-end xl:self-center shadow-2xl">
//                 <Image
//                     src={ImageSrc}
//                     alt="about image"
//                     fill
//                     sizes="50vw"
//                     style={{ objectFit: "cover" }}
//                 />
//             </div>
//             <div className="flex flex-col gap-6 w-1/2 justify-self-center about z-1 text-white xl:self-center xl:justify-self-start xl:w-2/3 font-(family-name:--font-aboreto) text-xl">
//                 <h2 className="text-3xl xl:text-4xl xl:font-bold xl:mb-8">About Us</h2>
//                 <p className="xl:text-left">{`Nestled just off Putney High Street, a short stroll from the station, Infinity MK is your go-to salon for hair, nail, and beauty needs. We're dedicated to understanding your unique style and providing exceptional service to help you fell good and look amazing.`}</p>
//                 <p className="xl:text-right">
//                     <a href="https://www.google.com/maps/place/Infinity+MK+Hair+Salon/@51.4611462,-0.2216526,17z/data=!4m14!1m7!3m6!1s0x48760f11c7b6009d:0x8bee35c1c856d711!2sInfinity+MK+Hair+Salon!8m2!3d51.4611462!4d-0.2190723!16s%2Fg%2F1hc51mwdl!3m5!1s0x48760f11c7b6009d:0x8bee35c1c856d711!8m2!3d51.4611462!4d-0.2190723!16s%2Fg%2F1hc51mwdl?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
//                         See on the map
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                         </svg>
//                     </a>
//                 </p>
//             </div>
//         </section>
//     )
// }
