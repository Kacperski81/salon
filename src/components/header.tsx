import Link from "next/link";
import Image from "next/image";
export default function Header() {
    return (
        <div className="fixed top-0 left-0 w-full z-10 h-[40px] flex items-center justify-between px-5 py-10">
            <div>
                <Image
                    src="/logo7.png"
                    alt="logo"
                    width={150}
                    height={50}
                />
            </div>
            <nav>

                <ul className="flex items-center gap-3 text-white font-bold text-xl">
                    <li>
                        <Link href="/hair">Hair</Link>
                    </li>
                    <li>
                        <Link href="/nails">Nails</Link>
                    </li>
                    <li>
                        <Link href="/beauty">Beauty</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}