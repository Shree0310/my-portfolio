import { cn } from "@/lib/utils"

export const BentoGrid = ({children, className}: {children?: React.ReactElement, className?: string}) => {
    return <div className={cn("grid grid-cols-4 gap-10")}>
        <div className="h-60 w-full dark:bg-neutral-800 bg-neutral-300 shadow-xl col-span-1 border border-neutral-400/30 rounded-2xl"></div>
        <div className="h-60 w-full dark:bg-neutral-800 bg-neutral-300 shadow-xl col-span-2 border border-neutral-400/30 rounded-2xl"></div>
        <div className="h-60 w-full dark:bg-neutral-800 bg-neutral-300 shadow-xl col-span-1 border border-neutral-400/30 rounded-2xl"></div>
        <div className="h-60 w-full dark:bg-neutral-800 bg-neutral-300 shadow-xl col-span-2 border border-neutral-400/30 rounded-2xl"></div>
        <div className="h-60 w-full dark:bg-neutral-800 bg-neutral-300 shadow-xl col-span-2 border border-neutral-400/30 rounded-2xl"></div>
        <div className="h-60 w-full dark:bg-neutral-800 bg-neutral-300 shadow-xl col-span-1 border border-neutral-400/30 rounded-2xl"></div>
        <div className="h-60 w-full dark:bg-neutral-800 bg-neutral-300 shadow-xl col-span-3 border border-neutral-400/30 rounded-2xl"></div>
    </div>
}