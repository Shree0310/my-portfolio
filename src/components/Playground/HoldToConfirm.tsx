import { animate, AnimatePresence, motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import { useRef, useState, PointerEvent } from "react";

type HoldToConfirmProps = {
    text: string,
    confirmTimeout?: number,
    onConfirm?: VoidFunction
}

type Direction = "back" | "forward";

const textVariants: Variants = {
    initial: (direction: Direction) => ({
        y: direction === "forward" ? "-30%" : "30%",
        opacity: 0
    }),
    target: {
        y: "0%",
        opacity: 1,
    },
    exit: (direction: Direction) => ({
        y: direction === "forward" ? "30%" : "-30%",
        opacity: 0
    })
}

const buttonVariants : Variants = {
    idle: {
        x: 0,
        rotate: 0,
        transition: {
            duration: 0.1
        }
    },
    shaking: {
        x: [-5, 5], //KeyFrames: From -10 to 10 pixels
        rotate: [-1, 1], //KeyFrames: From -3 to 3 degrees
        //To make the button shaky indefinitely
        transition: {
            repeatType: "mirror",
            repeat: Infinity,
            duration: 0.1,
            ease: "easeInOut"
        }
    }
}

 const HoldToConfirmFoundation = ({ text:textFromProps, confirmTimeout=2, onConfirm}:HoldToConfirmProps) => {

    const [state, setState] = useState<"idle" | "inProgress" | "complete">("idle");
    const ref = useRef<HTMLButtonElement>(null);

    const progress = useMotionValue(0);
    const fillRightOffset = useTransform(progress, (v) => `${(1 - v) * 100}%`);

    const text = state === "idle" ? textFromProps : state === "inProgress" ? "Hold to confirm" : "Release to complete"

    const textDirection: Direction = state === 'idle' ? 'back' : 'forward';


    const startCountdown = () => {
        setState('inProgress');
        // Generates array like [100, 50, 100, 50, 100, 50, ...]
        const pattern = new Array(confirmTimeout * 10)
        .fill(0)
        .map((_, ind) => (ind % 2 === 0 ? 100 : 50));
        navigator.vibrate?.(pattern);
        animate(progress, 1, { duration: confirmTimeout, ease: 'linear' }).then(
        () => {
            if (progress.get() !== 1) return;
            setState('complete');
            navigator.vibrate(0); // Stop vibrating
        }
        );
    };

    const cancelCountdown = () => {
        navigator.vibrate?.(0);
        progress.stop();
        setState('idle');
        animate(progress, 0, { duration: 0.2, ease: 'linear' });
    };

    const pointerUp = (e: PointerEvent) => {
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (progress.get() === 1 && ref.current?.contains(target)) {
        animate(fillerConfirmAnimationProgress, 1, {
            duration: 0.2,
            ease: 'linear',
        }).then(() => {
            fillerConfirmAnimationProgress.jump(0);
            progress.jump(0);
            setState('idle');
            onConfirm?.();
        });
        } else {
        cancelCountdown();
        }
    };

    const pointerMove = (e: PointerEvent) => {
        // Mouse will be handled by onPointerLeave
        if (e.pointerType === "mouse") return;
        
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (!ref.current?.contains(target)) {
            cancelCountdown();
        }
    };

    // This is used in 'completion' animation
    const fillerConfirmAnimationProgress = useMotionValue(0);
    const fillLeftOffset = useTransform(fillerConfirmAnimationProgress, (v) => `${v * 100}%`);
  
    return (
        <div className="bg-neutral-100 rounded-lg shadow-md p-8 flex items-center justify-center">
            <motion.button 
                className="relative overflow-hidden min-w-48 select-none touch-none whitespace-nowrap leading-5 focus:outline-4 bg-red-500/80 hover:bg-red-600 border-red-800 border shadow-sm shadow-red-800 text-white font-semibold text-sm text-center cursor-pointer rounded-md py-2 px-3"
                ref={ref}
                onPointerUp={pointerUp}
                onPointerDown={startCountdown}
                onPointerCancel={cancelCountdown}
                onPointerLeave={(e) => {
                    if(e.pointerType === 'mouse') cancelCountdown();
                }}
                onPointerMove={pointerMove}
                onContextMenuCapture={(e) => e.preventDefault()}
                variants={buttonVariants}
                animate={ state === "inProgress" ? "shaking": "idle" }
                transition={{
                    ease:"easeInOut",
                    delay:0.1
                }}>
                <motion.div 
                    style={{ right: fillRightOffset, left: fillLeftOffset }} 
                    className="absolute inset-0 bg-red-700 pointer-events-none"
                />     
                <AnimatePresence custom={textDirection} initial={false} mode='popLayout'>
                {/* Text layer - stays centered */}
                <motion.div 
                    key={text}
                    variants={textVariants}
                    custom={textDirection}
                    className="relative z-10 pointer-events-none select-none">
                    {text}
                </motion.div>   
                </AnimatePresence>       
            </motion.button>
        </div>
    )
}

export default HoldToConfirmFoundation;
