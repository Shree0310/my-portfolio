import Heading from "@/components/Heading";
import NewPortfolio from "@/components/NewPortfolio";
import Projects2 from "@/components/Project2";
import SubHeading from "@/components/SubHeading";
import { projects } from "@/components/Constants/projects";
import Footer from "@/components/Navbar/Footer";

const Projects2Page =() => {
    return (
        <NewPortfolio className="min-h-[200vh] p-4 sm:p-6 md:p-20 md:pb-10">
            <Heading>Sowrasree Banerjee</Heading>
            <SubHeading>
                I&apos;m a passionate Frontend Engineer based in Bangalore, India, with a deep love for building elegant and efficient web applications. 
                With 6 years of professional experience, 
                I&apos;ve had the privilege of working on diverse projects—from AI-powered features to complex enterprise applications.
            </SubHeading>
            <Projects2 projects={projects.slice(0,4)}/>
            <Footer/>
        </NewPortfolio>
    )
}
export default Projects2Page;