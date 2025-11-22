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
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <Heading>All Blogs</Heading>
         <SubHeading>I&apos;m Sowrasree Banerjee a passionate Frontend Engineer.
            I build scalable and efficient systems. I currently work as a Software Engineer at EPAM Systems with Google. </SubHeading>
        <div className="flex flex-col gap-4 py-10">
           {allBlogs.map((blog) => (
            <Link className="" href={`/blog/${blog.slug}`} key={blog.slug}>
                <div className="flex items-center justify-between">
                    <h2 className="text-primary dark:text-neutral-300 font-bold tracking-tight text-sm pt-2 md:text-sm">{blog.title}</h2>
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