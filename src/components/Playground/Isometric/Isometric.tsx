import { motion } from "motion/react";

const Isometric = ({className, variant, isActive}:{
    className?: string;
    variant: 'top' | 'left' | 'right';
    isActive?: boolean;
}) => {
    const TRANSITION = {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
    }

    const YVariants = {
        animate: {
            translateY: -10
        },
        initial: {
            translateY: 0
        }
    }

    const NegativeXVariant = {
        animate: {
            translateX: -10
        },
        initial:{
            translateX: 0
        }
    }

    const PositiveXVariant = {
        animate: {
            translateX: 10
        },
        initial: {
            translateX: 0
        }
    }

    const noOpVariants= {
        animate:{
            translateX: 0,
            translateY: 0
        },
        initial:{
            translateX: 0,
            translateY: 0
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

    const strokeColor = isActive ? getStrokeColor(variant) : 'var(--color-blue-200)';

    return (
        <motion.div className="" whileHover="animate" initial="initial">
            <motion.svg width="300" height="300" viewBox="0 0 200 200" style={{ display: 'block', margin: '0 auto' }}>
            {/* Isometric cube with three visible faces */}

            {/* Top face */}
            <motion.path
                variants={getVariants('top')}
                transition={TRANSITION}
                d="M 105 32 Q 100 30 95 32 L 52 54 Q 50 55 52 57 L 95 78 Q 100 80 105 78 L 148 57 Q 150 55 148 54 Z"
                fill="#4a9eff"
                stroke={strokeColor}
                strokeWidth="2"
            />

            {/* Inner rectangle on top face */}
            <motion.path
                variants={getVariants('top')}
                transition={TRANSITION}
                d="M 100 42 L 130 57 L 100 72 L 70 57 Z"
                fill="none"
                stroke={strokeColor}
                strokeWidth="1.5"
            />

            {/* Left face */}
            <motion.path
                variants={getVariants('left')}
                transition={TRANSITION}
                d="M 52 57 Q 50 55 50 58 L 50 102 Q 50 105 52 106 L 98 129 Q 100 130 100 127 L 100 82 Q 100 80 98 79 Z"
                fill="#2c5f99"
                stroke={strokeColor}
                strokeWidth="2"
            />

            {/* Right face */}
            <motion.path
                variants={getVariants('right')}
                transition={TRANSITION}
                d="M 102 79 Q 100 80 100 82 L 100 127 Q 100 130 102 129 L 148 106 Q 150 105 150 102 L 150 58 Q 150 55 148 54 Z"
                fill="#357acc"
                stroke={strokeColor}
                strokeWidth="2"
            />

            {/* Edge highlights */}
            {/* <line x1="100" y1="30" x2="100" y2="80" stroke="#5ab3ff" strokeWidth="2" /> */}
            {/* <line x1="100" y1="80" x2="100" y2="130" stroke="#1a3a5c" strokeWidth="3" /> */}
            </motion.svg>
        </motion.div>
    );
}

export default Isometric;