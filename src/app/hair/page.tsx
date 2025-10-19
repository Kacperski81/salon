"use client"

import { Border2 } from "@/components/border";
// import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Services from "@/components/hair/services";
import Treatments from "@/components/hair/treatments";
import {useEffect} from "react";

export default function Hair() {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

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