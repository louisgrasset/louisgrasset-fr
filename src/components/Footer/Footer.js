import * as React from 'react';
import socials from '../../data/socials';
import scrollInto from "../../utils/scrollInto";
import iconArrowTop from "../../images/icons/arrow-top.svg";

const Footer = ({ refs, toggleContactModal }) => {
    let year = new Date().getFullYear();
    return (
        <footer className="mt-20 text-white bg-black">
            <div className="container px-5 py-20 mx-auto font-light md:px-10 xl:px-20 ">
                <div className="grid grid-flow-row gap-8 sm:col-span-3 md:grid-flow-col lg:grid-cols-2">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="mb-2 text-3xl font-bold">A propos</h3>
                        <p className="text-justify opacity-60">
                            Curieux de nature, je suis passionné par le web et particulièrement son aspect front end. Développement web, conception graphique, production multimédia et communication ont fait partie intégrante de mes études. Je parle français, anglais et ai étudié l'espagnol.
                            <br /> Mes hobbies ?  📸,🚴🏻‍♂️️,🌍,👨🏻‍💻.
                        </p>
                        <p className="mt-2 opacity-40">Design inspiré par <a href="https://dribbble.com/shots/14572884-Redesigning-my-portfolio-Webflow" target="_blank" rel="noreferrer" className="underline"> ceci</a>.</p>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button className="block w-48 h-12 px-6 font-medium text-black bg-white rounded-md md:mt-12 lg:mt-0 md:justify-self-end focus:outline-none focus:ring-opacity-50 focus:ring-4 focus:ring-pink-500" onClick={toggleContactModal}>
                            Prendre contact
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 font-medium text-white bg-gray-700 rounded-md md:mt-12 lg:mt-0 md:justify-self-end focus:outline-none focus:ring-opacity-50 focus:ring-4 focus:ring-pink-500" onClick={() => scrollInto(refs.top)} aria-label="Remonter en haut">
                            <img src={iconArrowTop} className="w-4 h-4 filter-invert" alt="Fleche vers le haut" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap items-center mt-12 mb-6 uppercase">
                    <span className="mr-6 text-sm tracking-wider opacity-40">Louis Grasset, {year}</span>
                    <ul className="inline md:justify-center mt-0.5">
                        {socials.map((link, key) => (
                            <li key={key} className="inline-block transition opacity-40 hover:opacity-100">
                                <span>
                                    <a
                                        title={link.title}
                                        href={`${link.url}`}
                                        target='blank'
                                        className="block p-2"
                                    >
                                        <img src={link.icon} alt={link.title} className="w-5 h-5 filter-invert" />
                                    </a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;