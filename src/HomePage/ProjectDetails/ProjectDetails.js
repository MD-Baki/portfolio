import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
    const projectDetailsView = useLoaderData();
    console.log(projectDetailsView);
    return <div>{projectDetailsView.length}</div>;
};

export default ProjectDetails;
