"use client"
import Image from "next/image";
import { motion, easeInOut } from 'framer-motion';
import Link from "next/link";
import {projects as defaultProjects, Project} from "./Constants/projects";
import SectionHeading from "./SectionHeading";
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiOpenai } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import BorderBeam from "./ui/BorderBeam";


const Projects2 = ({ projects = defaultProjects }: {projects: Project[]}) => {
    const icons = [

        {
            title: "React",
            size: "size-8",
            circle: "circle-1",
            icon: <FaReact className="h-4 w-4 text-cyan-500"/>
        },
        {
            title: "Tailwind",
            size: "size-8",
            circle: "circle-2",
            icon: <RiTailwindCssFill className="h-4 w-4 text-teal-500"/>

        },
        {
            title: "VS Code",
            size: "size-8",
            circle: "circle-3",
            icon: <VscVscode className="h-4 w-4 text-blue-500"/>

        },
        {
            title: "ChatGPT",
            size: "size-8",
            circle: "circle-4",
            icon: <SiOpenai className="h-4 w-4"/>

        }
    ]
return <div className="py-10">
    <p className="text-primary dark:text-neutral-300 text-lg font-bold">Projects</p>
    <SectionHeading delay={0.2}>I love building web apps and products that impact millions of lives.</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
        {projects.map((project,idx) => (
        <motion.div 
            initial={{ opacity:0, filter: 'blur(10px)', y:10}}
            whileInView={{ opacity:1, filter: 'blur(0px)', y:0}}
            transition={{ duration:0.3, delay: idx * 0.1, ease: easeInOut }}
            className="project-card group" key={idx}>           
            <BorderBeam
            duration={4}
            size={300}
            reverse
            colorFrom="#9333ea"
            colorTo="#ec4899"
            className="from-transparent via-teal-600 to-transparent"
            />
            <Link href={project.url}>
                <Image className="h-[200px] object-cover rounded-xl transition duration-200 group-hover:blur-[3px] mx-auto block" alt="project_image" src={project.image} height={200} width={300}/>    
                <h2 className="py-4 font-bold tracking-tight text-neutral-500 dark:text-neutral-300 ml-5 md:ml-2">{project.name}</h2>
                <div className="text-secondary max-w-56 dark:text-neutral-400 text-sm ml-5 md:ml-2">{project.description}</div>
                <div className="flex justify-start mt-2 ml-5 md:ml-2">
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
            </Link>
        </motion.div>
    ))}
    </div>
</div>
}
export default Projects2;