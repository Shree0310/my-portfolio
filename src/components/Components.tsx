"use client"

import { cn } from "@/lib/utils";
import ButtonUI, { AnimatedButton, BorderBeamButton, DisabledButton, IconButton, IlluminoButton, LinkButton, SecondaryButton, SimpleButton } from "@/components/Playground/Button";
import { BentoGrid } from "@/components/Playground/Layouts";
import { AnimatedCard, BeamCard, DropDownCard, IDCard, SecondaryBeamCard } from "@/components/Playground/Cards";
import { InputDefault } from "./Playground/Inputs";
import BottomMenu from "./Playground/Menu/BottomMenu";
import DisconnectedTabs from "./Playground/Tabs/DisconnectedTabs";
import ContexualAIBar from "./Playground/Bar/ContexualAIBar";

const Components = () => {
    return <div className="div">
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Cards</h3>
        <div className="p-4 relative grid grid-cols-1 gap-2 md:grid-cols-3">

            <AnimatedCard className="col-span-1"/>
            <div className="div">
                <BeamCard className="col-span-1"/>
                <SecondaryBeamCard className=" col-span-1"/>
            </div>
            <DropDownCard className=" col-span-1"/>
        </div>
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Menu</h3>
        <div className="grid grid-cols-2 gap-4 mx-2">
            <div className="flex flex-col">
                 <div className="p-10 h-96  border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                <BottomMenu/>
                </div>
                <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Bottom Menu</p>
            </div>
           <div className="flex flex-col">
                <div className="p-10 h-96  border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                    <DisconnectedTabs/>
                </div>
                <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Disconnected Tabs</p>
            </div>
             <div className="flex flex-col">
                <div className="p-10 h-96 flex justify-center items-center border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                    <ContexualAIBar/>
                </div>
                <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Contexual AI Input</p>
            </div>
        </div>
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Buttons</h3>
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-2xl">
            <Card>                
                <CardHeading><p>Button</p></CardHeading>
                <ButtonUI/>
            </Card>
            <Card>                
                <CardHeading><p>Border Beam Button</p></CardHeading>
                <BorderBeamButton/>
            </Card>
            <Card>                
                <CardHeading><p>Usual</p></CardHeading>
                <SimpleButton/>
            </Card>
            <Card>                
                <CardHeading><p>Secondary Button</p></CardHeading>
                <SecondaryButton/>
            </Card>
            <Card>                
                <CardHeading><p>Disabled Button</p></CardHeading>
                <DisabledButton/>
            </Card>
            <Card>
                <CardHeading><p>Link Button</p></CardHeading>
                <LinkButton/>
            </Card>
            <Card>
                <CardHeading><div>Gradient Button</div></CardHeading>
                <IlluminoButton/>
            </Card>
            <Card>
                <CardHeading><div>Animated Button</div></CardHeading>
                <AnimatedButton/>
            </Card>
            <Card>
                <CardHeading><div>Icon Button</div></CardHeading>
                <IconButton/>
            </Card>
        </div>
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Inputs</h3>
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
            <Card>                
                <CardHeading><p>Text input (default)</p></CardHeading>
                <InputDefault/>
            </Card>
        </div>
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Layouts</h3>
        <div className="p-10 gap-6 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
            <BentoGrid/>
        </div>
        </div>
        
}
export default Components;

export const Card = ({
        children, 
        className
    }: {
        children?: React.ReactNode, 
        className?: string
    }) => {
    return <div className={cn("dark:bg-neutral-800 h-72 w-72 rounded-md shadow-2xl border border-neutral-300 dark:border-neutral-600",className)}>
        {children}
    </div>
}

export const CardHeading = ({as: Tag = "h1",children, className}:{as?: "h1",children?: React.ReactElement, className?: string}) => {
    return <Tag className={cn("p-2 dark:text-neutral-300  text-neutral-600 text-[16px] border-b dark:border-neutral-600 border-neutral-300 font-semibold", className)}>
        {children}
    </Tag>

}