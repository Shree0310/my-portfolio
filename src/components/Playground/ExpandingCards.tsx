import  peony  from "../../../public/Images/peony.jpg";
import  leaves  from "../../../public/Images/leaves.jpg";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const useOutsideClick = (callback: () => void) => {
        const ref = useRef<HTMLDivElement>(null);

        useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)){
                callback();
            }
        }
            document.addEventListener("click", handleClick);

            return () => document.removeEventListener("click", handleClick);
        },[callback]);

        return ref;
    }

const ExpandingCards = () => {

    type Card = {
        title: string,
        src:string,
        description:string,
        content: () => React.ReactNode
    }

    const cards: Card[] = [
    {
        title: "Atomic Habits",
        src: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        description: "James Clear breaks down the science of tiny habits and how 1% improvements compound into remarkable results over time.",
        content: () => {
            return (
                <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
                    <div>Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity. Atomic Habits teaches that the foundation of lasting change is not goal-setting — it is identity-shifting.</div>
                </div>
            )
        }
    },
    {
        title: "The Alchemist",
        src: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6",
        description: "Paulo Coelho's timeless fable about a shepherd boy's journey across the desert in pursuit of his personal legend.",
        content: () => {
            return (
                <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
                    <div>Santiago's journey from the hills of Andalusia to the pyramids of Egypt is not simply a physical one — it is a journey inward. Coelho weaves a story where the universe itself conspires to help those who pursue their Personal Legend, their true purpose in life. The world speaks in omens, and learning to read them is the first act of courage.</div>
               </div>
            )
        }
    },
    {
        title: "Sapiens",
        src: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc",
        description: "Yuval Noah Harari traces the full history of humankind — from stone-age foragers to the godlike rulers of the modern world.",
        content: () => {
            return (
                <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
                    <div>Roughly 70,000 years ago, a mutation in the human brain triggered the Cognitive Revolution — the ability to believe in things that exist only in imagination. Money, nations, religions, laws: none of these exist in the physical world. They are shared fictions, and it is precisely our ability to believe in them collectively that allowed Homo sapiens to dominate the planet.</div>
                </div>
            )
        }
    },
]
    const [currentCard, setCurrentCard] = useState<Card | null>(null);

    const ref =  useOutsideClick(() => setCurrentCard(null));
    
    return (
        <div className="flex flex-col gap-2 w-full relative">
            {currentCard && <div className="fixed z-10 h-full w-full inset-0 bg-black/50 dark:bg-neutral-700/60 backdrop-blur-sm"></div>}
            {currentCard && (
                <motion.div ref={ref} 
                            layoutId={`card-${currentCard.title}`}
                            className="fixed inset-0 z-20 h-[600px] m-auto w-80 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-400 p-4">
                    <motion.img src={currentCard.src} layoutId={`card-image-${currentCard.title}`} className="w-full aspect-square rounded-md"/>
                    <motion.h1 layoutId={`card-title-${currentCard.title}`} className="text-lg font-bold dark:text-neutral-200 text-neutral-600 px-4 pt-6">{currentCard.title}</motion.h1>
                    <motion.div
                        initial={{
                            filter: 'blur(10px)',                        }} 
                        animate={{
                            filter:'blur(0px)',
                        }}
                        layoutId={`card-des-${currentCard.title}`} 
                        className="text-sm dark:text-neutral-400 text-neutral-600 px-4 flex items-center mt-6 overflow-hidden">
                        {currentCard.content()}
                    </motion.div>
                </motion.div>
            )}
            {cards && <div className="flex flex-col mx-auto gap-10 ">
                {cards.map((card,idx) => (
                    <motion.div key={card.title}
                            layoutId={`card-${card.title}`} 
                            className="flex justify-between gap-4 p-4 rounded-lg shadow-2xl bg-neutral-100 dark:bg-neutral-800"
                            onClick={() => setCurrentCard(card)}>
                        <div className="flex flex-col p-2 mt-6">
                            <motion.img src={card.src} layoutId={`card-image-${card.title}`} className="h-24 aspect-square rounded-md"/>
                            <motion.h1 layoutId={`card-title-${card.title}`} className="text-sm font-bold dark:text-neutral-200 text-neutral-600 p-4">{card.title}</motion.h1>
                        </div>
                        <div className="flex flex-row items-center">
                            <motion.div layoutId={`card-des-${card.title}`} className="text-sm dark:text-neutral-300 text-neutral-600 px-4 flex items-center ">{card.description}</motion.div>
                            <button className="py-1 px-2 bg-neutral-200 dark:bg-neutral-600 rounded-sm shadow-md text-neutral-700 dark:text-neutral-200">play</button>
                        </div>
                    </motion.div>
                ))}
            </div>}
        </div>
    )
}
export default ExpandingCards;