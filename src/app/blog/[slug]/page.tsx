import NewPortfolio from "@/Components/NewPortfolio";
import { Metadata } from "next";

import {getBlogFrontMatterBySlug, getSingleBLog } from "@/utils/mdx";
import { redirect } from "next/navigation";


export const generateMetadata = async ({params}:{params:{slug: string}}): Promise<Metadata> => {
    const { slug } = await params;
    const frontmatter = await getBlogFrontMatterBySlug(slug);

    if(!frontmatter){
        return {
            title: "Blog not found",
        };
    }
    return {
        title: frontmatter?.title ?? 'Blog - Sowrasree banerjee',
        description: frontmatter?.description ?? 'All my general tech thoughts'
    };
}

const SingleBlogPage = async (props: { params: { slug: string } }) => {
    const { params } = await props;
    const slug = params.slug;
    const blog = await getSingleBLog(slug);

    if(!blog){
        redirect('/blog')
    }

    const {content, frontmatter} = blog;

    console.log(frontmatter);
   
return <div className="min-h-screen flex items-start justify-start">
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <div className="mx-auto w-full overflow-hidden rounded-lg border border-neutral-200 shadow-xl md:h-[29rem] mb-20">
            <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="w-full h-full object-cover"
            />
        </div>

        <div className="prose mx-auto mt-6">
            {content}
        </div>
    </NewPortfolio>
</div>
}

export default SingleBlogPage;