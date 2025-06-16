"use clients"

import { cn } from "@/lib/utils";
import { motion, MotionStyle, Transition } from "framer-motion";
import React from "react";

interface BorderBeamProps {

    //the class name of the border beam
    className?: string;
        
    // the size of the Border beam
    size?: number;

    //the duration of the beam
    duration?: number;

    //the delay between two beams
    delay?: number;

    //color gradient start color
    colorFrom?: string;

    // the color gradient ends
    colorTo?: string;

    //the motion transition of the border beam
    transition?: Transition;

    //the styling of the border beam
    style?: React.CSSProperties;

    //whether to reverse the css properties
    reverse?: boolean;

    //the initial offset position (0-100)
    initialOffset?: number, 
}

export const BorderBeam = ({
    className,
    size= 50,
    duration=6,
    delay=0,
    colorFrom="#ffaa40",
    colorTo="#9c40ff",
    transition,
    style,
    reverse=false,
    initialOffset = 0
}: BorderBeamProps) => {
    return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className,
        )}
            style = {{
                width: size,
                offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                "--color-from": colorFrom,
                "--color-to": colorTo,
                ...style
            } as MotionStyle
        }
            initial={{ offsetDistance: `${initialOffset}%`}}
            animate={{
                offsetDistance: reverse
                  ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
                  : [`${initialOffset}%`, `${100 + initialOffset}%`],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration,
                delay: -delay,
                ...transition,
              }}
                   >

        </motion.div>

    </div>
    )
}
export default BorderBeam;