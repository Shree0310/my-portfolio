import { getBlogs } from "@/utils/mdx";
import Image from "next/image";
import Link from "next/link";

const LandingBlogs = async () => {
    const allBlogs = await getBlogs();

    return <div>
        <h1 className="text-primary pt-4">My Blogs</h1>
        <p className="text-secondary mb-10">I love putting my thoughts down</p>
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
    </div>
}
export default LandingBlogs;