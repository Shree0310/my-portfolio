
export type Project = {
    name: string;
    description: string;
    url: string;
    github?: string;
    image: string;
    video?: string;
    tag?: string;
    skills?: string[];
    gradientFrom?: string;
    gradientTo?: string;
}

export const projects: Project[]  = [
    {
        name: "Orbit",
        description: "An AI agent observability tool that visualizes tool calls in real-time as an interactive 3D execution graph for debugging and tracing.",
        url: "https://orbit-eight-roan.vercel.app/",
        github: "https://github.com/Shree0310/Orbit",
        image: "/Images/UnfoldImage.png",
        tag: "AI Observability",
        skills: ["React", "Three.js", "Next.js", "TypeScript"],
        gradientFrom: "#6366f1",
        gradientTo: "#8b5cf6"
    },
    {
        name: "Achievr",
        description: "A kanban board to track your personal and professional tasks, create new tasks and cycles.",
        url: "https://achievr.sourashreeart.com/hero",
        github: "https://github.com/Shree0310/Achievr",
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
        github: "https://github.com/Shree0310/unfold",
        image: "/Images/UnfoldImage.png",
        tag: "Three.js & React Fiber",
        skills: ["React", "Three.js", "TypeScript"],
        gradientFrom: "#f59e0b",
        gradientTo: "#f97316"
    },
    {
        name: "Mind Craft Wellness",
        description: "A website for a mental health practitioner from where users can book sessions.",
        url: "https://mind-craft-wellness.vercel.app/",
        github: "https://github.com/Shree0310/MindCraftWellness",
        image:"/Images/MindCraftWellness.png",
        tag: "Wellness platform",
        skills: ["React", "TypeScript", "Next.js"],
        gradientFrom: "#8b5cf6",
        gradientTo: "#3b82f6"
    },
    {
        name: "MoviesGpt",
        description: "A netflix clone to browse through different series and movies, with an option for getting AI reccomendations.",
        url: "https://moviesgpt.sourashreeart.com/#/",
        github: "https://github.com/Shree0310/netflix-gpt",
        image:"/Images/MoviesGPT1.png",
        tag: "Entertainment",
        skills: ["React", "JavaScript", "Node.js"],
        gradientFrom: "#ef4444",
        gradientTo: "#f97316"
    },
    {
        name: "Therapist Site Scaffold",
        description: "Custom Claude Code skill that scaffolds production-ready therapist/wellness practice websites with Next.js, TypeScript, and Tailwind CSS.",
        url: "/projects/therapist-site-scaffold",
        github: "https://github.com/Shree0310/MindCraftWellness",
        image:"/Images/MindCraftWellness.png",
        tag: "Developer Tool",
        skills: ["Claude Code", "Next.js", "TypeScript", "Tailwind CSS"],
        gradientFrom: "#ec4899",
        gradientTo: "#8b5cf6"
    },
]

export const threejsProjects: Project[] = [
    {
        name: "3D Portfolio",
        description: "An immersive 3D portfolio experience built with Three.js and React Fiber.",
        url: "https://my-three-portfolio.vercel.app/",
        github: "https://github.com/Shree0310/my-three-portfolio",
        image: "/Images/ThreejsProject.png"
    },
]  