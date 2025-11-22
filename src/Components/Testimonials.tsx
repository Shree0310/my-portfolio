import SectionHeading from "./SectionHeading";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const data = [
        {
            quote: `Her expertise in Tailwind CSS and Framer Motion brought our designs to 
            life in ways we didn't think were possible. The animations are smooth, purposeful, and enhance the user experience beautifully`,
            name: "Rahul Mehta",
            avatar: "/Images/Avatar2.jpg"
        },
        {
            quote: `Her ability to bridge the gap between design and development is remarkable. She asks the right questions, 
            proposes elegant solutions, and ensures every stakeholder is aligned throughout the process.`,
            name: "Swati Kumari",
            avatar: "/Images/Avatar3.jpg"
        },
        {
            quote: `The React dashboard Sourashree built for us handles complex data visualization beautifully. 
            It's fast, intuitive, and our clients constantly compliment the interface.`,
            name: "Swati Kumari",
            avatar: "/Images/Avatar4.jpg"
        },
        {
            quote: `Sourashree builds with the user in mind.
             Her implementations are not just technically sound but also intuitive and accessible. She genuinely cares about creating experiences that delight users.`,
            name: "Rohan Singh, UX Research Lead",
            avatar: "/Images/Avatar1.jpg"
        },
    ]
    return <div>
        <SectionHeading delay={0.8} className="text-primary dark:text-neutral-300">People love my work..</SectionHeading>
        <div className="flex py-4" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))' }}>
            <Marquee speed={20}>
                {data.map((testimonial,idx) => (
                <div>
                    <TestimonialCard key={`testimonial-${idx}`} {...testimonial}/>
                </div>
                ))}
            </Marquee>
        </div>
    </div>
}
export default Testimonials;

const TestimonialCard = ({quote, name, avatar}: {quote: string, name: string, avatar: string}) => {
    return <div className="flex flex-col justify-between dark:bg-neutral-700 gap-4 shadow-aceternity max-w-60 w-full h-60 p-4 rounded-xl ml-10 py-4 mt-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-200">{quote}</p>
        <div className="flex items-center gap-4">
            <img src={avatar} alt={name} className="size-4 rounded-full"/>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">{name}</p>
        </div>

    </div>
}
