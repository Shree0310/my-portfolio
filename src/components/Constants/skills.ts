export type Skill = {
    name: string;
    description: string;
    location: string;
    tags: string[];
    gradientFrom?: string;
    gradientTo?: string;
}

export const claudeCodeSkills: Skill[] = [
    {
        name: "therapist-site-scaffold",
        description: "Scaffold a new therapist/wellness practice website (Next.js, TypeScript, static content, no CMS). Generates complete page structure, routing, shared layouts, and theme customization files.",
        location: "~/.claude/skills/therapist-site-scaffold/skill.md",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Automation"],
        gradientFrom: "#ec4899",
        gradientTo: "#8b5cf6"
    },
    {
        name: "web-animation-design",
        description: "Design and implement web animations that feel natural and purposeful. Covers easing, spring physics, Framer Motion, React Spring, GSAP, and accessibility considerations.",
        location: "Built-in",
        tags: ["Animations", "Framer Motion", "React Spring", "Performance"],
        gradientFrom: "#f59e0b",
        gradientTo: "#f97316"
    }
]
