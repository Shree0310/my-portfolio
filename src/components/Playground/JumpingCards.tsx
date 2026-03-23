"use client"
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

// ============================================
// TYPES
// ============================================

export interface CardConfig {
  x: number;
  y: number;
  rotate: number;
}

export interface JumpingCardItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  bgColor?: string;
  textColor?: string;
  gradientColor?: string;
  config: CardConfig;
}

export interface JumpingCardsProps {
  cards?: JumpingCardItem[];
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
  expandedWidth?: number;
  expandedHeight?: number;
  imageHeight?: string;
  gradientHeight?: string;
  onCardClick?: (card: JumpingCardItem) => void;
}

// ============================================
// DEFAULT CARDS
// ============================================

const defaultCards: JumpingCardItem[] = [
  {
    id: "working-knowledge",
    title: "Working Knowledge",
    description: "Frameworks, principles, and models I've learned and developed that you will be able to immediately apply to your practice.",
    image: "/Images/interiors1.jpg",
    bgColor: "bg-orange-600",
    textColor: "text-white",
    gradientColor: "from-orange-600 via-orange-600/50",
    config: { x: 0, y: -20, rotate: -10 }
  },
  {
    id: "practical-demo",
    title: "Practical Demonstration",
    description: "Detailed walkthroughs of designing interfaces, identifying opportunities, and improving through refinement.",
    image: "/Images/interiors2.jpg",
    bgColor: "bg-stone-200",
    textColor: "text-stone-600",
    gradientColor: "from-stone-200 via-stone-200/50",
    config: { x: 180, y: 35, rotate: 5 }
  },
  {
    id: "ai-collab",
    title: "Collaborating with AI",
    description: "Video lessons on practical, specific methods of working with AI to get exacting results. Tools covered include Claude Code and v0.",
    image: "/Images/interiors3.jpg",
    bgColor: "bg-sky-500",
    textColor: "text-white",
    gradientColor: "from-sky-500 via-sky-500/50",
    config: { x: 320, y: -20, rotate: 0 }
  },
  {
    id: "means-methods",
    title: "Means & Methods",
    description: "General tips and techniques to apply to your daily work to achieve excellence in interface design and assembly.",
    image: "/Images/interiors4.jpg",
    bgColor: "bg-emerald-400",
    textColor: "text-stone-600",
    gradientColor: "from-emerald-400 via-emerald-400/50",
    config: { x: 440, y: 30, rotate: -5 }
  },
  {
    id: "interface-kit",
    title: "Interface Kit",
    description: "Screencasts, highlights, and deep dives that showcase the end-to-end journey for designing and building.",
    image: "/Images/interiors5.jpg",
    bgColor: "bg-stone-700",
    textColor: "text-white",
    gradientColor: "from-stone-700 via-stone-700/50",
    config: { x: 600, y: -20, rotate: 10 }
  }
];

// ============================================
// COMPONENT
// ============================================

const JumpingCards = ({
  cards = defaultCards,
  className,
  cardWidth = 280,
  cardHeight = 340,
  expandedWidth = 350,
  expandedHeight = 400,
  imageHeight = "h-40",
  gradientHeight = "h-30",
  onCardClick,
}: JumpingCardsProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeCard = cards.find((c) => c.id === activeId);
  const isAnyActive = activeId !== null;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();

    // Safari fallback for older browsers.
    // eslint-disable-next-line deprecation/deprecation
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      // eslint-disable-next-line deprecation/deprecation
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  const cardWidthEffective = isMobile ? Math.round(cardWidth * 0.78) : cardWidth;
  const cardHeightEffective = isMobile ? Math.round(cardHeight * 0.78) : cardHeight;
  const expandedWidthEffective = isMobile ? Math.round(expandedWidth * 0.78) : expandedWidth;
  const expandedHeightEffective = isMobile ? Math.round(expandedHeight * 0.78) : expandedHeight;

  const xNoActiveMultiplier = isMobile ? 0.55 : 1;
  const xAnyActiveMultiplier = isMobile ? 0.35 : 0.6;
  const xAnyActiveOffset = isMobile ? 110 : 210;
  const xActiveOffset = isMobile ? 240 : 320;

  const yNoActiveMultiplier = isMobile ? 0.9 : 1;
  const yAnyActive = isMobile ? 260 : 360;
  const yActive = isMobile ? 0 : 10;

  const rotateMultiplier = isMobile ? 0.15 : 0.2;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveId(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleCardClick = (card: JumpingCardItem) => {
    setActiveId(card.id);
    onCardClick?.(card);
  };

  const isCurrentActive = (card: JumpingCardItem) => card.id === activeId;

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-5xl mx-auto w-full relative ml-0 sm:ml-12 mt-8 sm:mt-16 min-h-[420px] sm:min-h-[460px]",
        className
      )}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
        >
          <motion.button
            onClick={() => handleCardClick(card)}
            initial={{
              y: isMobile ? 280 : 400,
              x: 0,
              scale: 0,
              filter: "blur(10px)"
            }}
            animate={{
              x: isCurrentActive(card)
                ? xActiveOffset
                : isAnyActive
                  ? card.config.x * xAnyActiveMultiplier + xAnyActiveOffset
                  : card.config.x * xNoActiveMultiplier,
              y: isCurrentActive(card)
                ? yActive
                : isAnyActive
                  ? yAnyActive
                  : card.config.y * yNoActiveMultiplier,
              rotate: isCurrentActive(card) ? 0 : card.config.rotate * rotateMultiplier,
              scale: isCurrentActive(card) ? 1 : (isAnyActive ? 0.7 : 1),
              width: isCurrentActive(card) ? expandedWidthEffective : cardWidthEffective,
              height: isCurrentActive(card) ? expandedHeightEffective : cardHeightEffective,
              filter: "blur(0px)"
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 50
            }}
            whileHover={{
              scale: isCurrentActive(card) ? 1 : (isAnyActive ? 0.5 : 1.05),
            }}
            className={cn(
              'font-signika absolute cursor-pointer inset-0 flex rounded-xl flex-col items-start justify-between overflow-hidden',
              card.bgColor,
              card.textColor
            )}
          >
            {/* Image with gradient */}
            <div className={cn("relative w-full shrink-0", imageHeight)}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className={cn(
                "absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent",
                gradientHeight,
                card.gradientColor
              )} />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 text-left flex-1 flex flex-col justify-between">
              <motion.div
                layoutId={card.id + "-title"}
                className="text-2xl sm:text-3xl p-2 text-left font-semibold"
              >
                {card.title}
              </motion.div>
              <AnimatePresence>
                {isAnyActive && isCurrentActive(card) && activeCard && (
                  <motion.p
                    layoutId={card.id + "-description"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-xs sm:text-sm text-left"
                  >
                    {activeCard.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default JumpingCards;