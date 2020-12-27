import * as React from 'react';
import Browser from '../Browser/Browser';
import iconRepository from '../../images/icons/repository.svg';
import projects from '../../data/projects';

const Portfolio = () => {
    const [project, setProject] = React.useState({ id: 0, ...projects[0] });

    return (
        <div className="my-5 shadow-md rounded-xl">
            <div className="grid grid-cols-1 grid-rows-2 gap-4 lg:grid-rows-1 lg:grid-cols-3 lg:max-h-96">
                <div className="max-w-full p-4 overflow-x-auto bg-pink-100 xl:flex-row lg:overflow-x-hidden lg:overflow-y-auto rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    <div className="flex flex-nowrap lg:flex-col space-x-1.5 lg:space-x-0 lg:space-y-1.5">
                        {projects.map((p, key) => (
                            <div key={key} role="tab" onClick={() => setProject({ id: key, ...projects[key] })} className={(project.id === key ? "bg-pink-300" : "") + " grid items-center gap-1 p-3 bg-white border-gray-100 rounded-lg cursor-pointer grid-cols-16-free border-1"} >
                                <img src={iconRepository} className="w-4 h-4 opacity-30" /><span>Project {p.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <Browser url={project.url}>
                        {project.name} -
                        {project.year},&nbsp;
                        {project.company}
                    </Browser>
                </div>
            </div>
        </div >
    );
};

export default Portfolio;