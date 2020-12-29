import * as React from 'react';
import iconRepository from '../../images/icons/repository.svg';

const ProjectsTab = ({ id, project, projects, projectSelected, setProject, show }) => {
    return (
        <button
            id={`tab${id}`}
            aria-controls={`panel${id}`}
            role="tab"
            onClick={() => setProject({ id, ...projects[id] })}
            className={(show ? "font-bold bg-gray-200" : "hover:bg-gray-200") + " relative text-left rounded-md group focus:outline-none focus:bg-gray-200"} >
            <span aria-selected={show} className={(show ? "w-full" : "group-hover:w-full") + "  absolute transform h-1 bg-gray-300 rounded-b-md bottom-0"}></span>
            <div className="grid items-center gap-1 p-2.5 rounded-md cursor-pointer select-none md:p-3" style={{ gridTemplateColumns: '16px minmax(max-content, 1fr)' }}>
                <img aria-label="hidden" src={iconRepository} className={(show ? "" : "opacity-30") + " w-4 h-4 mt-0.5"} />
                <div className="text-sm md:text-md">{project.name} <span className="hidden text-sm text-left text-gray-500 lg:inline">- {project.year}</span></div>
            </div>
        </button>
    );
};

export default ProjectsTab;