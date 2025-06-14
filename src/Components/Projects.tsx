"use client"

import { useEffect, useState } from "react";

type Project = {
    name: string;
    description: string;
    url: string;
    images: Array<string>; 
}

const projects: Project[] = [
    {
        name: "Foodie",
        description: "",
        url: "https://foodie.sourashreeart.com/",
        images: ["/images/FoodieImage1.png", "/images/FoodieImage2.png", "/images/FoodieImage3.png"]
    },
    {
        name: "MoviesGpt",
        description: "",
        url: "https://moviesgpt.sourashreeart.com/#/",
        images: ["/images/MoviesGPT1.png", "/images/MoviesGPT2.png", "/images/MoviesGPT3.png"]
    }
]

const Projects = () => {
    // Store active image index for each project
    const [activeImages, setActiveImages] = useState<{[key: string]: number}>({
        "Foodie": 0,
        "MoviesGpt": 0
    });

    useEffect(() => {
        // Create separate timer for each project
        const timers = projects.map((project) => {
            return setInterval(() => {
                setActiveImages(prev => ({
                    ...prev,
                    [project.name]: (prev[project.name] + 1) % project.images.length
                }));
            }, 2000);
        });

        // Cleanup all timers
        return () => {
            timers.forEach(timer => clearInterval(timer));
        }
    }, []);

    return (
        <>
            <div className="min-h-screen bg-[#1a1a2e] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold mb-8">My Projects</h1>
                    <div className="flex justify-center items-center gap-8">
                        {projects.map((project) => {
                            const currentImageIndex = activeImages[project.name] || 0;
                            return (
                                <div key={project.name} className="rounded-md border border-white p-4">
                                    <img 
                                        src={project.images[currentImageIndex]} 
                                        alt={`${project.name} project image`}
                                        className="w-[400px] h-[400px] rounded-md object-cover"
                                    />
                                    <div className="text-center mt-4 text-xl font-semibold">{project.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;