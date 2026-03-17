import { motion } from 'framer-motion';

const Bee = ({ delay = 0, size = 40, duration = 10 }) => {
    return (
        <motion.div
            initial={{ 
                x: "-10%", 
                y: Math.random() * 80 + 10 + "%", 
                opacity: 0,
                rotate: 0 
            }}
            animate={{ 
                x: ["-10%", "110%"],
                y: [
                    Math.random() * 80 + 10 + "%", 
                    Math.random() * 80 + 10 + "%", 
                    Math.random() * 80 + 10 + "%"
                ],
                opacity: [0, 1, 1, 0],
                rotate: [0, 10, -10, 0]
            }}
            transition={{ 
                duration: duration, 
                repeat: Infinity, 
                delay: delay,
                ease: "easeInOut"
            }}
            className="absolute z-0 pointer-events-none"
            style={{ width: size, height: size }}
        >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                {/* Wings */}
                <motion.ellipse 
                    cx="40" cy="35" rx="15" ry="25" 
                    fill="#E0F2FE" opacity="0.8"
                    animate={{ rotate: [0, 20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                />
                <motion.ellipse 
                    cx="60" cy="35" rx="15" ry="25" 
                    fill="#E0F2FE" opacity="0.8"
                    animate={{ rotate: [0, -20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                />
                
                {/* Body */}
                <ellipse cx="50" cy="55" rx="25" ry="18" fill="#FFB300" />
                
                {/* Stripes */}
                <rect x="38" y="40" width="4" height="30" rx="2" fill="#1F2937" />
                <rect x="48" y="37" width="5" height="36" rx="2" fill="#1F2937" />
                <rect x="58" y="40" width="4" height="30" rx="2" fill="#1F2937" />
                
                {/* Head */}
                <circle cx="70" cy="50" r="12" fill="#FFB300" />
                <circle cx="75" cy="47" r="2" fill="#1F2937" />
                
                {/* Antennae */}
                <path d="M70 40 Q 75 30 80 35" fill="none" stroke="#1F2937" strokeWidth="2" />
            </svg>
        </motion.div>
    );
};

const BeeScene = ({ count = 3 }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(count)].map((_, i) => (
                <Bee 
                    key={i} 
                    delay={i * 4} 
                    size={30 + Math.random() * 20} 
                    duration={12 + Math.random() * 8} 
                />
            ))}
        </div>
    );
};

export default BeeScene;
