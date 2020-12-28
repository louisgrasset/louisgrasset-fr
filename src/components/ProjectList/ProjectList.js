import * as React from 'react';
import iconRepository from '../../images/icons/repository.svg';

const ProjectList = ({ projects, project, setProject }) => {
    return (
        <div className="max-w-full p-4 overflow-x-auto lg:max-h-projectslist xl:flex-row lg:overflow-x-hidden lg:overflow-y-auto ">
            <div className="flex flex-nowrap lg:flex-col space-x-1.5 lg:space-x-0 lg:space-y-1.5">
                {projects.map((p, key) => (
                    <div key={key} role="tab" onClick={() => setProject({ id: key, ...projects[key] })} className="relative group" >
                        <span className={(project.id === key ? "w-full" : "group-hover:w-full") + "  absolute transform h-1 bg-gray-300 rounded-b-md bottom-0"}></span>
                        <div className={(project.id === key ? "font-bold bg-gray-200" : "hover:bg-gray-200") + " grid items-center gap-1 p-3 cursor-pointer rounded-md select-none"} style={{ gridTemplateColumns: '16px minmax(max-content, 1fr)' }}>
                            <img aria-label="hidden" src={iconRepository} className={(project.id === key ? "" : "opacity-30") + " w-4 h-4 mt-0.5"} />
                            <span>{p.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;