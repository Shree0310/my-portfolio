import { IconMicrophoneFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import WaveFormAnimation from './WaveFormAnimation';
import { IconPlayerStopFilled } from '@tabler/icons-react';

const VoiceChatAI = () => {
    const [isListening, setIsListening] = useState(false);
    //Store the speech to text results
    const [transcript, setTranscript] = useState('');
    //Store the temporary results while speaking
    const [interimTransript, setInterimTranscript] = useState('')

    return <div className="flex px-2 justify-center items-center">
        {isListening ?
            (<div className="flex justify-center gap-2 items-center flex-row h-64 w-64 border dark:border-neutral-500 shadow-md rounded-2xl bg-white dark:bg-neutral-800 p-2">
                <div className="flex flex-col justify-center items-center gap-4">
                    <WaveFormAnimation isAnimating={isListening}/>
                    <p className='text-neutral-500 dark:text-neutral-400'>
                        {interimTransript || transcript || 'Listening...'}
                    </p>
                    <div className="relative flex justify-center items-center w-12 h-12 rounded-full bg-indigo-300/40 dark:bg-indigo-400 cursor-pointer">
                        <div className='absolute w-5 h-5 rounded-full bg-indigo-600' ></div>
                    </div>
                </div>
            </div>
            ):(
                <div className="flex justify-center gap-2 items-center flex-row h-18 w-45 border dark:border-neutral-500 shadow-md rounded-4xl bg-white dark:bg-black p-2">
                    <motion.button
                        onClick={() => setIsListening(!isListening)}
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