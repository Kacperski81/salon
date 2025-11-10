import type { CarouselItem } from "@/components/carousel/Carousel3";
import PageHeading from "../PageHeading";

export default function Gallery3({ pictures3 }: { pictures3: CarouselItem[] }) {
    const pictures = pictures3.slice(1,6);

    return (
        <section className="snap-start
            min-h-dvh 
            xl:min-h-screen 
            grow-1
            bg-(--main-300)
            bg-[url(../../public/nailBg.png)]
            bg-cover
            bg-no-repeat
            bg-blend-multiply 
            xl:flex
            xl:flex-col
            flex justify-start items-center
            gap-4">

                
                <PageHeading title="GALLERY" />

                {/* Gallery */}
                <div className="gallery3">

                    {pictures.map((picture) => {
                        return (
                            <img src={picture.imageUrl} alt={picture.alt} key={picture.id} />
                        )
                    })}
                </div>

        </section>
    )
}