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

    const getVariants = (face: 'top' | 'left' | 'right', includeFill: boolean = false) => {
        if(face !== variant) {
            const baseVariant = {
                animate:{
                    translateX: 0,
                    translateY: 0,
                    stroke: 'var(--color-neutral-500)'
                },
                initial:{
                    translateX: 0,
                    translateY: 0,
                    stroke: 'var(--color-neutral-500)'
                }
            };
            if (includeFill) {
                return {
                    animate: { ...baseVariant.animate, fill: 'var(--color-neutral-500)' },
                    initial: { ...baseVariant.initial, fill: 'var(--color-neutral-500)' }
                };
            }
            return baseVariant;
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
                const baseVariant = {
                    animate: {
                        translateY: -10,
                        stroke: getAnimateColor()
                    },
                    initial: {
                        translateY: 0,
                        stroke: 'var(--color-neutral-500)'
                    }
                };
                if (includeFill) {
                    return {
                        animate: { ...baseVariant.animate, fill: getAnimateColor() },
                        initial: { ...baseVariant.initial, fill: 'var(--color-neutral-500)' }
                    };
                }
                return baseVariant;
            }
            case('left'): {
                const baseVariant = {
                    animate: {
                        translateX: -10,
                        stroke: getAnimateColor()
                    },
                    initial:{
                        translateX: 0,
                        stroke: 'var(--color-neutral-500)'
                    }
                };
                if (includeFill) {
                    return {
                        animate: { ...baseVariant.animate, fill: getAnimateColor() },
                        initial: { ...baseVariant.initial, fill: 'var(--color-neutral-500)' }
                    };
                }
                return baseVariant;
            }
            case('right'): {
                const baseVariant = {
                    animate: {
                        translateX: 10,
                        stroke: getAnimateColor()
                    },
                    initial: {
                        translateX: 0,
                        stroke: 'var(--color-neutral-500)'
                    }
                };
                if (includeFill) {
                    return {
                        animate: { ...baseVariant.animate, fill: getAnimateColor() },
                        initial: { ...baseVariant.initial, fill: 'var(--color-neutral-500)' }
                    };
                }
                return baseVariant;
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
            <motion.svg width="240" height="240" viewBox="0 0 240 240" style={{ display: 'block', margin: '0 auto' }}>
            {/* Isometric cube - Larger size with more rounded corners */}

            {/* Top face with rounded corners */}
            <motion.path
                variants={getVariants('top')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 120 60 Q 124 60 126 62 L 162 83 Q 166 85 166 90 Q 166 92 164 94 L 126 115 Q 122 117 118 115 L 78 94 Q 74 92 74 90 Q 74 85 78 83 L 114 62 Q 116 60 120 60 Z"
                fill="none"
                strokeWidth="3.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Inner rounded square on top face */}
            <motion.path
                variants={getVariants('top', true)}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 120 73 Q 122 73 124 74 L 148 88 Q 150 89 150 92 Q 150 93 148 95 L 124 107 Q 122 108 118 107 L 92 95 Q 90 93 90 92 Q 90 89 92 88 L 116 74 Q 118 73 120 73 Z"
                fillOpacity="0.15"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity="0.5"
            />

            {/* Left face with rounded corners */}
            <motion.path
                variants={getVariants('left')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 78 94 Q 74 96 74 100 L 74 138 Q 74 144 78 146 L 118 167 Q 120 168 120 164 L 120 115 Q 120 113 118 115 L 78 94 Z"
                fill="none"
                strokeWidth="3.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Left face inner lines */}
            <motion.line
                variants={getVariants('left')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                x1="90"
                y1="102"
                x2="90"
                y2="155"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <motion.line
                variants={getVariants('left')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                x1="102"
                y1="108"
                x2="102"
                y2="161"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <motion.line
                variants={getVariants('left')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                x1="110"
                y1="113"
                x2="110"
                y2="164"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.4"
            />

            {/* Right face with rounded corners */}
            <motion.path
                variants={getVariants('right')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                d="M 120 115 Q 120 113 120 115 L 120 164 Q 120 168 122 167 L 162 146 Q 166 144 166 138 L 166 94 Q 166 92 164 94 L 126 115 Z"
                fill="none"
                strokeWidth="3.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Right face inner lines */}
            <motion.line
                variants={getVariants('right')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                x1="130"
                y1="120"
                x2="130"
                y2="164"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <motion.line
                variants={getVariants('right')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                x1="140"
                y1="126"
                x2="140"
                y2="161"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <motion.line
                variants={getVariants('right')}
                transition={TRANSITION}
                animate={active !== null ? 'animate' : 'initial'}
                x1="150"
                y1="131"
                x2="150"
                y2="155"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.4"
            />
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