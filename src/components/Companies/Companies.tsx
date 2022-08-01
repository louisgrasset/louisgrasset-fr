import React from "react";

import companies from "../../data/companies";

/**
 * A component that lists the companies I worked for.
 */
export const Companies = () => {
    return (
        <div className="relative h-24 px-4 overflow-x-hidden companies">
            <div className="flex flex-row flex-nowrap">
                {[0, 1].map((_i, key) => (
                    <ul
                        key={key}
                        className="relative flex items-center justify-between mt-6 flex-nowrap gap-y-6"
                    >
                        {companies.map((link, key) => (
                            <li key={key} className="mr-14 md:mr-20 lg:mr-32">
                                <a
                                    title={link.title}
                                    href={`${link.url}`}
                                    target="blank"
                                    rel="noreferrer"
                                    className="w-full"
                                >
                                    <img
                                        loading="lazy"
                                        src={link.icon}
                                        alt={link.title}
                                        width="100"
                                        height="50"
                                        className="h-10 p-1 lg:h-11 xl:h-12 dark:filter-companies"
                                        style={{ maxWidth: "10rem" }}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};
