import { IconSparkles } from '@tabler/icons-react';
import { IconPlaylist } from '@tabler/icons-react';
import { IconScissors } from '@tabler/icons-react';
import { IconClockHour5Filled } from '@tabler/icons-react';
import { IconMicrophone2 } from '@tabler/icons-react';
import { IconActivity } from '@tabler/icons-react';
import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';


const ContexualAIBar = () => {

    const [isMusicMode, setIsMusicMode] = useState(false);


    return <div className="flex flex-row justify-center items-center">
        <div className="relative">
            <input 
                disabled={isMusicMode}
                className={`h-18 w-76 rounded-4xl dark:bg-neutral-800 bg-neutral-100 shadow-lg p-1
                    disabled:cursor-not-allowed
                    ${isMusicMode ? "pl-32" : "pl-1"}`}
            />
            
            {/* Icons layered on top */}
            <div className={`absolute inset-0 flex pointer-events-none
                    ${isMusicMode === false ? "justify-between gap-8 p-1": "p-1"}`}>
                <div className="flex w-28 h-full rounded-4xl dark:bg-neutral-900 bg-white shadow-sm p-2 pointer-events-auto">
                    <div className="w-12 h-12 p-3 rounded-full dark:bg-neutral-800 bg-neutral-100">
                        <IconPlaylist stroke={2}
                            onClick={() => setIsMusicMode(!isMusicMode)} 
                            className='flex justify-center items-center w-7 h-7 text-black dark:text-neutral-400 cursor-pointer'/>
                    </div>
                    <div className="py-2 px-2">
                        <IconSparkles stroke={1.75} className='w-8 h-8 text-black dark:text-neutral-400' />
                    </div>
                </div>
                {isMusicMode ?
                    (<motion.div 
                        initial={{
                            opacity:0,
                            scale:0.8
                        }}
                        animate={{
                            opacity:1,
                            scale:1
                        }}
                        transition={{
                            type:"spring",
                            stiffness:200,
                            damping:20,
                        }}
                        whileTap={{ scale:0.95 }}
                        className="flex gap-2 p-4 pointer-events-auto">
                        <IconScissors stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer'/>
                        <IconClockHour5Filled className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer' />
                        <IconMicrophone2 stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer' />
                        <IconActivity stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer'/>
                    </motion.div>)
                    : (
                        <motion.div 
                            initial={{
                                opacity:0,
                                scale:0.8
                            }}
                            animate={{
                                opacity:1,
                                scale:1
                            }}
                            transition={{
                                type:"spring",
                                stiffness:200,
                                damping:20,
                            }}
                            whileTap={{ scale:0.95 }}
                            className="w-14 h-14 p-3 m-1 flex justify-center rounded-full dark:bg-neutral-800 bg-white pointer-events-auto">
                                <IconArrowRight stroke={2} className='w-8 h-8 text-black dark:text-neutral-400 cursor-pointer'/>
                        </motion.div>
                    )
                }     
            </div>
        </div>
    </div>
}

export default ContexualAIBar;