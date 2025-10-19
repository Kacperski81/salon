import { Border2 } from "@/components/border";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Services from "@/components/hair/services";
import Treatments from "@/components/hair/treatments";

export default function Hair() {
    return (
        <div className="grow flex flex-col">

            <Border2 />
            <Services />
            <Treatments />
            {/* <Carousel /> */}
            <Footer />
        </div>
    )
}