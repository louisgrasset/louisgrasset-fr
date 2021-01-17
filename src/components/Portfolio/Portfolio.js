import * as React from 'react';
import { ProjectsTabs, ProjectsPanel } from '../Projects';
import projects from '../../data/projects';

export const Portfolio = () => {
    const [projectSelected, setProject] = React.useState({ id: 0, ...projects[0] });

    return (
        <div className="my-5 shadow-md rounded-xl">
            <div className="grid grid-cols-1 border border-black dark:border-gray-700 grid-row-2 grid-rows-portfolio-xs md:grid-rows-portfolio h-portfolio-xs sm:h-portfolio-sm md:h-portfolio-md lg:gap-0 border-opacity-5 lg:grid-rows-1 lg:grid-cols-3 lg:h-portfolio-lg xl:h-portfolio-xl 2xl:h-portfolio-2xl rounded-xl">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    <h3 className="px-4 py-2 text-sm uppercase border-b-2 border-gray-200 font-theme dark:border-gray-700 dark:text-white lg:px-7">Projets</h3>
                    <ProjectsTabs projects={projects} projectSelected={projectSelected} setProject={setProject} />
                </div>
                <div className="relative h-full lg:col-span-2">
                    {projects.map((project, key) => (
                        <ProjectsPanel project={project} key={key} id={key} projectSelected={projectSelected} show={projectSelected.id === key} />
                    ))}
                </div>
            </div>
        </div>
    );
};
