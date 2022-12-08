import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Home from "../HomePage/Home";
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
        path: "*",
        element: <NotFound />,
    },
]);
