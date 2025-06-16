"use client"

import { StaticImageData } from "next/image";
import Foodie1 from "../assets/Images/FoodieImage1.png";
import Foodie2 from "../assets/Images/FoodieImage2.png";
import Foodie3 from "../assets/Images/FoodieImage3.png";
import MoviesGPT1 from "../assets/Images/MoviesGPT1.png";
import MoviesGPT2 from "../assets/Images/MoviesGPT2.png";
import MoviesGPT3 from "../assets/Images/MoviesGPT3.png";
import { useEffect, useState } from "react";

const Projects = () => {
    const [activeImage, setActiveImage] = useState<{[key: string]: number}>({
        "Foodie": 0,
        "MoviesGpt": 0
    });
    // const [activeImgFoodie, setaActiveImgFoodie] = useState(0);
    // const [activeImgMoviesGPT, setActiveImgMoviesGPT] = useState(0);


    useEffect(() => {
        const timers = projects.map((project) => {
            return setInterval(() => {
                setActiveImage(prev => (
                    {
                        ...prev,
                        [project.name]:(prev[project.name] + 1)% project.images.length
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
         <div className="min-h-screen bg-[#1a1a2e] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>
                <div className="flex justify-center items-center">
                    {projects.map((project) => {
                        const currentIndex = activeImage[project.name] || 0;
                        return (
                            <div key={project.name} className="rounded-md border-white">
                               <div className="">
                               <img src={project.images[currentIndex]} alt="image"
                                            className="w-[400px] h-[400px] rounded-md border-white p-3"/>
                               </div>
                                <div>{project.name}</div>
    
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
    images: Array<string>; 
}

const projects: Project[]  = [
    {
        name: "Foodie",
        description: "",
        url: "https://foodie.sourashreeart.com/",
        images: ["/Images/FoodieImage1.png", "/Images/FoodieImage2.png", "/Images/FoodieImage3.png"]
    },
    {
        name: "MoviesGpt",
        description: "",
        url: "https://moviesgpt.sourashreeart.com/#/",
        images: ["/Images/MoviesGPT1.png", "/Images/MoviesGPT2.png", "/Images/MoviesGPT3.png"]
    }
]