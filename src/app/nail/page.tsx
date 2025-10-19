import { Border2 } from "@/components/border";
import Carousel3 from "@/components/carousel/Carousel3";
import Footer from "@/components/footer";
import Services from "@/components/nail/services";


export default function Nails() {

    return (
        <div className="grow flex flex-col snap-y snap-start snap-always snap-proximity">
            <Border2 />
            <Services />
            {/* <Carousel3 /> */}
            <Footer />
        </div>
    )
}