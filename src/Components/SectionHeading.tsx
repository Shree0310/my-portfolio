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
        <h2 className={cn("max-w-lg mt-4 mb-6 py-1 px-2 text-sm md:text-sm border text-neutral-700 dark:text-neutral-300 border-y-neutral-700  font-bold  rounded-md inline-block", className)}>
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