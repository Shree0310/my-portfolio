import { cn } from "@/lib/utils";
import { IconArrowBadgeDownFilled, IconFileDescription } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { Button } from "../ui/Button";
import { IconCircleHalf2 } from '@tabler/icons-react';
import { IconCurrencyXrp } from '@tabler/icons-react';
import  Avatar1  from "../../../public/Images/Avatar1.jpg";
import Image from "next/image";
import { IconPlus } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";
import { IconUsers } from '@tabler/icons-react';
import { IconEyeDotted } from '@tabler/icons-react';
import { IconBriefcase2 } from '@tabler/icons-react';
import { IconMessageCircle } from '@tabler/icons-react';
import { AnimatedButton, GlowingButton } from "./Button";


export const IDCard = () => {
return <div className="flex flex-col">
    <div className="p-4 h-72 dark:bg-neutral-900 bg-neutral-100 shadow-xl rounded-lg border border-neutral-500/20 dark:border-neutral-600/60">
        <div className="m-2 h-40 my-2 flex-col  bg-neutral-200 dark:bg-neutral-600 
                        divide-neutral-500 rounded-lg dark:text-neutral-200 text-neutral-600 font-semibold text-lg flex justify-center items-center">
            Simple Card
            <p className="font-normal text-sm">Skeleton Loader</p>
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
        <div className="grid grid-cols-3 gap-2">
            <div className="my-1 ml-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl col-span-2"></div>
            <div className="my-1 mr-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl col-span-1"></div>
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
    </div>
</div>
}

export const AnimatedCard = ({className}:{className: string}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true, amount: 0.6})
    return <div className={cn("w-90 h-124 rounded-xl border border-neutral-500/20 dark:border-neutral-600/60",
                                "dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)]",
                                 "flex flex-col p-4", className
    )}>
        <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-300">UX friendly UI Components</div>
        <div className="py-4 text-sm text-neutral-600 dark:text-neutral-400">These UI Components will help making your UI look put together with minute tasteful interactions.</div>
        <div className="flex items-center justify-center gap-2 p-4">
            <Button className={cn(" h-8 w-24 border border-neutral-500/20 dark:border-neutral-500 shadow-2xl rounded-lg",
                            "flex flex-row",
                            "bg-neutral-100 dark:bg-neutral-600",
                            "pointer-events-none",
                            "dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)]",

            )}>
            <div className="py-2 text-neutral-700 dark:text-neutral-200"><IconUser stroke={2} height={15} width={15} /></div>
            <div className="dark:text-neutral-300 text-neutral-600 text-xs py-2 pr-1 font-semibold">Platew</div>
            <div className="py-2 text-neutral-700 dark:text-neutral-200"><IconArrowBadgeDownFilled height={15} width={15} /></div>
        </Button>
        </div>
        <div className={cn("py-4 h-72 rounded-xl border border-neutral-500/20 dark:border-neutral-600/60 border-dashed",
                            "dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)]",
                            "flex flex-1 flex-col p-4",
                            "relative"

        )}>
                <motion.div 
                    className="absolute inset-0 h-full w-full "
                    initial={{
                        opacity:0
                    }}
                    whileHover={{
                        opacity:1,
                        filter: isInView ? 'blur(10px)' : 'blur(0px)',

                    }}
                    transition={{
                        duration:0.3,
                    }}>
                    <div className=" h-62 border border-neutral-500/20 dark:border-neutral-600/60 rounded-b-2xl divide-y divide-neutral-300/40 dark:divide-neutral-500/20">
                        <div className="flex flex-row p-3 gap-2">
                            <div className="h-10 w-10 shrink-0 flex justify-center items-center rounded-lg shadow-lg border border-neutral-400/20 dark:border-neutral-300/30">
                            <IconCircleHalf2 stroke={4} className="h-6 w-6 text-green-600" /></div>
                            <div className="flex flex-col">
                                <h3 className="text-sm text-neutral-800 dark:text-neutral-300 font-semibold">Ruth Company</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-500 font-normal">Mr. Secreatary</p>
                            </div>
                        </div>
                        <div className="flex flex-row p-3 gap-2">
                                <div className="h-10 w-10 flex justify-center items-center rounded-lg shadow-lg border border-neutral-400/20 dark:border-neutral-300/30">
                                    <IconCurrencyXrp stroke={3} className="h-6 w-6 text-black dark:text-neutral-500" /></div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm text-neutral-800 dark:text-neutral-300 font-semibold">Steve Harrington</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-500 font-normal">Hawkins Father</p>
                                </div>
                        </div>
                        <div className="flex flex-row p-3 gap-2">
                                <div className="h-7 w-10 my-1  flex shrink-0 justify-center items-center rounded-lg shadow-lg border border-neutral-400/20 dark:border-neutral-300/30">
                                    <Image src={Avatar1} height={28} width={38} alt="Avatatr1" className="rounded-lg"/>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm text-neutral-800 dark:text-neutral-300 font-semibold">Personal Information</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-500 font-normal">Mr. Secreatary</p>
                                </div>
                        </div>
                        <div className="flex flex-row px-6 py-4 gap-2 divide-y dark:divide-neutral-200">
                            <div className="h-6 w-6 rounded-full flex shrink-0 justify-center items-center bg-neutral-200 shadow-lg border border-neutral-400/20 dark:border-neutral-300/30">
                                <IconPlus stroke={4} className="h-4 w-4 text-neutral-500" /></div>
                            <div className="flex flex-col">
                                <h3 className="text-sm text-neutral-800  dark:text-neutral-300 font-semibold p-1">Create Workspace</h3>
                            </div>
                        </div>  
                    </div>
                    <div className="flex-1 bg-linear-to-r from-cyan-200 via-pink-200 to-neutral-100"></div>             
                </motion.div>
            </div>
        </div>
}

export const DropDownCard = ({className}:{className: string}) => {
    return <div className={cn("relative ml-6 h-98 w-77 border rounded-lg border-neutral-500/20 dark:border-neutral-600/60",
                              "dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] shadow-aceternity",
                            "flex justify-center items-center p-4 mt-2")}>
        <div className={cn("absolute h-100 w-80 rounded-lg border border-neutral-500/20 dark:border-neutral-600/60",
                                "dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)]",
                                "flex flex-col gap-2 p-4", className
        )}>
            <div className="flex flex-col gap-1 p-3 hover:dark:bg-neutral-600/30 hover:bg-neutral-300/40 rounded-lg cursor-pointer">
                <div className="flex flex-row gap-2">
                    <IconUsers stroke={2} className="text-black dark:text-white h-4 w-4"/>
                    <p className="text-sm text-black dark:text-white">About</p>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Everything you want to know about our product</div>
            </div>
            <div className="flex flex-col gap-1 p-3 hover:dark:bg-neutral-600/30 hover:bg-neutral-300/40 rounded-lg cursor-pointer">
                <div className="flex flex-row gap-2">
                    <IconEyeDotted stroke={2} className="text-black dark:text-white h-4 w-4"/>
                    <p className="text-sm text-black dark:text-white">Sponsorships</p>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Apply if yo want to sponsor us.</div>
            </div>
            <div className="flex flex-col gap-1 p-3 hover:dark:bg-neutral-600/30 hover:bg-neutral-300/40 rounded-lg cursor-pointer">
                <div className="flex flex-row gap-2">
                    <IconFileDescription stroke={2} className="text-black dark:text-white h-4 w-4"/>
                    <p className="text-sm text-black dark:text-white">Blogs</p>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">All the news & Updates</div>
            </div>
            <div className="flex flex-col gap-1 p-3 hover:dark:bg-neutral-600/30 hover:bg-neutral-300/40 rounded-lg cursor-pointer">
                <div className="flex flex-row gap-2">
                    <IconBriefcase2 stroke={2} className="text-black dark:text-white h-4 w-4"/>
                    <p className="text-sm text-black dark:text-white">Careers</p>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Your next opportunity starts here</div>
            </div>
            <div className="flex flex-col gap-1 p-3 hover:dark:bg-neutral-600/30 hover:bg-neutral-300/40 rounded-lg cursor-pointer">
                <div className="flex flex-row gap-2">
                    <IconMessageCircle stroke={2} className="text-black dark:text-white h-4 w-4"/>
                    <p className="text-sm text-black dark:text-white">Contact</p>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Connect with sales or support</div>
            </div>
        </div>
    </div>
}

export const BeamCard = ({className}:{className: string}) => {
    return <div className={cn("h-60 w-86 border mx-4 my-1 rounded-lg border-neutral-500/20 dark:border-neutral-600/60",
                              "dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] shadow-aceternity",className)}>
        <GlowingButton className="pb-12"/>
    </div>
}
