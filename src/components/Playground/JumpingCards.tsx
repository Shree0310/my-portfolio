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
    title: "Deck of Cards",
    description:
      "Frameworks, principles, and models packaged like a deck: shuffle, pick, and apply instantly.",
    image: "/Images/interiors1.jpg",
    bgColor: "bg-orange-600",
    textColor: "text-white",
    gradientColor: "from-orange-600 via-orange-600/50",
    config: { x: 0, y: -20, rotate: -10 }
  },
  {
    id: "practical-demo",
    title: "Card Craft",
    description:
      "Walkthroughs for designing interfaces, spotting opportunities, and refining into polished outcomes.",
    image: "/Images/interiors2.jpg",
    bgColor: "bg-stone-200",
    textColor: "text-stone-600",
    gradientColor: "from-stone-200 via-stone-200/50",
    config: { x: 180, y: 35, rotate: 5 }
  },
  {
    id: "ai-collab",
    title: "AI Shuffler",
    description:
      "Practical methods for teaming up with AI—prompt patterns, iteration loops, and real outputs.",
    image: "/Images/interiors3.jpg",
    bgColor: "bg-sky-500",
    textColor: "text-white",
    gradientColor: "from-sky-500 via-sky-500/50",
    config: { x: 320, y: -20, rotate: 0 }
  },
  {
    id: "means-methods",
    title: "Suit Strategy",
    description:
      "Daily techniques for turning small iterations into consistent excellence in UI design.",
    image: "/Images/interiors4.jpg",
    bgColor: "bg-emerald-400",
    textColor: "text-stone-600",
    gradientColor: "from-emerald-400 via-emerald-400/50",
    config: { x: 440, y: 30, rotate: -5 }
  },
  {
    id: "interface-kit",
    title: "Playbook",
    description:
      "Screencasts, highlights, and deep dives that show end-to-end journeys from idea to shipped UI.",
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
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const activeCard = cards.find((c) => c.id === activeId);
  const isAnyActive = activeId !== null;

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Treat "mobile-ish" widths as mobile for fallback styling.
    // (We still clamp/scale to actual container size below.)
    const mq = window.matchMedia("(max-width: 767px)");
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

  const fallbackScale = isMobile ? 0.62 : 1;
  const widthScale =
    containerSize.width > 0
      ? (containerSize.width * 0.92) / expandedWidth
      : fallbackScale;
  const heightScale =
    containerSize.height > 0 ? (containerSize.height * 0.9) / expandedHeight : 1;
  const cardScale = Math.max(0.5, Math.min(1, widthScale, heightScale));

  const cardWidthEffective = Math.round(cardWidth * cardScale);
  const cardHeightEffective = Math.round(cardHeight * cardScale);
  const expandedWidthEffective = Math.round(expandedWidth * cardScale);
  const expandedHeightEffective = Math.round(expandedHeight * cardScale);

  const xNoActiveMultiplier = isMobile ? 0.32 : 1;
  const xAnyActiveMultiplier = isMobile ? 0.22 : 0.6;
  const xAnyActiveOffset = isMobile ? 45 : 210;
  const xActiveOffset = isMobile ? 120 : 320;

  const yNoActiveMultiplier = isMobile ? 0.9 : 1;
  const yAnyActive = isMobile ? 210 : 360;
  const yActive = isMobile ? 0 : 10;

  const rotateMultiplier = isMobile ? 0.12 : 0.2;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    const el = ref.current;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const cr = entry.contentRect;
      setContainerSize({
        width: cr.width,
        height: cr.height,
      });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clamp = (value: number, min: number, max: number) => {
    return Math.min(max, Math.max(min, value));
  };

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
        "max-w-5xl mx-auto w-full relative mt-8 sm:mt-16 px-2 sm:px-4",
        "min-h-[680px] sm:min-h-[720px]",
        "overflow-hidden",
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
              y: isMobile ? 240 : 400,
              x: 0,
              scale: 0,
              filter: "blur(10px)"
            }}
            animate={{
              x: (() => {
                const widthToUse = isCurrentActive(card)
                  ? expandedWidthEffective
                  : cardWidthEffective;
                const containerW = containerSize.width;
                const maxX = containerW > 0 ? containerW - widthToUse : 0;

                const rawX = isCurrentActive(card)
                  ? containerW > 0
                    ? (containerW - expandedWidthEffective) / 2
                    : xActiveOffset
                  : isAnyActive
                    ? card.config.x * xAnyActiveMultiplier + xAnyActiveOffset
                    : card.config.x * xNoActiveMultiplier;

                if (!containerW) return 0;
                return clamp(rawX, 0, Math.max(0, maxX));
              })(),
              y: (() => {
                const heightToUse = isCurrentActive(card)
                  ? expandedHeightEffective
                  : cardHeightEffective;
                const containerH = containerSize.height;
                const maxY = containerH > 0 ? containerH - heightToUse : 0;

                const rawY = isCurrentActive(card)
                  ? yActive
                  : isAnyActive
                    ? yAnyActive
                    : card.config.y * yNoActiveMultiplier;

                if (!containerH) return 0;
                return clamp(rawY, 0, Math.max(0, maxY));
              })(),
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
              'font-signika absolute cursor-pointer top-0 left-0 flex rounded-xl flex-col items-start justify-between overflow-hidden',
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