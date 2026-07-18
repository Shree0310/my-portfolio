"use client"
import { Download, Printer } from "lucide-react";
import Heading from "@/components/Heading";
import SectionHeading from "@/components/SectionHeading";
import SubHeading from "@/components/SubHeading";
import MotionDiv from "@/components/MotionDiv";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  const workHistory = [
    {
      role: "FRONTEND ENGINEER (CLIENT: GOOGLE)",
      company: "EPAM SYSTEMS",
      location: "Bangalore, India",
      period: "04/2023 to Current",
      responsibilities: [
        "Built real-time speech-to-text pipeline using gRPC and WebSocket, enabling low-latency voice input for an AI coaching platform with Gemini 2.5-driven question generation - serving 10,000+ monthly users.",
        "Developed animation-rich coaching interfaces using React and Framer Motion - smooth micro-interactions and transition states that improved user engagement and session completion rates.",
        "Customised TinyMCE rich text editor with bespoke plugins and toolbar configurations, enabling complex content authoring workflows within the platform."
      ]
    },
    {
      role: "SOFTWARE ENGINEER",
      company: "CAPGEMINI",
      location: "Bangalore, India",
      period: "08/2019 to 04/2023",
      responsibilities: [
        "Built bulk operations interface with React, Redux, and NgRx — optimistic UI updates scaling from 100 to 1,000+ daily users with 10x productivity improvement.",
        "Implemented real-time data export (Excel/JSON) with SheetJS, handling 10,000+ row datasets with progressive loading for 500+ monthly users.",
        "Optimised Angular app performance with OnPush change detection, custom pipes, and lazy loading — reducing change detection cycles by 65% and page load by 2s for 2,000+ concurrent users."
      ]
    }
  ];

  const projects = [
    {
      name: "Portfolio & Component Library",
      description: "Animated React component library built with Framer Motion and TypeScript.",
      links: ["Live", "GitHub"]
    },
    {
      name: "Achievr",
      description: "Full-stack Kanban board with Generative UI AI Planner, Next.js 14, TypeScript, Supabase, real-time sync, GitHub API integration.",
      links: ["Live", "GitHub"]
    },
    {
      name: "Mind Craft Wellness",
      description: "Next.js 14, Sanity CMS, Tailwind CSS, Framer Motion. 95+ Lighthouse scores, SEO optimised, accessible design.",
      links: ["Live", "GitHub"]
    },
    {
      name: "MoviesGPT",
      description: "Netflix-inspired platform with React, Redux, and OpenAI GPT API for intelligent movie recommendations based on user preferences and mood.",
      links: ["View Live", "Github"]
    }
  ];

  const skills = {
    frontend: "React, Next.js 14, Angular, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, GSAP, React Three Fiber.",
    stateData: "Redux Toolkit, Zustand, React Query, Supabase, REST APIs, WebSocket, OpenAI GPT, Sanity CMS."
  };

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-neutral-950">
      {/* Print/Download Buttons - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-4 py-2 rounded-lg shadow-lg transition-colors text-sm font-medium"
        >
          <Printer className="w-4 h-4" />
          Print
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-4 py-2 rounded-lg shadow-lg transition-colors text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="relative z-10 min-h-screen flex items-start justify-start">
        <div className="max-w-6xl w-full mx-auto bg-white dark:bg-neutral-900 shadow-aceternity p-4 md:p-20 md:pb-10 diagonal-pattern print:shadow-none print:p-8">

          {/* Header */}
          <div className="border-b-2 border-neutral-800 dark:border-neutral-200 pb-6 mb-8">
            <Heading className="text-3xl md:text-5xl">SOWRASREE BANERJEE</Heading>
            <SubHeading className="pt-2">
              Bangalore, Karnataka 560066 | +91-7024703913 | sourashree03@gmail.com
            </SubHeading>
            <p className="text-sm text-secondary dark:text-neutral-400 pt-2">
              <a href="https://www.linkedin.com/in/sowrasree-banerjee/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-neutral-200">
                linkedin.com/in/sowrasree-banerjee
              </a>
            </p>
          </div>

          {/* Websites, Portfolios, Projects */}
          <section className="mb-8 break-inside-avoid">
            <SectionHeading>WEBSITES, PORTFOLIOS, PROJECTS</SectionHeading>
            <div className="ml-5 space-y-1">
              <p className="text-secondary dark:text-neutral-300 text-sm">
                • <a href="https://hello.sourashreeart.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-neutral-200">https://hello.sourashreeart.com/</a>
              </p>
              <p className="text-secondary dark:text-neutral-300 text-sm">
                • <a href="https://achievr.sourashreeart.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-neutral-200">https://achievr.sourashreeart.com/</a>
              </p>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="mb-8 break-inside-avoid">
            <SectionHeading>PROFESSIONAL SUMMARY</SectionHeading>
            <p className="text-secondary dark:text-neutral-300 ml-5 text-sm md:text-base leading-relaxed">
              Experienced in building scalable web applications using React, Angular, HTML, CSS, and JavaScript — with strong fundamentals in responsive design and cross-browser compatibility.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8 break-inside-avoid">
            <SectionHeading>SKILLS</SectionHeading>
            <div className="ml-5 space-y-3">
              <div>
                <h4 className="font-bold text-neutral-800 dark:text-white text-sm mb-1">Frontend:</h4>
                <p className="text-secondary dark:text-neutral-300 text-sm">{skills.frontend}</p>
              </div>
              <div>
                <h4 className="font-bold text-neutral-800 dark:text-white text-sm mb-1">State, Data & Tools:</h4>
                <p className="text-secondary dark:text-neutral-300 text-sm">{skills.stateData}</p>
              </div>
            </div>
          </section>

          {/* Work History */}
          <section className="mb-8">
            <SectionHeading>WORK HISTORY</SectionHeading>
            <div className="ml-5 space-y-6">
              {workHistory.map((work, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="break-inside-avoid"
                >
                  <div className="mb-2">
                    <h3 className="font-bold text-neutral-800 dark:text-white text-base">{work.role}</h3>
                    <p className="font-semibold text-secondary dark:text-neutral-300 text-sm">{work.company}, {work.location}</p>
                    <p className="text-secondary dark:text-neutral-400 text-sm">{work.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {work.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-secondary dark:text-neutral-300 text-sm leading-relaxed">
                        • {resp}
                      </li>
                    ))}
                  </ul>
                </MotionDiv>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8 break-inside-avoid">
            <SectionHeading>EDUCATION</SectionHeading>
            <div className="ml-5">
              <h3 className="font-bold text-neutral-800 dark:text-white text-base">National Institute Of Technology Raipur</h3>
              <p className="text-secondary dark:text-neutral-300 text-sm">Raipur, India</p>
              <p className="text-secondary dark:text-neutral-300 text-sm">B.Tech, Metallurgical Engineering, 01/2019</p>
              <p className="text-secondary dark:text-neutral-300 text-sm">GPA: CGPA: 8.51</p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <SectionHeading>PROJECTS</SectionHeading>
            <div className="ml-5 space-y-3">
              {projects.map((project, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="break-inside-avoid"
                >
                  <p className="text-secondary dark:text-neutral-300 text-sm leading-relaxed">
                    • <span className="font-bold text-neutral-800 dark:text-white">{project.name}</span> — {project.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-8 {
            padding: 2rem !important;
          }
          @page {
            margin: 0.75in;
            size: letter;
          }
          .break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .dark .diagonal-pattern {
            background: white;
          }
          .diagonal-pattern {
            background: white;
          }
          * {
            color: black !important;
          }
          a {
            color: #1a56db !important;
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  );
}
