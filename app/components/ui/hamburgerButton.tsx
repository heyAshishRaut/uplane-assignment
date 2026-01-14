"use client"
import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"
import {PrimaryButton, SecondaryButton} from "@/app/components/ui/button";

export default function HamburgerButton() {
    const [open, setOpen] = useState(false)

    return (
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="relative flex h-[49px] w-[49px] rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 text-white items-center justify-center">
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -20,
                                filter: "blur(10px)"
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                ease: "easeIn",
                                duration: 0.2
                            }}
                            className={`p-3 text-black absolute top-[65px] rounded-xl flex items-center flex-col gap-y-3 cursor-default shadow-[0_8px_24px_rgba(0,0,0,0.12)] right-0 w-[220px] bg-white`}>
                            <div>Home</div>
                            <div>Product</div>
                            <div>Why Uplane</div>
                            <div>About us</div>
                            <div>Blogs</div>
                            <div>Careers</div>
                            <SecondaryButton text={"Login"} />
                            <PrimaryButton text={"Get Started"} />
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <motion.div animate={open ? "open" : "closed"} initial={false} className="h-full w-full flex items-center justify-center">
                {/* TOP BAR */}
                <motion.span
                    variants={{
                        closed: { rotate: 0, y: -8 },
                        open: { rotate: 45, y: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[2px] w-[22px] rounded-full bg-white"
                />

                {/* MIDDLE BAR */}
                <motion.span
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[2px] w-[15px] rounded-full bg-white"
                />

                {/* BOTTOM BAR */}
                <motion.span
                    variants={{
                        closed: { rotate: 0, y: 8 },
                        open: { rotate: -45, y: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[2px] w-[22px] rounded-full bg-white"
                />
            </motion.div>
        </button>
    )
}
