"use client"
import { easeInOut, motion } from "framer-motion"

const Button = ({
    children = "Download"
}) => {
    return (
        <div className="[perspective: 1000px] [transform-style: preserve-3d] rounded-md">
            <motion.button
                whileHover={{ rotateX: 20, rotateY: 10}}  
                style={{
                    translateZ: 100
                }}
                transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                 }}      
             className="group relative text-neutral-200 px-12 py-4 rounded-2xl bg-gray-800 shadow-lg cursor-pointer">
                <span className="group-hover:text-purple-500 transition-colors duration-300">{children}</span>
                <span className="absolute group inset-x-0 h-px bottom-0 w-3/4 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent">
                </span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 h-[6px] bottom-0 w-full mx-auto blur-sm bg-gradient-to-r from-transparent via-purple-400 to-transparent">
                </span>
            </motion.button>

        </div>
    )
}
export default Button;