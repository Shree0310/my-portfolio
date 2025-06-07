import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'


const TypeScriptDemo = () => {
    const [activeType, setActiveType] = useState(0);
    const typeDefinitions = [
        {
          name: "User",
          definition: "{\n  id: number;\n  name: string;\n  email: string;\n}"
        },
        {
          name: "Project", 
          definition: "{\n  title: string;\n  tech: string[];\n  url: string;\n  featured: boolean;\n}"
        },
        {
          name: "Skill Level",
          definition: "\"beginner\" | \"intermediate\" | \"advanced\" | \"expert\""
        }
      ];

      useEffect(() => {
        const timer = setInterval(() => {
            setActiveType((prev) => ( prev + 1 ) % typeDefinitions.length);
        },3000);

        return () => {
            clearInterval(timer);
        }
      }, []);
    return (
        <div className="bg-blue-950 rounded-lg text-sm text-mono p-4">
            <div className="text-2xl text-white font-bold">
                TypeScript
            </div>
            <div className="text-blue-400 text-sm py-2">//TypeScript Definitions</div>
            <AnimatePresence mode="wait">
                <motion.div
                key={activeType}
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        y: -20
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    className="text-neutral-300">
                    <span className="text-purple-500 px-2">interface</span>
                    <span className="text-yellow-500 px-1">{typeDefinitions[activeType].name}</span>
                    <span className="text-white"></span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray whitespace-pre-wrap">
                        {typeDefinitions[activeType].definition}
                    </motion.span>
                </motion.div>
            </AnimatePresence>

        </div>
    )
}
export default TypeScriptDemo;