"use client"
import React from "react";
import { easeInOut, motion, useInView } from "framer-motion";
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
                }
            ]
        }
    ]
    return (
        <div ref={ref}>
            <h2 className="text-primary py-4 text-xl">Here is the timeline of my life's achievements:</h2>
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
                        className="font-bold text-black">{EachYear.title}</motion.h2>
                    {EachYear.content.map((item, idx) => (
                        <div key={idx} className="timeline-item pl-4">
                            <motion.h3
                                animate={{
                                    opacity: isInView ? 1: 0,
                                    y: isInView ? 0: 10
                                }} 
                                transition={{
                                    duration: 0.3,
                                    delay: 0.2 *idx,
                                    ease:'easeInOut'
                                }}
                                className="text-primary font-bold">{item.title}</motion.h3>
                            <p className="text-muted">{item.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TimeLine;