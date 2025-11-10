export type ButtonGalleryNavigationProps = {
    selectedIndex: number;
    action: { type: () => void; name: string; }
}

export type nailsServiceData = {
    id: number;
    name: string;
    items: {
        service: string;
        price: string
    }[];
}

export type CarouselItem = {
    id: string;
    imageUrl: string;
    alt: string;
}

export type LogoScrollerItem = {
    name: string;
    altText: string;
    imagePath: string;
}

export type TreatmentsData = {
    name: string;
    description: string;
    price: string;
}