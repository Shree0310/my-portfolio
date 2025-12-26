"use client"
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Data = {
    title: string,
    content : 
        {
            title: string | React.ReactNode,
            description: string | React.ReactNode;
        }[];
}

const TimeLine = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true, amount: 0.6})
    const data: Data[]= [
        {
            title: "2025",
            content: [
                {
                    title: "Published open-source UI library",
                    description: "Released a TypeScript React component library used by several projects and documented with Storybook."
                }
            ]
        },
        {
            title: "2024",
            content: [
                {
                    title: "Led migration to TypeScript & React 18",
                    description: "Converted a large codebase from JavaScript to TypeScript, upgraded to React 18, and resolved typing and concurrency issues."
                }
            ]
        },
        {
            title: "2023",
            content: [
                {
                    title: "Built a design system",
                    description: "Created a reusable design system and component library to ensure visual consistency and speed up development across teams."
                },
                 {
                    title: "Performance and accessibility improvements",
                    description: "Reduced bundle size by 40%, improved Lighthouse scores, and fixed WCAG accessibility issues across core pages."
                }
            ]
        },
        {
            title: "2022",
            content: [
                {
                    title: "Performance and accessibility improvements",
                    description: "Reduced bundle size by 40%, improved Lighthouse scores, and fixed WCAG accessibility issues across core pages."
                }
            ]
        },
        {
            title: "2021",
            content: [
                {
                    title: "Implemented CI/CD and E2E tests",
                    description: "Established a CI pipeline, added Cypress end-to-end tests, and automated deployments to staging and production."
                }
            ]
        },
        {
            title: "2020",
            content: [
                {
                    title: "Shipped first production SPA",
                    description: "Built and launched a single-page application using React and modern tooling, gaining initial user traction and feedback."
                },
                {
                    title: "Shipped first production SPA",
                    description: "Built and launched a single-page application using React and modern tooling, gaining initial user traction and feedback."
                },

            ]
        }
    ]
    return (
        <div ref={ref}>
            <h2 className="text-primary dark:text-neutral-300 py-4 text-xl">Here is the timeline of my life&apos;s achievements:</h2>
            {data.map((EachYear, index) => (
                <div key={index}>
                    <motion.h2
                        animate= {{
                            filter: isInView ? 'blur(0px)' : 'blur(10px)',
                            opacity: isInView ? 1: 0,
                        }} 
                        transition = {{
                            duration: 0.2,
                            delay:0.1 * index,
                            ease:"easeInOut"
                        }}
                        className="font-bold text-black dark:text-neutral-100">
                            {EachYear.title}
                    </motion.h2>
                    <div className="flex flex-col gap-4">
                        {EachYear.content.map((item, idx) => (
                        <div key={idx} className="timeline-item pl-4">
                            <div className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="pt-2 icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
                                <motion.h3
                                    animate={{
                                        opacity: isInView ? 1: 0,
                                        y: isInView ? 0: -10
                                    }} 
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.3 *idx,
                                        ease:'easeInOut'
                                    }}
                                    className="text-neutral-600 dark:text-neutral-300 font-bold pt-1 ">
                                    {item.title}
                                </motion.h3>
                            </div>
                            <p className="text-secondary dark:text-neutral-400 pl-8">{item.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimeLine;
