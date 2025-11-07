import Projects from "@/Components/Projects";
import NewPortfolio from "@/Components/NewPortfolio";
import Navbar from "@/Components/Navbar/Navbar";
import Projects2 from "@/Components/Project2";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import { Link } from 'next-view-transitions'
import Image from "next/image";

export const metadata: Metadata = {
    title: 'All Blogs - Sowrasree banerjee',
    description: 'All my general tech thoughts'
}

const BlogsPage = async () => {
    const allBlogs = await getBlogs();
    console.log("All Blogs:", allBlogs);
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">All Blogs</h1>
         <p className="text-secondary md:text-base text-sm pt-4 max-w-base">I'm Sowrasree Banerjee a passionate Frontend Engineer.
            I build scalable and efficient systems. I currently work as a Software Engineer at EPAM Systems with Google. </p>
        <div className="flex flex-col gap-4 py-10">
           {allBlogs.map((blog) => (
            <Link className="" href={`/blog/${blog.slug}`} key={blog.slug}>
                <div className="flex items-center justify-between">
                    <h2 className="text-primary text-base font-bold tracking-tight text-sm pt-2 md:text-sm">{blog.title}</h2>
                    <p className="text-secondary text-base font-bold tracking-tight text-sm pt-2 md:text-sm">{new Date(blog.date || '').toLocaleDateString('en-us',{
                         weekday: 'long', 
                         year: 'numeric',
                         month: 'short',
                         day: 'numeric' 
                        })}
                    </p>
                </div>
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title ?? "Blog image"}
                    width={350}
                    height={350}
                    className="rounded py-4"
                  />
                ) : null}
                <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">{blog.description}</p>
            </Link>
           ))}
        </div>
    </NewPortfolio>
</div>
}

export default BlogsPage;