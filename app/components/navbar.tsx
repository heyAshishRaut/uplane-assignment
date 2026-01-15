import {cn} from "@/lib/utils"
import Image from "next/image"
import logonew from "@/public/logonew.png"
import {PrimaryButton, SecondaryButton} from "@/app/components/ui/button"
import HamburgerButton from "@/app/components/ui/hamburgerButton";

const lists = [
    {
        name: "Home",
        key: "home"
    },
    {
        name: "Product",
        key: "product"
    },
    {
        name: "Why Uplane",
        key: "why_uplane"
    },
    {
        name: "About Us",
        key: "about_us"
    },
    {
        name: "Blogs",
        key: "blogs"
    },
    {
        name: "Careers",
        key: "careers"
    },
]

const Navbar = () => {
    return (
        <div className={`w-full `}>
            <div className={cn("w-full px-[20px] md:px-[50px] lg:px-[100px] h-[89px] flex items-center justify-between py-[20px] border-b border-[#e6e6e6]")}>
                <div className={`flex gap-x-[30px] items-center`}>
                    <Image src={logonew} height={30} width={123} alt={" "} />
                    <div className={cn("hidden lg:flex items-center text-black font-sans text-[16px]")}>
                        {
                            lists.map((e, i) => (
                                <div key={i} className={cn("cursor-pointer py-[8px] px-[16px] rounded-lg hover:text-sky-500 transition-all ease-in duration-75")}>
                                    {e.name}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={cn("hidden md:flex gap-x-[10px]")}>
                    <SecondaryButton text={"Login"}/>
                    <PrimaryButton text={"Get Started"}/>
                </div>

                <div className={`block md:hidden`}>
                    <HamburgerButton/>
                </div>
            </div>
        </div>
    )
}

export default Navbar