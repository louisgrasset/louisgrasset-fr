import * as React from 'react';
import companies from '../../data/companies';

export const Companies = () => {
    return (
        <ul className="grid grid-cols-2 mt-6 gap-x-3 gap-y-12 xl:gap-y-6 sm:grid-cols-3 lg:grid-cols-6 xl:flex xl:justify-between xl:flex-wrap">
            {
                companies.map((link, key) => (
                    <li key={key} className={(key !== companies.length - 1) ? "xl:mr-6 xl:mb-6" : ''}>
                        <a
                            title={link.title}
                            href={`${link.url}`}
                            target="blank"
                            rel="noreferrer"
                            className="w-full"
                        >
                            <img src={link.icon} alt={link.title} className="h-12 p-1" style={{ maxWidth: '9rem' }} />
                        </a>
                    </li>
                ))
            }
        </ul>
    );
};
