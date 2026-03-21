import { cn } from "@/lib/utils";
import {
  IconUsers,
  IconEyeDotted,
  IconFileDescription,
  IconBriefcase2,
  IconMessageCircle,
} from "@tabler/icons-react";
import type { MenuCardProps } from "./types";
import { baseCardStyles, cardShadowClasses } from "./variants";

const defaultItems = [
  {
    icon: <IconUsers stroke={2} className="h-4 w-4" />,
    title: "About",
    description: "Everything you want to know about our product",
  },
  {
    icon: <IconEyeDotted stroke={2} className="h-4 w-4" />,
    title: "Sponsorships",
    description: "Apply if you want to sponsor us.",
  },
  {
    icon: <IconFileDescription stroke={2} className="h-4 w-4" />,
    title: "Blogs",
    description: "All the news & Updates",
  },
  {
    icon: <IconBriefcase2 stroke={2} className="h-4 w-4" />,
    title: "Careers",
    description: "Your next opportunity starts here",
  },
  {
    icon: <IconMessageCircle stroke={2} className="h-4 w-4" />,
    title: "Contact",
    description: "Connect with sales or support",
  },
];

export const MenuCard = ({
  className,
  items = defaultItems,
}: MenuCardProps) => {
  return (
    <div
      className={cn(
        "relative ml-6 h-98 w-77 rounded-lg flex justify-center items-center p-4 mt-2",
        baseCardStyles.container,
        cardShadowClasses.accent,
      )}
    >
      <div
        className={cn(
          "absolute h-100 w-80 rounded-lg flex flex-col gap-2 p-4",
          baseCardStyles.container,
          cardShadowClasses.accent,
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={item.onClick}
            className={cn(
              "flex flex-col gap-1 p-3 rounded-lg cursor-pointer",
              baseCardStyles.hover
            )}
          >
            <div className="flex flex-row gap-2">
              <span className="text-neutral-700 dark:text-white">
                {item.icon}
              </span>
              <p className="text-sm text-neutral-700 dark:text-white">
                {item.title}
              </p>
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;