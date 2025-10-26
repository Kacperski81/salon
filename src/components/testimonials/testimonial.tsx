import StarIconSVG from "../svgs/StarIconSVG";

type Props = {
    id: number;
    reviewer: string;
    content: string;
    backgroundImage: string;
    rating: number;
}

export default function Testimonial({ id, reviewer, content, backgroundImage, rating }: Props) {
    return (
        <div
            className="
                bg-cover bg-no-repeat 
                flex
                p-2
                justify-center
                items-center
                rounded-2xl
                "
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: `${id === 1 || 4 ? 'top' : 'bottom'}`
            }}
        >
            <div
                className="
                rounded-md
                px-4
                py-2
                relative
                isolate
                z-1
                testimonial
                backdrop-blur-[2px]
                text-(--main-50)
                bg-(--main-400)/40
                hover:bg-(--main-400)/80
                transition-all
                duration-500
                ease-in-out
                "
            >
                <div className="flex gap-1 mb-2 justify-center">
                    {Array.from({ length: rating }).map((_, index) => (
                        <StarIconSVG key={index} />
                    ))}
                </div>
                {/* <p className="text-sm lg:text-base text-left text-(--main-50) leading-relaxed">"{content}"</p>
                <cite className="not-italic text-[var(--main-100)] font-medium text-sm lg:text-base">{reviewer}</cite> */}
                {/* Quote */}
                <blockquote className="mb-4">
                    <p className="text-[var(--main-50)] text-sm lg:text-base leading-relaxed font-light">&ldquo;{content}&rdquo;</p>
                </blockquote>

                {/* Reviewer Name with Accent Line */}
                <div className="flex items-center gap-3 justify-end">
                    <div className="h-px w-8 bg-[var(--yellow-300)]" />
                    <cite className="not-italic text-[var(--main-100)] font-medium text-sm lg:text-base">{reviewer}</cite>
                </div>
            </div>
        </div>
    )
}