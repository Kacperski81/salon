import Link from "next/link";

export default function Services() {
    return (
        <section className="font-(family-name:--font-lato) min-h-screen flex flex-col items-center">
            <div className="mb-10 flex flex-col gap-3">
                <h2 className="mt-4 font-(family-name:--font-aboreto) text-3xl xl:text-4xl xl:font-bold">Our Services</h2>
                <h3 className="text-2xl font-(family-name:--font-aboreto)">{`From a simple cut to a full makeover, we've got you covered.`}</h3>
            </div>
            {/* cards */}
            <div className="basis-xl max-w-[55%] grid grid-cols-3 gap-20">
                {/* Hair */}
                {/* <div className="flex items-end w-1/4 aspect-[2/1] mx-auto border-image shadow-2xl">
                    <div className="text-white">
                        <h4>Hair Styling</h4>
                        <p>Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.</p>
                        <Link href="/hair">See more</Link>
                    </div>
                </div> */}
                <div className="flex shadow-2xl card card-hair flex items-end">
                    <div className="text-white px-4 pb-4 flex flex-col gap-4">
                        <h4 className="font-(family-name:--font-aboreto) text-3xl text-left">Hair Styling</h4>
                        <p className="text-2xl text-left">Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.</p>
                        <Link className="text-xl self-end bg-[var(--soft-lavender)] font-bold text-[var(--text-color)] px-4 py-2 rounded" href="/hair">See more</Link>
                    </div>
                </div>
                {/* Nail */}
                <div className="flex shadow-2xl card card-nail flex items-end">
                    <div className="text-white px-4 pb-4 flex flex-col gap-4">
                        <h4 className="font-(family-name:--font-aboreto) text-3xl text-left">Nail Care</h4>
                        <p className="text-2xl text-left">Manicures, pedicures, and artistic nail designs for perfectly polished hands nad feet.</p>
                        <Link className="text-xl self-end bg-[var(--sage-green)] px-4 py-2 rounded" href="/nails">See more</Link>
                    </div>
                </div>
                {/* Beauty */}
                <div>
                    <svg></svg>
                    <h4>Beauty Treatments</h4>
                    <p>Rejuvenating facials, waxing, and makeup services to enhance your natural beauty.</p>
                    <Link href="/beauty">See more</Link>
                </div>
            </div>
        </section>
    )
}