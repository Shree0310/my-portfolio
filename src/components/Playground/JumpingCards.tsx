"use client"
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

type Card = {
    title: string,
    description: string,
    skeleton: React.ReactNode,
    className: string,
    config: {
        x: number,
        y:number,
        rotate: number,
        zindex: number
    }
}


const JumpingCards = () => {

    const [ active, setActive ] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)){
                setActive(null);
            }
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    },[]);

    const isAnyCardActive = () => {
        return active?.title;
    }

    const isCurrentActive  = (card: Card) => {
        return active?.title === card.title;
    }
 
    const cards = [
        {
            title: "Working Knowledge",
            description: "Frameworks, principles, and models I've learned and developed that you will be able to immediately apply to your practice.",
            skeleton: (
                <div className='w-full h-40 bg-linear-to-r from-orange-700 to orange-700/50'></div>
            ),
            className: 'bg-orange-600',
            config: {
                x:0,
                y:-20,
                rotate:-10,
                zindex: 1
            }
        },
        {
            title: 'Practical Demostration',
            description: 'Detailed walkthroughs of designing interfaces, identifying opportunities, and improving through refinement.',
            skeleton: (
                <div className='w-full h-40 bg-linear-to-r from-stone-500 to-stone-500/50'></div>
            ),
            className:'bg-stone-200 text-stone-600',
            config: {
                x: 180,
                y: 35,
                rotate: 5,
                zindex: 1
            }
        },
        {
            title:"Collaborating with AI",
            description: 'Video lessons on practical, specific methods of working with AI to get exacting results. Tools covered include Claude Code and v0.',
            skeleton: (
                <div className='w-full h-40 bg-linear-to-r from-sky-700 to-sky-700/50'></div>
            ),
            className:'bg-sky-500',
            config: {
                x: 320,
                y:-20,
                rotate: 0,
                zindex: 1
            }
        },
        {
            title: 'Means & Methods',
            description: 'General tips and techniques to apply to your daily work to achieve excellence in interface design and assembly.',
            skeleton: (
                <div className='w-full h-40 bg-linear-to-r from-emerald-600 to-emerald-600/50'></div>
            ),
            className: 'bg-emerald-400 text-stone-600',
            config: {
                x: 440,
                y: 30,
                rotate: -5,
                zindex: 1
            }
        },
        {
            title: 'Interface Kit',
            description: 'Screencasts, highlights, and deep dives that showcase the end-to-end journey for designing and building',
            skeleton: (
                <div className='w-full h-40 bg-linear-to-r from-stone-400 to-stone-400/50'></div>
            ),
            className: 'bg-stone-700',
            config: {
                x: 600,
                y:-20,
                rotate: 10,
                zindex: 1
            }
        }
    ]
    return <div ref={ref} className="max-w-5xl mx-auto w-full h-96 relative ml-20">
        {cards.map((card,index) => (
            <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{ delay:0.2, duration: 0.3, ease: "easeInOut"}}
            >
                <motion.button
                    onClick={() => setActive(card)}
                    initial={{
                        y:400,
                        x:0,
                        scale:0,
                        filter: "blur(10px)"
                    }}
                    animate={{
                        x: isCurrentActive(card) ? 320 : (isAnyCardActive() ? card.config.x * 0.6 + 210: card.config.x),
                        y: isCurrentActive(card) ? 0 : (isAnyCardActive() ? 400 : card.config.y),
                        rotate:  isCurrentActive(card) ? 0 : (isAnyCardActive() ? card.config.rotate * 0.2 : card.config.rotate * 0.2),
                        scale: isCurrentActive(card) ? 1 : (isAnyCardActive() ? 0.7 : 1),
                        width: isCurrentActive(card) ? 400 : 320,
                        height: isCurrentActive(card) ? 460 :  380,
                        filter: "blur(0px)"
                    }} 
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 50
                    }}
                    whileHover={{
                        scale: isCurrentActive(card) ? 1 : (isAnyCardActive() ? 0.5 : 1.05),
                    }}
                    className={cn('w-70 font-signika absolute p-8 cursor-pointer inset-0 flex rounded-lg  flex-col items-start justify-between overflow-hidden', card.className )}>
                    {card.skeleton}
                    <motion.div layoutId={card.title + "title"} className='text-2xl'>{card.title}</motion.div>
                    <AnimatePresence>
                    {isAnyCardActive() && isCurrentActive(card) &&
                        <motion.p 
                            layoutId={card.title + "description"}
                            className={cn('text-lg text-left', active?.className)}>
                            {active?.description}
                        </motion.p>}
                    </AnimatePresence>
                </motion.button>
            </motion.div>
        ))}
    </div>
}

export default JumpingCards;