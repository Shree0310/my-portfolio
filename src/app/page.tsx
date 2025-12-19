import Heading from '@/Components/Heading'
import LandingBlogs from '@/Components/Landing-blogs'
import Footer from '@/Components/Navbar/Footer'
import NewPortfolio from '@/Components/NewPortfolio'
import Projects2 from '@/Components/Project2'
import Roles from '@/Components/Roles'
import SubHeading from '@/Components/SubHeading'
import Testimonials from '@/Components/Testimonials'
import { projects } from "@/Components/Constants/projects";


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
          <LandingBlogs/>
          <Testimonials/>
          <Footer/>
        </NewPortfolio>
      </div>
    </div>
  )
}