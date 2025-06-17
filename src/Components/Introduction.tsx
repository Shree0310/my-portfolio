import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import Button from "./ui/Button";

const Introduction = () => {
    const CodeIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      );
      
      const PaletteIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="13.5" cy="6.5" r=".5"/>
          <circle cx="17.5" cy="10.5" r=".5"/>
          <circle cx="8.5" cy="7.5" r=".5"/>
          <circle cx="6.5" cy="12.5" r=".5"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      );
      
      const ZapIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
        </svg>
      );

      const DownloadIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      );
      
      const ArrowDownIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      );
    const [currentSkill, setCurrentSkill] = useState(0);
    const skills = [
        { name: "Frontend", icon: <CodeIcon />, color: "blue" },
        { name: "Design", icon: <PaletteIcon />, color: "purple" },
        { name: "React", icon: <ZapIcon />, color: "yellow" }
      ];
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSkill((prev) => ( prev + 1) % skills.length);
        }, 2000);

        return () => clearInterval(timer);
    },[]);
    return (
        <div className="bg-[#3e1f47]">
            <div className="grid grid-cols-1 min-h-2/3 pt-10">
            <div className="flex flex-wrap justify-center items-center px-6">
                <div className="max-h-lg">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        >
                        <h1 className="text-4xl text-neutral-300 font-bold mb-4">
                            Hi, I am {' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Sowrasree</span>
                        </h1>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentSkill}
                                initial={{ opacity: 0 }}
                                animate= {{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={`${
                                    skills[currentSkill].color === "blue" ? "text-blue-400" :
                                    skills[currentSkill].color === "purple" ? "text-purple-400" :
                                    'text-yellow-400' 
                                  }`}>
                               <span className="text-xl font-bold mb-4">{skills[currentSkill].name} Developer</span>                    
                            </motion.span>   
                        </AnimatePresence>       
                    </motion.div>
                    <p className="text-neutral-300 backdrop-opacity-80 leading-relaxed mb-4 max-w-lg mx-auto text center pt-4">
                        I craft digital experiences that blend beautiful design with robust functionality.
                        Passionate about modern web technologies and creating applications that make a difference.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button>View My Work</Button>
                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
                                  <span>View My Work</span>
                                  <ArrowDownIcon/>
                        </motion.button> */}
                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
                                  <span>Download CV</span>
                                  <DownloadIcon/>
                        </motion.button> */}
                        <Button>Download CV</Button>
                    </div>
                </div>
            <div className="flex items-center justify-center p-8">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                <div className="w-80 h-80 relative">
                    {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className={`absolute w-24 h-24 rounded-full flex items-center justify-center text-white ${
                        skill.color === 'blue' ? 'bg-blue-500' :
                        skill.color === 'purple' ? 'bg-purple-500' :
                        'bg-yellow-500'
                        }`}
                        style={{
                        top: index === 0 ? '20%' : index === 1 ? '60%' : '40%',
                        left: index === 0 ? '60%' : index === 1 ? '20%' : '80%',
                        }}
                        animate={{
                        scale: currentSkill === index ? 1.2 : 1,
                        opacity: currentSkill === index ? 1 : 0.6,
                        }}
                        whileHover={{ scale: 1.3 }}
                    >
                        {skill.icon}
                    </motion.div>
                    ))}
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                        d="M 120 80 Q 200 160 80 240"
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    </svg>
                </div>
                </motion.div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Introduction;