import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconArrowBadgeDownFilled, IconUser, IconCircleHalf2, IconCurrencyXrp, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { AnimatedCardProps } from "./types";
import { baseCardStyles, cardShadowClasses } from "./variants";

const defaultItems = [
  {
    icon: <IconCircleHalf2 stroke={4} className="h-6 w-6 text-green-600" />,
    title: "Ruth Company",
    subtitle: "Mr. Secretary",
  },
  {
    icon: <IconCurrencyXrp stroke={3} className="h-6 w-6 text-neutral-700 dark:text-neutral-500" />,
    title: "Steve Harrington",
    subtitle: "Hawkins Father",
  },
];

export const AnimatedCard = ({
  className,
  title = "UX friendly UI Components",
  description = "These UI Components will help making your UI look put together with minute tasteful interactions.",
  buttonLabel = "Platew",
  blurOnHover = true,
  items = defaultItems,
}: AnimatedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div
      ref={ref}
      className={cn(
        "w-90 h-124 rounded-xl flex flex-col p-4",
        baseCardStyles.container,
        cardShadowClasses.accent,
        className
      )}
    >
      <div className={baseCardStyles.title}>{title}</div>
      <div className={cn("py-4", baseCardStyles.description)}>{description}</div>

      {/* Dropdown Button */}
      <div className="flex items-center justify-center gap-2 p-4">
        <Button
          className={cn(
            "h-8 w-24 rounded-lg flex flex-row pointer-events-none",
            "bg-neutral-100 dark:bg-neutral-800",
            "border border-neutral-300 dark:border-neutral-500",
            cardShadowClasses.accent
          )}
        >
          <div className="py-2 text-neutral-700 dark:text-neutral-200">
            <IconUser stroke={2} height={15} width={15} />
          </div>
          <div className="text-neutral-600 dark:text-neutral-300 text-xs py-2 pr-1 font-semibold">
            {buttonLabel}
          </div>
          <div className="py-2 text-neutral-700 dark:text-neutral-200">
            <IconArrowBadgeDownFilled height={15} width={15} />
          </div>
        </Button>
      </div>

      {/* Hover Content Area */}
      <div
        className={cn(
          "py-4 h-72 rounded-xl border-dashed flex flex-1 flex-col p-4 relative",
          baseCardStyles.border
        )}
      >
        <motion.div
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            filter: blurOnHover && isInView ? "blur(0px)" : "blur(0px)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={cn(
              "h-62 rounded-b-2xl divide-y",
              baseCardStyles.container,
              baseCardStyles.divider,
              cardShadowClasses.accent
            )}
          >
            {items.map((item, index) => (
              <div key={index} className="flex flex-row p-3 gap-2">
                <div
                  className={cn(
                    "h-10 w-10 shrink-0 flex justify-center items-center rounded-lg shadow-lg",
                    "bg-white dark:bg-neutral-800",
                    baseCardStyles.border
                  )}
                >
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      height={28}
                      width={38}
                      alt={item.title || "item"}
                      className="rounded-lg"
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className={baseCardStyles.title}>{item.title}</h3>
                  <p className={baseCardStyles.subtitle}>{item.subtitle}</p>
                </div>
              </div>
            ))}

            {/* Create Workspace */}
            <div className="flex flex-row px-6 py-4 gap-2">
              <div
                className={cn(
                  "h-6 w-6 rounded-full flex shrink-0 justify-center items-center shadow-lg",
                  "bg-neutral-200 dark:bg-neutral-200",
                  baseCardStyles.border
                )}
              >
                <IconPlus stroke={4} className="h-4 w-4 text-neutral-500" />
              </div>
              <div className="flex flex-col">
                <h3 className={cn(baseCardStyles.title, "p-1")}>Create Workspace</h3>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-linear-to-r from-cyan-200 via-pink-200 to-neutral-100" />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCard;