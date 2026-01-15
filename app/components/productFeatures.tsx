"use client"
import Image from "next/image"
import {ChevronRight} from "lucide-react"
import { motion } from "framer-motion"

const ProductFeatures = () => {
    return (
        <div className={`min-h-[1494px] w-full px-[20px] md:px-[50px] lg:px-[100px] flex flex-col gap-y-[50px]`}>
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
                className={`h-[228px] w-full flex flex-col items-center gap-y-[14px] leading-[1.1] tracking-tight text-[16px]`}>
                <div className={"text-[#2476FF]"}>Product Features</div>
                <div className={`font-inter text-[36px] md:text-[52px] font-semibold text-center`}>All-in-One AI<br/>Marketing Platform</div>
                <div className={`text-center text-[#52555B]`}>From research to reporting Uplane automates your entire performance marketing workflow,<br/> so you can move faster, create smarter, and scale effortlessly.</div>
            </motion.div>

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
                    duration: 0.5,
                    ease: "easeIn"
                }}
                viewport={{
                    once: true
                }}
                className={`w-full min-h-[1216px] flex flex-col  gap-y-[60px]`}>
                <Image
                    src="/img_1.png"
                    alt=""
                    width={786}
                    height={65}
                    className="self-center w-full md:w-[786px] h-auto hidden md:block"
                />

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
                        duration: 0.5,
                        ease: "easeIn"
                    }}
                    viewport={{
                        once: true
                    }}
                    className={`self-center flex-1 flex flex-col gap-y-[20px] md:flex-row md:gap-y-0 md:gap-x-[20px]`}>
                    <div className={`w-full md:w-1/2 p-[1px] bg-white border border-dashed border-[#e6e6e6]`}>
                        <div className={`h-full w-full bg-[#f0f0f0] flex flex-col p-1.5 md:p-2`}>
                            <div className="relative w-full h-[267px] lg:h-[378px] bg-white rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
                                <Image
                                    src="/one.png"
                                    alt=""
                                    fill
                                    className="object-contain object-center p-4 lg:p-8"
                                />
                            </div>

                            <div className={`flex-1 w-full px-[30px] pb-[30px] pt-[20px] flex flex-col gap-y-5`}>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={`font-inter md:font-semibold text-[20px] font-medium md:text-[22px]`}>Market Research</div>
                                    <div className={`font-sans text-[16px] text-[#52555B]`}>Automatically analyze competitor’s top ads, identify real-time trends, and leverage market insights to fuel smarter ideation.</div>
                                </div>
                                <div className={`text-[15px] flex gap-x-1 items-center text-[#2476FF]`}>Learn More <ChevronRight color={"#2476FF"} size={18}/></div>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full md:w-1/2 p-[1px] bg-white border border-dashed border-[#e6e6e6]`}>
                        <div className={`h-full w-full bg-[#f0f0f0] flex flex-col p-1.5 md:p-2`}>
                            <div className="relative w-full h-[267px] lg:h-[378px] bg-white rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
                                <Image
                                    src="/two.png"
                                    alt=""
                                    fill
                                    className="object-contain object-center p-4 lg:p-8"
                                />
                            </div>

                            <div className={`flex-1 w-full px-[30px] pb-[30px] pt-[20px] flex flex-col gap-y-5`}>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={`font-inter md:font-semibold text-[20px] font-medium md:text-[22px]`}>Ad Creation</div>
                                    <div className={`font-sans text-[16px] text-[#52555B]`}>Automatically generate high-performance ad creatives based on previous market research, top performing creatives, or your ideas.</div>
                                </div>
                                <div className={`text-[15px] flex gap-x-1 items-center text-[#2476FF]`}>Learn More <ChevronRight color={"#2476FF"} size={18}/></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

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
                        duration: 0.5,
                        ease: "easeIn"
                    }}
                    viewport={{
                        once: true
                    }}
                    className={`w-full h-[477px] p-[1px]  border border-dashed border-[#e6e6e6]`}>
                    <div className={`h-full w-full bg-[#f0f0f0] flex`}>
                        <div className={`w-full md:w-1/2 h-full p-[30px] md:p-[60px] flex flex-col gap-y-[40px] items-center justify-center`}>
                            <div className={`flex flex-col gap-y-[14px] leading-[1.2] tracking-tight`}>
                                <div className={`text-[16px] text-[#2476FF]`}>Chat Interface</div>
                                <div className={`font-inter md:font-semibold text-[36px] font-semibold md:text-[48px]`}>Bring Your Marketing Everywhere</div>
                                <div className={`font-sans text-[16px] text-[#52555B]`}>Uplane is available everywhere, take control, drop ideas, ask for insights 24/7</div>
                            </div>
                            <div className={`h-[52px] w-full flex justify-center gap-x-[10px]`}>
                                <div className="relative w-1/3 md:w-[160px] h-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] rounded-lg">
                                    <Image
                                        src="/s1.png"
                                        alt=""
                                        fill
                                        className="object-contain object-center mt-0.5 scale-120 md:scale-180"
                                    />
                                </div>
                                <div className="relative w-1/3 md:w-[160px] h-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] rounded-lg">
                                    <Image
                                        src="/s2.png"
                                        alt=""
                                        fill
                                        className="object-contain object-center mt-0.5 scale-120 md:scale-180"
                                    />
                                </div>
                                <div className="relative w-1/3 md:w-[160px] h-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] rounded-lg">
                                    <Image
                                        src="/s1.png"
                                        alt=""
                                        fill
                                        className="object-contain object-center mt-0.5 scale-120 md:scale-180"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`hidden relative w-1/2 h-full p-2  md:flex items-center justify-center`}>
                            <div className={`w-full h-full rounded-2xl bg-white p-1`}>
                                <div className={`relative h-full w-full bg-[#e8f1fe] rounded-xl`}>
                                    <Image
                                        src="/three.png"
                                        alt=""
                                        fill
                                        className="object-contain pt-10"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ProductFeatures