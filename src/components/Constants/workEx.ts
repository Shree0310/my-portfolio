
export type WorkExperience = {
    company: string,
    position: string,
    tenture: string,
    description: string,
    url?: string,
    skills?: string[],
    companyInitials?: string,
    companyColor?: string
}

export const workExperiences: WorkExperience[] = [
    {
        company:"EPAM SYSTEMS (Client: Google)",
        position:"Frontend Engineer",
        tenture: "April 2023 - Present",
        description: "Architected and developed real-time speech-to-text pipeline using React, TypeScript, gRPC, and WebSocket with low-latency voice input integration, implementing Gemini 2.5 AI API for intelligent question generation, following Agile/Scrum methodology and code review best practices|Built GenAI-powered feature with RESTful API integration and state management using React hooks, enabling dynamic content generation with comprehensive unit testing and integration testing coverage using Jest|Developed responsive, accessible (WCAG 2.1) coaching interface using React and Framer Motion, implementing component libraries, design systems, and performance optimization techniques to improve user engagement metrics and ensure cross-browser compatibility|Led migration from TinyMCE to Quill rich text editor, developing custom plugins with JavaScript (ES6+), implementing version control with Git/GitHub, and establishing CI/CD pipelines for automated deployment",
        url:"https://minimal-portfolio-website-template.vercel.app/images/logos/google-logo.png",
        skills: ["React", "TypeScript", "AI/ML", "Design Systems"],
        companyInitials: "EP",
        companyColor: "#3DA35D"
    },
    {
        company:"CAPGEMINI",
        position:"Software Engineer",
        tenture: "August 2019 - April 2023",
        description: "Built scalable bulk operations interface with React, Redux Toolkit, and NgRx featuring optimistic UI patterns and RESTful API integration, scaling from 100 to 1,000+ daily users with 10x productivity improvement|Implemented real-time data export (Excel/JSON) using SheetJS with progressive loading and performance optimization for 10,000+ row datasets|Optimized Angular performance with OnPush change detection, lazy loading, and code splitting, reducing change detection cycles by 65% and page load time by 2 seconds",
        url:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
        skills: ["Angular", "TypeScript", "Performance", "Excel/JSON"],
        companyInitials: "CG",
        companyColor: "#0070AD"
    }
]