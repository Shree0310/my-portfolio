import { getBlogs } from "@/utils/mdx";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import MotionDiv from "./MotionDiv";

const LandingBlogs = async () => {
    const allBlogs = await getBlogs();

    return <div>
        <SectionHeading delay={0.2} className="text-primary dark:text-neutral-300">I love putting my thoughts down...</SectionHeading>
        <div className="flex flex-col gap-4 pt-4 pb-10">
           {allBlogs.map((blog,idx) => (
            <MotionDiv
            key={idx}
                initial= {{
                    opacity: 0,
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    duration: 0.3,
                    delay: idx *0.1
                }}>
                <Link className="" href={`/blog/${blog.slug}`} key={blog.slug}>
                    <div className="flex items-center justify-between">
                        <h2 className="text-primary dark:text-white font-bold tracking-tight text-lg pt-2 md:text-lg">{blog.title}</h2>
                        <p className="text-secondary font-bold tracking-tight text-sm pt-2 md:text-sm">{new Date(blog.date || '').toLocaleDateString('en-us',{
                            weekday: 'long', 
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric' 
                            })}
                        </p>
                    </div>
                    <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">{blog.description}</p>
                </Link>
            </MotionDiv>
           ))}
        </div>
    </div>
}
export default LandingBlogs;