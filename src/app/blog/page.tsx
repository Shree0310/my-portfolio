import NewPortfolio from "@/Components/NewPortfolio";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import { Link } from 'next-view-transitions'
import Heading from "@/Components/Heading";
import SubHeading from "@/Components/SubHeading";
import Footer from "@/Components/Navbar/Footer";

export const metadata: Metadata = {
    title: 'All Blogs - Sowrasree banerjee',
    description: 'All my general tech thoughts'
}

const BlogsPage = async () => {
    const allBlogs = await getBlogs();
    console.log("All Blogs:", allBlogs);
return <div className="min-h-screen ">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <div className="m-12 rounded-4xl mx-auto bg-linear-to-br from-white via-cyan-100 to-teal-100
         dark:from-black dark:via-neutral-950 dark:to-purple-800 opacity-90 h-96 w-96 md:h-[290px] md:w-5xl py-16 px-8 shadow-2xl">
            <h1 className=" text-neutral-800 dark:text-neutral-300 md:text-5xl text-3xl font-bold p-2">Technical Articles & Blog</h1>
            <p className=" text-neutral-800 dark:text-neutral-400 text-lg font-normal p-2">Deep dive into frontend development work, design systems, animations and how to implement them in real work applications.</p>
        </div>
        <div className="flex flex-col gap-4 py-4 px-4 ml-5">
           {allBlogs.map((blog) => (
            <Link className="" href={`/blog/${blog.slug}`} key={blog.slug}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h2 className="text-primary dark:text-neutral-300 font-bold tracking-tight text-sm pt-2 md:text-lg">{blog.title}</h2>
                    <p className="text-secondary dark:text-neutral-500 font-bold tracking-tight text-sm pt-2 md:text-sm">{new Date(blog.date || '').toLocaleDateString('en-us',{
                         weekday: 'long', 
                         year: 'numeric',
                         month: 'short',
                         day: 'numeric' 
                        })}
                    </p>
                </div>
                {/* {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title ?? "Blog image"}
                    width={350}
                    height={350}
                    className="mx-auto w-full overflow-hidden rounded-lg border border-neutral-200 shadow-xl py-4"/>
                ) : null} */}
                <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">{blog.description}</p>
            </Link>
           ))}
        </div>
    </NewPortfolio>
    <Footer/>
</div>
}

export default BlogsPage;