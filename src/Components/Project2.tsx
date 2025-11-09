"use client"
import Image from "next/image";
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import Link from "next/link";
import {projects as defaultProjects, Project} from "../Components/Constants/projects";
import SectionHeading from "./SectionHeading";


const Projects2 = ({ projects = defaultProjects }: {projects: Project[]}) => {
return <div className="py-10">
    <p className="text-primary text-lg font-bold">Projects</p>
    <SectionHeading delay={0.2}>I love building web apps and products that impact millions of lives.</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        {projects.slice(0,3).map((project,idx) => (
        <motion.div 
            initial={{ opacity:0, filter: 'blur(10px)', y:10}}
            whileInView={{ opacity:1, filter: 'blur(0px)', y:0}}
            transition={{ duration:0.3, delay: idx * 0.1, ease: easeInOut }}
            className="project-card group" key={idx}>
            <Link href={project.url}>
                <Image className="h-[150px] object-cover rounded-xl  transition duration-200 group-hover:blur-[3px]" alt="project_image" src={project.image} height={150} width={300}/>    
                <h2 className="py-4 font-bold tracking-tight text-neutral-500 dark:text-neutral-300">{project.name}</h2>
                <div className="text-secondary text-sm">{project.description}</div>
            </Link>
        </motion.div>
    ))}
    </div>
</div>
}
export default Projects2;