"use client"

import {PrimaryButton} from "@/app/components/ui/button"
import { motion } from "framer-motion"

const Founder = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 20
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0
            }}
            transition={{
                duration: 0.8,
                ease: "easeIn"
            }}
            viewport={{
                once: true
            }}
            className={`w-full h-[409px] px-[20px] md:px-[50px] lg:px-[100px]`}>
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
        </motion.div>
    )
}

export default Founder