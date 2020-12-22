import React from "react";
const Project = ({ externalUrl, body, image, name, githubUrl }) => {
  return (
    <>
      <div className="example">
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="thumbail">
          <img className="img-height" src={image.url} alt="thumbnail" />
          <div className="watch">
            <span>Rzuć okiem</span>
          </div>
        </a>
        <div className="text">
          <h3>{name}</h3>
          <p style={{ fontSize: "16px" }}>{body}</p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
            Zobacz kod na Github
          </a>
        </div>
      </div>
    </>
  );
};
export default Project;
