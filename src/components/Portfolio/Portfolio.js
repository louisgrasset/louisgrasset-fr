import * as React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import Browser from '../Browser/Browser';
import projects from '../../data/projects';

const Portfolio = () => {
    const [project, setProject] = React.useState({ id: 0, ...projects[0] });

    return (
        <div className="my-5 shadow-md rounded-xl">
            <div className="grid grid-cols-1 grid-rows-2 gap-4 border border-black border-opacity-5 lg:grid-rows-1 lg:grid-cols-3 lg:max-h-96 rounded-xl">
                <div className="bg-gray-100 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    <h3 className="px-4 py-2 text-sm font-light uppercase border-b-2 border-gray-200 lg:px-7">Projets</h3>
                    <ProjectList projects={projects} project={project} setProject={setProject} />
                </div>
                <div className="px-4 pb-0 mb-4 lg:pl-0 lg:mt-4 lg:col-span-2">
                    <Browser url={project.url}>
                        {project.company}
                        {project.name}
                        {project.year}
                        {project.url}
                        {project.stacks.map(e => (e))}
                    </Browser>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;