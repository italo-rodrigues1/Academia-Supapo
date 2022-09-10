import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/IconLogo.svg";

export default function Header() {
    const name = "italo";
    return (
        <>
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <Image className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 ">
                            <span className="">Bem vindo : <strong>{name}</strong></span>
                        </div>
                        <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Image className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}