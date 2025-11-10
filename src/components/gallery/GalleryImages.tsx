import type { CarouselItem } from '@/app/types';


export default function GalleryImages({ pictures, selectedIndex, index }: { pictures: CarouselItem[], selectedIndex: number, index: number}) {
    return (
        <div className="gallery4 min-w-[70vw] flex gap-1" style={{ translate: `${-100 * selectedIndex}%`, transition: "translate 900ms ease-in-out"}} aria-hidden={selectedIndex !== index}>
            {pictures.map((picture) => {
                return (
                    <img key={picture.id} alt={picture.alt} src={picture.imageUrl} />
                )
            })}
        </div>
    );
}