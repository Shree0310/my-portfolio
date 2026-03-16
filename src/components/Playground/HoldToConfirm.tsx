import { motion } from 'framer-motion';

type HoldToConfirmProps = {
    text: string,
    confirmTimeout?: number,
    onConfirm?: VoidFunction
}

 const HoldToConfirmFoundation = ({ text:textFromProps, confirmTimeout=2, onConfirm}:HoldToConfirmProps) => {
    return (
        <div className="bg-neutral-100 rounded-lg shadow-md p-8 flex items-center justify-center">
            <motion.button 
                className="relative overflow-hidden min-w-48 select-none touch-none whitespace-nowrap leading-5 focus:outline-4 bg-red-500/100 hover:bg-red-600 border-red-800 border shadow-sm shadow-red-800 text-white font-semibold text-sm text-center cursor-pointer rounded-md py-4 px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease:"easeInOut",
                    delay:0.1
                }}>
                <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div className="select-none text-white cursor-pointer">{textFromProps}</motion.div>
                </motion.div>
            </motion.button>
        </div>
    )
}

export default HoldToConfirmFoundation;
