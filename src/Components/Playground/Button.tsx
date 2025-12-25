import { Button } from "@/Components/ui/Button";
import { cn } from "@/lib/utils";
import React from "react";
import BorderBeam from "../ui/BorderBeam";

const ButtonUI = ({children, className}:{children?:React.ReactElement, className?: string}) => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 shadow-2xl", className)}>
        <Button className="bg-linear-to-bl from-blue-700 via-blue-600 to-blue-700 text-neutral-50 rounded-4xl shadow-2xl h-12 w-28">Click here</Button>
        {children}
    </div>
}
export default ButtonUI;

export const BorderBeamButton = () => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10")}>
        <div className="relative">
            <BorderBeam
                duration={4}
                size={600}
                reverse
                colorFrom="#9333ea"
                colorTo="#ec4899"
                className="from-transparent via-violet-500 to-neutral-200"
                inset="inset-0"
                />
            <Button className="bg-neutral-800 text-neutral-50 relative z-10 pointer-events-auto cursor-pointer">Click here</Button>
        </div>
    </div>
}


export const SimpleButton = () => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 shadow-2xl")}>
        <Button className="bg-neutral-200 text-neutral-500 rounded-sm shadow-2xl h-8 w-20">Click here</Button>
    </div>
}