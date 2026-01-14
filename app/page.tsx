import {cn} from "@/lib/utils"
import Navbar from "@/app/components/navbar"
import HeroSection from "@/app/components/heroSection"
import Image from "next/image"
import Footer from "@/app/components/footer"
import { PrimaryButton } from "@/app/components/ui/button"

import Test from "@/app/components/testimonials"
import Founder from "@/app/components/founder";

export default function Home() {
    return (
        <div
            className={cn("relative overflow-x-hidden font-sans text-black bg-[#f5f5f5] min-h-screen w-full flex flex-col gap-y-[100px]")}>
            {/* Navbar */}
            <div className={`fixed top-0 w-full z-20 bg-[#f5f5f5]`}>
                <Navbar/>
            </div>

            {/* Hero Section */}
            <div className={`relative mt-[89px] flex-1`}>
                <HeroSection/>

                {/* Hero Section Bottom Lines */}
                <Image
                    src="/heroSectionBottom.png"
                    alt=""
                    width={1920}
                    height={120}
                    priority
                    className="z-50 w-full object-cover"
                />
            </div>

            {/* Wall of Love */}
            <div className={`w-full h-[510px] flex flex-col gap-y-[60px] items-center`}>
                <div className={`flex flex-col items-center gap-y-[14px]`}>
                    <div className={`text-[16px] text-[#2476FF] font-medium`}>WALL OF LOVE</div>
                    <div className={`font-inter font-semibold text-[36px] md:text-[48px] leading-none tracking-tighter`}>What they
                        say
                    </div>
                </div>

                <Test/>
            </div>

            {/* Talk to Founders component */}
            <Founder/>

            {/* Footer */}
            <Footer/>
        </div>
    )
}
