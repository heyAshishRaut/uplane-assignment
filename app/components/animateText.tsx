"use client"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"
import { stagger } from "framer-motion"

const AnimateText = ({ text }: { text: string }) => {
    const [ scope, animate ] = useAnimate()

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: "blur(0px)",
                y: 0
            },
            {
                duration: 0.4,
                ease: "easeInOut",
                delay: stagger(0.07)
            }
        )
    }, [])

    return (
        <div ref={scope} className={`text-center md:text-start leading-[1.2] tracking-tighter`}>
            {
                text.split(" ").map((word, idx) => (
                    <motion.span key={idx}
                                 style = {{
                                     opacity: 0,
                                     filter: "blur(10px)",
                                     y: 20
                                 }}
                    >
                        {word + " "}
                    </motion.span>
                ))
            }
        </div>
    )
}

export default AnimateText