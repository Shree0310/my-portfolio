import {promises as fs} from 'fs';
import path from 'path';

const getSingleBLog = async(slug: string) => {
    try{
        const singleBlog = await fs.readFile(
        path.join(process.cwd(), 'src/data/',`${slug}.mdx`),
        'utf-8');
    
        if(!singleBlog){
            return null;
        }

        return singleBlog;   
    } catch(error) {
        console.error(`Error while accessing the blog for slug "${slug}":`, error);
    }
    
}
export default getSingleBLog;