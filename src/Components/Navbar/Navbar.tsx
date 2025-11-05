"use client"

import Image from "next/image";
import NewPortfolio from "../NewPortfolio";
import Profile_Pic from "../../../public/Images/Profile_Pic.jpeg";
import { Niramit } from "next/font/google";
import Link from "next/link";
import {easeInOut, motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { useState } from "react";

const Navbar = () => {
    const navItems = [
        {
            title: 'About',
            href:'/about'
        },
        {
            title: 'Contact',
            href: '/contact'
        },
        {
            title:'Blog',
            href:'/blog'
        }
    ]

    const [hovered, setHovered] = useState<Number | null>(null);
    const {scrollY} = useScroll();
    const [scrolled, setScrolled] = useState<boolean>(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("scrolly", latest);
        if(latest>20) {
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    })
    return <NewPortfolio className="relative">
        <motion.nav
        animate = {{
            boxShadow:scrolled ? "var(--shadow-aceternity)" : "none",
            width: scrolled ? '50%' : '100%',
            y: scrolled ? 10 : 0,
        }}
        transition={{
            duration:0.3,
            ease: easeInOut
        }}
        className="fixed inset-x-0 top-0 mx-auto max-w-4xl rounded-4xl items-center flex justify-between p-2 bg-white left-0">
            <Image className="h-12 w-12 rounded-full" src={Profile_Pic} alt="profile_pic" height="100" width="100"/>
            <div className="flex items-center p-2">
                {navItems.map((item, idx) => (
                    <Link 
                        className="p-2 text-sm relative" 
                        href={item.href} 
                        key={idx}
                        onMouseEnter={()=> setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}>
                        {hovered===idx &&
                        (
                            <motion.span layoutId="hoverede-span" className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"/>

                        )}
                        <span className="z-10 relative">{item.title}</span>
                    </Link>
                ) )}
            </div>
        </motion.nav>
    </NewPortfolio>
}

export default Navbar;