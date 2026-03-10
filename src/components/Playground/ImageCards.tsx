import { motion } from 'framer-motion';
import Image from 'next/image';
import  peony  from "../../../public/Images/peony.jpg";
import  leaves  from "../../../public/Images/leaves.jpg";
import { useState } from 'react';


const ImageCards = () => {
    const [expanded, setExpanded] = useState(false);

 return <div className=''>
    {expanded ? (<div className='flex flex-row gap-10'>
            <motion.div 
                initial={{}}
                className='w-48 h-56 rounded-2xl shadow-md'>
                <Image src={peony} alt="avatar" className="h-full w-full object-cover rounded-2xl"/>
            </motion.div>
            <div className='w-48 h-56 rounded-2xl shadow-md ' onClick={() => setExpanded(!expanded)}>
                <Image src={leaves} alt="avatar" className="h-full w-full object-cover rounded-2xl"/>
            </div>
        </div>):
     (<div className='relative w-36 h-48'>
         <motion.div 
            className='w-48 h-56 rounded-2xl shadow-md absolute'
            style={{ zIndex: 1}}>
            <Image src={peony} alt="avatar" className="h-full w-full object-cover rounded-2xl"/>
        </motion.div>
        <motion.div 
            className='w-48 h-56 rounded-2xl shadow-md absolute'
            style={{
                zIndex: 2,
                rotate: -12,
                transformOrigin: 'bottom center'
            }}
            initial={{
                rotate: -12
            }}
            whileHover={{
                rotate: -6
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping:10
            }}
            onClick={() => setExpanded(!expanded)}>
            <Image src={leaves} alt="avatar" className="h-full w-full object-cover rounded-2xl"/>
        </motion.div>
    </div>
    )}
 </div>
}
export default ImageCards;