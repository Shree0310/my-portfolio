import { Collage } from "@/Components/Collage";
import NewPortfolio from "@/Components/NewPortfolio";
import TimeLine from "@/Components/Timeline";

export default function AboutPage() {
    return <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Sowrasree Banerjee</h1>
        <p className="text-secondary md:text-base text-xs pt-4 max-w-base">
            I'm a passionate Frontend Engineer based in Bangalore, India, with a deep love for building elegant and efficient web applications. 
            With 6 years of professional experience, 
            I've had the privilege of working on diverse projects—from AI-powered features to complex enterprise applications.
        </p>
        <Collage/>
        <TimeLine/>
    </NewPortfolio>
}