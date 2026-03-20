import { cn } from "@/lib/utils"
import { GradientButtonProps } from "./types"
import { Button } from "@/components/ui/Button"
import { radiusClasses, sizeClasses } from "./variants"

export const GradientButton = ({
    children = "Click here",
    className,
    size = "md",
    radius = "lg",
    disabled = false,
    gradientFrom = "from-blue-700",
    gradientVia = "via-blue-600",
    gradientTo = "to-blue-700",
    hoverGradientFrom = "hover:from-blue-800",
    hoverGradientVia = "hover:via-blue-700",
    hoverGradientTo = "hover:to-blue-800",
    onClick,

}: GradientButtonProps) => {
    return (
        <Button className={cn("bg-linear-to-bl text-neutral-50 rounded-4xl shadow-2xl h-12 w-28 cursor-pointer",
                                gradientFrom,
                                gradientVia,
                                gradientTo,
                                hoverGradientFrom,
                                hoverGradientTo,
                                hoverGradientVia,
                                sizeClasses[size],
                                radiusClasses[radius],
                                disabled && "opacity-60 pointer-events-none",
                                className
        )}>
            {children}
        </Button>
    )
}

export default GradientButton