import Image from "next/image";
import { workExperiences } from "./Constants/workEx";
import MotionDiv from "./MotionDiv";
import SectionHeading from "./SectionHeading";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const WorkExperience = () => {
    const icons = [
        {
            title: "JS",
            size: "size-8",
            circle: "circle-1",
            icon: <FaJs className="h-4 w-4 text-yellow-500"/>
        },
        {
            title: "HTML",
            size: "size-8",
            circle: "circle-1",
            icon: <FaHtml5 className="h-4 w-4 text-red-500"/>
        },
        {
            title: "React",
            size: "size-8",
            circle: "circle-1",
            icon: <FaReact className="h-4 w-4 text-cyan-500"/>
        },
        {
            title: "Tailwind",
            size: "size-8",
            circle: "circle-1",
            icon: <SiTailwindcss className="h-4 w-4 text-teal-500"/>
        },
    ]
    return <div className="div">
        <SectionHeading className="ml-2">I have worked at..</SectionHeading>
        <div className="flex flex-col gap-4 pt-4 pb-10 ml-5">
           {workExperiences.map((workEx,idx) => (
            <MotionDiv
            key={idx}
                initial= {{
                    opacity: 0,
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    duration: 0.3,
                    delay: idx *0.1
                }}>
                    <div className="flex md:flex-row flex-col md:items-center ">
                        <h3 className="text-neutral-800 dark:text-white font-bold tracking-tight text-[16px] max-w-56 md:max-w-screen pt-2 ">{workEx.company}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 pt-2 justify-between">
                        <div className="div">
                            <div className="font-semibold dark:text-neutral-300">{workEx.position}</div>
                            <p className="text-secondary font-normal dark:text-neutral-400 tracking-tight text-sm md:text-sm pt-1">{workEx.tenture}</p>
                        </div>
                        <div className="div">
                            {workEx.url ? (
                                <Image
                                    src={workEx.url}
                                    alt={`${workEx.company} logo`}
                                    height={33}
                                    width={100}
                                    unoptimized
                                />
                            ) : null}
                        </div>
                        </div>
                    <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">{workEx.description}</p>
                    <div className="flex justify-start mt-2 md:ml-2">
                        {icons.map((item, idx) => (
                            <div 
                                key={item.title} 
                                className={`${item.size} h-8 w-8 ring-1 ring-neutral-200 rounded-full flex items-center justify-center bg-gray-100 dark:bg-neutral-800
                                    shadow-2xl relative ${idx !== 0 ? '-ml-2' : ''}`}
                            >
                                <span>{item.icon}</span>
                            </div>
                        ))}
                    </div>
            </MotionDiv>
           ))}
        </div>
    </div>
}
export default WorkExperience;