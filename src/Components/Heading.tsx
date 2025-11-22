"use client"
import { cn } from "@/lib/utils";
import {easeInOut, motion} from "framer-motion"; 

const Heading = ({
    as: Tag = "h1",
    children,
    className
}:{
    as?: "h1",
    children: React.ReactNode,
    className?: string
}) => {
return <motion.div
            initial= {{
                opacity: 0, filter: 'blur(10px)', y:10
            }}
            whileInView={{
                opacity: 1, filter: "blur(0px)", y:0
            }}
            transition={{
                duration: 2,
                delay: 0.25,
                ease:"easeInOut"
            }}
            viewport={{
                once:true
            }}
        >
    <Tag className={cn("text-2xl md:text-4xl font-bold tracking-tighter text-primary dark:text-white drop-shadow-lg",
        className
    )}>
        {children}
    </Tag>
</motion.div>
}
export default Heading;