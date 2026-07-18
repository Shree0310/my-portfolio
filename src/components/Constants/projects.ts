
export type Project = {
    name: string;
    description: string;
    url: string;
    image: string;
    video?: string
}

export const projects: Project[]  = [
    {
        name: "Mind Craft Wellness",
        description: "A website for a mental health practisioner from where user can book sessions.",
        url: "https://mind-craft-wellness.vercel.app/",
        image:"/Images/MindCraftWellness.png"
    },
        {
        name: "Achievr",
        description: " A kanban board to track your personal and professional tasks, create new tasks and cycles.",
        url: "https://achievr.sourashreeart.com/hero",
        image:"/Images/Achievr.png"
    },
    {
        name: "Unfold",
        description: "A generative UI moodboard generator that streams color palettes, fonts, and imagery in real-time based on your description.",
        url: "https://unfold-smoky.vercel.app/",
        image: "/Images/unfoldImage.png"
    },
    {
        name: "MoviesGpt",
        description: "A netflix clone to browse through different series and movies, with an option for getting AI reccomendations.",
        url: "https://moviesgpt.sourashreeart.com/#/",
        image:"/Images/MoviesGPT1.png"
    },
]  