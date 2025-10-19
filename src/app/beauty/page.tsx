import { Border2 } from "@/components/border";
import Services from "@/components/beauty/services";
import Footer from "@/components/footer";

export default function Beauty() {
    return (
        <div className="grow flex flex-col snap-y snap-mandatory">
            <Border2 />
            <Services />
            <Footer />
        </div>
    )
}
