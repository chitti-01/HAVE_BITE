
import React from 'react';
import { LeafIcon } from './icons';

const FallingLeaves: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <style>{`
                @keyframes fall {
                    0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(110vh) translateX(10vw) rotate(360deg); opacity: 0; }
                }
                @keyframes sway {
                    0% { transform: translateX(0) rotate(0deg); }
                    50% { transform: translateX(5vw) rotate(20deg); }
                    100% { transform: translateX(0) rotate(0deg); }
                }
                .leaf-container {
                    animation: fall linear infinite;
                }
                .leaf {
                    animation: sway ease-in-out infinite;
                }
            `}</style>
            {[...Array(10)].map((_, i) => {
                const size = Math.random() * 20 + 15; // 15px to 35px
                const duration = Math.random() * 5 + 8; // 8s to 13s
                const delay = Math.random() * 10; // 0s to 10s
                const swayDuration = Math.random() * 3 + 2; // 2s to 5s
                const left = Math.random() * 100;
                
                return (
                    <div
                        key={i}
                        className="leaf-container absolute"
                        style={{ 
                            left: `${left}vw`, 
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                        }}
                    >
                         <LeafIcon 
                            className="leaf text-green-500/50" 
                            style={{ 
                                width: `${size}px`, 
                                height: `${size}px`,
                                animationDuration: `${swayDuration}s`,
                                animationDelay: `${Math.random() * 2}s`,
                             }} 
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default FallingLeaves;
