import { Button } from "@/Components/ui/Button";
import { cn } from "@/lib/utils";
import React from "react";
import BorderBeam from "../ui/BorderBeam";
import { easeInOut, motion } from 'framer-motion'

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
                size={800}
                reverse
                colorFrom="#8b5cf6"
                colorTo="#8b5cf6"
                className="from-transparent via-violet-500 to-transparent"
                inset="inset-0"
                />
            <Button className="dark:bg-neutral-800 bg-neutral-400 text-neutral-50 relative z-10 pointer-events-auto cursor-pointer">Click here</Button>
        </div>
    </div>
}


export const SimpleButton = () => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 ")}>
        <Button className="bg-neutral-200 text-neutral-700 rounded-sm shadow-2xl h-10 w-24">Click here</Button>
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
        <Button className="font-semibold text-sky-500 hover:text-sky-300 border-none bg-transparent hover:bg-transparent">Primary</Button>
        <Button className="font-semibold text-orange-400 hover:text-orange-300 border-none bg-transparent hover:bg-transparent">Secondary</Button>
        <Button className="font-semibold text-green-600 hover:text-green-400 border-none  bg-transparent hover:bg-transparent">Success</Button>
        <Button className="font-semibold text-red-500 hover:text-red-300 border-none  bg-transparent hover:bg-transparent">Danger</Button>
    </div>
}

export const IlluminoButton = () => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 ")}>
        <Button className="group relative bg-gray-600 hover:bg-gray-800 text-neutral-100 rounded-lg shadow-2xl h-10 w-24 px-12 py-4">
            Click here
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm"></span>
        </Button>
    </div>
}

export const AnimatedButton = () => {
    return <div className={cn(" flex items-center justify-center h-64 w-64 pb-10 ")}>
        <motion.button
            initial ={{
                rotate:0
            }}
            animate={{
                rotate:[0, 10, 0]
            }}
            transition={{
                duration:2,
                ease: easeInOut
            }}
            className="relative group bg-gray-800 hover:bg-gray-900 text-neutral-100 rounded-lg shadow-2xl h-10 w-32 px-12 py-4 flex items-center justify-center
            ">
             Animate
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-indigo-600 to-transparent h-px w-3/4 mx-auto"></span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-l from-transparent via-indigo-500 to-transparent h-1 w-full mx-auto blur-md"></span>
        </motion.button>
    </div>
}