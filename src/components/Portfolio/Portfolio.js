import * as React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import Gallery from '../Gallery/Gallery';
import projects from '../../data/projects';
import iconExternal from '../../images/icons/external.svg';

const Portfolio = () => {
    const [project, setProject] = React.useState({ id: 0, ...projects[0] });

    return (
        <div className="my-5 shadow-md rounded-xl">
            <div className="grid grid-cols-1 grid-rows-2 gap-4 border border-black lg:gap-0 border-opacity-5 lg:grid-rows-1 lg:grid-cols-3 lg:h-portfolio-lg xl:h-portfolio-xl 2xl:h-portfolio-2xl rounded-xl">
                <div className="bg-gray-100 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    <h3 className="px-4 py-2 text-sm font-light uppercase border-b-2 border-gray-200 lg:px-7">Projets</h3>
                    <ProjectList projects={projects} project={project} setProject={setProject} />
                </div>
                <div className="relative h-full lg:col-span-2">
                    <Gallery project={project} />
                    <a className="absolute flex items-center px-4 py-2 space-x-2 text-center bg-white shadow-md bottom-4 left-4 rounded-3xl" href={project.url} target="_blank" rel="noreferrer"><span>Ouvrir le projet</span> <img src={iconExternal} aria-hidden="true" className="w-3 h-3 cursor-pointer" /></a>
                    <div className="absolute bottom-4 right-4">
                        {project.stacks.map((stack, key) => (
                            <div key={key} className={`bg-${project.color}-${500 + 100 * key} rounded-md py-1 px-2 uppercase text-sm shadow-md font-medium text-white inline-block ml-2`}>{stack}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;