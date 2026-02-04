import { IconMicrophoneFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import WaveFormAnimation from './WaveFormAnimation';
import { IconPlayerStopFilled } from '@tabler/icons-react';

const VoiceChatAI = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [interimTranscript, setInterimTranscript] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [aiResponse, setAiResponse] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    
    const recognitionRef = useRef<any>(null);
    const shouldSendToAI = useRef(false); // Add this flag

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.error('Speech recognition not supported in this browser');
            setError('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;

        recognition.onresult = (event: any) => {
            let interim = '';
            let final = '';

            for(let i = event.resultIndex; i < event.results.length; i++) {
                const transcriptPiece = event.results[i][0].transcript;

                if(event.results[i].isFinal){
                    final += transcriptPiece + ' ';
                }
                else{
                    interim += transcriptPiece;
                }
            }
            if(final) {
                setTranscript(prev => prev + final);
            }
            setInterimTranscript(interim);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error:', event.error);
            
            switch(event.error) {
                case 'no-speech':
                    setError('No speech detected. Please try again.');
                    break;
                case 'audio-capture':
                    setError('No microphone found. Please check your microphone.');
                    break;
                case 'not-allowed':
                    setError('Microphone permission denied. Please allow microphone access.');
                    break;
                default:
                    setError(`Error: ${event.error}`);
            }
            
            setIsListening(false);
            shouldSendToAI.current = false; // Reset flag
        };

        // UPDATED: Handle when recognition ends
        recognition.onend = () => {
            console.log('Speech recognition ended');
            setIsListening(false);
            
            // Send to AI if flag is set
            if (shouldSendToAI.current) {
                shouldSendToAI.current = false;
                
                // Use a slight delay to ensure state is updated
                setTimeout(() => {
                    setTranscript(currentTranscript => {
                        console.log('Final transcript to send:', currentTranscript);
                        if (currentTranscript.trim()) {
                            sendToAI(currentTranscript);
                        }
                        return currentTranscript;
                    });
                }, 100);
            }
        };

        recognition.onstart = () => {
            console.log('Speech recognition started');
            setError(null);
        };

        recognitionRef.current = recognition;

        console.log('Speech recognition initialized and configured');

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
                recognitionRef.current = null;
            }
        };
    }, []);

    const sendToAI = async (text: string) => {
        console.log('sendToAI called with:', text); // Debug log
        
        if (!text.trim()) {
            setError('No text to send to AI');
            return;
        }

        setIsProcessing(true);
        setAiResponse('');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: text }),
            });

            if (!response.ok) {
                throw new Error('Failed to get AI response');
            }

            const data = await response.json();
            setAiResponse(data.response);

        } catch (error) {
            console.error('Error getting AI response:', error);
            setError('Failed to get AI response. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    const toggleListening = () => {
        if(!recognitionRef.current){
            console.error('Speech Recognition not initialised');
            setError('Speech recognition failed to initialize.');
            return;
        }

        if(isListening){
            try {
                // Set flag to send to AI when recognition ends
                shouldSendToAI.current = true;
                recognitionRef.current.stop();
                console.log("Stopping listening...");
            } catch (error) {
                console.error('Error stopping recognition:', error);
                setError('Failed to stop recording.');
                shouldSendToAI.current = false;
            }
        } else {
            try {
                setTranscript('');
                setInterimTranscript('');
                setAiResponse('');
                setError(null);
                shouldSendToAI.current = false; // Reset flag
                recognitionRef.current.start();
                setIsListening(true);
                console.log("Started listening");
            } catch (error) {
                console.error('Error starting recognition:', error);
                setError('Failed to start recording. Please try again.');
            }
        }
    };

    return <div className="flex px-2 justify-center items-center gap-4">
        {error && (
            <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-2 rounded-lg text-sm">
                {error}
            </div>
        )}
        
        {isListening ?
            (<div className="flex justify-center gap-2 items-center flex-row h-64 w-64 border dark:border-neutral-500 shadow-md rounded-2xl bg-white dark:bg-neutral-800 p-2">
                <div className="flex flex-col justify-center items-center gap-4">
                    <WaveFormAnimation isAnimating={isListening}/>
                    <p className='text-neutral-500 dark:text-neutral-400 text-center px-4'>
                        {interimTranscript || transcript || 'Listening...'}
                    </p>
                    <div 
                        onClick={toggleListening}
                        className="relative flex justify-center items-center w-12 h-12 rounded-full bg-indigo-300/40 dark:bg-indigo-400 cursor-pointer">
                        <div className='absolute w-5 h-5 rounded-full bg-indigo-600' ></div>
                    </div>
                </div>
            </div>
            ):isProcessing ? (
                <div className="flex justify-center gap-2 items-center flex-row h-64 w-64 border dark:border-neutral-500 shadow-md rounded-2xl bg-white dark:bg-neutral-800 p-2">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                        <p className='text-neutral-500 dark:text-neutral-400 text-center px-4'>
                            AI is thinking...
                        </p>
                    </div>
                </div>
            ): aiResponse ? (
                <div className="flex justify-center gap-2 items-center flex-row h-64 w-96 border dark:border-neutral-500 shadow-md rounded-2xl bg-white dark:bg-neutral-800 p-6 overflow-hidden">
                    <div className="flex flex-col justify-between items-start gap-4 w-full overflow-y-auto flex-1">
                        {/* <div className="flex flex-col gap-2 w-full">
                            <p className='text-xs text-neutral-400 dark:text-neutral-500 font-semibold'>You said:</p>
                            <p className='text-sm text-neutral-600 dark:text-neutral-300 italic line-clamp-2'>"{transcript}"</p>
                        </div> */}
                        {/* <div className="w-full h-px bg-neutral-200 dark:bg-neutral-700"></div> */}
                        <div className="flex flex-col gap-2 w-full">
                            <p className='text-xs text-neutral-400 dark:text-neutral-500 font-semibold'>AI Response:</p>
                            <p className='text-xs text-neutral-700 dark:text-neutral-200 leading-relaxed'>{aiResponse}</p>
                        </div>
                        <button
                            onClick={() => {
                                setAiResponse('');
                                setTranscript('');
                            }}
                            className="mt-1 px-2 py-2 bg-indigo-600 text-white rounded-lg text-xs hover:bg-indigo-700 transition-colors shrink-0"
                        >
                            Ask Again
                        </button>
                    </div>
                </div>
            ) :
            (
                <div className="flex justify-center gap-2 items-center flex-row h-18 w-45 border dark:border-neutral-500 shadow-md rounded-4xl bg-white dark:bg-black p-2">
                    <motion.button
                        onClick={toggleListening}
                        initial='initial'
                        whileHover='hover'
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