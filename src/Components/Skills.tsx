"use client"

import Image from "next/image";
import  nature  from "@/assets/Images/nature.png";
import  code  from "@/assets/Images/code.png";
import  coder  from "@/assets/Images/coder.png";
import  girl_code  from "@/assets/Images/girl_code.png";
import  website  from "@/assets/Images/website.png";
import Skill from "./Skill";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from 'framer-motion'
import LiveCodeEditor from "./LiveCodeEditor";
import TypeScriptDemo from "./TypeScriptDemo";
import ColorPaletteDemo from "./ColorPaletteDemo";
import APIFetchDemo from "./APIFetchDemo";



const Skills = () => {
    const backgrounds = [ "#3e1f47", "#272640", "#212f45", "#065a60" ];
    const [background, setBackground] = useState(backgrounds[0]);
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const finalValue = Math.floor(latest * backgrounds.length)
        setBackground(backgrounds[finalValue])
    });
    return <div>
         
        <motion.div 
            animate={{
                background,
            }}
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
            ref={containerRef}
            className="flex justify-center items-center min-h-screen bg-neutral-700">
            <div className="flex flex-col gap-0 max-w-4xl mx-auto py-10">
            <h1 className="text-4xl text-neutral-300 font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text pt-10">Technical Skills</span>
             </h1>
                {features.map((feature,id) => (
                    <Skill key={feature.title} feature={feature}/>
                ))}
            </div>
        </motion.div>
    </div>
}
export default Skills;

type Feature = {
    title: string;
    description: string;
    content: React.ReactNode;
}

const features: Feature[] = [
    {
        title: "React js",
        description: "Proficient at building react & next js web apps.",
        content: (
            <div>
                <LiveCodeEditor/>
            </div>
        )
    },
    {
        title: "Typescript",
        description: "Advanced typescript knowledge with hands on expereience in both React & Angular projects",
        content: (
            <div>
                <TypeScriptDemo/>
            </div>
        )
    },
    {
        title: "CSS/Tailwind",
        description: "Experienced in both Tailwind CSS & framer motion to create interactive animations",
        content: (
            <div>
                <ColorPaletteDemo/>
            </div>
        )
    },
    {
        title: "Javascript",
        description: "Modern ES6+ features, async programming, and DOM manipulation",
        content: (
            <div>
                <APIFetchDemo/>
            </div>
        )
    }
]