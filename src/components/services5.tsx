"use client"

import { JSX, useState } from "react";
import Image, { StaticImageData } from "next/image";
import hairBg from "../../public/cutAndStyleExpanded2.jpg";
import nailsBg from "../../public/mainServicesNails.jpg";
import beautyBg from "../../public/beautyBg2.jpg";
import productsBg from "../../public/davines-background.jpg";
import { ScissorsSVG } from "./svgs";

interface ServiceData {
    id: string
    name: string
    image: StaticImageData,
    services: Array<{
        name: string
        description: string
        icon: JSX.Element
    }>
}


const serviceData: ServiceData[] = [
    {
        id: "hair",
        name: "Hair",
        image: hairBg,
        services: [
            {
                name: "Hair Services",
                description: "Precision cuts, vibrant colors, and nourishing treatments to bring out the best in your hair.",
                icon: <ScissorsSVG className="text-[#F5F1E8]" />,
            }
        ]
    },
    {
        id: "nail",
        name: "Nail",
        image: nailsBg,
        services: [
            {
                name: "Nail Care",
                description: "Manicures, pedicures, and artistic nail designs for perfectly polished hands and feet.",
                icon: <ScissorsSVG className="text-gray-800" />,
            }
        ]
    },
    {
        id: "beauty",
        name: "Beauty",
        image: beautyBg,
        services: [
            {
                name: "Beauty Treatments",
                description: "Rejuvenating facials, waxing, and makeup services to enhance your natural beauty.",
                icon: <ScissorsSVG className="text-gray-800" />,
            }
        ]
    },
    {
        id: "products",
        name: "Products",
        image: productsBg,
        services: [
            {
                name: "Products",
                description: "Rejuvenating facials, waxing, and makeup services to enhance your natural beauty.",
                icon: <ScissorsSVG className="text-gray-800" />,
            }
        ]
    },
]

export default function Services5() {
    const [expandedPanel, setExpandedPanel] = useState<string>("hair");

    const togglePanel = (panelId: string) => {
        setExpandedPanel(panelId);
    }

    return (
        // <section id="services" className="snap-center bg-(--main-100) min-h-screen px-2 py-2 sticky top-0 flex flex-col lg:py-12 lg:px-20 z-30">
        <section id="services" className="snap-start snap-always bg-(--main-400) min-h-screen px-2 py-2 flex flex-col lg:py-12 lg:px-20">
            <div className="grow flex flex-col lg:justify-center gap-3">
                <h2 className="font-(family-name:--font-aboreto) text-(--main-100) text-2xl sm:text-3xl lg:text-4xl mt-8 xl:mt-5 font-light">Our Services</h2>
                <p className="leading-relaxed text-base sm:text-lg md:text-xl text-(--main-200)">
                    {`From a simple cut to a full makeover, we've got you covered.`}
                </p>
                {/* Wrapper */}
                <div className="grow p-2 flex justify-center">

                    {/* Accordion */}
                    <div className="grow flex flex-col lg: justify-center md:flex-row gap-(--panels-gap) lg:max-w-7xl">

                        {serviceData.map((service) => {
                            return (
                                // Accordion panel
                                <div key={service.id} onClick={() => togglePanel(service.id)}
                                    className={`relative isolate p-(--panel-padding) overflow-hidden panel-radius flex flex-col ${expandedPanel === service.id ? "opened-panel" : "closed-panel"}`}>
                                    {/* Accordion heading */}
                                    <h3 id={`${service.id}-heading`} className="">

                                        {/* Accordion trigger */}
                                        <button aria-controls={`${service.id}-content`} aria-expanded={service.id === expandedPanel}
                                            className="bg-transparent flex items-center flex-row-reverse gap-(--panel-gap)">

                                            {/* Panel title */}
                                            <span className="text-white text-sm lg:text-2xl font-bold">{service.name}</span>
                                            {/* Accordion icon */}
                                            <div className="bg-(--accordion-button) w-(--button-small) lg:w-(--button-size) p-1 rounded-full aspect-square">{service.services[0].icon}</div>

                                        </button>
                                    </h3>

                                    {/* Accordion content * Panel 1 content */}
                                    <div id={`${service.id}-content`} aria-labelledby={`${service.id}-heading}`} role="region" aria-hidden={service.id !== expandedPanel} className="relative z-10">
                                        <p className={`panel-paragraph text-left relative text-white opacity-0 ${expandedPanel === service.id ? "opacity-100 transition-opacity duration-500 delay-500 translate-y-0 transition-transform duration-500 delay-500" : "opacity-0 transition-opacity duration-500 delay-500 translate-y-2 transition-transform duration-500 delay-500"}`}>{service.services[0].description}<span className="block text-right w-full">see more</span></p>
                                    </div>
                                    <Image
                                        src={service.image}
                                        alt={`${service.name} service image`}
                                        fill
                                        sizes="100vw"
                                        className={`-z-1 object-cover ${expandedPanel === service.id ? "image-brightness" : "image-brightness-light"}`}

                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}







// Icons.
// export default function Services5() {
//     return (
//         <section id="services" className="sticky top-0 py-12 bg-white min-h-screen z-40 flex justify-center items-center gap-2">

//             <div className="w-20 h-20 border flex justify-center bg-[var(--text-color)]">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 288">
//                     <path className="pink-button" fillRule="evenodd" d=" M260.269836,238.740204  C252.920654,232.227066 249.668655,224.101410 249.978058,214.899811  C250.585938,196.821274 241.377228,185.745728 225.425034,179.507996  C219.900925,177.347916 216.862778,173.721817 214.945953,168.395920  C204.110336,138.289185 195.008530,107.654457 186.741241,76.759514  C184.934937,70.009293 182.658463,63.366600 182.310547,56.301296  C182.230820,54.682297 181.627029,52.991375 183.083710,51.518200  C185.217712,51.527660 185.571686,53.422668 186.291061,54.755081  C201.177109,82.326248 214.611542,110.570412 226.364166,139.636780  C231.976013,153.515900 237.452454,167.499741 244.882843,180.580032  C248.046677,186.149597 252.165024,190.919952 256.862152,195.209900  C259.201813,197.346741 261.750732,198.410522 265.061951,197.036316  C279.153687,191.188065 291.332153,199.985748 295.446747,208.789017  C300.805450,220.254135 296.354034,234.756073 285.011353,242.011993  C282.782867,243.437592 280.335388,244.520889 277.692871,245.918671  C279.600006,249.980560 283.228943,250.225250 286.850006,250.333481  C288.165192,250.372803 289.487762,249.972214 290.814484,249.873077  C292.233734,249.767044 293.575226,250.102203 293.991211,251.656250  C294.401917,253.190475 293.400391,254.224716 292.203674,254.902405  C289.362976,256.511017 286.284058,256.994659 283.045471,256.583008  C275.936249,255.679352 270.833069,251.647141 266.680756,246.129639  C264.785370,243.611099 263.287537,240.754456 260.269836,238.740204  M285.886627,226.207550  C289.002228,220.598557 288.293457,215.235443 284.446747,210.359680  C279.396973,203.959030 269.858551,203.359528 264.029999,208.861511  C257.886841,214.660477 258.003510,224.668182 264.278656,230.189529  C270.836670,235.959686 279.878204,234.551544 285.886627,226.207550  z" />
//                     <path className="pink-button" fillRule="evenodd" d=" M153.760208,203.851379  C161.327789,195.654861 170.227615,193.376251 180.328262,196.907761  C184.267075,198.284882 187.099518,197.432816 189.766449,194.688736  C197.524765,186.705978 203.696564,177.741577 207.057571,166.997879  C207.524567,165.505081 207.401840,163.607422 209.469894,162.573639  C213.310318,167.510483 213.421234,174.114853 217.232574,179.011917  C215.084106,181.909698 212.011353,183.052338 209.561386,184.945740  C200.619507,191.856216 196.193954,200.868591 196.263336,212.114731  C196.293259,216.967728 196.086777,221.759933 194.284164,226.361176  C190.778458,235.309662 184.488571,240.998276 174.854614,242.233963  C165.478867,243.436508 157.721008,240.284790 152.553421,232.115433  C147.191544,223.638992 146.792694,214.936035 152.163971,206.225021  C152.600601,205.516922 153.078979,204.834564 153.760208,203.851379  M179.155777,231.813049  C185.023346,228.036026 187.803711,222.013153 186.365463,216.195328  C184.941833,210.436676 180.145111,205.970764 174.653717,205.291321  C168.372696,204.514191 162.980164,207.275818 160.106827,212.741074  C157.157394,218.351120 157.853485,224.092743 162.071136,228.943420  C165.971115,233.428741 171.659714,234.535583 179.155777,231.813049  z" />
//                     <path className="pink-button" fillRule="evenodd" d=" M236.293320,97.323250  C244.499298,81.587349 252.531937,66.180466 261.083618,49.778011  C263.119263,53.692810 262.233002,56.265469 261.692902,58.732395  C256.556885,82.191208 248.682480,104.845886 241.295380,127.639641  C239.106033,134.395142 237.470963,141.382812 234.052963,147.582764  C231.951004,147.684021 231.654343,146.171814 231.181229,145.035721  C228.813019,139.349258 226.629395,133.583984 224.170151,127.938217  C222.993820,125.237671 223.180847,122.925690 224.535324,120.352936  C228.492554,112.836426 232.271271,105.225929 236.293320,97.323250  z" />
//                 </svg>
//             </div>
//             <div className="w-20 h-20 border flex justify-center bg-[var(--text-color)]">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 656">
//                     <path className="pink-button" fillRule="evenodd" d=" M805.509521,148.519470  C834.406189,114.696152 863.019653,81.097168 891.763367,47.609932  C899.840149,38.200218 910.712646,37.271042 923.398438,44.589081  C935.516235,51.579422 947.545349,58.723301 959.608826,65.807732  C963.773376,68.253464 968.016235,70.581039 972.063171,73.209221  C983.888794,80.889114 987.091858,90.334190 982.248901,103.526260  C964.810425,151.028671 947.317566,198.511139 929.810120,245.988205  C926.506287,254.947739 921.596802,256.662537 913.217285,251.968735  C911.198853,250.838104 909.190674,249.689072 907.358948,248.651138  C904.991394,249.341736 904.512817,251.303391 903.576843,252.786301  C898.913269,260.174805 894.592346,261.394714 886.943481,257.024719  C876.821167,251.241608 866.789185,245.300003 856.729431,239.407608  C839.484558,229.306610 822.244446,219.197220 805.013977,209.071671  C803.293762,208.060776 801.536133,207.057648 799.997986,205.803162  C795.357056,202.018066 794.685425,198.009964 797.595642,192.579575  C798.606628,190.692947 799.611572,188.803101 800.590027,186.969635  C798.339905,184.067261 795.172119,183.131500 792.637329,181.307617  C786.375793,176.802170 785.671509,171.568039 790.612732,165.826065  C795.500671,160.146271 800.388062,154.466110 805.509521,148.519470  z" />
//                     <path className="pink-button" fillRule="evenodd" d=" M49.817467,600.314575  C46.387894,598.722900 42.983944,597.882385 40.543991,594.567566  C46.475460,595.360901 52.409962,596.132202 58.337883,596.951233  C82.844467,600.337341 107.422112,600.666321 132.080261,598.998596  C176.881882,595.968445 219.708023,584.889343 261.013824,567.600159  C289.840393,555.534302 317.192261,540.661011 343.048340,523.144226  C373.571411,502.465668 407.476685,490.861084 443.507324,484.763000  C476.688141,479.147247 510.109192,478.256714 543.578491,480.892975  C590.908020,484.621002 637.163147,493.832703 682.005310,509.667694  C683.462158,510.182159 685.339783,510.171844 686.359070,512.758789  C682.497742,512.525879 678.997864,512.439636 675.525208,512.086243  C636.233521,508.087769 596.836670,505.814789 557.351074,506.491608  C514.656616,507.223419 472.249390,510.809143 430.834595,522.248596  C403.753113,529.729004 379.104218,542.033447 355.589996,557.361328  C311.426971,586.149353 263.354950,605.625610 211.275772,614.701172  C180.580338,620.050354 149.751648,620.965698 118.745834,617.501038  C95.096291,614.858276 72.241035,609.317383 49.817467,600.314575  z" />
//                     <path className="pink-button" fillRule="evenodd" d=" M740.082214,486.950623  C739.072266,490.189087 738.185730,493.049622 737.286743,495.906281  C733.240234,508.764862 723.024353,515.075378 709.666077,512.938538  C704.527344,512.116516 699.621521,510.545746 695.106689,507.930603  C688.911438,504.342041 682.668762,500.821106 676.623169,496.991974  C668.282349,491.709076 662.491028,484.501526 660.448547,474.558563  C659.100403,467.995483 660.679810,462.235199 665.116333,457.455597  C681.088440,440.248199 697.234741,423.202515 713.236145,406.022034  C716.479858,402.539215 720.035156,401.960327 723.993408,404.221313  C733.968689,409.919220 743.930908,415.645844 753.766846,421.579010  C757.775269,423.996918 758.988892,427.615692 757.453430,432.345398  C751.596680,450.386292 745.934692,468.490387 740.082214,486.950623  z" />
//                     <path className="pink-button" fillRule="evenodd" d=" M819.974304,305.908569  C799.746643,340.433502 779.637939,374.605988 759.748596,408.905701  C757.295105,413.136841 755.183960,413.685944 751.189697,411.060272  C745.488586,407.312561 739.540710,403.914398 733.540161,400.658478  C730.379272,398.943390 729.668335,397.424561 731.637878,394.077911  C762.903198,340.952393 794.066956,287.767090 825.177002,234.550491  C827.082153,231.291580 828.780518,230.457260 832.225830,232.648865  C839.492798,237.271469 847.013367,241.495331 854.986694,246.212234  C843.200562,266.308807 831.680359,285.951874 819.974304,305.908569  z" />
//                 </svg>
//             </div>
//             <div className="w-20 h-20 border flex justify-center bg-[var(--text-color)]">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 icon-add">
//                     <path className="pink-button" fillRule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
//                 </svg>
//             </div>
//             <div className="w-20 h-20 border flex justify-center items-center bg-[var(--text-color)]">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 icon-add">
//                     <path className="pink-button" fillRule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
//                 </svg>
//             </div>
//         </section>
//     )
// }