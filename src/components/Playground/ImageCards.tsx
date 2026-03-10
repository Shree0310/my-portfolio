import { motion } from 'framer-motion';
import Image from 'next/image';
import  peony  from "../../../public/Images/peony.jpg";
import  leaves  from "../../../public/Images/leaves.jpg";
import { useState } from 'react';


const ImageCards = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className=''>
            {expanded ? (
                <div className='flex flex-row gap-10'>
                    <motion.div
                        layoutId="card-peony"
                        className='w-48 h-56 rounded-2xl shadow-md overflow-hidden'
                        onClick={() => setExpanded(false)}
                    >
                        <Image src={leaves} alt="peony" className="h-full w-full object-cover" width={192} height={224}/>
                    </motion.div>
                    <motion.div
                        layoutId="card-leaves"
                        className='w-48 h-56 rounded-2xl shadow-md overflow-hidden'
                        onClick={() => setExpanded(false)}
                    >
                        <Image src={peony} alt="leaves" className="h-full w-full object-cover" width={192} height={224}/>
                    </motion.div>
                </div>
            ) : (
                <div className='relative w-48 h-56'>
                    <motion.div
                        layoutId="card-peony"
                        className='w-48 h-56 rounded-2xl shadow-md absolute overflow-hidden'
                        style={{ zIndex: 1 }}
                        onClick={() => setExpanded(true)}
                    >
                        <Image src={leaves} alt="peony" className="h-full w-full object-cover" width={192} height={224}/>
                    </motion.div>
                    <motion.div
                        layoutId="card-leaves"
                        className='w-48 h-56 rounded-2xl shadow-md absolute overflow-hidden'
                        style={{ zIndex: 2, rotate: -12, transformOrigin: 'bottom center' }}
                        initial={{ rotate: -12 }}
                        whileHover={{ rotate: -6 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                        onClick={() => setExpanded(true)}
                    >
                        <Image src={peony} alt="leaves" className="h-full w-full object-cover" width={192} height={224}/>
                    </motion.div>
                </div>
            )}
        </div>
    );
};
export default ImageCards;