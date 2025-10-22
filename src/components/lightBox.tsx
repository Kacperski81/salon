import LightBoxCarousel, { CarouselItem } from "./carousel/LightBoxCarousel";
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
        <div className="fixed inset-0 bg-(--main-800)/40 flex items-center justify-center z-50">
            <div className="relative">
                <button aria-label="Close" className="absolute top-0 right-0 cursor-pointer z-100 w-10" onClick={onClose}><IconCloseCircle /></button>
                <div className="bg-white p-4 rounded shadow-lg">

                    <LightBoxCarousel items={items} item={item} />
                </div>
            </div>
        </div>
    )
}