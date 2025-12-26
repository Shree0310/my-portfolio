import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

const LiveCodeEditor = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const codeSteps = [
        "import React from 'react'",
        "import React from 'react'\n\nconst Portfolio = () => {",
        "import React from 'react'\n\nconst Portfolio = () => {\n  return (",
        "import React from 'react'\n\nconst Portfolio = () => {\n  return (\n    <div className=\"portfolio\">",
        "import React from 'react'\n\nconst Portfolio = () => {\n  return (\n    <div className=\"portfolio\">\n      <h1>Sowrasree</h1>",
        "import React from 'react'\n\nconst Portfolio = () => {\n  return (\n    <div className=\"portfolio\">\n      <h1>Sowrasree</h1>\n      <p>Frontend Developer</p>\n    </div>\n  )\n}"
      ];

      useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % codeSteps.length)
        }, 1000);

        return () => {
            clearInterval(timer);
        }
      }, []);

    return (
        <div className="bg-gray-900 rounded-md p-4 text-sm text-mono">
            <div className="flex items-center mb-3 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <span className="text-gray-500 ml-4">Portfolio.js</span>
            </div>
            <motion.pre
                key={currentStep}
                initial={{ opacity:0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 whitespace-pre-wrap">

            {codeSteps[currentStep]}

            <motion.span
                animate={{ opacity: [0, 1, 0]}}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-white">
                |
            </motion.span>

            </motion.pre>


        </div>
    )
}
export default LiveCodeEditor