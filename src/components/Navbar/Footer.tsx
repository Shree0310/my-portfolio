import Link from "next/link";
import { IconBrandX, IconBrandLinkedinFilled, IconBrandGithubFilled } from '@tabler/icons-react';

const Footer = () => {
    return (
        <footer className="flex justify-between border-t border-neutral-100 px-2 py-3 mt-10">
            <p className="text-xs text-neutral-500 dark:text-neutral-300 ">Built with love by Sowrasree</p>
            <div className="flex justify-center items-center gap-4">
                <Link href="https://x.com/sourashreeart" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                    <IconBrandX stroke={2} className="w-4 h-4 text-neutral-500 dark:text-neutral-400  hover:text-neutral-700 dark:hover:text-neutral-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/sowrasree-banerjee-810ba2131/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedinFilled className="w-4 h-4 text-neutral-500 dark:text-neutral-400  hover:text-neutral-700 dark:hover:text-neutral-200" />
                </Link>
                <Link href="https://github.com/Shree0310" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <IconBrandGithubFilled className="w-4 h-4 text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-200 hover:text-neutral-700" />
                </Link>
            </div>
        </footer>
    )
}
export default Footer;