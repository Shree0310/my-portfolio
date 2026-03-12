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
                    <p>Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity. Atomic Habits teaches that the foundation of lasting change is not goal-setting — it is identity-shifting.</p>
                    <p>Clear introduces the Four Laws of Behavior Change: make it obvious, make it attractive, make it easy, and make it satisfying. These laws work in reverse to break bad habits. The system is deceptively simple, yet most people never apply it because they are too focused on the outcome rather than the process.</p>
                    <p>The most powerful insight in the book is that a 1% improvement each day results in being 37 times better by the end of a year. Conversely, 1% worse each day brings you nearly to zero. Your habits are the compound interest of self-improvement — invisible in the short term, transformative over a lifetime.</p>
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
                    <p>Santiago's journey from the hills of Andalusia to the pyramids of Egypt is not simply a physical one — it is a journey inward. Coelho weaves a story where the universe itself conspires to help those who pursue their Personal Legend, their true purpose in life. The world speaks in omens, and learning to read them is the first act of courage.</p>
                    <p>At its heart, The Alchemist is about the fear of failure and the seduction of comfort. Santiago nearly abandons his quest multiple times — not because the path is impossible, but because it is uncertain. Coelho reminds us that the treasure we seek is rarely where we expect it, and the journey itself is the transformation.</p>
                    <p>The Soul of the World connects all living things. When you want something deeply and pursue it with full commitment, the entire universe realigns around that desire. This is not magical thinking — it is the philosophy of attention, intention, and action, told through the language of fable.</p>
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
                    <p>Roughly 70,000 years ago, a mutation in the human brain triggered the Cognitive Revolution — the ability to believe in things that exist only in imagination. Money, nations, religions, laws: none of these exist in the physical world. They are shared fictions, and it is precisely our ability to believe in them collectively that allowed Homo sapiens to dominate the planet.</p>
                    <p>Harari argues that the Agricultural Revolution, often celebrated as progress, was in many ways a trap. Early farmers worked harder, ate worse, and lived shorter lives than their forager ancestors. Wheat did not make humans successful — humans made wheat successful. We domesticated the grain, but the grain also domesticated us, binding us to soil and season for ten thousand years.</p>
                    <p>As we approach the age of biotechnology and artificial intelligence, Harari forces us to ask what we are becoming. Having conquered famine, plague, and war, humanity now sets its sights on immortality and divinity. The most dangerous question in Sapiens is the one it leaves you with: what do we actually want?</p>
                </div>
            )
        }
    },
    {
        title: "Deep Work",
        src: "https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1",
        description: "Cal Newport argues that the ability to focus without distraction is the superpower of the 21st century knowledge worker.",
        content: () => {
            return (
                <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
                    <p>Deep work is the ability to focus without distraction on a cognitively demanding task. It is the kind of work that creates new value, improves your skills, and is hard to replicate. Newport contrasts this with shallow work — logistical tasks that can be performed while distracted, that add little value and are easy to automate.</p>
                    <p>The modern knowledge economy increasingly rewards those who can master hard things quickly and produce at an elite level. Both of these abilities depend on deep work. Yet our always-on, open-office, notification-saturated culture is systematically destroying the capacity for it. The ability to go deep is becoming rare precisely as it becomes more valuable.</p>
                    <p>Newport offers concrete philosophies for integrating deep work into your life — from the monastic approach of eliminating all shallow obligations, to the rhythmic approach of scheduling deep work blocks daily. The throughline is the same: treat your attention as a finite, precious resource, and guard it with the same seriousness you would give to any professional skill worth mastering.</p>
                </div>
            )
        }
    },
]
    const [expanded, setExpanded] = useState(false);
    const [currentCard, setCurrentCard] = useState<Card | null>(null);

    const ref =  useOutsideClick(() => setCurrentCard(null));
    
    return (
        <div className="flex flex-col gap-2 w-full relative">
            {currentCard && <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></div>}
            {currentCard && (
                <motion.div ref={ref} 
                            layoutId={`card-${currentCard.title}`}
                            className="fixed inset-0 z-20 h-[600px] m-auto w-80 bg-white dark:bg-neutral-600 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-400 p-4">
                    <img src={currentCard.src} className="w-full aspect-square rounded-md"/>
                    <p className="text-sm dark:text-neutral-400 text-neutral-600 p-4">{currentCard.title}</p>
                    <p className="text-sm dark:text-neutral-400 text-neutral-600 p-4 flex items-center mt-6">{currentCard.description}</p>
                </motion.div>
            )}
            {cards && <div className="flex flex-col mx-auto gap-10 ">
                {cards.map((card,idx) => (
                    <motion.button key={card.title}
                            layoutId={`card-${card.title}`} 
                            className="flex justify-between gap-4 p-4 rounded-lg shadow-2xl"
                            onClick={() => setCurrentCard(card)}>
                        <div className="flex flex-col p-2">
                            <img src={card.src} className="h-18 aspect-square rounded-md"/>
                            <p className="text-sm dark:text-neutral-400 text-neutral-600 p-4">{card.title}</p>
                        </div>
                        <div>
                            <p className="text-sm dark:text-neutral-400 text-neutral-600 p-4 flex items-center mt-6">{card.description}</p>
                        </div>
                    </motion.button>
                ))}
            </div>}
        </div>
    )
}
export default ExpandingCards;