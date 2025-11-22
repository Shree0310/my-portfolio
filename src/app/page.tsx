
import { Content } from '@/Components/Content'
import Header from '@/Components/Header'
import Heading from '@/Components/Heading'
import Introduction from '@/Components/Introduction'
import LandingBlogs from '@/Components/Landing-blogs'
import Footer from '@/Components/Navbar/Footer'
import NewPortfolio from '@/Components/NewPortfolio'
import Projects2 from '@/Components/Project2'
import Roles from '@/Components/Roles'
import Skills from '@/Components/Skills'
import SubHeading from '@/Components/SubHeading'
import Testimonials from '@/Components/Testimonials'
import Card from '@/Components/ui/Card'
import { motion } from 'framer-motion'
import { projects } from "@/Components/Constants/projects";


export default function Home() {
  return (
    <div className='relative h-full w-full'>
      {/* Pattern background layer */}
      <div 
        className="absolute inset-0 z-0 diagonal-pattern bg-fixed"
      />
      
      {/* Content layer */}
      <div className="relative z-10">
        <NewPortfolio className="p-4 md:p-20 md:pb-10">
          <div className="flex flex-grid gap-2">
            <Heading>Sowrasree Banerjee</Heading>
            <Roles/>
          </div>
          <SubHeading>
            I'm a Frontend Engineer with 6 years of experience...
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