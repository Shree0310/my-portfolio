"use client"

import { motion } from 'framer-motion';

const SVGLines = () => {
    return <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg width="344" height="180" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path 
                d="M 40 0 L 40 70 Q 40 80 50 80 L 284 80 Q 294 80 294 90 L 294 160" 
                strokeWidth="1" 
                fill="none"
                stroke="url(#line-one-gradient)"
                strokeLinecap="round"
                className='relative'
            />
            {/* <rect x="0" y="0" width="33" height="312" fill="url(#line-one-gradient)"/> */}
            <defs>
                <motion.linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="line-one-gradient"
                    initial={{
                        x1: "0%",
                        y1: "0%",
                        x2:"0%",
                        y2:"10%"
                    }}
                    animate={{
                        x1:"100%",
                        y1: "90%",
                        x2:"100%",
                        y2:"100%"
                    }}
                    transition={{
                    duration:4,
                    repeat: Infinity,
                    repeatType:"loop",
                    ease:"easeInOut"
                    }}

                    >
                    <stop stopColor="#d4d4d4"/>
                    <stop offset="0.33" stopColor="#22d3ee"/>
                    <stop offset="0.66" stopColor="#a855f7"/>
                    <stop offset="1" stopColor="#d4d4d4"/>

                </motion.linearGradient>
            </defs>
        </svg>
    </div>
}

export default SVGLines;