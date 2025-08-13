import Image from "next/image";
import Link from "next/link";
import ImageHairSrc from "../../public/zd2.jpg";
import ImageNailSrc from "../../public/card_nails.jpg";

export default function Services2() {
    return (
        <section>
            {/* Hair */}
            <div className="grid xl:grid-cols-2 xl:gap-16 xl:min-h-screen">

                <div className="font-(family-name:--font-lato) xl:justify-self-end xl:self-center">
                    <h2 className="font-(family-name:--font-aboreto) text-3xl xl:text-4xl xl:font-bold xl:mb-8">Hair Styling</h2>
                    <p className="xl:text-left leading-[1.6]">Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.</p>
                    <p className="xl:text-right">
                        <Link href="/hair" className="flex gap-3 justify-end">
                            View more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </p>
                </div>
                {/* <div className="relative w-1/2 aspect-[2/3] xl:justify-self-end xl:self-center shadow-2xl"> */}
                <div className="relative w-1/2 aspect-[2/3] xl:self-center xl:justify-self-start text-xl shadow-2xl">
                    <Image
                        src={ImageHairSrc}
                        alt="about image"
                        fill
                        sizes="50vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* nail */}
            <div className="grid xl:grid-cols-2 xl:gap-16 xl:min-h-screen">
                <div className="relative w-1/2 aspect-[2/3] xl:justify-self-end xl:self-center shadow-2xl">
                    <Image
                        src={ImageNailSrc}
                        alt="about image"
                        fill
                        sizes="50vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="font-(family-name:--font-lato) xl:self-center xl:justify-self-start xl:w-2/3 text-xl">
                    <h2 className="font-(family-name:--font-aboreto) text-3xl xl:text-4xl xl:font-bold xl:mb-8">Nails Service</h2>
                    <p className="xl:text-left leading-[1.6]">Manicures, pedicures, and artistic nail designs for perfectly polished hands nad feet.</p>
                    <p className="xl:text-right">
                        <Link href="/nails" >
                            View more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}