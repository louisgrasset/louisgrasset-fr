import * as React from 'react';
import socials from '../../data/socials';

const SocialAside = () => {
    return (
        <ul className="fixed top-0 flex-col items-center justify-center hidden w-10 h-screen p-2 px-5 xl:flex left-4">
            {socials.map((link, key) => (
                <li key={key} className="mb-4">
                    <a
                        title={link.title}
                        href={`${link.url}`}
                        target="blank"
                        rel="noreferrer"
                        className="block w-6 h-6"
                    >
                        <img src={link.icon} alt={link.title} />
                    </a>
                </li>
            ))}
        </ul>);
};

export default SocialAside;
