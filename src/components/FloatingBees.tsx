import { useEffect, useState } from 'react';

// Custom lightweight SVG Bee component for high quality rendering
const BeeSVG = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Wings */}
        <path d="M50 40 C 30 10, 10 30, 40 50 Z" fill="#E2E8F0" opacity="0.8" />
        <path d="M50 40 C 70 10, 90 30, 60 50 Z" fill="#E2E8F0" opacity="0.8" />
        <path d="M45 45 C 25 20, 5 40, 35 55 Z" fill="#CBD5E1" opacity="0.6" />
        <path d="M55 45 C 75 20, 95 40, 65 55 Z" fill="#CBD5E1" opacity="0.6" />

        {/* Stinger */}
        <path d="M20 70 L 10 80 L 25 75 Z" fill="#1F2937" />

        {/* Body Base */}
        <ellipse cx="50" cy="55" rx="35" ry="25" fill="#FFB300" transform="rotate(-30 50 55)" />

        {/* Stripes */}
        <path d="M25 55 Q 50 40 60 75" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
        <path d="M35 45 Q 60 30 70 65" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
        <path d="M45 35 Q 70 20 80 55" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />

        {/* Head */}
        <circle cx="75" cy="40" r="15" fill="#1F2937" />

        {/* Eye */}
        <circle cx="80" cy="35" r="3" fill="#FFFFFF" />

        {/* Antennae */}
        <path d="M75 25 Q 70 15 65 15" stroke="#1F2937" strokeWidth="2" fill="none" />
        <path d="M85 30 Q 95 20 95 15" stroke="#1F2937" strokeWidth="2" fill="none" />
        <circle cx="65" cy="15" r="2" fill="#1F2937" />
        <circle cx="95" cy="15" r="2" fill="#1F2937" />
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

    // Cinematic configuration: varying depth (blur), sizes, and slow speeds
    // Adjusted sizes for SVGs (w-12, w-16, etc. instead of text sizes)
    const bees = [
        { id: 1, size: 'w-16 h-16', duration: '40s', delay: '0s', top: '10%', opacity: 'opacity-30', blur: 'blur-sm' },
        { id: 2, size: 'w-12 h-12', duration: '25s', delay: '5s', top: '35%', opacity: 'opacity-80', blur: 'blur-0' },
        { id: 3, size: 'w-24 h-24', duration: '60s', delay: '12s', top: '60%', opacity: 'opacity-20', blur: 'blur-md' },
        { id: 4, size: 'w-8 h-8', duration: '30s', delay: '2s', top: '80%', opacity: 'opacity-90', blur: 'blur-0' },
        { id: 5, size: 'w-14 h-14', duration: '45s', delay: '18s', top: '25%', opacity: 'opacity-40', blur: 'blur-[2px]' },
        { id: 6, size: 'w-20 h-20', duration: '55s', delay: '25s', top: '75%', opacity: 'opacity-25', blur: 'blur-sm' },
    ];

    // Mobile optimization: Show fewer bees on small screens to avoid clutter and performance issues
    const visibleBees = windowWidth < 640 ? bees.slice(0, 3) : bees;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {visibleBees.map((bee) => (
                <div
                    key={bee.id}
                    className={`absolute animate-fly-across-cinematic ${bee.opacity} ${bee.blur}`}
                    style={{
                        top: bee.top,
                        animationDuration: bee.duration,
                        animationDelay: bee.delay,
                    }}
                >
                    {/* Inner animation for the up and down bobbing motion */}
                    <div className={`animate-bob-up-down-cinematic drop-shadow-lg`}>
                        <BeeSVG className={bee.size} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FloatingBees;
