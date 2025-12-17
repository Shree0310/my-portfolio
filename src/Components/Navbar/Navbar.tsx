"use client"

import Image from "next/image";
import NewPortfolio from "../NewPortfolio";
import Profile_Pic from "../../../public/Images/Profile_Pic.jpeg";
import {Link} from "next-view-transitions";
import {easeInOut, motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion';
import { useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa'

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
            href: '/'
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

    const y = useTransform(scrollY, [0,100], [0,10]);

    const width = useTransform(scrollY, [0,100], ["50%", "40%"]);

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
    return <NewPortfolio className="relative">
        <motion.nav
        style = {{
            boxShadow:scrolled ? "var(--shadow-aceternity)" : "none",
            width: width,
            y: y,
        }}
        transition={{
            duration:0.3,
            ease: easeInOut
        }}
        className="fixed inset-x-0 top-0 mx-auto z-50 max-w-4xl rounded-4xl items-center flex justify-between p-2 bg-white dark:bg-neutral-800 left-0">
            <Link href="/">
                <Image className="h-12 w-12 rounded-full" src={Profile_Pic} alt="profile_pic" height="100" width="100"/>
            </Link>
            <div className="flex items-center gap-2 p-2 ">
                
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
                ) )}
            </div>
        </motion.nav>
    </NewPortfolio>
}

export default Navbar;