import Heading from "@/Components/Heading";
import NewPortfolio from "@/Components/NewPortfolio";
import Projects2 from "@/Components/Project2";
import SubHeading from "@/Components/SubHeading";
import { projects } from "@/Components/Constants/projects";
import Footer from "@/Components/Navbar/Footer";

const Projects2Page =() => {
    return <div className="div">
        <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
            <Heading>Sowrasree Banerjee</Heading>
                <SubHeading>
                    I&apos;m a passionate Frontend Engineer based in Bangalore, India, with a deep love for building elegant and efficient web applications. 
                    With 6 years of professional experience, 
                    I&apos;ve had the privilege of working on diverse projects—from AI-powered features to complex enterprise applications.
                </SubHeading>
            <Projects2 projects={projects.slice(0,3)}/>
            <Footer/>
        </NewPortfolio>
    </div>
}
export default Projects2Page;