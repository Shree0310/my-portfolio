"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Roles = () => {
    const rolesDes = ['Software Engineer', 'Frontend Engineer', 'Design Engineer', 'Software Developer']
    const [currentRole, setCurretRole] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurretRole((prev) => (prev+1) % rolesDes.length)         
        },2000);
        
        return () => clearInterval(timer);
    },[])
    return <div>
        <p className="px-8 mt-2 ml-2 py-[1px] border border-gray-200 shadow-xl rounded-md text-secondary dark:text-teal-300 text-sm">
            {rolesDes[currentRole]}
        </p>
    </div>
}
export default Roles;