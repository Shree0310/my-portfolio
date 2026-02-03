import { IconSparkles } from '@tabler/icons-react';
import { IconPlaylist } from '@tabler/icons-react';
import { IconScissors } from '@tabler/icons-react';
import { IconClockHour5Filled } from '@tabler/icons-react';
import { IconMicrophone2 } from '@tabler/icons-react';
import { IconActivity } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { easeOut, motion } from 'framer-motion';


const ContexualAIBar = () => {

    const [isMusicMode, setIsMusicMode] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedIcon, setSelectedIcon] = useState<string>('sparkles');

    useEffect(() => {
        if(!isMusicMode && inputRef.current) {
            inputRef.current.focus();
        }
    },[isMusicMode]);

    const iconAnimation = {
        initial:{
                    opacity:0,
                    filter:'blur(10px)',
                    scale:0.8,
                },
        whileInView:{
                    filter:'blur(0px)',
                },
        animate:{
                    opacity:1,
                    scale:1
                },
        transition:{
                    duration: 0.1,
                    type:'spring' as const,
                    damping:20,
                    ease:"easeIn" as const
                },
        whileTap:{  scale:0.95 }
    }

    return <div className="flex flex-row justify-center items-center">
        <motion.div 
            initial={{
                x:0,
                y:0
            }}
            transition={{
                duration:0.3,
                ease: easeOut
            }}
            whileTap={{
                x:10,
                y:5
            }}
            className="relative">
            <input 
                placeholder='Refine with AI'
                ref={inputRef}
                disabled={isMusicMode}
                style={{ textIndent: isMusicMode ? '0' : '120px' }}
                className={`h-18 dark:placeholder:text-neutral-500  placeholder:text-neutral-400 placeholder:text-xl placeholder:font-semibold disabled:placeholder-transparent caret-black dark:caret-neutral-500  rounded-4xl dark:bg-neutral-800 bg-neutral-100 shadow-lg p-1 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                    disabled:cursor-not-allowed
                    ${isMusicMode ? "pl-32 w-76" : "pl-1 w-96"}`}
            />
            
            {/* Icons layered on top */}
            <div className={`absolute inset-0 flex pointer-events-none
                    ${isMusicMode === false ? "justify-between gap-8 p-1": "p-1"}`}>
                <div className="flex w-28 h-full rounded-4xl dark:bg-neutral-900 bg-white shadow-sm p-2 pointer-events-auto">
                    <div className={`w-12 h-12 p-3 cursor-pointer transition-colors
                        ${selectedIcon === 'playlist' 
                            ? "rounded-full dark:bg-neutral-800 bg-neutral-100" 
                            : "hover:rounded-full dark:bg-neutral-900 bg-white hover:dark:bg-neutral-800 hover:bg-neutral-100"
                        }`}>
                        <IconPlaylist stroke={2}
                            onClick={() => {
                                        setIsMusicMode(true); 
                                        setSelectedIcon("playlist");
                                    }} 
                            className='flex justify-center items-center w-7 h-7 text-black dark:text-neutral-400 cursor-pointer'/>
                    </div>
                    <div className={`py-2 px-2 cursor-pointer transition-colors
                        ${selectedIcon === 'sparkles' 
                            ? "rounded-full dark:bg-neutral-800 bg-neutral-100" 
                            : "hover:rounded-full dark:bg-neutral-900 bg-white hover:dark:bg-neutral-800 hover:bg-neutral-100"
                        }`}>
                        <IconSparkles stroke={1.75}
                            onClick={() => {
                                        setIsMusicMode(false); 
                                        setSelectedIcon("sparkles");
                                    }} 
                            className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer' />
                    </div>
                </div>
                {isMusicMode ?
                    (<motion.div 
                        initial={{
                                    opacity:0,
                                    filter:'blur(10px)',
                                    scale:0.8,
                                    x:0,
                                }}
                        whileInView={{
                                    filter:'blur(0px)',
                                }}
                        animate={{
                                    x:5,
                                    opacity:1,
                                    scale:1
                                }}
                        transition={{
                                    duration: 0.1,
                                    type:'spring',
                                    damping:20,
                                    ease:"linear"
                                }}
                        className="flex gap-2 p-4 pointer-events-auto">
                        <motion.div {...iconAnimation} className="div">
                            <IconScissors stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer'/>
                        </motion.div> 
                        <motion.div {...iconAnimation} className="div">
                            <IconClockHour5Filled className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer' />
                        </motion.div>
                        <motion.div {...iconAnimation} className="div">
                            <IconMicrophone2 stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer' />
                        </motion.div> 
                        <motion.div {...iconAnimation} className="div">
                            <IconActivity stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer'/>
                        </motion.div>                      
                    </motion.div>)
                    : (
                        <motion.div {...iconAnimation}
                            className="w-14 h-14 p-3 m-1 flex justify-center rounded-full dark:bg-neutral-800 bg-white pointer-events-auto">
                                <IconArrowRight stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer'/>
                        </motion.div>
                    )
                }     
            </div>
        </motion.div>
    </div>
}

export default ContexualAIBar;