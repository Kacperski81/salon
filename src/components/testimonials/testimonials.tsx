import Carousel from "./Carousel";
import Testimonial from "./testimonial"

export type Testimonial = {
    id: number;
    reviewer: string;
    content: string;
    backgroundImage: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        reviewer: "Rebecca Latham",
        content: "I couldn’t be happier with the service! The haircut is always perfect, and the colour is exactly the shade I want every single time – truly the best hairdresser in London. Magda is warm, friendly, and pays great attention to detail. I always leave feeling confident and well taken care of. Highly recommend!",
        backgroundImage: "/hair-gallery/testimonial1.webp",
        rating: 5,
    },
    {
        id: 2,
        reviewer: "Elaine Robinson",
        content: "I highly recommend this wonderful hair salon, a warm and friendly welcome and I’m always delighted with my highlights and haircut. Magda is highly experienced and professional, she always allows plenty of time for advice and discussion and uses quality products. My hair has never been in better condition.",
        backgroundImage: "/hair-gallery/testimonial2.webp",
        rating: 5,
    },
    {
        id: 3,
        reviewer: "Olga Tielly",
        content: "Magda’s been looking after my hair for few years now! I love how attentive she is, always listens to what I want, and takes time to achieve my vision! She is very professional,  friendly and treats my hair with lots of care!",
        backgroundImage: "/hair-gallery/testimonial3.webp",
        rating: 5,
    },
]

export default function Testimonials() {

    return (
        <section className="
            snap-start 
            snap-always 
            mx-auto
            bg-[url(../../public/solidBg.jpg)]
            bg-(--main-200)
            bg-blend-multiply
            min-h-dvh
            gap-4
            xl:min-h-screen 
            xl:px-20
            flex
            flex-col
            xl:mx-auto
            xl:gap-6
            ">

            <h2 className="
                xl:mt-16 
                font-(family-name:--font-aboreto) 
                text-(--main-100) 
                text-xl sm:text-3xl lg:text-4xl 
                text-center 
                font-light
                ">
                What Our Clients Say
            </h2>
            {/* <h2 className="text-3xl lg:text-5xl font-light text-[var(--main-900)] mb-4 text-balance">
                What Our Clients Say
            </h2> */}

            <p className="text-[var(--main-700)] text-base lg:text-lg max-w-2xl mx-auto text-pretty">
                Discover why our clients trust us with their hair transformations
            </p>

            <div className="hidden xl:grow xl:grid xl:grid-cols-3 xl:gap-10 xl:min-h-[550px] xl:max-h-[600px] overflow-hidden">

                {testimonials.map((testimonial) => (
                    <Testimonial key={testimonial.id} {...testimonial} />
                ))}
            </div>

            <div className="xl:hidden grow flex max-w-[90dvw] mx-auto pb-10">
                <Carousel />
            </div>


        </section>

    )
}