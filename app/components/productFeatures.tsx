import Image from "next/image"
import {ChevronRight} from "lucide-react"

const ProductFeatures = () => {
    return (
        <div className={`h-[1494px] w-full px-[20px] md:px-[50px] lg:px-[100px] flex flex-col gap-y-[50px]`}>
            <div className={`h-[228px] w-full flex flex-col items-center gap-y-[14px] leading-[1.1] tracking-tight text-[16px]`}>
                <div className={"text-[#2476FF]"}>Product Features</div>
                <div className={`font-inter text-[36px] md:text-[52px] font-semibold text-center`}>All-in-One AI<br/>Marketing Platform</div>
                <div className={`text-center text-[#52555B]`}>From research to reporting Uplane automates your entire performance marketing workflow,<br/> so you can move faster, create smarter, and scale effortlessly.</div>
            </div>

            <div className={`w-full h-[1216px] flex flex-col gap-y-[60px]`}>
                <Image
                    src="/img_1.png"
                    alt=""
                    width={786}
                    height={65}
                    className="self-center w-full md:w-[786px] h-auto hidden md:block"
                />

                <div className={`w-full flex-1 flex flex-col gap-y-[20px] md:flex-row md:gap-y-0 md:gap-x-[20px]`}>
                    <div className={`w-full md:w-[610px] h-[564px] p-[1px] bg-white border border-dashed border-[#e6e6e6]`}>
                        <div className={`h-full w-full bg-[#f0f0f0] flex flex-col pt-1.5 md:pt-2`}>
                            <div className={`relative w-full h-[378px]`}>
                                <Image
                                    src="/img_2.png"
                                    alt=""
                                    fill
                                    className=""
                                />
                            </div>

                            <div className={`flex-1 w-full px-[30px] pb-[30px] pt-[10px] flex flex-col gap-y-5`}>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={`font-inter md:font-semibold text-[20px] font-medium md:text-[22px]`}>Market Research</div>
                                    <div className={`font-sans text-[16px] text-[#52555B]`}>Automatically analyze competitor’s top ads, identify real-time trends, and leverage market insights to fuel smarter ideation.</div>
                                </div>
                                <div className={`text-[15px] flex gap-x-1 items-center text-[#2476FF]`}>Learn More <ChevronRight color={"#2476FF"} size={18}/></div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full md:w-[610px] h-[564px] p-[1px] bg-white border border-dashed border-[#e6e6e6]`}>
                        <div className={`h-full w-full bg-[#f0f0f0] flex flex-col pt-2`}>
                            <div className={`relative w-full h-[378px]`}>
                                <Image
                                    src="/img_2.png"
                                    alt=""
                                    fill
                                    className=""
                                />
                            </div>

                            <div className={`flex-1 w-full px-[30px] pb-[30px] pt-[10px] flex flex-col gap-y-5`}>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={`font-inter md:font-semibold text-[20px] font-medium md:text-[22px]`}>Market Research</div>
                                    <div className={`font-sans text-[16px] text-[#52555B]`}>Automatically analyze competitor’s top ads, identify real-time trends, and leverage market insights to fuel smarter ideation.</div>
                                </div>
                                <div className={`text-[15px] flex gap-x-1 items-center text-[#2476FF]`}>Learn More <ChevronRight color={"#2476FF"} size={18}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFeatures