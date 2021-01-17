import * as React from 'react';
import { Gallery } from '../Gallery';

import iconExternal from '../../images/icons/external.svg';

export const ProjectsPanel = ({ project, projectSelected, show, id }) => {
    return (
        <div className={(show ? 'block' : 'hidden') + " w-full h-full"} role="tabpanel" id={`panel${id}`} aria-labelledby={`panel${id}`}>
            <Gallery project={project} projectSelected={projectSelected} />
            <a className={`flex absolute items-center px-4 py-2 md:space-x-2 text-xs md:text-sm justify-center text-center text-gray-900 uppercase bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-md shadow-lg bottom-4 left-4 focus:outline-none focus:ring-opacity-50 focus:ring-4 focus:ring-${project.color}-500`} href={project.url} target="_blank" rel="noreferrer">
                <span className="hidden md:inline-block dark:text-white">Ouvrir le projet</span>
                <img alt="" src={iconExternal} aria-hidden="true" className="w-3 h-3 cursor-pointer dark:filter-invert" />
            </a>
            <div className="absolute bottom-4 right-4">
                {project.stacks.map((stack, key) => (
                    <div key={key} className={`bg-${project.color}-${500 + 100 * key} rounded-md py-1 px-2 uppercase text-xs md:text-sm shadow-md font-medium text-white dark:text-black inline-block ml-2`}>{stack}</div>
                ))}
            </div>
        </div>
    );
};
