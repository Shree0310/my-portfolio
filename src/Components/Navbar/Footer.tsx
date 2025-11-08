import Link from "next/link";
import { IconBrandX, IconBrandLinkedinFilled, IconBrandGithubFilled } from '@tabler/icons-react';
import NewPortfolio from "../NewPortfolio";

const Footer = () => {
    return <NewPortfolio className="flex justify-between border-t border-neutral-100 px-2 py-3 min-h-screen">
        <p className="text-xs text-neutral-500">Built with love by Sowrasree Banerjee</p>
        <div className="flex justify-center items-center gap-4">
            <Link href="https://x.com/sourashreeart">
                <IconBrandX stroke={2} className="size-4 text-neutral-500 hover:text-neutral-700" />
            </Link>
            <Link href="https://www.linkedin.com/in/sowrasree-banerjee-810ba2131/">
                <IconBrandLinkedinFilled className="size-4 text-neutral-500 hover:text-neutral-700" />
            </Link>
            <Link href="https://github.com/Shree0310">
                <IconBrandGithubFilled className="size-4 text-neutral-500 hover:text-neutral-700" />
            </Link>
        </div>
    </NewPortfolio>
}
export default Footer;