import { cn } from "@/lib/utils";
import type { SecondaryBeamCardProps } from "./types";
import { baseCardStyles, cardShadowClasses } from "./variants";
import { PulsatingButton } from "../Buttons/PulsatingButton";
import SVGLines from "../SVGs/SVGLines";

export const SecondaryBeamCard = ({
  className,
  title = "Invitations",
  description = "Fuel your application's growth by making it simple for your customers to invite their team.",
  buttonLabel = "Invite this person",
}: SecondaryBeamCardProps) => {
  return (
    <div
      className={cn(
        "relative h-60 w-86 rounded-lg mx-4 mt-2 pr-6 top-0 inset-x-0 overflow-hidden",
        baseCardStyles.container,
        cardShadowClasses.accent,
        className
      )}
    >
      <SVGLines />
      <PulsatingButton className="absolute top-[65px] left-1/2 -translate-x-1/2 flex justify-center">
        {buttonLabel}
      </PulsatingButton>
      <div className="absolute bottom-2 left-0 right-0 flex flex-col px-6 py-1 z-10">
        <div className="text-xs text-neutral-700 dark:text-neutral-300 py-1">
          {title}
        </div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SecondaryBeamCard;