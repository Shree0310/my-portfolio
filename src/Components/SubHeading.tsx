"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

const SubHeading = ({
    as: Tag = "p",
    children,
    className
    }:{
    as?: "p",
    children: React.ReactNode,
    className?: string
}) => {
    return <motion.div
               initial={{
                opacity:0,
                filter: "blur(10px)",
                y: 10
               }} 
               whileInView={{
                opacity:1,
                filter: "blur(0)",
                y:0
               }}
               viewport={{
                once:true
               }}
                >
        <Tag className={cn("text-secondary md:text-base text-sm pt-4 max-w-base",
            className
        )}>{children}</Tag>
    </motion.div>
}
export default SubHeading;