import { IconMicrophoneFilled } from '@tabler/icons-react';
import { easeOut, hover, motion } from 'framer-motion';
import { useState } from 'react';


const VoiceChatAI = () => {
    const [isSpeakDialogOpen, setIsSpeakDialogOpen] = useState(false);

    return <div className="flex px-2 justify-center items-center">
        {isSpeakDialogOpen ?
            (<div className="flex justify-center gap-2 items-center flex-row h-72 w-72 border dark:border-neutral-500 shadow-md rounded-2xl bg-white dark:bg-black p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM88,24a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V32A8,8,0,0,0,88,24Zm40,32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Zm40,32a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,168,88Zm40-16a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"></path></svg>
            </div>):(
                <div className="flex justify-center gap-2 items-center flex-row h-18 w-45 border dark:border-neutral-500 shadow-md rounded-4xl bg-white dark:bg-black p-2">
                    <motion.button
                        onClick={() => setIsSpeakDialogOpen(!isSpeakDialogOpen)}
                        initial='initial'
                        whileHover= 'hover'
                        className="relative group flex justify-center items-center h-10 w-10 rounded-full bg-black dark:bg-neutral-200 p-3 my-2 py-2 cursor-pointer">
                            <motion.div className='absolute inset-0 rounded-full bg-neutral-600/40'
                                        variants={{
                                            initial: {
                                                scale: 1,
                                                opacity: 0
                                            },
                                            hover: {
                                                scale: 1.5,
                                                opacity:[0, 0.6, 0]
                                            }
                                        }}
                                        transition={{
                                            duration:1.2,
                                            repeat: Infinity,
                                            ease: 'easeOut'
                                        }}/>
                            <motion.div className='absolute inset-0 rounded-full bg-neutral-600/40'
                                        variants={{
                                            initial:{
                                                scale:1,
                                                opacity:0
                                            },
                                            hover:{
                                                scale:1.5,
                                                opacity:[0, 0.6, 0]
                                            }
                                        }}
                                        transition={{
                                            duration:1.2,
                                            repeat: Infinity,
                                            ease: 'easeOut',
                                            delay: 0.4
                                        }}/>
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gray-400/30"
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
                                    delay: 0.8,
                                }}
                                />
                        <IconMicrophoneFilled stroke={2} width={32} height={32} className='w-8 h-8 text-white dark:text-black' />
                    </motion.button>
                    <p className='text-xs text-neutral-600 dark:text-neutral-300 font-bold'>Tap to Speak</p>
                </div>
            )
        }
    </div>
}
export default VoiceChatAI;