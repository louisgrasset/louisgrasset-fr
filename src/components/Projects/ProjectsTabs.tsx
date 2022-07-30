import React from "react";

import { ProjectsTab } from ".";
import { Project, ProjectWithId } from "../../types";

interface ProjectsTabsProps {
    projects: Project[];
    projectSelected: ProjectWithId;
    setProject: (arg0: ProjectWithId) => void;
}

export const ProjectsTabs = ({
    projects,
    projectSelected,
    setProject,
}: ProjectsTabsProps) => {
    return (
        <div className="max-w-full p-4 overflow-x-auto lg:max-h-projectslist xl:flex-row lg:overflow-x-hidden lg:overflow-y-auto ">
            <div
                role="tablist"
                className="flex flex-nowrap lg:flex-col space-x-1.5 lg:space-x-0 lg:space-y-1.5"
            >
                {projects.map((project, key: number) => (
                    <ProjectsTab
                        key={key}
                        id={key}
                        project={project}
                        projects={projects}
                        setProject={setProject}
                        show={projectSelected.id === key}
                    />
                ))}
            </div>
        </div>
    );
};
