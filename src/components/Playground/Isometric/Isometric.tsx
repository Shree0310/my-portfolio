import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const Isometric = ({className, variant}:{
    className?: string;
    variant: 'top' | 'left' | 'right';
}) => {
    const features = [
        {
            id:1,
            heading:'Innovation',
            description:'Cloud-native architecture AI-powered solutionsScalable infrastructure',
            variant: 'left' as const
        },
        {
            id:2,
            heading:'Performance',
            description:'Real-time analytics Edge computing Optimized workflows',
            variant: 'right' as const
        },
        {
            id:3,
            heading:'Growth',
            description:'Data-driven insights Market expansion Digital transformation',
            variant: 'top' as const
        }
    ]
    const TRANSITION = {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
    }

    const [active, setActive] = useState<number | null>(null);

    const isActive = (id: number) =>  active === id;

    const STROKE = active !== null ? "var(--color-red-200)" : "var(--color-neutral-200)"

    const YVariants = {
        animate: {
            translateY: -10,
            stroke: STROKE
        },
        initial: {
            translateY: 0,
            stroke: STROKE
        }
    }

    const NegativeXVariant = {
        animate: {
            translateX: -10,
            stroke: STROKE
        },
        initial:{
            translateX: 0,
            stroke: STROKE
        }
    }

    const PositiveXVariant = {
        animate: {
            translateX: 10,
            stroke: STROKE
        },
        initial: {
            translateX: 0,
            stroke: STROKE
        }
    }

    const noOpVariants= {
        animate:{
            translateX: 0,
            translateY: 0,
            stroke: STROKE
        },
        initial:{
            translateX: 0,
            translateY: 0,
            stroke: STROKE
        }
    }

    const getStrokeColor = (face: 'top' | 'left' | 'right') => {
        if(face !== variant) return 'transparent';

        switch(face) {
            case('top') : {
                return 'var(--color-blue-200)';
            }
            case('left'): {
                return 'var(--color-indigo-200)';
            }
            case('right'): {
                return 'var(--color-slate-200)';
            }
        }
    }

    const getVariants = (face: 'top' | 'left' | 'right') => {
        if(face !== variant) return noOpVariants;
        switch(face){
            case('top'): {
                return YVariants;
            }
            case('left'): {
                return NegativeXVariant;
            }
            case('right'): {
                return PositiveXVariant;
            }
        }
    }

    // const strokeColor = isActive ? getStrokeColor(variant) : 'var(--color-blue-200)';

    const getContent = () => {
        switch(variant) {
            case 'top':
                return {
                    heading: 'Innovation',
                    lines: [
                        'Cloud-native architecture',
                        'AI-powered solutions',
                        'Scalable infrastructure'
                    ]
                };
            case 'left':
                return {
                    heading: 'Performance',
                    lines: [
                        'Real-time analytics',
                        'Edge computing',
                        'Optimized workflows'
                    ]
                };
            case 'right':
                return {
                    heading: 'Growth',
                    lines: [
                        'Data-driven insights',
                        'Market expansion',
                        'Digital transformation'
                    ]
                };
        }
    };

    // const content = getContent();

    return (
        <motion.div className="flex flex-col h-full justify-between py-4" whileHover="animate" initial="initial">
            <motion.svg width="200" height="200" viewBox="0 0 200 200" style={{ display: 'block', margin: '0 auto' }}>
            {/* Isometric cube with three visible faces */}

            {/* Top face */}
            <motion.path
                variants={getVariants('top')}
                transition={TRANSITION}
                stroke={STROKE}
                d="M 105 32 Q 100 30 95 32 L 52 54 Q 50 55 52 57 L 95 78 Q 100 80 105 78 L 148 57 Q 150 55 148 54 Z"
                fill="#4a9eff"
                strokeWidth="2"
            />

            {/* Inner rectangle on top face */}
            <motion.path
                variants={getVariants('top')}
                transition={TRANSITION}
                stroke={STROKE}
                d="M 100 42 L 130 57 L 100 72 L 70 57 Z"
                fill="none"
                strokeWidth="1.5"
            />

            {/* Left face */}
            <motion.path
                variants={getVariants('left')}
                transition={TRANSITION}
                stroke={STROKE}
                d="M 52 57 Q 50 55 50 58 L 50 102 Q 50 105 52 106 L 98 129 Q 100 130 100 127 L 100 82 Q 100 80 98 79 Z"
                fill="#2c5f99"
                strokeWidth="2"
            />

            {/* Right face */}
            <motion.path
                variants={getVariants('right')}
                transition={TRANSITION}
                d="M 102 79 Q 100 80 100 82 L 100 127 Q 100 130 102 129 L 148 106 Q 150 105 150 102 L 150 58 Q 150 55 148 54 Z"
                fill="#357acc"
                strokeWidth="2"
            />

            {/* Edge highlights */}
            {/* <line x1="100" y1="30" x2="100" y2="80" stroke="#5ab3ff" strokeWidth="2" /> */}
            {/* <line x1="100" y1="80" x2="100" y2="130" stroke="#1a3a5c" strokeWidth="3" /> */}
            </motion.svg>
            <div>
                {features
                    .filter((feature) => feature.variant === variant)
                    .map((feature) => (
                    <div
                        onMouseEnter={() => setActive(feature.id)}
                        onMouseLeave={() => setActive(null)}
                        key={feature.id} 
                        className={cn("mt-2 text-center px-2", isActive(feature.id) && "shadow-md dark:shadow-gray-200/10  shadow-black/10 ring-1 dark:ring-gray-200/10 ring-black/10")}>
                        <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-1.5">
                            {feature.heading}
                        </h3>
                        <div className="space-y-0.5">
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            
        </motion.div>
    );
}

export default Isometric;