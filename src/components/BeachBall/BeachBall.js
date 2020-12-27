import * as React from 'react';
const BeachBall = () => {
    return (
        <div className="absolute top-0 right-0 overflow-hidden filter-blur-40" style={{ animation: 'spin 12s ease-in-out alternate infinite', zIndex: '-1' }}>
            <div className="relative grid grid-cols-2 origin-center transform -rotate-45 opacity-70 filter-blur-40">
                <div className="top-0 left-0 bg-yellow-500 rounded-full rounded-br-none w-60 h-60"></div>
                <div className="top-0 right-0 bg-pink-500 rounded-full rounded-bl-none w-60 h-60"></div>
                <div className="bottom-0 right-0 bg-purple-400 rounded-full rounded-tr-none w-60 h-60"></div>
                <div className="bottom-0 left-0 bg-blue-400 rounded-full rounded-tl-none w-60 h-60"></div>
            </div>
        </div>
    );
};

export default BeachBall;