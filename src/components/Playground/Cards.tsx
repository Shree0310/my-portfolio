import { cn } from "@/lib/utils";
import { IconArrowBadgeDownFilled } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { Button } from "../ui/Button";
import { IconCircleHalf2 } from '@tabler/icons-react';
import { IconCurrencyXrp } from '@tabler/icons-react';
import  Avatar1  from "../../../public/Images/Avatar1.jpg";
import Image from "next/image";
import { IconPlus } from '@tabler/icons-react';


export const IDCard = () => {
return <div className="flex flex-col">
    <div className="p-4 h-72 dark:bg-neutral-900 bg-neutral-100 shadow-xl rounded-lg border border-neutral-500/20 dark:border-neutral-600/60">
        <div className="m-2 h-40 my-2  bg-neutral-200 dark:bg-neutral-600 
                        divide-neutral-500 rounded-lg dark:text-neutral-200 text-neutral-600 font-semibold text-lg flex justify-center items-center">
            Simple Card
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

export const ContentCard = () => {
return <div className="flex flex-col">
    <div className="p-4 h-72 dark:bg-neutral-900 bg-neutral-100 shadow-xl rounded-lg border border-neutral-500/20 dark:border-neutral-600/60">
        <div className="m-2 h-40 my-2 from-neutral-300  to-neutral-200 bg-linear-to-br dark:from-neutral-800 dark:to-neutral-700 
                        divide-neutral-500 rounded-lg dark:text-neutral-200 text-neutral-600 font-semibold text-lg flex justify-center items-center">
            Simple Card
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
        <div className="grid grid-cols-3 gap-2">
            <div className="my-1 ml-2 h-3 col-span-2"></div>
            <div className="my-1 mr-2 h-3 col-span-1"></div>
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
    </div>
</div>
}

export const AnimatedCard = () => {
    return <div className={cn("w-84 h-124 rounded-xl border border-neutral-500/20 dark:border-neutral-600/60",
                                "dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)]",
                                 "flex flex-col p-4"
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
            <div className="absolute inset-0 h-full w-full divide-y divide-neutral-200/40 dark:divide-y-200">
                <div className="flex flex-row p-3 gap-2">
                     <div className="h-10 w-10 shrink-0 flex justify-center items-center rounded-lg shadow-lg border border-neutral-400/20">
                     <IconCircleHalf2 stroke={4} className="h-6 w-6 text-green-600" /></div>
                    <div className="flex flex-col">
                        <h3 className="text-sm text-neutral-800 font-semibold">Ruth Company</h3>
                        <p className="text-sm text-neutral-600 font-normal">Mr. Secreatary</p>
                    </div>
                </div>
                <div className="flex flex-row p-3 gap-2">
                        <div className="h-10 w-10 flex justify-center items-center rounded-lg shadow-lg border border-neutral-400/20">
                            <IconCurrencyXrp stroke={2} className="h-6 w-6 text-black" /></div>
                        <div className="flex flex-col">
                            <h3 className="text-sm text-neutral-800 font-semibold">Steve Harrington</h3>
                            <p className="text-sm text-neutral-600 font-normal">Hawkins Father</p>
                        </div>
                </div>
                <div className="flex flex-row p-3 gap-2">
                        <div className="h-10 w-10  flex shrink-0 justify-center items-center rounded-lg shadow-lg border border-neutral-400/20">
                            <Image src={Avatar1} height={32} width={32} alt="Avatatr1"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-sm text-neutral-800 font-semibold">Personal Information</h3>
                            <p className="text-sm text-neutral-600 font-normal">Mr. Secreatary</p>
                        </div>
                </div>
                <div className="flex flex-row p-6 gap-2">
                        <div className="h-6 w-6 rounded-full flex shrink-0 justify-center items-center bg-neutral-200 shadow-lg border border-neutral-400/20">
                            <IconPlus stroke={4} className="h-4 w-4 text-neutral-400" /></div>
                        <div className="flex flex-col">
                            <h3 className="text-sm text-neutral-800 font-semibold">Create Workspace</h3>
                        </div>
                </div>
            </div>
        </div>
    </div>
}
