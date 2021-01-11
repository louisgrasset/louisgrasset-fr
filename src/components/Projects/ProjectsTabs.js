import * as React from 'react';
import { ProjectsTab } from './';

export const ProjectsTabs = ({ projects, projectSelected, setProject }) => {
    return (
        <div className="max-w-full p-4 overflow-x-auto lg:max-h-projectslist xl:flex-row lg:overflow-x-hidden lg:overflow-y-auto ">
            <div role="tablist" className="flex flex-nowrap lg:flex-col space-x-1.5 lg:space-x-0 lg:space-y-1.5">
                {projects.map((project, key) => (
                    <ProjectsTab
                        key={key}
                        id={key}
                        project={project}
                        projects={projects}
                        projectSelected={projectSelected}
                        setProject={setProject}
                        show={projectSelected.id === key}
                    />
                ))}
            </div>
        </div>
    );
};
