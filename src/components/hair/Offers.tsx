import { getHairOffers } from "@/app/lib/hairOffers"
import IconAnnouncement from "../svgs/IconAnnouncement";
import IconDiscount from "../svgs/IconDiscount";
import IconInformation from "../svgs/IconInformation";
import PageHeading from "../PageHeading";


export default function Offers() {
    const hairOffers = getHairOffers();

    return (
        <div className="">

            <PageHeading title="Offers" mT="mt-2" />

            <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-5xl mx-auto px-4">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hairOffers.map((offer) => {
                        const IconComponent = offer.icon === "Announcement" ? IconAnnouncement : IconDiscount;
                        return (
                            <div key={offer.id}
                                className="testimonial
                                backdrop-blur-[2px]
                                text-(--main-50) 
                                rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg shrink">
                                        <IconComponent />
                                    </div>
                                    <div className="flex flex-col *:text-left">
                                        <h3 className="text-lg md:text-xl font-bold mb-2">{offer.title}</h3>
                                        <p className="text-sm md:text-base leading-relaxed text-(--main-100)">{offer.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    {/* Offer Valid */}
                    <div
                        className="
                        testimonial
                        backdrop-blur-[2px]
                        text-(--main-50)
                        mb-2 
                        rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">

                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg flex-shrink-0">
                                <IconInformation />
                            </div>
                            <div className=" *:text-left">
                                <h3 className="text-lg md:text-xl font-bold mb-2">Offer Valid</h3>
                                <p className="font-semibold leading-relaxed mb-1">Tuesday - Friday, 10:00AM - 4:00PM</p>
                                <p className="text-sm md:text-base leading-relaxed text-(--main-100)">Book your appointment during these hours to take advantage of all our special offers!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}