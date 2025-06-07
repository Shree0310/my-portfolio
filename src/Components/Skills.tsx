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



const Skills = () => {
    const backgrounds = ["#065a60", "#212f45", "#272640", "#3e1f47"];
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
            <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
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
        description: "Proficient at building react web apps",
        content: (
            <div>
                <LiveCodeEditor/>
            </div>
        )
    },
    {
        title: "Typescript",
        description: "Advanced typescript knowledge with handson expereience in both React & Angular projects",
        content: (
            <div>
                <TypeScriptDemo/>
            </div>
        )
    },
    {
        title: "CSS/Tailwind",
        description: "Experience in working with both Tailwind css and framer motion to create interactive animations",
        content: (
            <div>
                <ColorPaletteDemo/>
            </div>
        )
    },
    {
        title: "css",
        description: "proficient at building react web apps",
        content: (
            <div>
                <Image
                    src={website}
                    alt="React"
                    height="500"
                    width="500"
                    className="rounded-lg"/>
            </div>
        )
    },
    {
        title: "Javascript",
        description: "proficient at building react web apps",
        content: (
            <div>
                <Image
                    src={girl_code}
                    alt="React"
                    height="500"
                    width="500"
                    className="rounded-lg"/>
            </div>
        )
    }
]