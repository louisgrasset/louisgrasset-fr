import React from 'react';

/**
 * A component that shows a multicolored circle, animated on desktop.
 */
export const BeachBall = () => {
    return (
        <div id="beachball" className={"absolute top-0 right-0 overflow-hidden filter-blur-70 dark:opacity-20"} style={{ animation: 'spin 12s ease-in-out alternate infinite', zIndex: '-1' }}>
            <div className="relative grid grid-cols-2 origin-center transform -rotate-45 dark:filter-grayscale-30">
                <div className="top-0 left-0 bg-yellow-400 rounded-full rounded-br-none w-60 h-60"></div>
                <div className="top-0 right-0 bg-pink-400 rounded-full rounded-bl-none w-60 h-60"></div>
                <div className="bottom-0 right-0 bg-purple-300 rounded-full rounded-tr-none w-60 h-60"></div>
                <div className="bottom-0 left-0 bg-blue-300 rounded-full rounded-tl-none w-60 h-60"></div>
            </div>
        </div>
    );
};
