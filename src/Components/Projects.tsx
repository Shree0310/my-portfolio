"use client"

import { StaticImageData } from "next/image";
import Foodie1 from "../assets/Images/FoodieImage1.png";
import Foodie2 from "../assets/Images/FoodieImage2.png";
import Foodie3 from "../assets/Images/FoodieImage3.png";
import MoviesGPT1 from "../assets/Images/MoviesGPT1.png";
import MoviesGPT2 from "../assets/Images/MoviesGPT2.png";
import MoviesGPT3 from "../assets/Images/MoviesGPT3.png";
import { useEffect, useState } from "react";
import BorderBeam from "./ui/BorderBeam";

const Projects = () => {
    const [activeImage, setActiveImage] = useState<{[key: string]: number}>({
        "Foodie": 0,
        "MoviesGpt": 0
    });
    // const [activeImgFoodie, setaActiveImgFoodie] = useState(0);
    // const [activeImgMoviesGPT, setActiveImgMoviesGPT] = useState(0);


    useEffect(() => {
        const timers = projects
              .filter((proj) =>  proj.images && proj.images.length > 0)
              .map((project) => {
            return setInterval(() => {
                setActiveImage(prev => (
                    {
                        ...prev,
                        [project.name]:(prev[project.name] + 1)% project.images!.length
                    }
                ))

            },2000);
        
        });
        return () => {
            timers.forEach((timer) => clearInterval(timer)
            )
        }
    },[])
    return <>
         <div className="min-h-screen bg-[#3e1f47] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
                <div className="flex justify-center items-center gap-8">
                    {projects.map((project) => {
                        const currentIndex = activeImage[project.name] || 0;
                        return (
                            <div key={project.name} className="relative rounded-md border-white">
                               <div className="">
                                {project.video ? (
                                    <video src={project.video} 
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-[400px] h-[200px] rounded-md border-white p-3 mt-5 mb-5"/>
                                ) : (
                                project.images && project.images.length > 0 && (
                                    <img src={project.images[currentIndex]} alt="image"
                                        className="w-[400px] h-[200px] rounded-md border-white p-3"/>
                                    )
                                )}
                               </div>
                               <div className="w-[400px] py-1 mx-1 px-2 text-left text-sm">{project.description}</div>
                                <div className="text-center my-2 text-xl font-semibold">{project.name}</div>
                                <BorderBeam
                                duration={4}
                                size={300}
                                reverse
                                colorFrom="#9333ea"
                                colorTo="#ec4899"
                                className="from-transparent via-purple-600 to-transparent"
                            />
                            </div>
                        )
                    }
                        
                    )}
                </div>
            </div>
        </div>
    </>
}
export default Projects;

type Project = {
    name: string;
    description: string;
    url: string;
    images?: Array<string>; 
    video?: string
}

const projects: Project[]  = [
    {
        name: "Foodie",
        description: "An online food delivery app with features like showing your nearby food places, filtering different food types, offers going on and an option for you to add different dishes from restaurants to your cart and place orders.",
        url: "https://foodie.sourashreeart.com/",
        images: ["/Images/FoodieImage1.png", "/Images/FoodieImage2.png", "/Images/FoodieImage3.png"]
    },
    {
        name: "MoviesGpt",
        description: "A netflix clone to browse through different series and movies that you might wnat to watch, giving you an option to see the trailer and carousel of movies displayed with an ooption to ask AI to recommend you movies based on your mood and taste.",
        url: "https://moviesgpt.sourashreeart.com/#/",
        images: ["/Images/MoviesGPT1.png", "/Images/MoviesGPT2.png", "/Images/MoviesGPT3.png"]
    },
    {
        name: "Achievr",
        description: " A kanban board to track your personal and professional tasks, create new tasks and cycles.",
        url: "https://achievr.sourashreeart.com/",
        video: "/Videos/achievrDemo.mp4"
    }
]