import * as React from 'react';
import socials from '../../data/socials';
import scrollInto from "../../utils/scrollInto";

const Footer = ({ refs }) => {
    let year = new Date().getFullYear();
    return (
        <footer className="mt-10 text-white bg-black">
            <div className="container px-5 py-10 mx-auto font-light md:px-10 xl:px-20 ">
                <div className="grid grid-flow-row gap-8 md:grid-flow-col md:grid-cols-2">
                    <div>
                        <h3 className="mb-2 text-3xl font-bold">A propos</h3>
                        <p className="opacity-60">
                            Curieux de nature, je suis passionné par le web et particulièrement son aspect front end. Développement web, conception graphique, production multimédia et communication ont fait partie intégrante de mes études. Je parle français, anglais et ai étudié l'espagnol.
                            <br /> Mes hobbies ?  📸,🚴🏻‍♂️️,🌍,👨🏻‍💻.
                        </p>
                        <p className="mt-2 opacity-40">Design inspiré par <a href="https://dribbble.com/shots/14572884-Redesigning-my-portfolio-Webflow" target="_blank" rel="noreferrer" className="underline"> ceci</a>.</p>
                    </div>

                    <button className="block w-48 h-12 px-6 font-medium text-black bg-white rounded-md md:justify-self-end focus:outline-none focus:ring-opacity-50 focus:ring-4 focus:ring-pink-500" onClick={() => scrollInto(refs.top)}>
                        Retour en haut
                    </button>
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