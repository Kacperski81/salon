import Footer from "@/components/footer";
import Services from "@/components/hair/services";
import Treatments from "@/components/hair/treatments";

export default function Hair() {
    return (
        <div className="grow flex flex-col">
            <Services />
            <Treatments />
            <Footer />
        </div>
    )
}