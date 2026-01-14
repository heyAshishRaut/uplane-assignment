import Image from "next/image"
import user from "@/public/users/user.png"

const testimonials = [
    {
        review: "Uplane’s technology-driven and data-led approach enables the creation of far more precise and high-performing campaigns compared to traditional methods",
        name: "Furkan Yilmaz",
        role: "International Performance Marketer"
    },
    {
        review: "Uplane brings a whole new level of speed and efficiency to performance marketing. Testing, optimization, and reacting to results now happen at a pace that was previously impossible to achieve manually",
        name: "Pritam Shah",
        role: "Global Head of Performance Marketing"
    },
    {
        review: "Uplane’s technology-driven and data-led approach enables the creation of far more precise and high-performing campaigns compared to traditional methods",
        name: "Furkan Yilmaz",
        role: "International Performance Marketer"
    },
    {
        review: "Uplane brings a whole new level of speed and efficiency to performance marketing. Testing, optimization, and reacting to results now happen at a pace that was previously impossible to achieve manually",
        name: "Pritam Shah",
        role: "Global Head of Performance Marketing"
    },
    {
        review: "Uplane’s technology-driven and data-led approach enables the creation of far more precise and high-performing campaigns compared to traditional methods",
        name: "Furkan Yilmaz",
        role: "International Performance Marketer"
    },
    {
        review: "Uplane brings a whole new level of speed and efficiency to performance marketing. Testing, optimization, and reacting to results now happen at a pace that was previously impossible to achieve manually",
        name: "Pritam Shah",
        role: "Global Head of Performance Marketing"
    }
]

const Test = () => {
    return (
        <div className={`w-full h-[354px] flex animate-marquee`}>
            {
                testimonials.map((e, i) => (
                    <div key={i} className={`w-[440px] h-[354px] p-[20px] border border-dashed border-[#e6e6e6]`}>
                        <div className={`w-[400px] h-full bg-white rounded-3xl shadow-[0_6px_16px_rgba(0,0,0,0.08)] flex flex-col`}>
                            <div className={`w-full h-[225px] flex flex-col gap-y-[20px] border-b border-[#e6e6e6] p-[30px]`}>
                                <div className={`flex gap-x-1`}>

                                    {
                                        Array.from({length: 5}).map((_, i) => (
                                            <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.72771 0.485172C7.06084 -0.161724 7.94864 -0.161724 8.28176 0.485172L10.0316 3.88316C10.1588 4.13026 10.3868 4.30337 10.651 4.3535L14.2838 5.04277C14.9754 5.17399 15.2498 6.05645 14.7641 6.58747L12.2127 9.37681C12.0271 9.57965 11.9401 9.85975 11.9761 10.1378L12.4715 13.9618C12.5658 14.6898 11.8475 15.2352 11.2142 14.9165L7.88755 13.2424C7.64563 13.1207 7.36384 13.1207 7.12192 13.2424L3.79525 14.9165C3.16193 15.2352 2.44368 14.6898 2.53799 13.9618L3.03338 10.1378C3.06941 9.85975 2.98233 9.57965 2.79679 9.37681L0.245404 6.58747C-0.240319 6.05645 0.0340266 5.17399 0.725633 5.04277L4.35847 4.3535C4.62265 4.30337 4.85063 4.13026 4.97788 3.88316L6.72771 0.485172Z"
                                                    fill="#FFC60A"/>
                                            </svg>
                                        ))
                                    }
                                </div>
                                <div className={"text-[17px]"}>
                                    {e.review}
                                </div>
                            </div>

                            <div
                                className="h-[89px] w-full px-[30px] pt-[20px] pb-[24px] flex justify-between items-center">
                                <div
                                    className="relative w-[49px] h-[49px] p-1 rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.08)] overflow-hiddenbg-white">
                                    <Image
                                        src={user}
                                        alt="User"

                                        height={49}
                                        width={49}
                                        className="object-cover rounded-lg"
                                    />
                                </div>

                                <div>
                                    <div>{e.name}</div>
                                    <div className={`text-[13px] font-medium text-[#576275]`}>{e.role}</div>
                                </div>

                                <div
                                    className={`h-[35px] w-[35px] shadow-[0_6px_16px_rgba(0,0,0,0.08)] bg-black rounded-lg flex items-center justify-center`}>
                                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.8811 6.98238C14.8936 5.95031 16.625 6.68132 16.625 8.14095V21.1116L16.6245 21.1539C16.6024 22.0392 15.8915 22.75 15.0176 22.75H2.29222C0.860194 22.75 0.143003 20.9852 1.15556 19.9531L13.8811 6.98238Z"
                                            fill="white"/>
                                        <path
                                            d="M2.74396 15.7676C1.73135 16.7997 0 16.0687 0 14.609V1.63837L0.000541868 1.59604C0.0225677 0.710757 0.73354 7.4897e-07 1.60739 0H14.3328C15.7648 0 16.482 1.76472 15.4695 2.79684L2.74396 15.7676Z"
                                            fill="white"/>
                                    </svg>

                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

// @ts-ignore
export default Test