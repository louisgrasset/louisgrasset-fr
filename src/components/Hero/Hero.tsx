import React from "react";

import scrollInto from '../../utils/scrollInto';

import iconPin from "../../images/icons/pin.svg";
import company from "../../images/companies/dashlane.svg";
import profile from "../../images/profile.webp";

interface HeroProps {
    /** Language string to get translations. */
    lang: string,
    refs: any,
    toggleContact: () => void,
}

/**
 * A component that render the first screen.
 */
export const Hero = ({ lang, refs, toggleContact }: HeroProps) => {
    return (
        <div className="pt-20">
            <img src={profile} alt="Louis Grasset" width="80" height="80" className="w-20 h-20 mb-4 rounded-full shadow-md dark:border-2" />
            <h1 className="text-4xl font-medium text-gray-900 dark:text-gray-200 sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="font-semibold text-black dark:text-white">Louis Grasset</span> <span className="invisible block text-sm md:visible md:inline-block md:text-7xl lg:text-8xl">—</span> {lang.hero.title}<br />
            </h1>
            <p className="my-8 text-gray-500 font-theme text-md"><span className="mr-2">{lang.hero.position} <a href="https://dashlane.com" className="underline"><img className="inline h-6 -mt-1.5 mx-1.5 dark:filter-brightness-100" src={company} alt="Dashlane" /></a> &amp; freelance.</span><img src={iconPin} alt="" aria-hidden="true" className="inline dark:filter-invert w-3.5 h-3.5 -mt-0.5 opacity-30" /> Paris, France.</p>
            <div className="grid max-w-sm grid-rows-2 gap-4 sm:max-w-md sm:grid-rows-none sm:grid-cols-2">
                <button onClick={toggleContact} className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md shadow-md dark:bg-white dark:text-gray-900 focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500">
                    {lang.hero.cta.primary}&nbsp;&nbsp;<span role='img' aria-label="smiley">🙂</span>
                </button>
                <button onClick={() => { scrollInto(refs.companies); }} className="block h-12 px-6 font-medium text-gray-900 uppercase bg-white border border-gray-100 rounded-md shadow-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500">
                    {lang.hero.cta.secondary}
                </button>
            </div>
        </div>
    );
};