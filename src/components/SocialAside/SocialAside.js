import * as React from 'react';
import socials from '../../data/socials';

const SocialAside = () => {
    return (
        <ul className="top-0 flex items-center justify-center h-10 p-2 px-5 space-x-2 xl:fixed xl:space-x-0 xl:space-y-2 xl:flex-col xl:w-10 xl:h-screen xl:flex xl:left-4">
            {socials.map((link, key) => (
                <li key={key}>
                    <a
                        title={link.title}
                        href={`${link.url}`}
                        target="blank"
                        rel="noreferrer"
                        className="block w-6 h-6"
                    >
                        <img src={link.icon} alt={link.title} className="w-5 h-5" />
                    </a>
                </li>
            ))
            }
        </ul >);
};

export default SocialAside;
