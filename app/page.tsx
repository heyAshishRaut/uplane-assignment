import {cn} from "@/lib/utils"
import Navbar from "@/app/components/navbar"
import HeroSection from "@/app/components/heroSection"
import Image from "next/image"
import Footer from "@/app/components/footer"
import { PrimaryButton } from "@/app/components/ui/button"

import Test from "@/app/components/testimonials"

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
            <div className={`w-full h-[409px] px-[20px] md:px-[50px] lg:px-[100px]`}>
                <div className={`shadow-[0_6px_16px_rgba(0,0,0,0.08)] w-full h-full bg-white rounded-[20px] p-1`}>
                    <div className={`h-full w-full rounded-[16px] flex overflow-hidden`}>
                        <div className={`h-full w-full md:w-1/2 p-[55px] flex bg-[#e8f1fe] md:bg-white`}>
                            <div className={"h-full w-full flex flex-col justify-between"}>
                                <div className={`flex flex-col gap-y-[14px]`}>
                                    <div className={`text-[16px] text-[#2476FF] text-center md:text-start`}>Ready to upgrade your marketing?</div>
                                    <div
                                        className={`text-center md:text-start text-[36px] lg:text-[52px] font-semibold font-inter tracking-tighter leading-[1.2]`}>Ready
                                        to upgrade your marketing?
                                    </div>
                                    <div className={`text-center md:text-start text-[16px] text-[#52555B]`}>Let Uplane handle the busywork, so you
                                        can focus on what matters.
                                    </div>
                                </div>
                                <div className={`self-center md:self-start`}>
                                    <PrimaryButton text={"Talk to Founders"}/>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url("/getStarted.png")`}}
                             className={"hidden md:block h-full w-1/2 bg-cover bg-center"}></div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    )
}
