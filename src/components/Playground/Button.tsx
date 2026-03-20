import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import React from "react";
import BorderBeam from "../ui/BorderBeam";
import { easeInOut, motion } from 'framer-motion';
import { IconHeart } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { IconShare } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';

// export const GlowingButton = ({className}:{className: string}) => {
//     return <div className={cn("div transform-style:[preserve-3d] flex  items-center justify-center", className)}>
//         <motion.button 
//             initial ={{
//                 rotate:0,
//                 boxShadow: "0px 5px 10px #67e8f9", 
//             }}
//             whileHover={{
//                 boxShadow: "0px 10px 20px #8b5cf6"
//             }}
//             transition={{
//                 duration:0.3,
//                 ease: easeInOut
//             }}
//             className="relative group dark:text-neutral-100 dark:bg-neutral-800 rounded-xl shadow-2xl h-5 w-24 py-3 flex items-center justify-center text-lg border border-neutral-500/10
//             ">
//             <div className="text-sm text-neutral-600 dark:text-neutral-200">Join</div>
//             <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-indigo-600 to-transparent h-px w-3/4 mx-auto"></span>
//             <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-l from-transparent via-cyan-500 to-transparent h-2 w-full mx-auto blur-md"></span>
//         </motion.button>
//     </div>
// }   

export const PulsatingButton = ({className, children}:{className?: string; children?: React.ReactNode}) => {
    return <div className={cn("perspective:[1000px] transform-style:[preserve-3d] flex flex-row gap-2 items-center justify-center h-64 w-64 pb-24 pl-4")}>
        <motion.button 
            initial= 'initial'
            whileHover='hover'
            className="relative group p-4 text-neutral-100 bg-neutral-900 dark:text-neutral-100 dark:bg-neutral-800 rounded-4xl shadow-2xl h-8 w-40 py-3 flex items-center justify-center text-lg border border-neutral-500/10">
            <motion.div className="absolute inset-0 rounded-4xl bg-gray-400/30"
                        variants={{
                            initial: {
                                scale: 1,
                                opacity: 0
                            },
                            hover: {
                                scale: 1.5,
                                opacity: [0, 0.6, 0]
                            }
                        }}
                        transition={{
                            duration:1.2,
                            repeat: Infinity,
                            ease:'easeOut'
                        }}>
            </motion.div>
             <motion.div
                className="absolute inset-0 rounded-4xl bg-gray-400/30"
                variants={{
                    initial: {
                    scale: 1,
                    opacity: 0,
                    },
                    hover: {
                    scale: 1.5,
                    opacity: [0, 0.6, 0],
                    },
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 1.8,
                }}
                />
                 <motion.div
                    className="absolute inset-0 rounded-4xl bg-gray-400/30"
                    variants={{
                        initial: {
                        scale: 1,
                        opacity: 0,
                        },
                        hover: {
                        scale: 1.5,
                        opacity: [0, 0.6, 0],
                        },
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: 2,
                    }}
                    />
            <div className="flex gap-1 z-10"><IconMail width={16} height={16} stroke={2} />
                <p className="text-xs font-normal">Invite this person</p>
                {children}
            </div>
        </motion.button>
    </div>
}
