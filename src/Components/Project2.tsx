"use client"
import Image from "next/image";
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import Link from "next/link";


const Projects2 = () => {
return <div className="py-10">
    <p className="text-primary text-lg font-bold">Projects</p>
    <p className="text-secondary">I love building web apps and products that impact millions of lives.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
        {projects.map((project,idx) => (
        <motion.div 
            initial={{ opacity:0, filter: 'blur(10px)', y:10}}
            whileInView={{ opacity:1, filter: 'blur(0px)', y:0}}
            transition={{ duration:0.3, delay: idx * 0.1, ease: easeInOut }}
            className="project-card group" key={idx}>
            <Link href={project.url}>
                <Image className="h-72 object-cover rounded-xl w-full transition duration-200 group-hover:blur-[3px]" alt="project_image" src={project.image} height={300} width={300}/>    
                <h2 className="py-4 font-bold tracking-tight text-neutral-500 dark:text-neutral-300">{project.name}</h2>
                <div className="text-secondary text-sm">{project.description}</div>
            </Link>
        </motion.div>
    ))}
    </div>
</div>
}
export default Projects2;

type Project = {
    name: string;
    description: string;
    url: string;
    image: string;
    video?: string
}

const projects: Project[]  = [
    {
        name: "Foodie",
        description: "An online food delivery app with features like showing your nearby food places, filtering different food types, offers going on and an option for you to add different dishes from restaurants to your cart and place orders.",
        url: "https://foodie.sourashreeart.com/",
        image: "/Images/FoodieImage1.png"
    },
    {
        name: "MoviesGpt",
        description: "A netflix clone to browse through different series and movies that you might wnat to watch, with an option to ask AI to recommend you movies based on your mood and taste.",
        url: "https://moviesgpt.sourashreeart.com/#/",
        image:"/Images/MoviesGPT1.png"
    },
    {
        name: "Achievr",
        description: " A kanban board to track your personal and professional tasks, create new tasks and cycles.",
        url: "https://achievr.sourashreeart.com/",
        image:"/Images/Achievr.png"
    }
]  
