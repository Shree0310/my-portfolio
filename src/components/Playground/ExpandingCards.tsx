"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ============================================
// TYPES
// ============================================

export interface ExpandingCardItem {
  id: string;
  title: string;
  src: string;
  description: string;
  content: () => React.ReactNode;
}

export interface ExpandingCardsProps {
  cards?: ExpandingCardItem[];
  className?: string;
}

// ============================================
// HOOK
// ============================================

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);

  return ref;
};

// ============================================
// DEFAULT CARDS
// ============================================

const defaultCards: ExpandingCardItem[] = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    description: "James Clear breaks down the science of tiny habits and how 1% improvements compound into remarkable results.",
    content: () => (
      <p>Every action you take is a vote for the type of person you wish to become. Atomic Habits teaches that the foundation of lasting change is not goal-setting — it is identity-shifting.</p>
    )
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    src: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=400&fit=crop",
    description: "Paulo Coelho's timeless fable about a shepherd boy's journey in pursuit of his personal legend.",
    content: () => (
      <p>Santiago's journey from Andalusia to Egypt is not simply physical — it is inward. The universe conspires to help those who pursue their Personal Legend.</p>
    )
  },
  {
    id: "sapiens",
    title: "Sapiens",
    src: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=400&fit=crop",
    description: "Yuval Noah Harari traces the full history of humankind from stone-age foragers to modern rulers.",
    content: () => (
      <p>70,000 years ago, a mutation triggered the Cognitive Revolution — the ability to believe in things that exist only in imagination. Money, nations, religions: shared fictions that let us dominate the planet.</p>
    )
  },
];

// ============================================
// COMPONENT
// ============================================

const ExpandingCards = ({
  cards = defaultCards,
  className,
}: ExpandingCardsProps) => {
  const [activeCard, setActiveCard] = useState<ExpandingCardItem | null>(null);
  const ref = useOutsideClick(() => setActiveCard(null));

  // Lock body scroll when modal open
  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeCard]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCard(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className={className}>
      {/* Backdrop */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            ref={ref}
            layoutId={`card-${activeCard.id}`}
            className="fixed inset-0 z-50 m-auto h-fit max-h-[80vh] w-[90vw] max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-neutral-800"
          >
            {/* Image */}
            <motion.div
              layoutId={`card-image-${activeCard.id}`}
              className="relative h-48 w-full"
            >
              <Image
                src={activeCard.src}
                alt={activeCard.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition hover:bg-black/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <motion.h2
                layoutId={`card-title-${activeCard.id}`}
                className="text-xl font-bold text-neutral-800 dark:text-neutral-100"
              >
                {activeCard.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
              >
                {activeCard.content()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card List */}
      <div className="flex flex-col gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            onClick={() => setActiveCard(card)}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-neutral-800"
          >
            {/* Thumbnail */}
            <motion.div
              layoutId={`card-image-${card.id}`}
              className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg"
            >
              <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <motion.h3
                layoutId={`card-title-${card.id}`}
                className="text-base font-semibold text-neutral-800 dark:text-neutral-100"
              >
                {card.title}
              </motion.h3>
              <p className="mt-1 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
                {card.description}
              </p>
            </div>

            {/* Action */}
            <button className="shrink-0 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600">
              Read
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;