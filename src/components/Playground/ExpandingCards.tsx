import { AnimatePresence, motion } from "framer-motion";
import { IconChevronRight, IconX } from "@tabler/icons-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [callback]);

    return ref;
};

type Card = {
    title: string;
    src: string;
    description: string;
    content: () => ReactNode;
};

const cards: Card[] = [
    {
        title: "Atomic Habits",
        src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
        description:
            "James Clear breaks down the science of tiny habits and how 1% improvements compound into remarkable results over time.",
        content: () => (
            <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                Every action you take is a vote for the type of person you wish to become. No single
                instance will transform your beliefs, but as the votes build up, so does the evidence
                of your new identity. Atomic Habits teaches that the foundation of lasting change is
                not goal-setting — it is identity-shifting.
            </p>
        ),
    },
    {
        title: "The Alchemist",
        src: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&q=80",
        description:
            "Paulo Coelho's timeless fable about a shepherd boy's journey across the desert in pursuit of his personal legend.",
        content: () => (
            <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                Santiago&apos;s journey from the hills of Andalusia to the pyramids of Egypt is not
                simply a physical one — it is a journey inward. Coelho weaves a story where the
                universe itself conspires to help those who pursue their Personal Legend, their true
                purpose in life.
            </p>
        ),
    },
    {
        title: "Sapiens",
        src: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=600&q=80",
        description:
            "Yuval Noah Harari traces the full history of humankind — from stone-age foragers to the godlike rulers of the modern world.",
        content: () => (
            <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                Roughly 70,000 years ago, a mutation in the human brain triggered the Cognitive
                Revolution — the ability to believe in things that exist only in imagination. Money,
                nations, religions, laws: none of these exist in the physical world. They are shared
                fictions, and it is precisely our ability to believe in them collectively that allowed
                Homo sapiens to dominate the planet.
            </p>
        ),
    },
];

const ExpandingCards = () => {
    const [currentCard, setCurrentCard] = useState<Card | null>(null);

    const close = useCallback(() => setCurrentCard(null), []);
    const ref = useOutsideClick(close);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        if (currentCard) {
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [currentCard, close]);

    return (
        <div className="relative w-full max-w-2xl">
            <AnimatePresence>
                {currentCard && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close expanded card"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-10 cursor-default border-0 bg-neutral-950/55 p-0 backdrop-blur-[6px] dark:bg-black/65"
                            onClick={close}
                        />
                        <motion.div
                            ref={ref}
                            layoutId={`card-${currentCard.title}`}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={`card-heading-${currentCard.title}`}
                            initial={{ opacity: 0, scale: 0.96, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 8 }}
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            className="fixed top-1/2 left-1/2 z-20 w-[min(100vw-1.5rem,26rem)] max-h-[min(88vh,640px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.25)] dark:border-neutral-600/40 dark:bg-neutral-900 dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)]"
                        >
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    close();
                                }}
                                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/80 bg-white/90 text-neutral-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800/90 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white"
                                aria-label="Close"
                            >
                                <IconX className="h-4 w-4" stroke={1.75} />
                            </button>

                            <div className="max-h-[min(88vh,640px)] overflow-y-auto overscroll-contain">
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent dark:from-black/60" />
                                    <motion.img
                                        src={currentCard.src}
                                        alt=""
                                        layoutId={`card-image-${currentCard.title}`}
                                        className="h-full w-full object-cover"
                                    />
                                    <motion.h2
                                        id={`card-heading-${currentCard.title}`}
                                        layoutId={`card-title-${currentCard.title}`}
                                        className="absolute bottom-4 left-4 right-14 text-2xl font-semibold tracking-tight text-white drop-shadow-md"
                                    >
                                        {currentCard.title}
                                    </motion.h2>
                                </div>

                                <div className="space-y-4 px-5 pb-6 pt-5">
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                                        {currentCard.description}
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        transition={{ delay: 0.08, duration: 0.35 }}
                                    >
                                        {currentCard.content()}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <ul className="mx-auto flex list-none flex-col gap-4 p-0">
                {cards.map((card) => {
                    const isOpen = currentCard?.title === card.title;
                    return (
                        <li key={card.title} className="p-0">
                            <motion.button
                                type="button"
                                layoutId={`card-${card.title}`}
                                onClick={() => setCurrentCard(card)}
                                style={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? "none" : "auto" }}
                                className="group relative flex w-full cursor-pointer gap-5 overflow-hidden rounded-2xl border border-neutral-200/80 bg-linear-to-br from-white to-neutral-50 p-4 text-left shadow-sm ring-0 transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-amber-200/80 hover:shadow-lg hover:shadow-amber-900/5 dark:border-neutral-700/80 dark:from-neutral-900 dark:to-neutral-950 dark:hover:border-amber-700/40 dark:hover:shadow-amber-950/20"
                            >
                                <motion.div
                                    layoutId={`card-image-${card.title}`}
                                    className="relative h-[5.5rem] w-[4.25rem] shrink-0 overflow-hidden rounded-xl bg-neutral-200 shadow-inner ring-1 ring-black/[0.06] dark:bg-neutral-800 dark:ring-white/10"
                                >
                                    <img
                                        src={card.src}
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </motion.div>

                                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 pr-2">
                                    <motion.span
                                        layoutId={`card-title-${card.title}`}
                                        className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
                                    >
                                        {card.title}
                                    </motion.span>
                                    <p className="line-clamp-2 text-sm leading-snug text-neutral-600 dark:text-neutral-400">
                                        {card.description}
                                    </p>
                                    <span className="mt-1 inline-flex items-center gap-0.5 text-xs font-medium text-amber-700 dark:text-amber-400/90">
                                        Open
                                        <IconChevronRight
                                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                            stroke={2}
                                        />
                                    </span>
                                </div>
                            </motion.button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ExpandingCards;
