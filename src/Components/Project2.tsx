"use client"
import Image from "next/image";
import { motion, AnimatePresence, easeInOut } from 'framer-motion';


const Projects2 = () => {
return <div className="py-10">
    <p className="text-primary">Projects</p>
    <p className="text-secondary">I love building web apps and products that impact millions of lives.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
        {projects.map((project,idx) => (
        <motion.div 
            initial={{ opacity:0, filter: 'blur(10px)', y:10}}
            whileInView={{ opacity:1, filter: 'blur(0px)', y:0}}
            transition={{ duration:0.3, delay: idx * 0.1, ease: easeInOut }}
            className="project-card" key={idx}>
            <Image className="h-72 object-cover rounded-xl w-full" alt="project_image" src={project.image} height={300} width={300}/>    
            <div className="py-4">{project.name}</div>
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
        description: "A netflix clone to browse through different series and movies that you might wnat to watch, giving you an option to see the trailer and carousel of movies displayed with an ooption to ask AI to recommend you movies based on your mood and taste.",
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
