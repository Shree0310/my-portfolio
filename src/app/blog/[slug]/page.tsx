import NewPortfolio from "@/Components/NewPortfolio";
import { Metadata } from "next";

import { compileMDX } from 'next-mdx-remote/rsc'
import getSingleBLog from "@/utils/mdx";
import { redirect } from "next/navigation";



export const metadata: Metadata = {
    title: 'All Blogs - Sowrasree banerjee',
    description: 'All my general tech thoughts'
}

const SingleBlogPage = async ({params}: {params:{slug: string};}) => {
    const slug = params.slug;
    const singleBlog = await getSingleBLog(slug);

    if(!singleBlog){
        redirect('/blog')
    }
    const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  })
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <div className="prose">
            {content}
        </div>
    </NewPortfolio>
</div>
}

export default SingleBlogPage;