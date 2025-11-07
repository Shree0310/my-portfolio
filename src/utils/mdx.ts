import {promises as fs} from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc'


const getSingleBLog = async(slug: string) => {
    try{
        const singleBlog = await fs.readFile(
        path.join(process.cwd(), 'src/data/',`${slug}.mdx`),
        'utf-8');
    
        if(!singleBlog){
            return null;
        }

         const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  })

    return {content, frontmatter};   
    } catch(error) {
        console.error(`Error while accessing the blog for slug "${slug}":`, error);
        return null;
    }
    
}
export default getSingleBLog;

export const getBlogs = async() => {
    const files = await fs.readdir(
        path.join(process.cwd(), 'src/data')
    )
}

const getBlogFrontMatterBySlug = async (slug: string) => {
     const singleBlog = await fs.readFile(
        path.join(process.cwd(), 'src/data/',`${slug}.mdx`),
        'utf-8');
    
        if(!singleBlog){
            return null;
        }
    const { frontmatter } = await compileMDX<{ title: string}>({
        source: singleBlog,
        options: { parseFrontmatter: true}
    })
    return frontmatter;
}
