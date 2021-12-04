import React from 'react';

import socials from '../../data/socials';
import translations from '../../data/translations';
import scrollInto from "../../utils/scrollInto";
import iconArrowTop from "../../images/icons/arrow-top.svg";

interface FooterProps {
    /** Language string to get translations. */
    lang: string,
    language: any,
    refs: any,
    /** Callback to toggle Contact display. */
    toggleContact: () => void;
}

/**
 * A component that render the footer.
 */
export const Footer = ({ lang, language, refs, toggleContact }: FooterProps) => {
    let year = new Date().getFullYear();
    return (
        <footer className="text-white bg-black dark:bg-gray-800" ref={refs.footer}>
            <div className="container px-5 py-20 mx-auto font-theme md:px-10 xl:px-20 ">
                <div className="grid grid-flow-row gap-8 sm:col-span-3 md:grid-flow-col lg:grid-cols-2">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="mb-2 text-3xl font-bold">{lang.about.headline.title}</h3>
                        <p className="text-justify ">
                            <span className="opacity-70">
                                {lang.about.headline.subtitle} 📸, 🚴🏻‍♂️️, 🌍, 👨🏻‍💻.
                            </span>
                        </p>
                        <p className="mt-2 opacity-40">{lang.about.footnote.text} <a href="https://dribbble.com/shots/14572884-Redesigning-my-portfolio-Webflow" target="_blank" rel="noreferrer" className="underline"> {lang.about.footnote.link}</a>.</p>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button className="block w-48 h-12 px-6 font-medium text-black bg-white rounded-md md:mt-12 lg:mt-0 md:justify-self-end focus:outline-none focus:ring-opacity-50 focus:ring-4 focus:ring-pink-500" onClick={toggleContact}>
                            {lang.about.cta.primary}
                        </button>
                        <button onClick={() => { scrollInto(refs.top); }} className="flex items-center justify-center w-12 h-12 font-medium text-white bg-gray-700 rounded-md md:mt-12 lg:mt-0 md:justify-self-end focus:outline-none focus:ring-opacity-50 focus:ring-4 focus:ring-pink-500" aria-label={lang.about.cta.navigation}>
                            <img src={iconArrowTop} className="w-4 h-4 filter-invert" alt={lang.about.cta.navigation} />
                        </button>
                    </div>
                </div>
                <div className="relative flex flex-wrap items-center mt-12 mb-6 uppercase">
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
                    <div className="absolute right-0 flex mt-2 text-xs opacity-40">
                        <span className="md:hidden">
                            {
                                Object.keys(translations).filter(t => t !== language).map((t, i) => (
                                    <a className="ml-1" rel="canonical" hrefLang={t} key={i} href={`/${t}`}>{t.toUpperCase()}</a>
                                ))
                            }
                        </span>
                        <span className="hidden md:inline">
                            {
                                Object.keys(translations).filter(t => t !== language).map((t, i) => (
                                    <a className="ml-1" rel="canonical" hrefLang={t} key={i} href={`/${t}`}>{translations[t].language.label}</a>
                                ))
                            }
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
