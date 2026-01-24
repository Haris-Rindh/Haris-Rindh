import React from 'react';

const Preloader = ({ isLoading }) => {
    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="relative flex items-center justify-center">

                {/* Outer Ring (Blue) */}
                <div className="absolute w-32 h-32 rounded-full border-t-4 border-b-4 border-blue-500/80 loader-ring shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

                {/* Inner Ring (Purple) */}
                <div className="absolute w-24 h-24 rounded-full border-r-4 border-l-4 border-purple-500/80 loader-ring-reverse shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

                {/* Center Text */}
                <div className="font-display font-bold text-2xl text-white tracking-widest animate-pulse">
                    HR
                </div>

                {/* Loading Text below */}
                <div className="absolute -bottom-16 text-slate-400 font-mono text-sm tracking-wider blink">
                    INITIALIZING...
                </div>
            </div>
        </div>
    );
};

export default Preloader;