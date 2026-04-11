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

    const getVariants = (face: 'top' | 'left' | 'right') => {
        if(face !== variant) {
            return {
                animate:{
                    translateX: 0,
                    translateY: 0,
                    stroke: 'var(--color-neutral-400)'
                },
                initial:{
                    translateX: 0,
                    translateY: 0,
                    stroke: 'var(--color-neutral-400)'
                }
            };
        }

        const getAnimateColor = () => {
            switch(face) {
                case('top'): return 'var(--color-blue-400)';
                case('left'): return 'var(--color-indigo-400)';
                case('right'): return 'var(--color-purple-400)';
            }
        };

        switch(face){
            case('top'): {
                return {
                    animate: {
                        translateY: -10,
                        stroke: getAnimateColor()
                    },
                    initial: {
                        translateY: 0,
                        stroke: 'var(--color-neutral-400)'
                    }
                };
            }
            case('left'): {
                return {
                    animate: {
                        translateX: -10,
                        stroke: getAnimateColor()
                    },
                    initial:{
                        translateX: 0,
                        stroke: 'var(--color-neutral-400)'
                    }
                };
            }
            case('right'): {
                return {
                    animate: {
                        translateX: 10,
                        stroke: getAnimateColor()
                    },
                    initial: {
                        translateX: 0,
                        stroke: 'var(--color-neutral-400)'
                    }
                };
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
        <motion.div
            className="flex flex-col h-full justify-between py-4"
            onMouseEnter={() => setActive(features.find(f => f.variant === variant)?.id || null)}
            onMouseLeave={() => setActive(null)}
        >
            <motion.svg width="200" height="200" viewBox="0 0 200 200" style={{ display: 'block', margin: '0 auto' }}>
            {/* Isometric cube with three visible faces */}

            {/* Top face */}
            <motion.path
                variants={getVariants('top')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 105 32 Q 100 30 95 32 L 52 54 Q 48 56 50 60 Q 51 62 53 61 L 95 78 Q 100 80 105 78 L 147 61 Q 149 62 150 60 Q 152 56 148 54 Z"
                fill="none"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Inner rectangle on top face */}
            <motion.path
                variants={getVariants('top')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 100 42 Q 98 43 96 44 L 68 58 Q 70 60 72 59 L 100 72 Q 102 71 104 70 L 130 57 Q 128 55 126 56 Z"
                fill="none"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Left face */}
            <motion.path
                variants={getVariants('left')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 52 57 Q 48 59 48 63 L 48 100 Q 48 104 50 106 Q 51 107 53 106 L 98 129 Q 100 130 100 127 L 100 85 Q 100 81 98 79 Q 97 78 95 79 Z"
                fill="none"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Right face */}
            <motion.path
                variants={getVariants('right')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 102 79 Q 100 81 100 85 L 100 127 Q 100 130 102 129 L 147 106 Q 149 107 150 106 Q 152 104 152 100 L 152 63 Q 152 59 148 57 Q 147 56 145 57 Z"
                fill="none"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
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
                        key={feature.id}
                        className="mt-2 text-center px-2">
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