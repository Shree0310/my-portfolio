import Projects from "@/Components/Projects";
import NewPortfolio from "@/Components/NewPortfolio";
import Navbar from "@/Components/Navbar/Navbar";
import Projects2 from "@/Components/Project2";

const NewPortfolioPage = () => {
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Sowrasree Banerjee</h1>
         <p className="text-secondary md:text-base text-sm pt-4 max-w-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Projects2/>
    </NewPortfolio>
</div>
}

export default NewPortfolioPage;