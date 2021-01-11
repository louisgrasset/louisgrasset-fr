import * as React from 'react';

import scrollInto from '../../utils/scrollInto';

import iconPin from "../../images/icons/pin.svg";
import company from "../../images/companies/yseop.svg";
import profile from "../../images/profile.jpg";



export const Hero = ({ refs, toggleContactModal }) => {
    return (
        <div className="pt-20">
            <img src={profile} alt="Louis Grasset" className="w-20 h-20 mb-4 rounded-full shadow-md" />
            <h1 className="text-4xl font-medium text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="font-semibold text-black">Louis Grasset</span> <span className="invisible block text-sm md:visible md:inline-block md:text-7xl lg:text-8xl">—</span> Développeur web front end passionné. Je&nbsp;croque le web.<br />
            </h1>
            <p className="my-8 font-light text-gray-500 text-md"><span className="mr-2">Actuellement en poste de Développeur R&amp;D chez <a href="https://yseop.com" className="underline"><img className="inline h-6 -mt-1.5" src={company} alt="Yseop" /></a> et freelance.</span><img src={iconPin} alt="Epingle" className="inline w-3.5 h-3.5 -mt-0.5 opacity-30" /> Lyon, France.</p>
            <div className="grid max-w-sm grid-rows-2 gap-4 sm:max-w-md sm:grid-rows-none sm:grid-cols-2">
                <button onClick={toggleContactModal} className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md shadow-md focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500">
                    Dire bonjour&nbsp;&nbsp;<span role='img' aria-label="smiley">🙂</span>
                </button>
                <button onClick={() => { scrollInto(refs.companies); }} className="block h-12 px-6 font-medium text-gray-900 uppercase bg-white border border-gray-100 rounded-md shadow-md focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500">
                    En savoir plus
              </button>
            </div>
        </div>
    );
};