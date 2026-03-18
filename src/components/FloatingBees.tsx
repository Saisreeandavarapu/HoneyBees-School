import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Custom realistic SVG Bee component
const BeeSVG = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Rear Wings (Flapping slower or offset) */}
        <g className="animate-bee-wing-flap" style={{ animationDelay: '-0.05s' }}>
            <path d="M45 45 C 25 20, 5 40, 35 55 Z" fill="#E2E8F0" opacity="0.4" />
            <path d="M55 45 C 75 20, 95 40, 65 55 Z" fill="#E2E8F0" opacity="0.4" />
        </g>

        {/* Main Wings */}
        <g className="animate-bee-wing-flap">
            <path d="M50 40 C 30 10, 10 30, 40 50 Z" fill="white" opacity="0.8" />
            <path d="M50 40 C 70 10, 90 30, 60 50 Z" fill="white" opacity="0.8" />
        </g>

        {/* Stinger */}
        <path d="M20 70 L 10 80 L 25 75 Z" fill="#1F2937" />

        {/* Body with more detail */}
        <ellipse cx="50" cy="55" rx="35" ry="25" fill="#FFB300" transform="rotate(-30 50 55)" />
        
        {/* Furry Texture/Stripes */}
        <path d="M25 55 Q 50 40 60 75" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
        <path d="M35 45 Q 60 30 70 65" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
        <path d="M45 35 Q 70 20 80 55" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" opacity="0.9" />

        {/* Head */}
        <circle cx="75" cy="40" r="16" fill="#1F2937" />

        {/* Eye Detail */}
        <circle cx="82" cy="36" r="4" fill="white" />
        <circle cx="83" cy="35" r="1.5" fill="black" />

        {/* Antennae */}
        <path d="M75 25 Q 70 15 65 15" stroke="#1F2937" strokeWidth="2.5" fill="none" />
        <path d="M85 30 Q 95 20 95 15" stroke="#1F2937" strokeWidth="2.5" fill="none" />
    </svg>
);

const FloatingBees = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1000
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bees = [
        { id: 1, size: 'w-16 h-16', duration: 25, delay: 0, top: '15%', opacity: 0.4, blur: 'blur-sm' },
        { id: 2, size: 'w-12 h-12', duration: 18, delay: 4, top: '35%', opacity: 0.8, blur: 'blur-0' },
        { id: 3, size: 'w-20 h-20', duration: 40, delay: 12, top: '65%', opacity: 0.3, blur: 'blur-md' },
        { id: 4, size: 'w-10 h-10', duration: 22, delay: 2, top: '80%', opacity: 0.9, blur: 'blur-0' },
        { id: 5, size: 'w-14 h-14', duration: 30, delay: 8, top: '25%', opacity: 0.5, blur: 'blur-[1px]' },
    ];

    const visibleBees = windowWidth < 640 ? bees.slice(0, 3) : bees;

    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden" aria-hidden="true">
            {visibleBees.map((bee) => (
                <motion.div
                    key={bee.id}
                    initial={{ x: '-20vw', opacity: 0 }}
                    animate={{ 
                        x: ['-20vw', '120vw'],
                        opacity: [0, bee.opacity, bee.opacity, 0],
                        y: [0, -50, 30, -40, 60, -20, 0],
                        rotate: [0, 10, -10, 15, -5, 0]
                    }}
                    transition={{
                        duration: bee.duration,
                        delay: bee.delay,
                        repeat: Infinity,
                        ease: "linear",
                        y: {
                            duration: bee.duration / 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        rotate: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className={`absolute ${bee.blur} flex items-center justify-center`}
                    style={{ top: bee.top }}
                >
                    <div className="animate-bee-drift select-none">
                        <BeeSVG className={`${bee.size} drop-shadow-2xl`} />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingBees;
