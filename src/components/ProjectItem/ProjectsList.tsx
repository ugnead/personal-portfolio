import React from 'react';
import ProjectItem, { ProjectItemProps } from './ProjectItem';

interface ProjectsListProps {
    projects: ProjectItemProps[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <div className='projects-list'>
            {projects.map((project) => (
                <ProjectItem
                    key={project.id}
                    {...project}
                />
            ))}
        </div>
    );
};

export default ProjectsList;
