import { Button } from "@/Components/ui/Button";
import { cn } from "@/lib/utils";
import React from "react";
import BorderBeam from "../ui/BorderBeam";

const ButtonUI = ({children, className}:{children?:React.ReactElement, className?: string}) => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 ", className)}>
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
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 ")}>
        <Button className="bg-neutral-200 text-neutral-500 rounded-sm shadow-2xl h-10 w-24">Click here</Button>
    </div>
}

export const SecondaryButton = () => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 ")}>
        <Button className="bg-neutral-700 text-neutral-50 rounded-sm shadow-2xl h-10 w-24">Click here</Button>
    </div>
}

export const DisabledButton = () => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 ")}>
        <Button className="bg-neutral-700/70 opacity-60 text-neutral-50/70 pointer-events-none rounded-sm shadow-2xl h-10 w-24">Click here</Button>
    </div>
}

export const LinkButton = () => {
    return <div className={cn(" flex flex-col mx-auto items-center justify-center h-64 w-64 pb-10 ")}>
        <Button className="font-semibold text-sky-500 hover:text-sky-300 border-none shadow-2xl ">Primary</Button>
        <Button className="font-semibold text-orange-400 hover:text-orange-300 border-none shadow-2xl">Secondary</Button>
        <Button className="font-semibold text-green-600 hover:text-green-400 border-none shadow-2xl">Success</Button>
        <Button className="font-semibold text-red-500 hover:text-red-300 border-none shadow-2xl">Danger</Button>
    </div>
}