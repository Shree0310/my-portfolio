import Projects from "@/Components/Projects";
import NewPortfolio from "@/Components/NewPortfolio";
import Navbar from "@/Components/Navbar/Navbar";
import Projects2 from "@/Components/Project2";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'All Blogs - Sowrasree banerjee',
    description: 'All my general tech thoughts'
}

const BlogsPage = () => {
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">All Blogs</h1>
         <p className="text-secondary md:text-base text-sm pt-4 max-w-base">I'm Sowrasree Banerjee a passionate Frontend Engineer.
            I build scalable and efficient systems. I currently work as a Software Engineer at EPAM Systems with Google. </p>
    </NewPortfolio>
</div>
}

export default BlogsPage;