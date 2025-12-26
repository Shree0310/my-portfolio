import { Collage } from "@/components/Collage";
import Heading from "@/components/Heading";
import Footer from "@/components/Navbar/Footer";
import NewPortfolio from "@/components/NewPortfolio";
import SubHeading from "@/components/SubHeading";
import TimeLine from "@/components/Timeline";

export default function AboutPage() {
    return <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <Heading>Sowrasree Banerjee</Heading>
        <SubHeading>
            I&apos;m a passionate Frontend Engineer based in Bangalore, India, with a deep love for building elegant and efficient web applications. 
            With 6 years of professional experience, 
            I&apos;ve had the privilege of working on diverse projects—from AI-powered features to complex enterprise applications.
        </SubHeading>
        <Collage/>
        <TimeLine/>
        <Footer/>
    </NewPortfolio>
}