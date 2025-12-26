"use client"

import { cn } from "@/lib/utils";
import ButtonUI, { BorderBeamButton, DisabledButton, LinkButton, SecondaryButton, SimpleButton } from "./Playground/Button";

const Components = () => {
    return <div className="div">
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
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

export const CardHeading = ({as: Tag = "p",children, className}:{as?: "p",children?: React.ReactElement, className?: string}) => {
    return <Tag className={cn("p-2 dark:text-neutral-300  text-neutral-600 text-[16px] border-b dark:border-neutral-600 border-neutral-300 font-semibold", className)}>
        {children}
    </Tag>

}