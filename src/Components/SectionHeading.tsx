"use client"
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SectionHeading = ({
    children,
    delay = 0,
    className
}: {
    children: string;
    delay?: number;
    className?: string
}) => {
    return <div>
        <h2 className={cn("max-w-lg pt-4 text-sm font-normal md:text-sm", className)}>
            {children.split(" ").map((word,idx)=>(
                <motion.span
                    initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 10
                    }}
                    whileInView={{
                        filter: "blur(0)",
                        opacity: 1,
                        y:0
                    }}
                    transition= {{
                        delay: delay + idx*0.1,
                        duration: 0.3,
                        ease:"easeInOut"
                    }}
                    key={word+idx}
                    viewport={{
                        once:true
                    }}
                    className="inline-block">
                    {word} &nbsp;
                </motion.span>
            ))}
        </h2>
    </div>
}
export default SectionHeading;