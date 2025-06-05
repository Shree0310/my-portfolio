"use client"

import { cn } from "@/lib/utils"
import { FiX } from "react-icons/fi";
import  nature  from "@/assets/Images/nature.png";
import Image from "next/image";
import { motion } from 'framer-motion'
import { filter } from "framer-motion/client";

export const Card = () => {
    return (
        <div className={cn(
            "w-72 min-h-[25rem] h-[25rem] rounded-xl",
            "shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)]",
            "p-6 flex flex-col"
        )}>
        <h1 className="font-bold text-lg px-10 pt-2 text-gray-700">Hi, I'm Sowrasree</h1>
        <p className="text-sm px-10 text-neutral-500">A Frontend Developer</p>
        <div className="flex justify-center items-center pt-3">
            <button className="flex rounded-lg px-4 py-2  text-gray-600 shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)]">
                <div className="px-3">Projects</div>
                <div className="pt-1"><FiX className="h-4 w-4 text-neutral-400 cursor-pointer"/></div>
            </button>
        </div>
        <div className="bg-gray-100 border border-dashed border-neutral-200 rounded-lg flex-1 mt-4 relative">
            <motion.div
            initial={{
                 opacity: 0,
                 scale: 0.98,
                 filter: 'blur(10px)'
            }} 

            whileHover={{
                opacity:1,
                scale: 1.05,
                filter: 'blur(0px)'
            }}

            transition={{
                type: "spring",
                stiffness: "100",
                damping: "15",
                mass: "1"
            }}
            className="flex-1 absolute inset-0 h-full w-full rounded-lg bg-white">
                <Image className="h-full w-full" alt="nature" src={nature}/>
            </motion.div>
        </div>
        </div>
    )
}
export default Card;