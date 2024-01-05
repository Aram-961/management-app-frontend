import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQuery.js";
import ProjectCard from "./ProjectCard.jsx";

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>something went wrong</h1>;

  return (
    <>
      {/* checking if projects exists and if no project return h1 */}
      {data.projects.length > 0 ? (
        <div className='row mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
};

export default Project;
