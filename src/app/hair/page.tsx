import { Border2 } from "@/components/border";
// import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Services from "@/components/hair/services";
import Treatments from "@/components/hair/treatments";
import {useLayoutEffect} from "react";

export default function Hair() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <div className="grow flex flex-col snap-y snap-start snap-always snap-proximity">

            <Border2 />
            <Services />
            <Treatments />
            {/* <Carousel /> */}
            <Footer />
        </div>
    )
}