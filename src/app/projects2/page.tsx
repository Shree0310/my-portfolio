import Heading from "@/Components/Heading";
import NewPortfolio from "@/Components/NewPortfolio";
import Projects2 from "@/Components/Project2";
import SubHeading from "@/Components/SubHeading";

const Projects2Page =() => {
    return <div className="div">
        <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
            <Heading>Sowrasree Banerjee</Heading>
                <SubHeading>
                    I'm a passionate Frontend Engineer based in Bangalore, India, with a deep love for building elegant and efficient web applications. 
                    With 6 years of professional experience, 
                    I've had the privilege of working on diverse projects—from AI-powered features to complex enterprise applications.
                </SubHeading>
            <Projects2/>
        </NewPortfolio>
    </div>
}
export default Projects2Page;