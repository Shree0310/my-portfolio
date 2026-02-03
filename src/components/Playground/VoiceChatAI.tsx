import { IconMicrophoneFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import WaveFormAnimation from './WaveFormAnimation';
import { IconPlayerStopFilled } from '@tabler/icons-react';

const VoiceChatAI = () => {
    const [isListening, setIsListening] = useState(false);
    //Store the speech to text results
    const [transcript, setTranscript] = useState('');
    //Store the temporary results while speaking
    const [interimTranscript, setInterimTranscript] = useState('');
    const [error, setError] = useState<string | null>(null); // Track errors


    //Using ref to store the speech recognition object
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.error('Speech recognition not supported in this browser');
            alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        // Configure speech recognition settings
        recognition.continuous = true; // Keep listening until manually stopped
        recognition.interimResults = true; // Get results while still speaking
        recognition.lang = 'en-US'; // Language (you can change this: 'es-ES', 'fr-FR', etc.)
        recognition.maxAlternatives = 1; // Number of alternative results

        recognition.onresult = (event: any) => {
            let interim ='';
            let final = '';

            for(let i= event.resultIndex; i<event.results.length; i++) {
                const transcriptPiece = event.results[i][0].transcript;

                if(event.results[i].isFinal){
                    final += transcriptPiece + ' ';
                }
                else{
                    interim += transcriptPiece;
                }
            }
            if(final) {
                setTranscript(prev =>prev + final)
            }
            setInterimTranscript(interim);
        };

        // Event handler: Called when an error occurs
        recognition.onerror = (event: any) => {
            console.error('Speech recognition error:', event.error);
            setIsListening(false);
        };

        // Event handler: Called when recognition stops
        recognition.onend = (event: any) => {
            console.error('Speech recognition error:', event.error);
            
            // Handle different error types
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
        };

        recognitionRef.current = recognition;

        console.log('Speech recognition initialized and configured');

        // Cleanup function: runs when component unmounts
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
                recognitionRef.current = null;
            }
        };
    },[]);

    const toggleListening = () => {
        if(!recognitionRef.current){
            console.log('Speech Recognition not initialised');
        }

        if(isListening){
            //stop listening
            try{
                recognitionRef.current.stop();
                setIsListening(false);
                console.log("stopped listening");
            } catch(error) {
                console.error('Error stopping recognition:', error);
                setError('Failed to stop recording.');
            }
        } else {
            //start listening
            try{
                setTranscript('');
                setInterimTranscript('');
                recognitionRef.current.start();
                setIsListening(true);
                console.log("started listening");
            }catch(error){
                console.error('Error starting recognition:', error);
                setError('Failed to start recording. Please try again.');
            }
        }
    };

    return <div className="flex px-2 justify-center items-center">
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
            ):(
                <div className="flex justify-center gap-2 items-center flex-row h-18 w-45 border dark:border-neutral-500 shadow-md rounded-4xl bg-white dark:bg-black p-2">
                    <motion.button
                        onClick={toggleListening}
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