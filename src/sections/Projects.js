import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import { ProjectItem } from "../components/ProjectItem";
import projectList from "../data/ProjectList";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectList);
    }, []);
    return (
        <div className="projects">
            <h2>My personal projects</h2>
            <div className="projectList">
                {projects.map((project, index) => {
                    return (
                        <ProjectItem
                            key={index}
                            repos={project.repos}
                            name={project.name}
                            image={project.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};
