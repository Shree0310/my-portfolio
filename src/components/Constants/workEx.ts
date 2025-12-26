
export type WorkExperience = {
    company: string,
    position: string,
    tenture: string,
    description: string,
    url?: string
}

export const workExperiences: WorkExperience[] = [
    {
        company:"EPAM SYSTEMS (Client: Google)",
        position:"Design Engineer",
        tenture: "April 2023 - Present",
        description: "Designed and developed AI-powered features for Connect Training, Architected reusable component systems with TypeScript type definitions and comprehensive error handling, improving code maintainability by 60%.,Designed responsive, accessible interfaces",
        url:"https://minimal-portfolio-website-template.vercel.app/images/logos/google-logo.png"
    },
    {
        company:"CAPGEMINI",
        position:"Frontend Developer",
        tenture: "Aug 2019 - April 2023",
        description: "Developed bulk operations interface, Built data export feature supporting Excel/JSON formats,Optimized Angular application performance by implementing custom pipes and reducing change detection cycles by 65%, improving page load time by 2 seconds for 2,000+ concurrent users",
        url:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg"
    }
]