"use client"

import Image from "next/image";
import  nature  from "@/assets/Images/nature.png";
import  code  from "@/assets/Images/code.png";
import  coder  from "@/assets/Images/coder.png";
import  girl_code  from "@/assets/Images/girl_code.png";
import  website  from "@/assets/Images/website.png";


const Skills = () => {
    return <div>
        <div className="flex justify-center items-center min-h-screen items-center bg-neutral-700">
            <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
                {features.map((feature,id) => (
                    <div key={feature.title} className="grid grid-cols-2 gap-20">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
                            <h2 className="text-neutral-300 text-lg">{feature.description}</h2>
                        </div>
                        <div>{feature.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}
export default Skills;

type Feature = {
    title: string;
    description: string;
    content: React.ReactNode;
}

const features: Feature[] = [
    {
        title: "React js",
        description: "proficient at building react web apps",
        content: (
            <div>
                <Image
                    src={nature}
                    alt="React"
                    height="500"
                    width="500"
                    className="rounded-lg"/>
            </div>
        )
    },
    {
        title: "Next js",
        description: "proficient at building react web apps",
        content: (
            <div>
                <Image
                    src={code}
                    alt="React"
                    height="500"
                    width="500"
                    className="rounded-lg"/>
            </div>
        )
    },
    {
        title: "html",
        description: "proficient at building react web apps",
        content: (
            <div>
                <Image
                    src={coder}
                    alt="React"
                    height="500"
                    width="500"
                    className="rounded-lg"/>
            </div>
        )
    },
    {
        title: "css",
        description: "proficient at building react web apps",
        content: (
            <div>
                <Image
                    src={website}
                    alt="React"
                    height="500"
                    width="500"
                    className="rounded-lg"/>
            </div>
        )
    },
    {
        title: "Javascript",
        description: "proficient at building react web apps",
        content: (
            <div>
                <Image
                    src={girl_code}
                    alt="React"
                    height="500"
                    width="500"
                    className="rounded-lg"/>
            </div>
        )
    }
]