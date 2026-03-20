"use client"

import { cn } from "@/lib/utils";
import { BentoGrid } from "@/components/Playground/Layouts";
import { AnimatedCard, BeamCard, DropDownCard, IDCard, SecondaryBeamCard } from "@/components/Playground/Cards";
import { InputDefault } from "./Playground/Inputs";
import BottomMenu from "./Playground/Menu/BottomMenu";
import DisconnectedTabs from "./Playground/Tabs/DisconnectedTabs";
import ContexualAIBar from "./Playground/Bar/ContexualAIBar";
import VoiceChatAI from "./Playground/VoiceChatAI";
import Model from "../../public/Earth";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import ImageCards from "./Playground/ImageCards";
import ExpandingCards from "./Playground/ExpandingCards";
import LiquidEffect from "./Playground/LiquidEffect";
import HoldToConfirmFoundation from "./Playground/HoldToConfirm";
import JumpingCards from "./Playground/JumpingCards";
import GradientButton from "./Playground/Buttons/GradientButton";
import BorderBeamButton from "./Playground/Buttons/BorderBeamButton";
import HoverLiftButton from "./Playground/Buttons/HoverLiftButton";
import SecondaryButton from "./Playground/Buttons/SecondaryButton";
import DisabledButton from "./Playground/Buttons/DisabledButton";
import LinkButton from "./Playground/Buttons/LinkButton";
import IlluminoButton from "./Playground/Buttons/IlluminoButton";
import Animated3DButton from "./Playground/Buttons/Animated3DButton";
import { IconButton, HeartButton, TrashButton, ShareButton } from "./Playground/Buttons/IconButton";
import { IconStar } from "@tabler/icons-react";


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
            <div className="flex flex-col">
                <div className="p-10 h-96 flex justify-center items-center border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                    <VoiceChatAI/>
                </div>
                <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Voice AI Chat (In Progress...)</p>
            </div>
            <div className="flex flex-col">
                <div className="p-10 h-96 bg-blue-200 dark:bg-neutral-900 flex justify-center items-center border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                    <Canvas className="h-96">
                        <ambientLight intensity={1}/>
                        <OrbitControls enableZoom={false}/>
                        <Suspense fallback={null}>
                            <Model/>
                        </Suspense>
                        <Environment preset="sunset"/>
                        <ContactShadows position={[0,-2.5,0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#000000"/>
                    </Canvas>
                </div>
                <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Earth 3D</p>
            </div>
            <div className="flex flex-col">
                <div className="h-96 bg-blue-200 dark:bg-neutral-900 flex justify-center items-center border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                    <ImageCards/>
                </div>
                <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Card Stack</p>
            </div>
            <div className="flex flex-col">
                <div className="h-96 bg-blue-200 dark:bg-neutral-900 flex justify-center items-center border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                    <LiquidEffect />
                </div>
                <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Liquid Effect</p>
            </div>
            <div className="flex flex-col">
                <div className="h-96 to-blue-200/50 from-yellow-100/50 bg-linear-to-r dark:bg-neutral-900 flex justify-center items-center border border-neutral-300 dark:border-neutral-600 rounded-md shadow-2xl">
                    <HoldToConfirmFoundation text='Delete Project'/>
                </div>
            <p className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Hold to confirm</p>
            </div>
        </div>
        <h1 className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Cards Animation</h1>
         <div className="p-10 grid grid-cols-1 md:grid-cols-3 h-200 gap-6 border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-2xl">
            <div className="col-span-3">
                <JumpingCards/>
            </div>
        </div>
        <h1 className="text-[16px] p-4 text-neutral-700 dark:text-neutral-300">Expandable Cards</h1>
         <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-2xl">
            <div className="col-span-3">
                <ExpandingCards/>
            </div>
        </div>
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Buttons</h3>
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-2xl">
            <Card>                
                <CardHeading><p>Button</p></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                    <GradientButton/>
                </div>
            </Card>
            <Card>                
                <CardHeading><p>Border Beam Button</p></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                    <BorderBeamButton/>
                </div>
            </Card>
            <Card>                
                <CardHeading><p>Usual</p></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                    <HoverLiftButton/>
                </div>
            </Card>
            <Card>                
                <CardHeading><p>Secondary Button</p></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                    <SecondaryButton/>
                </div>
            </Card>
            <Card>                
                <CardHeading><p>Disabled Button</p></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                    <DisabledButton/>
                </div>
            </Card>
            <Card>
                <CardHeading><p>Link Button</p></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                     <div className="flex flex-col">
                        <LinkButton color="sky">Primary</LinkButton>
                        <LinkButton color="orange">Secondary</LinkButton>
                        <LinkButton color="green">Success</LinkButton>
                        <LinkButton color="red">Danger</LinkButton>
                    </div>
                </div>
            </Card>
            <Card>
                <CardHeading><div>Gradient Button</div></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                    <IlluminoButton/>
                </div>
            </Card>
            <Card>
                <CardHeading><div>Animated Button</div></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center justify-center">
                    <Animated3DButton/>
                </div>
            </Card>
            <Card>
                <CardHeading><div>Icon Button</div></CardHeading>
                <div className="h-64 w-64 pb-10  flex items-center gap-4 justify-center">
                    <HeartButton />
                    <TrashButton />
                    <ShareButton />
                </div>
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