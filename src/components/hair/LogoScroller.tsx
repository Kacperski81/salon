"use client";

import { useEffect, useRef } from "react";
import Section from "../Section";
import logoScrollerBg from "../../../public/bg-no-picture.png";
import { getScrollerLogos } from "@/app/lib/scrollerLogos";


export default function LogoScroller() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const scrollerLogos = getScrollerLogos();

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Set the animated attribute
        scroller.setAttribute("data-animated", "true");

        // Get the inner container
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;

        // Get all children and clone them
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicate = item.cloneNode(true) as HTMLElement;
            duplicate.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicate);
        });
    }, [])

    return (
        <Section>

            {/* Scroller */}
            <div ref={scrollerRef} className="scroller
                mt-20 max-w-[80vw] mx-auto 
                overflow-hidden
                border"
                style={{
                    maskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)'
                }}
            >
                {/* Inner scroller */}
                <ul className="scroller__inner
                    py-2 
                    list-none
                    w-max
                    flex gap-[10px]
                    animate-scroll
                    will-change-transform
                    *:p-1 *:rounded-lg *:bg-(--main-50)/10 *:w-[200px] md:*:w-[300px] md:*:w-[400px] *:flex-shrink-0 *:flex *:items-center *:justify-center"
                >
                    {/* <img src="/logosForScroll/loreal2.png" alt="L'Oreal-logo" className="w-full" /> */}
                    {scrollerLogos.map((logo) => {
                        return (
                            <li key={logo.name}>
                                <img src={logo.imagePath} alt={logo.altText} className="w-full h-auto object-contain" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Section>
    );
}