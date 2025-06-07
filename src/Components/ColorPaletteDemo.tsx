import { useState } from "react";
import { motion } from 'framer-motion'


const ColorPaletteDemo = () => {
    const [selectedColor, setSelectedColor] = useState(0);

    useState(() => {
        const timer = setInterval(() => {
            setSelectedColor((prev) => ( prev + 1 )% colorPalettes.length);
        },1000);
        return () => clearInterval(timer);
    })

    const colorPalettes = [
        {
          name: "Primary",
          colors: ["bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800"]
        },
        {
          name: "Accent", 
          colors: ["bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800"]
        },
        {
          name: "Success",
          colors: ["bg-green-500", "bg-green-600", "bg-green-700", "bg-green-800"]
        }
      ];
    return (
        <div className="bg-neutral-100 font-mono text-sm p-4 rounded-md">
            <div className="text-blue-900 font-bold">Design System Colors</div>
            <div className="py-4">
                {colorPalettes.map((palette, index) => (
                    <motion.div
                        key={palette.name}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1}}
                        transition={{ delay: 0.5 }}
                        className="flex text-neutral-600 space-x-3 pt-10">
                        <div className="flex space-x-2">
                            {palette.name}
                        <div className="flex space-x-3">
                            {palette.colors.map((color, colorIndex) => (
                                <motion.div
                                    key={colorIndex}
                                    className={`w-8 h-8 rounded-md ${color}`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}>
                                </motion.div>
                            ))}
                        </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default ColorPaletteDemo;
