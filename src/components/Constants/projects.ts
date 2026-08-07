
export type Project = {
    name: string;
    description: string;
    url: string;
    image: string;
    video?: string;
    tag?: string;
    skills?: string[];
    gradientFrom?: string;
    gradientTo?: string;
}

export const projects: Project[]  = [
    {
        name: "Mind Craft Wellness",
        description: "A website for a mental health practitioner from where users can book sessions.",
        url: "https://mind-craft-wellness.vercel.app/",
        image:"/Images/MindCraftWellness.png",
        tag: "Wellness platform",
        skills: ["React", "TypeScript", "Next.js"],
        gradientFrom: "#8b5cf6",
        gradientTo: "#3b82f6"
    },
    {
        name: "Achievr",
        description: "A kanban board to track your personal and professional tasks, create new tasks and cycles.",
        url: "https://achievr.sourashreeart.com/hero",
        image:"/Images/Achievr.png",
        tag: "Productivity",
        skills: ["React", "Node.js", "Redux"],
        gradientFrom: "#14b8a6",
        gradientTo: "#3b82f6"
    },
    {
        name: "Unfold",
        description: "A generative UI moodboard generator that streams color palettes, fonts, and imagery in real-time based on your description.",
        url: "https://unfold-smoky.vercel.app/",
        image: "/Images/UnfoldImage.png",
        tag: "Three.js & React Fiber",
        skills: ["React", "Three.js", "TypeScript"],
        gradientFrom: "#f59e0b",
        gradientTo: "#f97316"
    },
    {
        name: "MoviesGpt",
        description: "A netflix clone to browse through different series and movies, with an option for getting AI reccomendations.",
        url: "https://moviesgpt.sourashreeart.com/#/",
        image:"/Images/MoviesGPT1.png",
        tag: "Entertainment",
        skills: ["React", "JavaScript", "Node.js"],
        gradientFrom: "#ef4444",
        gradientTo: "#f97316"
    },
]

export const threejsProjects: Project[] = [
    {
        name: "3D Portfolio",
        description: "An immersive 3D portfolio experience built with Three.js and React Fiber.",
        url: "https://my-three-portfolio.vercel.app/",
        image: "/Images/ThreejsProject.png"
    },
]  