"use client"

import Image from "next/image";
import NewPortfolio from "../NewPortfolio";
import Profile_Pic from "../../../public/Images/Profile_Pic.jpeg";
import {Link} from "next-view-transitions";
import {easeInOut, motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion';
import { useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa'
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
    const navItems = [
        {
            title: 'About',
            href:'/about'
        },
        {
            title: "Projects",
            href: '/projects2'
        },
        {
            title: "Components",
            href: '/components'
        },
        {
            title: 'Contact',
            href: '/contact'
        },
        {
            title:'Blog',
            href:'/blog'
        },
        {
            title:'Testimonials',
            href:'/testimonials'
        }
    ]

    const [hovered, setHovered] = useState<number | null>(null);

    const {scrollY} = useScroll();

    const [scrolled, setScrolled] = useState<boolean>(false);

    const width = useTransform(scrollY, [0,100], ["50%", "40%"]);

    const y = useTransform(scrollY, [0,100], [0,10]);

    const [isDarkMode, setIsDrakMode] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("scrolly", latest);
        if(latest>20) {
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    })

    const handleThemeChange = ()=>{
        setIsDrakMode(!isDarkMode)
        const currTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", currTheme);
    }

    const [isOpen, setIsOpen] = useState(false);

    return <NewPortfolio className="relative">
        <motion.nav
        style = {{
            boxShadow:scrolled ? "var(--shadow-aceternity)" : "none",
            
            y: y,
        }}
        transition={{
            duration:0.3,
            ease: easeInOut
        }}
        className="relative md:width:width, md:fixed inset-x-0 top-0 mx-auto z-50 w-full md:w-1/2 md:max-w-4xl rounded-4xl items-center flex justify-between p-2 bg-white dark:bg-neutral-800 left-0">
            <Link href="/">
                <Image className="h-12 w-12 rounded-full" src={Profile_Pic} alt="profile_pic" height="100" width="100"/>
            </Link>
            <div className="hidden md:flex items-center gap-2 p-2 ">
                <button onClick={() => handleThemeChange() } 
                        className="h-8 w-8 ring-1 flex justify-center items-center cursor-pointer ring-neutral-200 rounded-full bg-gray-100 dark:bg-neutral-800 shadow-2xl">
                   {isDarkMode ?  <FaSun/> :  <FaMoon/>}
                </button>
                {navItems.map((item, idx) => (
                    <Link 
                        className="p-2 text-sm relative" 
                        href={item.href} 
                        key={idx}
                        onMouseEnter={()=> setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}>
                        {hovered===idx &&
                        (
                            <motion.span layoutId="hoverede-span" className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-600"/>

                        )}
                        <span className="z-10 relative">{item.title}</span>
                    </Link>
                ))}
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    <IconMenu2/>
            </button>
            {isOpen && 
                <div className="absolute inset-x-0 bg-white top-2  h-screen w-screen dark:bg-neutral-800 dark:text-neutral-100 text-neutral-900 rounded-4xl">
                    {/* moved close button to top-right corner and added padding + ring for visibility */}
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="absolute right-4 top-4 p-2 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-600 bg-white dark:bg-neutral-800 shadow">
                        <IconX/>
                    </button>
                    <div className="flex flex-col items-center gap-2 p-2 mt-24 ">
                        {navItems.map((item, idx) => (
                            <Link 
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-2xl relative font-semibold " 
                                href={item.href} 
                                key={idx}
                                onMouseEnter={()=> setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}>
                                {hovered===idx &&
                                (
                                    <motion.span layoutId="hovered-span" className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-600"/>

                                )}
                                <span className="z-10 relative">{item.title}</span>
                                </Link>
                            ))}
                            <button onClick={() => handleThemeChange() } 
                                        className="h-8 w-8 ring-1 flex justify-center items-center cursor-pointer ring-neutral-200 rounded-full bg-gray-100 dark:bg-neutral-800 shadow-2xl">
                                {isDarkMode ?  <FaSun size={10}/> :  <FaMoon size={10}/>}
                            </button>
                            </div>
                </div>}
        </motion.nav>
    </NewPortfolio>
}

export default Navbar;