import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Home from "../HomePage/Home";
import ProjectDetails from "../HomePage/ProjectDetails/ProjectDetails";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/projectDetails/:id",
        element: <ProjectDetails />,
        loader: () => fetch("allWorks.json"),
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
