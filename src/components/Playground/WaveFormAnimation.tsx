import { motion } from 'framer-motion';

const WaveFormAnimation = ({ isAnimating }: { isAnimating: boolean }) => {
    const barVariants = {
        initial: { scaleY: 1 },
        animate: { 
            scaleY: [1, 1.5, 0.8, 1.2, 1],
        }
    };

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" 
            height="48" 
            fill="#000000" 
            viewBox="0 0 256 256"
        >
            <motion.path 
                d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"
                variants={barVariants}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
                transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    delay: 0 
                }}
                style={{ transformOrigin: "center" }}
            />
            <motion.path 
                d="M88,24a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V32A8,8,0,0,0,88,24Z"
                variants={barVariants}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
                transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    delay: 0.1 
                }}
                style={{ transformOrigin: "center" }}
            />
            <motion.path 
                d="M128,56a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Z"
                variants={barVariants}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
                transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    delay: 0.2 
                }}
                style={{ transformOrigin: "center" }}
            />
            <motion.path 
                d="M168,88a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,168,88Z"
                variants={barVariants}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
                transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    delay: 0.3 
                }}
                style={{ transformOrigin: "center" }}
            />
            <motion.path 
                d="M208,72a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"
                variants={barVariants}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
                transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    delay: 0.4 
                }}
                style={{ transformOrigin: "center" }}
            />
        </svg>
    );
};

export default WaveFormAnimation;
