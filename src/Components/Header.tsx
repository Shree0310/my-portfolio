import Link from "next/link";

const Header = () => {
    return (
        <div>
            <header className="bg-[#272640] shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 text-gray-700 font-bold">
                        {/* <div className="flex justify-end py-4 text-2xl text-neutral-100">
                            Sowrasree Banerjee
                        </div> */}
                        <div>
                            <ul className="flex py-4 text-lg text-neutral-200">
                                <Link className="px-3" href="/">Home</Link>
                                <Link className="px-3" href="/projects">Projects</Link>
                                <Link className="px-3" href="/snippets">Snippets</Link>
                                <Link className="px-3" href="">Blogs</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>   
        </div>
    )
}
export default Header;