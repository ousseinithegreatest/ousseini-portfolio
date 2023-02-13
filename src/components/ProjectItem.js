import React from "react";

export const ProjectItem = ({ image, name, repos }) => {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <a href={repos} target="_blank" rel="noreferrer">
        Repository
      </a>
    </div>
  );
};
