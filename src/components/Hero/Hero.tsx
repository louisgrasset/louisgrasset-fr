import React from "react";

import scrollInto from "../../utils/scrollInto";

import iconPin from "../../images/icons/pin.svg";
import iconCv from "../../images/icons/cv.svg";
import iconCompany from "../../images/companies/dashlane.svg";
import iconProfile from "../../images/profile.webp";

import { PageRefs } from "../../types";
import { Translation } from "../../data/translations";

interface HeroProps {
    /** Language string to get translations. */
    lang: Translation;
    refs: PageRefs;
    toggleContact: () => void;
}

/**
 * A component that render the first screen.
 */
export const Hero = ({ lang, refs, toggleContact }: HeroProps) => {
    return (
        <div className="pt-20">
            <img
                src={iconProfile}
                alt="Louis Grasset"
                width="80"
                height="80"
                className="w-20 h-20 rounded-full shadow-md dark:border-2 block mb-7"
            />
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cv.louisgrasset.fr"
                className="cursor-pointer inline-block mb-5 border border-gray-50 dark:border-gray-800 dark:text-white rounded-full shadow-sm focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500"
            >
                <div className="flex flex-nowrap">
                    <div className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-l-full w-10 flex justify-items-center justify-center">
                        <img
                            className="w-6 ml-1 dark:filter-companies opacity-70"
                            src={iconCv}
                            alt={"CV icon"}
                        />
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-4 py-0.5 rounded-r-full inline-block">
                        {lang["hero_get_cv"]}
                    </div>
                </div>
            </a>
            <h1 className="text-4xl font-medium text-gray-900 dark:text-gray-200 sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="font-semibold text-black dark:text-white">
                    Louis Grasset
                </span>
                <span className="invisible block text-sm md:visible md:inline-block md:text-7xl lg:text-8xl">
                    —
                </span>
                {lang["hero_title"]}
                <br />
            </h1>
            <p className="my-8 text-gray-500 font-theme text-md">
                <span className="mr-2">
                    {lang["hero_position"]}
                    <a href="https://dashlane.com" className="underline">
                        <img
                            className="inline h-6 -mt-1.5 mx-1.5 dark:filter-brightness-100"
                            src={iconCompany}
                            alt="Dashlane"
                        />
                    </a>
                    &amp; freelance.
                </span>
                <img
                    src={iconPin}
                    alt=""
                    aria-hidden="true"
                    className="inline dark:filter-invert w-3.5 h-3.5 -mt-0.5 opacity-30"
                />
                Paris, France.
            </p>
            <div className="grid max-w-sm grid-rows-2 gap-4 sm:max-w-md sm:grid-rows-none sm:grid-cols-2">
                <button
                    onClick={toggleContact}
                    className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md shadow-md dark:bg-white dark:text-gray-900 focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500"
                >
                    {lang["hero_cta_primary"]}&nbsp;&nbsp;
                    <span role="img" aria-label="smiley">
                        🙂
                    </span>
                </button>
                <button
                    onClick={() => {
                        scrollInto(refs.companies);
                    }}
                    className="block h-12 px-6 font-medium text-gray-900 uppercase bg-white border border-gray-100 rounded-md shadow-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500"
                >
                    {lang["hero_cta_secondary"]}
                </button>
            </div>
        </div>
    );
};
