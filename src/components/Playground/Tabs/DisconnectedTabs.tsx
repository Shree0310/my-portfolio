import { IconBellFilled } from '@tabler/icons-react';
import { IconMailFilled } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { easeIn, easeInOut, motion } from 'framer-motion';

import { useState } from 'react';

const DisconnectedTabs = () => {
    const [isExpandedTab, setIsExpandedTab] = useState<string | null>(null);

    return <div className="flex flex-row justify-center items-center gap-4 w-100 h-14 mt-24">
        <motion.div 
            animate={{ 
                        width: isExpandedTab === 'Alerts' ? 144 : 64 
                    }}
            transition={{
                type: "spring",
                stiffness:300,
                damping:20
            }}
            whileTap={{ scale: 0.95}}
            className=
                {`w-16 h-16 flex justify-center items-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-800 shadow-md 
                  `
                }
            onClick={() => setIsExpandedTab(isExpandedTab === 'Alerts' ? null : 'Alerts')}>
            
            { isExpandedTab === 'Alerts'? 
                <motion.div 
                    initial={{ opacity:0, scale:0.8}}
                    animate={{ opacity:1, scale: 1}}
                    className="flex gap-2 items-center whitespace-nowrap">
                    <IconBellFilled  stroke={2} className='text-green-700' />
                    <motion.p 
                        initial={{ opacity:0, x:-10}}
                        animate={{ 
                            opacity:1, 
                            x:0,
                            textShadow: [
                                "0 0 0px rgba(34, 197, 94, 0)",
                                "0 0 20px rgba(34, 197, 94, 0.8)",
                                "0 0 10px rgba(34, 197, 94, 0.4)",
                            ]
                        }}
                        transition={{
                           textShadow: {
                                    duration: 0.6,
                                    times: [0, 0.5, 1],
                                    repeat: 0
                                }
                        }}
                        className='text-lg font-semibold text-green-700'>Alerts</motion.p>
                </motion.div> : <IconBellFilled  stroke={2} className='text-green-700' />
                }
        </motion.div>
        <motion.div
            animate={{
                width:isExpandedTab === 'Messages' ? 144 : 64,
                y:1
            }} 
            transition={{
                type:"spring",
                stiffness:300,
                damping:20
            }}
            whileTap={{ scale:0.95 }}
            className={`w-16 h-16 flex justify-center items-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-800 shadow-md
                  `
                }
                onClick={() => setIsExpandedTab(isExpandedTab === 'Messages' ? null : 'Messages')}>
            { isExpandedTab === 'Messages'? 
            <motion.div
                initial={{ opacity:0, scale:0.8}}
                animate={{ opacity:1, scale: 1}}
                className="flex gap-2 items-center whitespace-nowrap">
                <IconMailFilled stroke={2} className='text-blue-600'/>
                <motion.p
                    initial={{ opacity:0, x:-10}}
                    animate={{ 
                        opacity:1, 
                        x:0,
                        textShadow: [
                            "0 0 0px rgba(34, 197, 94, 0)",
                            "0 0 20px rgba(34, 197, 94, 0.8)",
                            "0 0 10px rgba(34, 197, 94, 0.4)",
                        ]
                    }}
                    transition={{
                        textShadow: {
                                duration: 0.6,
                                times: [0, 0.5, 1],
                                repeat: 0
                            }
                    }} 
                    className='text-lg font-semibold text-blue-600'>Messages</motion.p>
            </motion.div> : <IconMailFilled  stroke={2} className='text-blue-600' />
            }           
        </motion.div>
        <motion.div
            animate={{
                width: isExpandedTab === 'Events' ? 144 : 64
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type:"spring",
                stiffness: 300,
                damping:10,
            }}
            className={`w-16 h-16 flex justify-center items-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-800 shadow-md
                  ${isExpandedTab === 'Events' ? "w-36 px-8" : "w-16"}`
                }
                onClick={() => setIsExpandedTab(isExpandedTab === 'Events' ? null : 'Events')}>
            { isExpandedTab === 'Events' ? 
                <motion.div
                    initial={{ opacity:0, scale:0.8}}
                    animate={{ opacity:1, scale: 1}} 
                    className="flex gap-2 items-center whitespace-nowrap">
                    <IconCalendarWeek stroke={2} className='text-red-600'/>
                    <motion.p
                        initial={{ opacity:0, x:-10}}
                        animate={{ 
                            opacity:1, 
                            x:0,
                            textShadow: [
                                "0 0 0px rgba(34, 197, 94, 0)",
                                "0 0 20px rgba(34, 197, 94, 0.8)",
                                "0 0 10px rgba(34, 197, 94, 0.4)",
                            ]
                        }}
                        transition={{
                           textShadow: {
                                    duration: 0.6,
                                    times: [0, 0.5, 1],
                                    repeat: 0
                                }
                        }} 
                        className='text-lg font-semibold text-red-600'>Events</motion.p>
                </motion.div> : <IconCalendarWeek  stroke={2} className='text-red-600' />
            }  
        </motion.div>
    </div>
}
export default DisconnectedTabs;