"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import {ChevronRight} from "lucide-react"
import {cn} from "@/lib/utils"

const PrimaryButton = ({ text }: { text: string }) => {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            className="
        cursor-pointer font-sans relative
        flex justify-center items-center gap-1
        overflow-hidden text-[15px]
        rounded-[10px]
        py-[13px] pl-[16px] pr-[11px]
        h-[49px]
        bg-gradient-to-b from-blue-500 to-blue-700 text-white
        w-full sm:w-auto
      "
        >
            <span className="font-medium">{text}</span>

            {/* Arrow */}
            <div className="relative h-5 w-5 overflow-hidden">
                <motion.div
                    variants={{
                        rest: { x: 0, opacity: 1 },
                        hover: { x: 20, opacity: 0 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <ChevronRight size={18} />
                </motion.div>

                <motion.div
                    variants={{
                        rest: { x: -20, opacity: 0 },
                        hover: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <ChevronRight size={18} />
                </motion.div>
            </div>

            {/* Shiny line */}
            <motion.div
                variants={{
                    rest: { x: "-120%" },
                    hover: { x: "120%" },
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="pointer-events-none absolute top-1/2 left-0 h-32 w-24 -translate-y-1/2 rotate-35 bg-white/50 blur-lg"
            />
        </motion.div>
    )
}

const SecondaryButton = ({ text }: { text: string }) => {
    return (
        <div
            className={cn(
                "min-h-[49px] cursor-pointer font-sans",
                "py-[13px] px-[30px] rounded-[10px]",
                "border border-[#e6e6e6] hover:bg-[#e6e6e6]/40 transition-all ease-in",
                "text-black flex items-center justify-center",
                "w-full sm:w-auto"
            )}
        >
            {text}
        </div>
    )
}

export { PrimaryButton, SecondaryButton }