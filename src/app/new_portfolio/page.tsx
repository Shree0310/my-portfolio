import NewPortfolio from "@/Components/NewPortfolio";
import Projects2 from "@/Components/Project2";
import LandingBlogs from "@/Components/Landing-blogs";

const NewPortfolioPage = () => {
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Sowrasree Banerjee</h1>
        <p className="text-secondary md:text-base text-sm pt-4 max-w-base">
            I'm a Frontend Engineer with 6 years of experience building scalable, performant web applications. 
            Currently at EPAM Systems working with Google, I specialize in React, Next.js, 
            and creating pixel-perfect interfaces that users love.
        </p>
        <Projects2/>
        <LandingBlogs/>
    </NewPortfolio>
</div>
}

export default NewPortfolioPage;