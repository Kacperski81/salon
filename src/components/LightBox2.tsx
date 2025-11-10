import LightBoxCarousel, { CarouselItem } from "./carousel/LightBoxCarousel2";
import IconCloseCircle from "./svgs/IconCloseCircle";

export type LightBoxItem = {
    id: string;
    imageUrl: string;
    alt: string;
}

type Props = {
    open: boolean;
    item: LightBoxItem | null;
    items: CarouselItem[];
    onClose: () => void;
}

export default function LightBox({ open, item, items, onClose }: Props) {

    if (!open || !item) return null;

    return (
        <div className="fixed inset-0 bg-(--main-800)/90 max-w-full h-full z-50 flex justify-center items-center p-4">
            <div className="relative">
                <button aria-label="Close" className="absolute -top-8 -right-4 sm:-right-8 cursor-pointer z-100 w-10" onClick={onClose}><IconCloseCircle /></button>
                <div className="bg-white shadow-lg">
                    <LightBoxCarousel items={items} item={item} />
                </div>
            </div>
        </div>
    )
}