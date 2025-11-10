import type { ButtonGalleryNavigationProps } from "@/app/types";

export default function ButtonGalleryNavigation({ selectedIndex, action }: ButtonGalleryNavigationProps) {

    return (
        <button onClick={action.type} aria-label="Previous slide"
            disabled={action.name === "previous" && selectedIndex <= 0 ? true : action.name === "next" && selectedIndex >= 3 ? true : false}
            className={`
            cursor-pointer px-6 py-2 text-dark-gradient 
            ${action.name === "previous" && selectedIndex <= 0 ? 'cursor-not-allowed opacity-50 scale-80 pointer-events-none' : action.name === "next" && selectedIndex >= 3 ? 'cursor-not-allowed opacity-50 scale-80 pointer-events-none' : 'hover:scale-110 transition transition-transform duration-300 ease-in-out'}`}>
            <div className={`xl:flex gap-4 items-baseline ${action.name === "previous" ? "" : "flex-row-reverse"}`}>
                <span className="text-3xl font-black">{action.name === "previous" ? "<" : ">"}</span>
                <span className="text-2xl">{action.name === "previous" ? "Previous" : "Next"}</span>
            </div>
        </button>
    );
}