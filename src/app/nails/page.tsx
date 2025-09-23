import { Border2 } from "@/components/border";

export default function Nails() {
    return (
        <section className="
            text-center 
            grow-1 
            bg-(--main-300)
            bg-[url(../../public/nailBackground.jpg)]
            bg-blend-multiply
            bg-right-bottom
            bg-cover
            bg-no-repeat">
            
            <Border2 />
        </section>
    )
}