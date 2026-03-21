"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";
import { BentoGrid } from "@/components/Playground/Layouts";
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
import Navbar from "./Navbar/Navbar";
import ComponentsSidebar from "./ComponentLibrary/ComponentsSidebar";
import AnimatedCard from "./Playground/Cards/AnimatedCard";
import BeamCard from "./Playground/Cards/BeamCard";
import Avatar1 from "../../public/Images/Avatar1.jpg";
import Avatar2 from "../../public/Images/Avatar2.jpg";
import Avatar3 from "../../public/Images/Avatar3.jpg";
import SecondaryBeamCard from "./Playground/Cards/SecondaryBeamCard";
import MenuCard from "./Playground/Cards/MenuCard";

const Components = () => {
    const [activeSection, setActiveSection] = useState("all");

    const showSection = (section: string) => 
        activeSection === "all" || activeSection === section;

    return (
        <div className="flex min-h-screen bg-white dark:bg-neutral-950">
            <ComponentsSidebar 
                activeSection={activeSection} 
                onSectionChange={setActiveSection} 
            />
            
            <main className="flex-1 p-6 overflow-auto">
                <Navbar/>
                
                {/* Cards Section */}
                {showSection("cards") && (
                    <>
                        <SectionHeading>Cards</SectionHeading>
                        <div className="p-4 relative grid grid-cols-1 gap-2 md:grid-cols-3">
                            <AnimatedCard className="col-span-1"/>
                            <div className="div">
                                <BeamCard avatars={[Avatar1.src, Avatar2.src, Avatar3.src]} />
                                <SecondaryBeamCard className="col-span-1"/>
                            </div>
                            <MenuCard className="col-span-1"/>
                        </div>

                        <SubHeading>Cards Animation</SubHeading>
                        <ComponentContainer>
                            <div className="col-span-3 h-180">
                                <JumpingCards/>
                            </div>
                        </ComponentContainer>

                        <SubHeading>Expandable Cards</SubHeading>
                        <ComponentContainer>
                            <div className="col-span-3">
                                <ExpandingCards/>
                            </div>
                        </ComponentContainer>
                    </>
                )}

                {/* Menu Section */}
                {showSection("menu") && (
                    <>
                        <SectionHeading>Menu</SectionHeading>
                        <div className="grid grid-cols-2 gap-4 mx-2">
                            <PreviewCard label="Bottom Menu">
                                <BottomMenu/>
                            </PreviewCard>
                            <PreviewCard label="Disconnected Tabs">
                                <DisconnectedTabs/>
                            </PreviewCard>
                            <PreviewCard label="Contexual AI Input" centered>
                                <ContexualAIBar/>
                            </PreviewCard>
                            <PreviewCard label="Voice AI Chat (In Progress...)" centered>
                                <VoiceChatAI/>
                            </PreviewCard>
                            <PreviewCard label="Earth 3D" centered className="bg-blue-100 dark:bg-neutral-900">
                                <Canvas className="h-96">
                                    <ambientLight intensity={1}/>
                                    <OrbitControls enableZoom={false}/>
                                    <Suspense fallback={null}>
                                        <Model/>
                                    </Suspense>
                                    <Environment preset="sunset"/>
                                    <ContactShadows position={[0,-2.5,0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#000000"/>
                                </Canvas>
                            </PreviewCard>
                            <PreviewCard label="Card Stack" centered className="bg-blue-100 dark:bg-neutral-900">
                                <ImageCards/>
                            </PreviewCard>
                            <PreviewCard label="Liquid Effect" centered className="bg-blue-100 dark:bg-neutral-900">
                                <LiquidEffect />
                            </PreviewCard>
                            <PreviewCard label="Hold to confirm" centered className="bg-gradient-to-r from-yellow-100/50 to-blue-100/50 dark:bg-neutral-900 dark:from-neutral-900 dark:to-neutral-900">
                                <HoldToConfirmFoundation text='Delete Project'/>
                            </PreviewCard>
                        </div>
                    </>
                )}

                {/* Buttons Section */}
                {showSection("buttons") && (
                    <>
                        <SectionHeading>Buttons</SectionHeading>
                        <ComponentContainer>
                            <Card>                
                                <CardHeading>Button</CardHeading>
                                <CardContent>
                                    <GradientButton/>
                                </CardContent>
                            </Card>
                            <Card>                
                                <CardHeading>Border Beam Button</CardHeading>
                                <CardContent>
                                    <BorderBeamButton/>
                                </CardContent>
                            </Card>
                            <Card>                
                                <CardHeading>Usual</CardHeading>
                                <CardContent>
                                    <HoverLiftButton/>
                                </CardContent>
                            </Card>
                            <Card>                
                                <CardHeading>Secondary Button</CardHeading>
                                <CardContent>
                                    <SecondaryButton/>
                                </CardContent>
                            </Card>
                            <Card>                
                                <CardHeading>Disabled Button</CardHeading>
                                <CardContent>
                                    <DisabledButton/>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeading>Link Button</CardHeading>
                                <CardContent>
                                    <div className="flex flex-col">
                                        <LinkButton color="sky">Primary</LinkButton>
                                        <LinkButton color="orange">Secondary</LinkButton>
                                        <LinkButton color="green">Success</LinkButton>
                                        <LinkButton color="red">Danger</LinkButton>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeading>Illumino Button</CardHeading>
                                <CardContent>
                                    <IlluminoButton/>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeading>Animated Button</CardHeading>
                                <CardContent>
                                    <Animated3DButton/>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeading>Icon Button</CardHeading>
                                <CardContent className="gap-4">
                                    <HeartButton />
                                    <TrashButton />
                                    <ShareButton />
                                </CardContent>
                            </Card>
                        </ComponentContainer>
                    </>
                )}

                {/* Inputs Section */}
                {showSection("inputs") && (
                    <>
                        <SectionHeading>Inputs</SectionHeading>
                        <ComponentContainer>
                            <Card>                
                                <CardHeading>Text input (default)</CardHeading>
                                <InputDefault/>
                            </Card>
                        </ComponentContainer>
                    </>
                )}

                {/* Layouts Section */}
                {showSection("layouts") && (
                    <>
                        <SectionHeading>Layouts</SectionHeading>
                        <ComponentContainer>
                            <BentoGrid/>
                        </ComponentContainer>
                    </>
                )}
            </main>
        </div>
    );
}

export default Components;

// ============================================
// SHARED UI COMPONENTS
// ============================================

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl py-6 font-semibold text-neutral-700 dark:text-neutral-300">
        {children}
    </h3>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-base p-4 text-neutral-600 dark:text-neutral-400">
        {children}
    </h4>
);

const ComponentContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn(
        "p-10 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-md shadow-lg",
        "bg-neutral-50 dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-700",
        className
    )}>
        {children}
    </div>
);

const PreviewCard = ({ 
    children, 
    label, 
    centered = false,
    className 
}: { 
    children: React.ReactNode; 
    label: string;
    centered?: boolean;
    className?: string;
}) => (
    <div className="flex flex-col">
        <div className={cn(
            "p-10 h-96 rounded-md shadow-lg",
            "bg-white dark:bg-neutral-900",
            "border border-neutral-200 dark:border-neutral-700",
            centered && "flex justify-center items-center",
            className
        )}>
            {children}
        </div>
        <p className="text-sm p-4 text-neutral-600 dark:text-neutral-400">{label}</p>
    </div>
);

export const Card = ({
    children, 
    className
}: {
    children?: React.ReactNode; 
    className?: string;
}) => (
    <div className={cn(
        "h-72 w-72 rounded-md shadow-lg",
        "bg-white dark:bg-neutral-800",
        "border border-neutral-200 dark:border-neutral-700",
        className
    )}>
        {children}
    </div>
);

export const CardHeading = ({
    children, 
    className
}: {
    children?: React.ReactNode; 
    className?: string;
}) => (
    <h5 className={cn(
        "p-2 text-base font-semibold",
        "text-neutral-700 dark:text-neutral-300",
        "border-b border-neutral-200 dark:border-neutral-700",
        className
    )}>
        {children}
    </h5>
);

const CardContent = ({ 
    children, 
    className 
}: { 
    children: React.ReactNode; 
    className?: string;
}) => (
    <div className={cn("h-64 w-64 pb-10 flex items-center justify-center", className)}>
        {children}
    </div>
);