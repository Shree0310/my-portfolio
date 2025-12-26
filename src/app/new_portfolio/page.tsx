import NewPortfolio from "@/components/NewPortfolio";
import Projects2 from "@/components/Project2";
import LandingBlogs from "@/components/Landing-blogs";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import Footer from "@/components/Navbar/Footer";
import { projects } from "@/components/Constants/projects";
import Testimonials from "@/components/Testimonials";
import Roles from "@/components/Roles";

const NewPortfolioPage = () => {
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className=" p-4 md:p-20 md:pb-10">
        <div className="flex flex-grid gap-2">
            <Heading>Sowrasree Banerjee</Heading>
            <Roles/>
        </div>
         <SubHeading>
            I&apos;m a Frontend Engineer with 6 years of experience building scalable, performant web applications. 
            Currently at EPAM Systems working with Google, I specialize in React, Next.js, 
            and creating pixel-perfect interfaces that users love.
         </SubHeading>
        <Projects2 projects={projects.slice(0,3)}/>
        <LandingBlogs/>
        <Testimonials/>
        <Footer/>
    </NewPortfolio>
</div>
}

export default NewPortfolioPage;