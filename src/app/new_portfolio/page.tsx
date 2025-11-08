import NewPortfolio from "@/Components/NewPortfolio";
import Projects2 from "@/Components/Project2";
import LandingBlogs from "@/Components/Landing-blogs";
import Heading from "@/Components/Heading";
import SubHeading from "@/Components/SubHeading";

const NewPortfolioPage = () => {
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <Heading>Sowrasree Banerjee</Heading>
         <SubHeading>
            I'm a Frontend Engineer with 6 years of experience building scalable, performant web applications. 
            Currently at EPAM Systems working with Google, I specialize in React, Next.js, 
            and creating pixel-perfect interfaces that users love.
         </SubHeading>
        <Projects2/>
        <LandingBlogs/>
    </NewPortfolio>
</div>
}

export default NewPortfolioPage;