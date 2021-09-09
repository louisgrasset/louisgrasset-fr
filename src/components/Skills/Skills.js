import * as React from 'react';
import skills from '../../data/skills';

export const Skills = ({light}) => {
    return (
        <div className="max-w-full p-4 overflow-x-auto lg:max-h-projectslist xl:flex-row lg:overflow-x-hidden lg:overflow-y-auto ">
            <ul className="relative flex flex-wrap items-center justify-between mt-6 gap-y-6">
                {
                    skills.map((skill, key) => (
                        <li key={key} className="mr-14 md:mr-20 lg:mr-32" title={skill.name}>
                            <img src={(skill.iconDark && !light) ? skill.iconDark : skill.icon} alt={skill.name} width="100" height="50" className="h-10 p-1 lg:h-11 xl:h-12 dark:filter-companies" style={{ maxWidth: '10rem' }} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
