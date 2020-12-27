import * as React from 'react';
import socials from "../../data/socials";

const Nav = () => {
    return (
        <nav className="flex justify-between w-full">
            <a href="./">Louis Grasset</a>
            <ul>
                {socials.map((link, key) => (
                    <li key={key} className="inline-block mr-4">
                        <a
                            title={link.title}
                            href={`${link.url}`}
                            target="blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
                <li className="inline-block"><a href="./grasset-louis-cv.pdf" className="hover:underline">CV</a></li>
            </ul>
        </nav>
    );
};

export default Nav;