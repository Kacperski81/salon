// import { LeftBorder } from "./border";
import { Border2 } from "./border";
// import { Logo1 } from "./logo";
// import RightBorder from "./rightBorder";

export default function heroSection3() {
    return (
        <>
            <section className="snap-start snap-always min-h-screen lg:grid lg:grid-cols-2">
                {/* <div className="relative min-h-screen flex bg-(--main-200) bg-[url(../../public/bg-no-picture.png)] bg-blend-multiply bg-cover bg-center bg-no-repeat"> */}
                <div className="
                    snap-start
                    snap-always
                    min-h-[100dvh]
                    lg:min-h-screen
                    bg-white 
                    bg-[url(../../public/hero.jpg)]
                    bg-(--main-200)
                    bg-blend-multiply
                    bg-cover
                    bg-top
                    bg-no-repeat
                                  
                    flex 
                    lg:bg-linear-[90deg,var(--bg-gradient-100)_10%,var(--bg-gradient-200)_20%,var(--bg-gradient-300)_30%,] 
                    lg:bg-(--main-400)">
                    <Border2 />

                    <h1 className="leading-[1.3] grow-1 font-(family-name:--font-aboreto) text-4xl lg:text-5xl xl:text-6xl flex flex-col pt-10 justify-end lg:justify-center pb-15 items-center px-4 xl:px-16">
                        <span className="font-bold text-dark-gradient">FEEL GOOD, </span>
                        <span className="font-bold text-dark-gradient">LOOK AMAZING.</span>
                        <span className="mt-4 text-lg text-(--main-200) font-bold">{`Step into a world of beauty and relaxation. We're here to make you shine.`}</span>
                    </h1>
                </div>
                <div className="
                    lg:bg-[url(../../public/hero.jpg)]
                    lg:bg-(--main-200) 
                    lg:bg-blend-multiply 
                    lg:bg-cover
                    lg:bg-no-repeat
                    lg:bg-center
                    ">

                </div>
            </section>
        </>
    )
}