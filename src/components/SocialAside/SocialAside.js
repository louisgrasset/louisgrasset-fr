import * as React from 'react';
import socials from '../../data/socials';

export const SocialAside = ({ hidden }) => {
    return (
        <ul className={(hidden ? "xl:scale-0" : "") + " top-0 flex items-center justify-center h-10 py-2 xl:px-0 space-x-0.5 xl:fixed xl:space-x-0 xl:transform xl:transition-transform xl:space-y-2 xl:flex-col xl:w-10 xl:h-screen xl:flex xl:left-4"}>
            {socials.map((link, key) => (
                <li key={key}>
                    <a
                        title={link.title}
                        href={`${link.url}`}
                        target="blank"
                        rel="noreferrer"
                        className="block p-2"
                    >
                        <img src={link.icon} alt={link.title} className="w-5 h-5 dark:filter-invert" />
                    </a>
                </li>
            ))
            }
        </ul>
    );
};
