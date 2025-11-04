import type { CarouselItem } from "@/components/carousel/Carousel3";

export default function Gallery1({ pictures }: { pictures: CarouselItem[] }) {
    const picturesSlice = pictures.slice(1, 5);
    console.log(picturesSlice);
    

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
            flex justify-center items-center
            gap-4">

            <div className="gallery border border-3 gap-(--gap) ">
                {picturesSlice.map((picture) => {
                    return (
                        <img src={picture.imageUrl} alt={picture.alt} key={picture.id} />
                    )
                })}
            </div>

        </section>
    )
}