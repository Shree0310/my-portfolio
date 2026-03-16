import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState, PointerEvent } from "react";

type HoldToConfirmProps = {
    text: string,
    confirmTimeout?: number,
    onConfirm?: VoidFunction
}

 const HoldToConfirmFoundation = ({ text:textFromProps, confirmTimeout=2, onConfirm}:HoldToConfirmProps) => {

    const [state, setState] = useState<"idle" | "inProgress" | "complete">("idle");
    const ref = useRef<HTMLButtonElement>(null);

    const progress = useMotionValue(0);
    const fillRightOffset = useTransform(progress, (v) => `${(1 - v) * 100}%`);

    const text = state === "idle" ? textFromProps : state === "inProgress" ? "Hold to confirm" : "Release to complete"

    const startCountDown = () => {
        setState("inProgress");
        animate(progress, 1, {duration: confirmTimeout, ease: 'linear'}).then(() => {
            if(progress.get() != 1) return;
            setState("complete");
        })
    }

    const cancelCountDown = () => {
        progress.stop();
        setState("idle");
        animate(progress, 0, {duration: 0.2, ease:"linear"})
    }

    const pointerUp = (e: PointerEvent) => {
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (progress.get() === 1 && ref.current?.contains(target)) {
            progress.jump(0);
            setState("idle");
            onConfirm?.();
        } else {
            cancelCountDown();
        }
    };

    const pointerMove = (e: PointerEvent) => {
        // Mouse will be handled by onPointerLeave
        if (e.pointerType === "mouse") return;
        
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (!ref.current?.contains(target)) {
            cancelCountDown();
        }
    };


    return (
        <div className="bg-neutral-100 rounded-lg shadow-md p-8 flex items-center justify-center">
            <motion.button 
                className="relative overflow-hidden min-w-48 select-none touch-none whitespace-nowrap leading-5 focus:outline-4 bg-red-500/80 hover:bg-red-600 border-red-800 border shadow-sm shadow-red-800 text-white font-semibold text-sm text-center cursor-pointer rounded-md py-2 px-3"
                ref={ref}
                onPointerUp={pointerUp}
                onPointerDown={startCountDown}
                onPointerCancel={cancelCountDown}
                onPointerLeave={(e) => {
                    if(e.pointerType === 'mouse') cancelCountDown();
                }}
                onPointerMove={pointerMove}
                onContextMenuCapture={(e) => e.preventDefault()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease:"easeInOut",
                    delay:0.1
                }}>
                <motion.div 
                    style={{ right: fillRightOffset }} 
                    className="absolute inset-0 bg-red-700 pointer-events-none"
                />     
                {/* Text layer - stays centered */}
                <span className="relative z-10 pointer-events-none select-none">
                    {text}
                </span>          
            </motion.button>
        </div>
    )
}

export default HoldToConfirmFoundation;
