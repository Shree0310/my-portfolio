import Heading from '@/components/Heading'
import LandingBlogs from '@/components/Landing-blogs'
import Footer from '@/components/Navbar/Footer'
import NewPortfolio from '@/components/NewPortfolio'
import Projects2 from '@/components/Project2'
import Roles from '@/components/Roles'
import SubHeading from '@/components/SubHeading'
import Testimonials from '@/components/Testimonials'
import { projects } from "@/components/Constants/projects";
import WorkExperience from '@/components/WorkExperience'


export default function Home() {
  return (
    <div className='relative min-h-screen w-full'>
      {/* Pattern background layer */}
      <div 
        className="absolute inset-0 z-0  pointer-events-none"
      />
      
      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex items-start justify-start">
        <NewPortfolio className="p-4 md:p-20 md:pb-10 shadow-xl diagonal-pattern">
          <div className="flex flex-grid gap-2">
            <Heading className='text-lg'>Sowrasree Banerjee</Heading>
            <Roles/>
          </div>
          <SubHeading>
            I&apos;m a Frontend Engineer with 6 years of experience...
          </SubHeading>
          <Projects2 projects={projects.slice(0,3)}/>
          <WorkExperience/>
          <LandingBlogs/>
          <Testimonials/>
          <Footer/>
        </NewPortfolio>
      </div>
    </div>
  )
}