export default function RightBorder() {
    return (
        <div className="m-3 hidden xl:block fixed top-0 left-[50%] bottom-0 right-0 pointer-events-none z-100">
            <div>

                {/* Top-left corner border SVG */}
                <svg className="absolute top-0 left-0 w-10 h-10 pointer-events-none" viewBox="0 0 50 50" preserveAspectRatio="none">
                    <path d="M50,10 L10,10 L10,50" stroke="var(--main-200)" strokeWidth="var(--top-frame-width)" fill="none" />
                    <path d="M40,20 L20,20 L20,40" stroke="var(--main-100)" strokeWidth="var(--bottom-frame-width)" fill="none" />
                </svg>

                {/* Top-right corner border SVG */}
                <svg className="absolute top-0 right-0 w-10 h-10 pointer-events-none" viewBox="0 0 50 50" preserveAspectRatio="none">
                    <path d="M0,10 L40,10 L40,50" stroke="var(--main-200)" strokeWidth="var(--top-frame-width)" fill="none" />
                    <path d="M10,20 L30,20 L30,40" stroke="var(--main-100)" strokeWidth="var(--bottom-frame-width)" fill="none" />
                </svg>

                {/* Bottom-left corner border SVG */}
                <svg className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none" viewBox="0 0 50 50" preserveAspectRatio="none">
                    <path d="M50,40 L10,40 L10,0" stroke="var(--main-200)" strokeWidth="var(--top-frame-width)" fill="none" />
                    <path d="M40,30 L20,30 L20,10" stroke="var(--main-100)" strokeWidth="var(--bottom-frame-width)" fill="none" />
                </svg>

                {/* Bottom-right corner border SVG */}
                <svg className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none" viewBox="0 0 50 50" preserveAspectRatio="none">
                    <path d="M0,40 L40,40 L40,0" stroke="var(--main-200)" strokeWidth="var(--top-frame-width)" fill="none" />
                    <path d="M10,30 L30,30 L30,10" stroke="var(--main-100)" strokeWidth="var(--bottom-frame-width)" fill="none" />
                </svg>

                {/* Top-right corner border SVG */}
                {/* <svg className="absolute top-0 right-0 w-10 h-10 pointer-events-none" viewBox="0 0 50 50" preserveAspectRatio="none">
                    <path d="M0,10 L40,10 L40,50" stroke="#8B7355" strokeWidth="4" fill="none" />
                </svg> */}


            </div>
        </div>
    )
}