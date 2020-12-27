import * as React from 'react';
import socials from '../../data/socials';
import scrollInto from "../../utils/scrollInto";

const Footer = ({ refs }) => {
    return (
        <footer className="px-5 py-10 font-light text-gray-700 bg-gray-200 ">
            <div className="container grid justify-between grid-flow-row gap-4 mx-auto align-top md:grid-flow-col md:grid-cols-3">
                <span>
                    Louis Grasset<br />Tous droits réservés. Design inspiré par <a href="https://dribbble.com/shots/14572884-Redesigning-my-portfolio-Webflow" target="_blank" rel="noreferrer" className="underline"> ce shot</a>.
                </span>
                <ul className="flex md:justify-center">
                    {socials.map((link, key) => (
                        <li key={key} className="inline-block mr-6">
                            <span>
                                <a
                                    title={link.title}
                                    href={`${link.url}`}
                                    target='blank'
                                >
                                    <img src={link.icon} alt={link.title} className="w-5 h-5" />
                                </a>
                            </span>
                        </li>
                    ))}
                </ul>
                <button className="block w-48 h-12 px-6 font-medium bg-white rounded-md md:justify-self-end focus:outline-none focus:ring-4 focus:ring-pink-500" onClick={() => scrollInto(refs.top)}>
                    Retour en haut
            </button>
            </div>
        </footer>
    );
};

export default Footer;