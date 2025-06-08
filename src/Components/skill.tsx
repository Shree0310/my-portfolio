"use client"

import { useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from 'framer-motion'

type Feature = {
    title: string;
    description: string;
    content: React.ReactNode;
}

const Skill = ({feature} : { feature: Feature}) => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateContent = useSpring(
        useTransform(scrollYProgress, [0, 1], [200, -300]),
        {
            stiffness: 100,
            damping: 30,
            mass: 1
        }
    );
    const opacityContent = useTransform(scrollYProgress, [0,0.5,1], [0,1,0]);
    const blur = useTransform(scrollYProgress, [0.8,1], [0,10]);
    const scale = useTransform(scrollYProgress, [0.5,1], [1,0.8]);

    return <div>
        <div ref={ref} key={feature.title} className="grid grid-cols-2 pt-20">
            <motion.div 
                style={{
                    filter: useMotionTemplate`blur(${blur}px)`,
                    scale,
                }}
            className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-white">{feature.title}</h2>
                <h2 className="text-neutral-300 text-lg">{feature.description}</h2>
            </motion.div>
            <motion.div
                style={{
                    y: translateContent,
                    opacity: opacityContent
                }}>{feature.content}</motion.div>
        </div>
    </div>
}
export default Skill;