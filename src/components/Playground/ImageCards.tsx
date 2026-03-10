import { motion } from 'framer-motion';
import Image from 'next/image';
import  peony  from "../../../public/Images/peony.jpg";


const ImageCards = () => {
 return <div className='relative w-36 h-48'>
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
        }}>
        <Image src={peony} alt="avatar" className="h-full w-full object-cover rounded-2xl"/>
    </motion.div>
 </div>
}
export default ImageCards;